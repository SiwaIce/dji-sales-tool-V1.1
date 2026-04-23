function $(s){return document.querySelector(s)}
function $$(s){return document.querySelectorAll(s)}
function getAircraft(id){return KB.aircraft.find(a=>a.id===id)}
function getPayload(id){return KB.payloads.find(p=>p.id===id)}
function getUseCase(id){return KB.useCases.find(u=>u.id===id)}
function showPage(p){$$('.page').forEach(x=>x.classList.remove('active'));$('#'+p).classList.add('active');window.scrollTo(0,0)}
function showToast(msg){let t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.classList.add('show'),10);setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300)},2000)}

// ═══ FAVORITES ═══
let favorites=JSON.parse(localStorage.getItem('dji_favs')||'[]');
function toggleFav(id){const i=favorites.indexOf(id);if(i>-1)favorites.splice(i,1);else favorites.push(id);localStorage.setItem('dji_favs',JSON.stringify(favorites));showToast(i>-1?'❌ ลบออกจากโปรด':'⭐ เพิ่มในโปรดแล้ว')}
function isFav(id){return favorites.includes(id)}

// ═══ RECENTLY VIEWED ═══
let recentlyViewed=JSON.parse(localStorage.getItem('dji_recent')||'[]');
function addRecent(id){recentlyViewed=recentlyViewed.filter(x=>x!==id);recentlyViewed.unshift(id);if(recentlyViewed.length>10)recentlyViewed.pop();localStorage.setItem('dji_recent',JSON.stringify(recentlyViewed))}

// ═══ COMPARE ═══
let compareList=[];
function toggleCompare(id){const i=compareList.indexOf(id);if(i>-1)compareList.splice(i,1);else{if(compareList.length>=4){showToast('เทียบได้สูงสุด 4 รุ่น');return}compareList.push(id)}updateCompareBar()}
function updateCompareBar(){let bar=$('#compareBar');if(compareList.length===0){if(bar)bar.style.display='none';return}if(!bar){bar=document.createElement('div');bar.id='compareBar';bar.className='compare-bar';document.body.appendChild(bar)}bar.style.display='flex';bar.innerHTML=`<div class="cb-items"><span>🔄 เทียบ (${compareList.length}):</span>${compareList.map(id=>{const ac=getAircraft(id);return`<span class="compare-chip">${ac?.name||id}<button onclick="toggleCompare('${id}')" class="chip-x">✕</button></span>`}).join('')}</div><div class="cb-actions"><button class="btn btn-primary" onclick="showCompareResult()" ${compareList.length<2?'disabled':''}>📊 เทียบเลย</button><button class="btn btn-secondary" onclick="compareList=[];updateCompareBar()">ล้าง</button></div>`}

function showCompareResult(){if(compareList.length<2)return;$('#compareContainer').innerHTML=`<h2>🔄 เปรียบเทียบ ${compareList.length} รุ่น</h2>${renderComparisonTable(compareList)}${compareList.map(id=>{const ac=getAircraft(id);if(!ac)return'';return`<div class="rec-card" style="border-left:4px solid #4fc3f7"><h3>${ac.image} ${ac.name} <span class="badge">${ac.badge}</span></h3><p>${ac.shortDesc}</p><div class="rec-section"><h4>✅ ข้อดี</h4><ul>${(ac.pros||[]).map(p=>'<li>'+p+'</li>').join('')}</ul></div><div class="rec-section"><h4>⚠️ ข้อจำกัด</h4><ul>${(ac.cons||[]).map(c=>'<li>'+c+'</li>').join('')}</ul></div><button class="btn btn-detail" onclick="showProductDetail('${ac.id}')">ดูรายละเอียด</button></div>`}).join('')}`;showPage('page-compare')}

// ═══ EXPORT PDF ═══
function exportPDF(){const content=$('#resultsContainer').innerHTML;const w=window.open('','_blank');w.document.write(`<!DOCTYPE html><html><head><title>DJI Enterprise — คำแนะนำ</title><style>body{font-family:'Segoe UI',sans-serif;padding:2rem;color:#222;background:#fff}h2{color:#0f3460;border-bottom:2px solid #0f3460;padding-bottom:0.5rem}h3{color:#1a5276}h4{color:#0f3460}.rec-card{border:1px solid #ddd;border-radius:8px;padding:1rem;margin:1rem 0;page-break-inside:avoid}.rec-card.rank-1{border-left:4px solid #ffd700}.rec-card.rank-2{border-left:4px solid #c0c0c0}.rec-card.rank-3{border-left:4px solid #cd7f32}.medal{font-size:1.5rem}.badge{background:#e3f2fd;color:#0f3460;padding:0.1rem 0.5rem;border-radius:4px;font-size:0.75rem}.spec-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem}.spec-item{background:#f5f5f5;padding:0.4rem;border-radius:4px}.spec-label{font-size:0.7rem;color:#666}.highlight{color:#e65100;font-weight:bold}.caution-box{background:#fff3e0;border:1px solid #ffb74d;border-radius:8px;padding:1rem;margin:1rem 0}.comparison-table{width:100%;border-collapse:collapse;font-size:0.8rem}.comparison-table th,.comparison-table td{border:1px solid #ddd;padding:0.4rem;text-align:center}.comparison-table th{background:#e3f2fd}.rec-actions,.btn,.export-bar,.compare-bar{display:none}@media print{body{padding:1rem}}</style></head><body><div style="text-align:center"><h1>🚁 DJI Enterprise — คำแนะนำสินค้า</h1><p>วันที่: ${new Date().toLocaleDateString('th-TH',{year:'numeric',month:'long',day:'numeric'})}</p></div>${content}<div style="text-align:center;color:#999;font-size:0.8rem;margin-top:2rem;border-top:1px solid #ddd;padding-top:0.5rem"><p>จาก DJI Enterprise Sales Tool</p></div></body></html>`);w.document.close();setTimeout(()=>w.print(),500)}
function copyToClipboard(){navigator.clipboard.writeText($('#resultsContainer').innerText).then(()=>showToast('✅ คัดลอกแล้ว'))}

// ═══ HOME ═══
function renderHome(){
  let h='';
  if(recentlyViewed.length>0){h+=`<div class="home-section"><h3>🕐 ดูล่าสุด</h3><div class="recent-strip">${recentlyViewed.slice(0,5).map(id=>{const ac=getAircraft(id);if(!ac)return'';return`<div class="recent-chip" onclick="showProductDetail('${id}')">${ac.image} ${ac.name}</div>`}).join('')}</div></div>`}
  if(favorites.length>0){h+=`<div class="home-section"><h3>⭐ รายการโปรด</h3><div class="recent-strip">${favorites.map(id=>{const ac=getAircraft(id);if(!ac)return'';return`<div class="recent-chip" onclick="showProductDetail('${id}')">${ac.image} ${ac.name}</div>`}).join('')}</div></div>`}
  h+='<div id="useCaseGrid" class="uc-grid"></div>';
  $('#homeContent').innerHTML=h;
  $('#useCaseGrid').innerHTML=KB.useCases.map(uc=>`<div class="card use-case-card" onclick="selectUseCase('${uc.id}')"><div class="card-icon">${uc.icon}</div><div class="card-title">${uc.name}</div></div>`).join('');
}

// ═══ USE CASE → RECOMMENDATIONS ═══
function selectUseCase(ucId){const uc=getUseCase(ucId);if(!uc)return;renderRecommendations(uc);showPage('page-results')}

function renderRecommendations(uc){
  // กรอง discontinued ออก
  const activeRecs=uc.recommendations.filter(rec=>{const ac=getAircraft(rec.aircraft);return ac&&ac.status!=='discontinued'});
  const c=$('#resultsContainer');const medals=['🥇','🥈','🥉'];const ranks=['แนะนำมากที่สุด','ทางเลือกที่ดี','งบจำกัด / เสริม'];
  let h=`<div class="results-header"><h2>${uc.icon} ผลแนะนำ: ${uc.name}</h2></div>`;
  if(activeRecs.length===0){h+='<p class="no-results">ไม่มีสินค้าที่แนะนำสำหรับงานนี้ในขณะนี้</p>';c.innerHTML=h;return}
  activeRecs.forEach((rec,i)=>{
    const ac=getAircraft(rec.aircraft);const pl=rec.payload?getPayload(rec.payload):null;if(!ac)return;
    const title=pl?ac.name+' + '+pl.name:ac.name;
    h+=`<div class="rec-card rank-${rec.rank}"><div class="rec-header"><span class="medal">${medals[i]||''}</span><span class="rank-label">อันดับ ${i+1} — ${ranks[i]||''}</span></div>
    <h3 class="rec-title">${ac.image} ${title}</h3><span class="badge">${ac.badge||''}</span>
    <div class="rec-section"><h4>✅ ทำไมแนะนำ</h4><p>${rec.reason}</p></div>
    ${rec.caution?`<div class="rec-section caution"><h4>⚠️</h4><p>${rec.caution}</p></div>`:''}
    <div class="rec-section"><h4>📊 สเปก</h4><div class="spec-grid">
      ${ac.specs.maxFlightTime_min?`<div class="spec-item"><span class="spec-label">บิน</span><span class="spec-value">${ac.specs.maxFlightTime_min} นาที</span></div>`:''}
      ${ac.specs.ipRating?`<div class="spec-item"><span class="spec-label">กันน้ำ</span><span class="spec-value">${ac.specs.ipRating}</span></div>`:''}
      ${ac.specs.maxWind_ms?`<div class="spec-item"><span class="spec-label">ลม</span><span class="spec-value">${ac.specs.maxWind_ms} m/s</span></div>`:''}
      ${ac.specs.weight_kg?`<div class="spec-item"><span class="spec-label">น้ำหนัก</span><span class="spec-value">${ac.specs.weight_kg} kg</span></div>`:''}
      ${ac.specs.thermal!==undefined?`<div class="spec-item"><span class="spec-label">Thermal</span><span class="spec-value">${ac.specs.thermal?(ac.specs.thermalRes||'✅'):(pl&&pl.thermalRes?pl.thermalRes:'❌')}</span></div>`:''}
      ${ac.specs.rtk?`<div class="spec-item"><span class="spec-label">RTK</span><span class="spec-value">${ac.specs.rtk}</span></div>`:''}
    </div></div>
    ${pl?`<div class="rec-section"><h4>🎯 ${pl.name}</h4><p>${pl.shortDesc}</p><p class="highlight">${pl.highlight}</p></div>`:''}
    ${rec.workflow?`<div class="rec-section"><h4>📋 Workflow</h4><p>${rec.workflow}</p></div>`:''}
    ${rec.software?`<div class="rec-section"><h4>💻 Software</h4><p>${rec.software.map(s=>({pilot2:'Pilot 2 (ฟรี)',terra:'DJI Terra',flighthub2:'FlightHub 2',modify:'DJI Modify'}[s]||s)).join(' → ')}</p></div>`:''}
    <div class="rec-section"><h4>✅ ข้อดี</h4><ul>${(ac.pros||[]).slice(0,5).map(p=>'<li>'+p+'</li>').join('')}</ul></div>
    <div class="rec-section"><h4>⚠️ ข้อจำกัด</h4><ul>${(ac.cons||[]).slice(0,4).map(c=>'<li>'+c+'</li>').join('')}</ul></div>
    <div class="rec-actions"><button class="btn btn-detail" onclick="showProductDetail('${ac.id}')">ดูรายละเอียด</button><a class="btn btn-link" href="${ac.link}" target="_blank">🔗 DJI</a></div></div>`;
  });
  if(uc.cautions?.length>0)h+=`<div class="caution-box"><h3>⚠️ ข้อควรระวัง</h3><ul>${uc.cautions.map(c=>'<li>'+c+'</li>').join('')}</ul></div>`;
  const ids=[...new Set(activeRecs.map(r=>r.aircraft))];
  h+=renderComparisonTable(ids);
  h+=`<div class="export-bar"><button class="btn btn-primary" onclick="exportPDF()">📄 Export PDF</button><button class="btn btn-secondary" onclick="copyToClipboard()">📋 Copy ข้อความ</button></div>`;
  c.innerHTML=h;
}

// ═══ COMPARISON TABLE ═══
function renderComparisonTable(ids){
  const d=ids.map(id=>getAircraft(id)).filter(Boolean);if(d.length<2)return'';
  return`<div class="comparison-section"><h3>📊 ตารางเทียบ</h3><div class="tw"><table class="comparison-table"><thead><tr><th>สเปก</th>${d.map(x=>'<th>'+x.name+'</th>').join('')}</tr></thead><tbody>
  <tr><td>น้ำหนัก</td>${d.map(x=>'<td>'+(x.specs.weight_kg||'❓')+' kg</td>').join('')}</tr>
  <tr><td>บินนาน</td>${d.map(x=>'<td>'+(x.specs.maxFlightTime_min||'❓')+' นาที</td>').join('')}</tr>
  <tr><td>ทนลม</td>${d.map(x=>'<td>'+(x.specs.maxWind_ms||'❓')+' m/s</td>').join('')}</tr>
  <tr><td>กันน้ำ</td>${d.map(x=>'<td>'+(x.specs.ipRating||'❌')+'</td>').join('')}</tr>
  <tr><td>Thermal</td>${d.map(x=>'<td>'+(x.specs.thermal?(x.specs.thermalRes||'✅'):'❌')+'</td>').join('')}</tr>
  <tr><td>RTK</td>${d.map(x=>'<td>'+(x.specs.rtk||'❌')+'</td>').join('')}</tr>
  <tr><td>Hot-swap</td>${d.map(x=>'<td>'+(x.specs.hotSwap||'❌')+'</td>').join('')}</tr>
  <tr><td>พับได้</td>${d.map(x=>'<td>'+(x.specs.foldable?'✅':'❌')+'</td>').join('')}</tr>
  <tr><td>Payload</td>${d.map(x=>'<td>'+(x.specs.changePayload?'✅':'❌')+'</td>').join('')}</tr>
  <tr><td>Dock</td>${d.map(x=>'<td>'+(x.compatDock||x.specs.compatDrone||'❌')+'</td>').join('')}</tr>
  </tbody></table></div></div>`;
}

// ═══ PRODUCT DETAIL ═══
function showProductDetail(id){
  addRecent(id);const ac=getAircraft(id);if(!ac)return;
  const labels={weight_kg:'น้ำหนัก',maxFlightTime_min:'บิน (นาที)',maxWind_ms:'ทนลม (m/s)',ipRating:'กันน้ำ',operatingTemp:'อุณหภูมิ',maxAltitude_m:'ความสูง',maxRange_km:'ระยะส่ง',rtk:'RTK',battery:'แบต',tethered:'Tethered',hotSwap:'Hot-swap',foldable:'พับได้',changePayload:'เปลี่ยน Payload',thermal:'Thermal',thermalRes:'Thermal Res',camera:'กล้อง',gimbalPorts:'Gimbal',transmission:'สัญญาณ',propeller:'ใบพัด',edgeComputing:'Edge Computing',antiIce:'Anti-Ice',thermalNote:null,connectivity:'เชื่อมต่อ',autoCharge:'ชาร์จอัตโนมัติ',scheduleFlight:'ตารางบิน',vehicleMount:'ติดรถ',compatDrone:'โดรนที่รองรับ'};
  const c=$('#detailContainer');
  const isDisc=ac.status==='discontinued';
  c.innerHTML=`
  ${isDisc?'<div class="disc-warning">⚠️ สินค้านี้เลิกจำหน่ายแล้ว — ข้อมูลสำหรับ Support ลูกค้าเก่า</div>':''}
  <h2>${ac.image} ${ac.name} <span class="badge">${ac.badge}</span> <button class="btn-fav" onclick="toggleFav('${ac.id}');showProductDetail('${ac.id}')">${isFav(ac.id)?'⭐ โปรดแล้ว':'☆ เพิ่มโปรด'}</button></h2>
  <p class="detail-desc">${ac.shortDesc}</p>
  <div class="detail-grid">
    <div class="detail-section"><h3>📊 สเปก</h3><table class="spec-table">${Object.entries(ac.specs).filter(([k])=>labels[k]!==null&&labels[k]!==undefined).map(([k,v])=>{let val=v;if(typeof v==='boolean')val=v?'✅':'❌';return'<tr><td>'+(labels[k]||k)+'</td><td>'+val+'</td></tr>'}).join('')}</table></div>
    <div class="detail-section"><h3>✅ ข้อดี</h3><ul class="pro-list">${(ac.pros||[]).map(p=>'<li>✅ '+p+'</li>').join('')}</ul></div>
    <div class="detail-section"><h3>⚠️ ข้อจำกัด</h3><ul class="con-list">${(ac.cons||[]).map(c=>'<li>⚠️ '+c+'</li>').join('')}</ul></div>
    ${ac.compatPayloads?.length>0?`<div class="detail-section"><h3>🎯 Payload</h3><div class="compat-chips">${ac.compatPayloads.map(pid=>{const pl=getPayload(pid);return'<span class="chip" onclick="showPayloadPopup(\''+pid+'\')">'+(pl?pl.name:pid)+'</span>'}).join('')}</div></div>`:''}
    <div class="detail-section"><h3>💻 Software</h3><div class="compat-chips">${(ac.compatSoftware||[]).map(s=>'<span class="chip sw" onclick="showSoftwareDetail(\''+s+'\')">'+(({pilot2:'Pilot 2',terra:'Terra',flighthub2:'FlightHub 2',modify:'Modify'})[s]||s)+'</span>').join('')}</div></div>
    <div class="detail-section"><h3>🔋 แบต & ชาร์จ</h3><p><b>แบต:</b> ${ac.compatBattery||'❓'}</p><p><b>ชาร์จ:</b> ${ac.compatCharging||'❓'}</p>${ac.compatDock?'<p><b>Dock:</b> '+ac.compatDock+'</p>':''}</div>
  </div>
  <div class="detail-actions">
    ${ac.link?`<a class="btn btn-primary" href="${ac.link}" target="_blank">🔗 DJI Website</a>`:''}
    <button class="btn btn-secondary" onclick="showPage('page-home')">← กลับ</button>
  </div>`;
  showPage('page-detail');
}

// ═══ PAYLOAD POPUP ═══
function showPayloadPopup(pid){const pl=getPayload(pid);if(!pl)return;$('#modalBody').innerHTML=`<h3>${pl.name}</h3><p class="sw-type">${pl.type}</p><p>${pl.shortDesc}</p><p><b>เซนเซอร์:</b> ${pl.sensors}</p><p class="highlight">${pl.highlight}</p><p><b>ใช้กับ:</b> ${pl.compatAircraft.map(id=>{const ac=getAircraft(id);return ac?ac.name:id}).join(', ')}</p>`;$('#modal').style.display='flex'}
function closeModal(){$('#modal').style.display='none'}

// ═══ SEARCH ═══
function performSearch(){
  const q=$('#searchInput').value.toLowerCase().trim();if(!q){showPage('page-home');return}
  const mUC=KB.useCases.filter(uc=>[uc.name,...uc.keywords,uc.id].join(' ').toLowerCase().includes(q));
  const mAC=KB.aircraft.filter(ac=>(SEARCH_INDEX[ac.id]||'').includes(q));
  const mSW=KB.software.filter(sw=>(SEARCH_INDEX['sw_'+sw.id]||'').includes(q));
  const mFAQ=KB.faq.filter((f,i)=>(SEARCH_INDEX['faq_'+i]||'').includes(q));
  let h=`<h2>🔍 "${$('#searchInput').value}"</h2>`;
  if(mFAQ.length>0){h+=`<div class="faq-results"><h3>💬 คำตอบด่วน</h3>${mFAQ.map(f=>`<div class="faq-card"><pre class="faq-a">${f.a}</pre></div>`).join('')}</div>`}
  if(mUC.length>0){h+=`<h3>📋 ประเภทงาน</h3><div class="search-grid">${mUC.map(uc=>`<div class="card use-case-card" onclick="selectUseCase('${uc.id}')"><div class="card-icon">${uc.icon}</div><div class="card-title">${uc.name}</div></div>`).join('')}</div>`}
  if(mAC.length>0){
    const current=mAC.filter(a=>a.status!=='discontinued');
    const disc=mAC.filter(a=>a.status==='discontinued');
    if(current.length>0){h+=`<h3>🚁 โดรน (จำหน่ายปัจจุบัน)</h3><div class="search-grid">${current.map(ac=>`<div class="card product-card" onclick="showProductDetail('${ac.id}')"><div class="card-icon">${ac.image}</div><div class="card-title">${ac.name}</div><div class="card-badge">${ac.badge}</div></div>`).join('')}</div>`}
    if(disc.length>0){h+=`<h3>📦 โดรน (เลิกขาย — Support เท่านั้น)</h3><div class="search-grid">${disc.map(ac=>`<div class="card product-card discontinued-card" onclick="showProductDetail('${ac.id}')"><div class="card-icon">${ac.image}</div><div class="card-title">${ac.name} <span class="disc-badge">เลิกขาย</span></div></div>`).join('')}</div>`}
  }
  if(mSW.length>0){h+=`<h3>💻 ซอฟต์แวร์</h3><div class="search-grid">${mSW.map(sw=>`<div class="card product-card" onclick="showSoftwareDetail('${sw.id}')"><div class="card-icon">${sw.icon}</div><div class="card-title">${sw.name}</div></div>`).join('')}</div>`}
  if(!mUC.length&&!mAC.length&&!mSW.length&&!mFAQ.length)h+='<p class="no-results">ไม่พบ — ลองคำอื่น เช่น "thermal", "m4t", "dock", "terra"</p>';
  $('#searchResults').innerHTML=h;showPage('page-search');
}

// ═══ ALL PRODUCTS (with filter + discontinued) ═══
function showAllProducts(){
  const c=$('#allProductsContainer');
  c.innerHTML=`<div class="filter-bar">
    <span class="fl">🔍 กรอง:</span>
    <label class="ft"><input type="checkbox" id="fThermal" onchange="applyFilters()"> 🔥 Thermal</label>
    <label class="ft"><input type="checkbox" id="fIP" onchange="applyFilters()"> 💧 IP55+</label>
    <label class="ft"><input type="checkbox" id="fDock" onchange="applyFilters()"> 🤖 Dock</label>
    <label class="ft"><input type="checkbox" id="fRTK" onchange="applyFilters()"> 📡 RTK ในตัว</label>
    <label class="ft"><input type="checkbox" id="fPayload" onchange="applyFilters()"> 🔄 เปลี่ยน Payload</label>
    <label class="ft"><input type="checkbox" id="fFold" onchange="applyFilters()"> 📦 พับได้</label>
    <button class="btn-clear" onclick="clearFilters()">ล้างตัวกรอง</button>
  </div><div id="filteredProducts"></div>`;
  applyFilters();showPage('page-all-products');
}

function applyFilters(){
  const th=$('#fThermal')?.checked,ip=$('#fIP')?.checked,dk=$('#fDock')?.checked,rt=$('#fRTK')?.checked,pl=$('#fPayload')?.checked,fo=$('#fFold')?.checked;
  let current=KB.aircraft.filter(a=>a.status!=='discontinued');
  let discontinued=KB.aircraft.filter(a=>a.status==='discontinued');
  let f=current.filter(a=>{
    if(th&&!a.specs.thermal)return false;
    if(ip&&(!a.specs.ipRating||a.specs.ipRating.includes('❌')))return false;
    if(dk&&a.category!=='dock'&&!a.compatDock)return false;
    if(rt&&a.specs.rtk&&(a.specs.rtk.includes('❌')||a.specs.rtk.includes('เสริม')))return false;
    if(pl&&!a.specs.changePayload)return false;
    if(fo&&!a.specs.foldable)return false;return true});
  const c=$('#filteredProducts');
  const cats={flagship:"🛩️ Flagship (เปลี่ยน Payload ได้)",midcompact:"✈️ Mid-Compact (เบา · IP55 · RTK)",midcompact_dock:"🤖 Mid-Compact Dock (Dock 3)",compact:"📷 Compact",dock:"🏠 Docking Station (สถานีบินอัตโนมัติ)"};
  let h=`<p style="color:#888">${f.length} รุ่น (จำหน่ายปัจจุบัน)</p>`;
  Object.entries(cats).forEach(([cat,label])=>{const dr=f.filter(a=>a.category===cat);if(!dr.length)return;
    h+=`<h3>${label}</h3><div class="product-grid">${dr.map(ac=>`<div class="card product-card" onclick="showProductDetail('${ac.id}')"><div class="card-icon">${ac.image}</div><div class="card-title">${ac.name}</div><div class="card-badge">${ac.badge}</div><div class="card-desc">${ac.shortDesc}</div><div class="card-specs">${ac.specs.maxFlightTime_min?'<span>⏱'+ac.specs.maxFlightTime_min+'นาที</span>':''}${ac.specs.ipRating&&!ac.specs.ipRating.includes('❌')?'<span>💧'+ac.specs.ipRating+'</span>':''}${ac.specs.thermal?'<span>🔥Thermal</span>':''}${ac.compatDock?'<span>🤖'+ac.compatDock+'</span>':''}${ac.category==='dock'?'<span>🤖Dock</span>':''}</div><div class="card-actions"><button class="btn-compare-sm" onclick="event.stopPropagation();toggleCompare('${ac.id}')">🔄 เทียบ</button><button class="btn-fav-sm" onclick="event.stopPropagation();toggleFav('${ac.id}');applyFilters()">${isFav(ac.id)?'⭐':'☆'}</button></div></div>`).join('')}</div>`});
  h+=`<h3>🎯 Payloads (M400)</h3><div class="product-grid">${KB.payloads.map(p=>`<div class="card product-card" onclick="showPayloadPopup('${p.id}')"><div class="card-title">${p.name}</div><div class="card-badge">${p.type}</div><div class="card-desc">${p.shortDesc}</div></div>`).join('')}</div>`;
  if(discontinued.length>0){h+=`<div class="discontinued-section"><h3>📦 รุ่นที่ไม่จำหน่ายแล้ว (มีอะไหล่/Support)</h3><p style="color:#888;font-size:0.8rem;margin-bottom:0.8rem">ไม่แนะนำซื้อใหม่ — ลูกค้าเก่ายังมี Support</p><div class="product-grid">${discontinued.map(ac=>`<div class="card product-card discontinued-card" onclick="showProductDetail('${ac.id}')"><div class="card-icon">${ac.image}</div><div class="card-title">${ac.name} <span class="disc-badge">เลิกขาย</span></div><div class="card-desc">${ac.shortDesc}</div></div>`).join('')}</div></div>`}
  c.innerHTML=h;
}
function clearFilters(){$$('.filter-bar input[type=checkbox]').forEach(cb=>cb.checked=false);applyFilters()}

// ═══ CAUTIONS ═══
function showCautions(){
  const ic={legal:'⚖️',weather:'🌧️',battery:'🔋',firmware:'🔧',thermal:'🔥'};
  const lb={legal:'กฎหมาย',weather:'สภาพอากาศ',battery:'แบตเตอรี่',firmware:'Firmware',thermal:'Thermal'};
  $('#cautionsContainer').innerHTML=Object.entries(KB.cautions).map(([k,items])=>`<div class="caution-category"><h3>${ic[k]||'⚠️'} ${lb[k]||k}</h3><ul>${items.map(c=>'<li>'+c+'</li>').join('')}</ul></div>`).join('');
  showPage('page-cautions');
}

// ═══ SOFTWARE ═══
function showSoftware(){
  let h=`<div class="sw-guide"><h3>📦 แพ็คเกจแนะนำ</h3><div class="pkg-grid">${KB.softwareGuide.commonPackages.map(p=>`<div class="pkg-card"><h4>${p.name}</h4><ul>${p.items.map(i=>'<li>✅ '+i+'</li>').join('')}</ul><p class="pkg-for">${p.forText}</p></div>`).join('')}</div></div>`;
  h+=`<div class="sw-dt"><h3>🔀 ลูกค้าต้องการอะไร?</h3>${KB.softwareGuide.decisionTree.map(dt=>`<div class="dt-block"><div class="dt-q">❓ ${dt.question}</div><div class="dt-ans"><div class="dt-yes"><span class="lb-yes">✅ ใช่</span> ${dt.yes}${dt.yesNext?'<ul>'+dt.yesNext.map(s=>'<li><b>'+s.question+'</b>'+(s.yes?' → ใช่: '+s.yes:'')+(s.no?' / ไม่: '+s.no:'')+'</li>').join('')+'</ul>':''}</div><div class="dt-no"><span class="lb-no">❌ ไม่</span> ${dt.no}</div></div></div>`).join('')}</div>`;
  h+='<h3 style="margin-top:2rem">📱 รายละเอียด</h3>';
  KB.software.forEach(sw=>{
    h+=`<div class="sw-card" id="sw-${sw.id}"><div class="sw-hdr"><span class="sw-icon">${sw.icon}</span><div><h3>${sw.name}</h3><span class="sw-type">${sw.type}</span></div></div>
    <div class="sw-meta"><span>💻 ${sw.platform}</span><span>💰 ${sw.pricing}</span>${sw.link?`<a href="${sw.link}" target="_blank">🔗</a>`:''}</div>
    <p class="sw-desc">${sw.shortDesc}</p>
    <div class="sw-vers"><h4>📋 Editions</h4>${sw.versions.map(v=>`<div class="sw-ver"><div class="sv-hdr"><h5>${v.name}</h5><span class="sv-price">${v.price||''}</span></div>${v.features?'<ul class="sv-feat">'+v.features.map(f=>'<li>'+f+'</li>').join('')+'</ul>':''}${v.bestFor?'<p class="sv-for">🎯 '+v.bestFor+'</p>':''}</div>`).join('')}</div>
    ${sw.licenseTypes?`<div class="sw-lic"><h4>📄 License</h4><div class="lic-grid">${sw.licenseTypes.map(l=>'<div class="lic-item"><b>'+l.type+'</b><p>'+l.desc+'</p></div>').join('')}</div></div>`:''}
    ${sw.systemRequirements?`<details><summary>🖥️ System Requirements</summary><div class="sysreq"><div><h5>Minimum</h5>${Object.entries(sw.systemRequirements.minimum).map(([k,v])=>'<p><b>'+k.toUpperCase()+':</b> '+v+'</p>').join('')}</div><div><h5>Recommended</h5>${Object.entries(sw.systemRequirements.recommended).map(([k,v])=>'<p><b>'+k.toUpperCase()+':</b> '+v+'</p>').join('')}</div></div>${sw.systemRequirements.note?'<p class="sysreq-note">⚠️ '+sw.systemRequirements.note+'</p>':''}</details>`:''}
    ${sw.outputFormats?`<details><summary>📁 Output</summary><ul>${sw.outputFormats.map(f=>'<li>'+f+'</li>').join('')}</ul></details>`:''}
    ${sw.addOns?`<details><summary>➕ Add-ons (${sw.addOns.length})</summary><ul>${sw.addOns.map(a=>'<li><b>'+a.name+'</b> — '+a.desc+'</li>').join('')}</ul></details>`:''}
    ${sw.features?`<div class="sw-feats"><h4>🔧 ฟีเจอร์</h4>${sw.features.map(cat=>'<details><summary>'+cat.category+' ('+cat.items.length+')</summary><ul>'+cat.items.map(i=>'<li>'+i+'</li>').join('')+'</ul></details>').join('')}</div>`:''}
    ${sw.compatAircraft?`<div class="sw-compat"><h4>🚁 โดรน</h4><div class="compat-chips">${sw.compatAircraft.map(id=>{const ac=getAircraft(id);return'<span class="chip" onclick="showProductDetail(\''+id+'\')">'+(ac?ac.name:id)+'</span>'}).join('')}</div></div>`:''}
    ${sw.importantNotes?`<div class="sw-notes"><h4>📌 หมายเหตุ</h4><ul>${sw.importantNotes.map(n=>'<li>'+n+'</li>').join('')}</ul></div>`:''}
    ${sw.salesTips?`<div class="sw-tips"><h4>💡 Sales Tips</h4><ul>${sw.salesTips.map(t=>'<li>'+t+'</li>').join('')}</ul></div>`:''}
    </div>`;
  });
  $('#softwareContainer').innerHTML=h;showPage('page-software');
}
function showSoftwareDetail(swId){showSoftware();setTimeout(()=>{const el=document.getElementById('sw-'+swId);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})},100)}

// ═══ FAQ ═══
function showFAQ(){
  $('#faqContainer').innerHTML=`<div class="faq-search"><input type="text" id="faqInput" placeholder="พิมพ์คำถาม เช่น 'm4t vs m4e', 'thermal คืออะไร'" class="search-input" oninput="filterFAQ()"><p style="color:#888;font-size:0.8rem;margin-top:0.4rem">💡 ลองพิมพ์: "m4t", "thermal", "dock", "rtk", "ราคา", "terra"</p></div><div id="faqList"></div>`;
  renderFAQList('');showPage('page-faq');
}
function filterFAQ(){renderFAQList($('#faqInput').value.toLowerCase())}
function renderFAQList(q){
  let items=KB.faq;if(q)items=items.filter(f=>f.q.some(x=>x.includes(q)));
  $('#faqList').innerHTML=items.length===0?'<p class="no-results">ไม่พบ — ลองคำอื่น</p>':items.map(f=>`<div class="faq-card"><div class="faq-q">${f.q[0]}</div><pre class="faq-a">${f.a}</pre>${f.q.length>1?'<div class="faq-alt">คำค้นอื่น: '+f.q.slice(1).join(', ')+'</div>':''}</div>`).join('');
}

// ═══ REGISTRATION ═══
function showRegistration(){
  const reg=KB.registration;
  let h=`<div class="reg-intro"><h2>${reg.title}</h2><p class="reg-warning">${reg.intro}</p></div>`;
  reg.steps.forEach(step=>{
    h+=`<div class="reg-step"><div class="reg-step-header"><span class="reg-step-num">${step.icon} ขั้นตอนที่ ${step.step}</span><h3>${step.title}</h3></div>
    ${step.url?`<a href="${step.url}" target="_blank" class="reg-link">🔗 ${step.urlLabel}</a>`:''}
    <div class="reg-docs"><h4>📄 สิ่งที่ต้องเตรียม:</h4><ul>${step.documents.map(d=>'<li>'+d+'</li>').join('')}</ul></div>
    <div class="reg-important"><h4>⚠️ จุดสำคัญ:</h4><ul>${step.important.map(i=>'<li>'+i+'</li>').join('')}</ul></div></div>`;
  });
  h+=`<div class="reg-summary"><h3>📋 สรุปลำดับ</h3><div class="reg-flow"><span class="reg-flow-item">🛡️ ทำประกัน</span><span class="reg-flow-arrow">→</span><span class="reg-flow-item">📡 กสทช.</span><span class="reg-flow-arrow">→</span><span class="reg-flow-item">✈️ CAAT</span><span class="reg-flow-arrow">→</span><span class="reg-flow-item">🏷️ ติดเลขทะเบียน</span><span class="reg-flow-arrow">→</span><span class="reg-flow-item">✅ บินได้!</span></div><p class="reg-summary-text">${reg.summary}</p></div>`;
  $('#regContainer').innerHTML=h;showPage('page-registration');
}

// ═══ FAVORITES ═══
function showFavorites(){
  const c=$('#favContainer');
  if(favorites.length===0){c.innerHTML='<p class="no-results">ยังไม่มีรายการโปรด — กด ☆ จากหน้าสินค้า</p>';showPage('page-fav');return}
  c.innerHTML=`<div class="product-grid">${favorites.map(id=>{const ac=getAircraft(id);if(!ac)return'';return`<div class="card product-card" onclick="showProductDetail('${id}')"><div class="card-icon">${ac.image}</div><div class="card-title">${ac.name}</div><div class="card-badge">${ac.badge}</div><button class="btn-fav-sm" onclick="event.stopPropagation();toggleFav('${id}');showFavorites()">⭐ ลบ</button></div>`}).join('')}</div>`;
  showPage('page-fav');
}

// ═══ KEYBOARD SHORTCUTS ═══
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(e.key==='1')showPage('page-home');
  if(e.key==='2')showAllProducts();
  if(e.key==='3')showSoftware();
  if(e.key==='4')showFAQ();
  if(e.key==='5')showCautions();
  if(e.key==='6')showRegistration();
  if(e.key==='/'){{e.preventDefault();$('#searchInput').focus()}}
});

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded',()=>{
  renderHome();updateCompareBar();
  $('#searchInput').addEventListener('keypress',e=>{if(e.key==='Enter')performSearch()});
});