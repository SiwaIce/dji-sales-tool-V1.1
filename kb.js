const KB={

aircraft:[
// ═══ CURRENT PRODUCTS ═══
{id:"m400",name:"Matrice 400",badge:"🆕 Flagship ใหม่",category:"flagship",status:"new",image:"🛩️",
shortDesc:"โดรนเรือธงรุ่นใหม่ เปลี่ยน Payload ได้ พลังสูงสุด",
specs:{weight_kg:"~5 (คาดการณ์)",maxFlightTime_min:"55-60 (คาดการณ์)",maxWind_ms:"≥15",ipRating:"IP55+",operatingTemp:"-20°C ถึง 50°C",maxAltitude_m:"≥7,000",maxRange_km:"≥20",rtk:"Built-in",battery:"TB100 (คู่)",tethered:"✅ TB100C",hotSwap:"✅",gimbalPorts:3,foldable:false,changePayload:true,thermal:false,thermalNote:"ต้องติด H30T",transmission:"O4 Enterprise",propeller:"2510F",edgeComputing:"✅ Manifold 3"},
pros:["Flagship ใหม่ล่าสุด","บินนาน 55-60 นาที","Tethered Battery บินไม่จำกัดเวลา","Gimbal 3 ตำแหน่ง","Manifold 3 AI บนโดรน","Payload ใหม่ล่าสุด","SkyPort V3","มอเตอร์ใหม่"],
cons:["ราคาสูงสุด","ขนาดใหญ่ ไม่พับ","ต้องซื้อ Payload แยก","ไม่รองรับ Dock","ต้องมีความชำนาญ"],
idealFor:["inspection_advanced","lidar_survey","photogrammetry","powerline","public_safety","night_operations","tethered_ops"],
notFor:["deploy เร็ว","งบจำกัด","มือใหม่","Dock"],
compatPayloads:["h30t","h30","l2","l3","p1","s1","v1"],compatControllers:["rc_plus2"],compatBattery:"TB100 / TB100C",compatCharging:"BS100",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/matrice-400"},

{id:"matrice4e",name:"Matrice 4E",badge:"Mid-Compact IP55",category:"midcompact",status:"current",image:"✈️",
shortDesc:"เซนเซอร์ 4/3\" พับได้ IP55 RTK ในตัว",
specs:{weight_kg:"~1.35",maxFlightTime_min:"42",maxWind_ms:"12",ipRating:"IP55",operatingTemp:"-20°C ถึง 45°C",rtk:"Built-in",battery:"M4 Series Battery",hotSwap:"❌",foldable:true,changePayload:false,thermal:false,camera:"Wide 4/3\" + Tele 1/1.3\" Optical Zoom"},
pros:["IP55 ตัวเล็ก","RTK ในตัว","เซนเซอร์ 4/3\"","เบา 1.35 kg","พับได้"],
cons:["❌ ไม่มี Thermal","เปลี่ยน Payload ไม่ได้","ทนลม 12 m/s","ไม่มี Hot-swap"],
idealFor:["inspection_visual","mapping_medium","construction","quick_deploy"],notFor:["Thermal","ลมแรง"],
compatPayloads:[],compatControllers:["rc_pro_enterprise"],compatBattery:"M4 Series Battery",compatCharging:"M4 200W/100W Hub",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/matrice-4-series"},

{id:"matrice4t",name:"Matrice 4T",badge:"Mid-Compact + Thermal",category:"midcompact",status:"current",image:"🔥",
shortDesc:"M4E + Thermal 640×512 + LRF ในตัว",
specs:{weight_kg:"~1.487",maxFlightTime_min:"42",maxWind_ms:"12",ipRating:"IP55",operatingTemp:"-20°C ถึง 45°C",rtk:"Built-in",battery:"M4 Series Battery",foldable:true,changePayload:false,thermal:true,thermalRes:"640×512",camera:"Wide 4/3\" + Tele + Thermal 640×512 + LRF 1200m"},
pros:["IP55 + Thermal + LRF กะทัดรัด","เบา ~1.5 kg","RTK ในตัว","เซนเซอร์ Wide 4/3\""],
cons:["Thermal 640×512","เปลี่ยน Payload ไม่ได้","ทนลม 12 m/s","ไม่มี Hot-swap"],
idealFor:["inspection_thermal","solar_inspection","electrical_inspection","building_inspection","public_safety","firefighting"],notFor:["ลมแรง > 12 m/s"],
compatPayloads:[],compatControllers:["rc_pro_enterprise"],compatBattery:"M4 Series Battery",compatCharging:"M4 200W/100W Hub",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/matrice-4-series"},

{id:"matrice4d",name:"Matrice 4D",badge:"🆕 Dock 3 Visual",category:"midcompact_dock",status:"new",image:"🤖",
shortDesc:"M4E เวอร์ชัน Dock 3 บินอัตโนมัติ",
specs:{weight_kg:"~1.4",maxFlightTime_min:"~42",maxWind_ms:"12",ipRating:"IP55",rtk:"Built-in",battery:"M4D Series Battery",foldable:true,changePayload:false,thermal:false,antiIce:true},
pros:["Dock 3 อัตโนมัติ","Anti-Ice Propellers","Vehicle-Mount Dock","Manifold 3","IP55"],
cons:["❌ ไม่มี Thermal","แบตแยกจาก M4E"],
idealFor:["autonomous_routine_visual","construction_auto","patrol"],notFor:["Thermal","บิน Manual เป็นหลัก"],
compatPayloads:[],compatControllers:["rc_plus2"],compatBattery:"M4D Series Battery",compatCharging:"M4D 240W Hub",compatDock:"dock3",
compatSoftware:["pilot2","flighthub2"],link:"https://enterprise.dji.com/matrice-4d-series"},

{id:"matrice4td",name:"Matrice 4TD",badge:"🆕 Dock 3 + Thermal",category:"midcompact_dock",status:"new",image:"🤖🔥",
shortDesc:"M4T เวอร์ชัน Dock 3 Thermal อัตโนมัติ",
specs:{weight_kg:"~1.5",maxFlightTime_min:"~42",ipRating:"IP55",rtk:"Built-in",battery:"M4D Series Battery",foldable:true,changePayload:false,thermal:true,thermalRes:"640×512",antiIce:true},
pros:["Thermal + Dock 3 อัตโนมัติ","Anti-Ice","Vehicle-Mount","Manifold 3"],
cons:["Thermal 640×512","แบตแยกจาก M4T"],
idealFor:["autonomous_routine_thermal","solar_auto","electrical_auto","perimeter_security"],notFor:["บิน Manual เป็นหลัก"],
compatPayloads:[],compatControllers:["rc_plus2"],compatBattery:"M4D Series Battery",compatCharging:"M4D 240W Hub",compatDock:"dock3",
compatSoftware:["pilot2","flighthub2","terra"],link:"https://enterprise.dji.com/matrice-4d-series"},

{id:"m3m",name:"Mavic 3 Multispectral",badge:"เกษตร / Multispectral",category:"compact",status:"current",image:"🌾",
shortDesc:"Multispectral 4 band + RGB วิเคราะห์พืช",
specs:{weight_kg:"0.951",maxFlightTime_min:"43",maxWind_ms:"12",ipRating:"❌ ไม่มี",rtk:"✅ Built-in",foldable:true,changePayload:false,thermal:false,camera:"RGB 20MP 4/3\" + MS 4-band"},
pros:["Multispectral 4 band","RTK ในตัว","NDVI/NDRE","Sunlight Sensor"],
cons:["เกษตรเป็นหลัก","❌ ไม่มี Thermal/Zoom","❌ ไม่กันน้ำ"],
idealFor:["precision_agriculture","environmental","forestry"],notFor:["ตรวจสอบทั่วไป","Thermal"],
compatPayloads:[],compatControllers:["rc_pro_enterprise"],compatBattery:"M3E Battery",compatCharging:"M3E Charging Hub",compatDock:null,
compatSoftware:["pilot2","terra"],link:"https://enterprise.dji.com/mavic-3-multispectral"},

// ═══ DOCK STATIONS ═══
{id:"dock3_product",name:"DJI Dock 3",badge:"🆕 สถานีบินอัตโนมัติ",category:"dock",status:"new",image:"🏠",
shortDesc:"สถานีโดรนอัตโนมัติรุ่นใหม่ สำหรับ M4D/M4TD ติดรถได้",
specs:{weight_kg:"คาดว่า < 34 kg",ipRating:"IP55",operatingTemp:"-35°C ถึง 50°C",connectivity:"4G / Ethernet",autoCharge:"✅",scheduleFlight:"✅",vehicleMount:"✅ ติดรถได้",camera:"✅ กล้อง Monitor",compatDrone:"M4D / M4TD เท่านั้น",foldable:false,changePayload:false,thermal:false},
pros:["บินอัตโนมัติ ไม่ต้องมีคน","ชาร์จ→กาง→บิน→กลับ→ชาร์จ อัตโนมัติ","ดูผลผ่าน FlightHub 2","ติดบนรถได้ (Vehicle-Mount)","คาดว่าเล็กกว่า Dock 2","IP55","กล้อง Monitor"],
cons:["ใช้กับ M4D/M4TD เท่านั้น","ต้องมีไฟฟ้าตลอด","ต้อง 4G/Ethernet","ต้อง FlightHub 2 Professional+","ต้องอนุญาต BVLOS จาก กพท."],
idealFor:["autonomous_routine_thermal","autonomous_routine_visual","solar_auto"],notFor:["M30/M30T ต้อง Dock 2","M350/M400","M3E/M3T"],
compatPayloads:[],compatControllers:[],compatBattery:"ชาร์จแบต M4D/M4TD อัตโนมัติ",compatCharging:"ในตัว Dock",compatDock:null,
compatSoftware:["pilot2","flighthub2"],link:"https://enterprise.dji.com/dock-3"},

{id:"dock2_product",name:"DJI Dock 2",badge:"สถานีบินอัตโนมัติ (รุ่นเดิม)",category:"dock",status:"current",image:"🏠",
shortDesc:"สถานีโดรนอัตโนมัติ สำหรับ M30/M30T/M3D/M3TD",
specs:{weight_kg:"~34 kg",ipRating:"IP55",operatingTemp:"-35°C ถึง 50°C",connectivity:"4G / Ethernet",autoCharge:"✅",scheduleFlight:"✅",vehicleMount:"❌",camera:"✅ กล้อง Monitor",compatDrone:"M30/M30T/M3D/M3TD",foldable:false,changePayload:false,thermal:false},
pros:["บินอัตโนมัติ","ชาร์จอัตโนมัติ","IP55","Proven ทั่วโลก"],
cons:["ใช้กับ M30/M30T/M3D/M3TD เท่านั้น","ไม่ติดรถได้","34 kg","ต้อง FlightHub 2 Professional+"],
idealFor:["autonomous_routine_thermal","autonomous_routine_visual"],notFor:["M4D/M4TD ต้อง Dock 3","M350/M400"],
compatPayloads:[],compatControllers:[],compatBattery:"ชาร์จแบต M30/M3D อัตโนมัติ",compatCharging:"ในตัว Dock",compatDock:null,
compatSoftware:["pilot2","flighthub2"],link:"https://enterprise.dji.com/dock-2"},

// ═══ DISCONTINUED (ยังมีอะไหล่/Support) ═══
{id:"m350rtk",name:"Matrice 350 RTK",badge:"Flagship (เลิกขาย)",category:"flagship",status:"discontinued",image:"🛩️",
shortDesc:"โดรน Flagship รุ่นก่อน — ถูกแทนโดย Matrice 400",
specs:{weight_kg:"3.77",maxFlightTime_min:"55",maxWind_ms:"15",ipRating:"IP55",operatingTemp:"-20°C ถึง 50°C",maxAltitude_m:"7,000",maxRange_km:"20",rtk:"Built-in",battery:"TB65 (คู่)",hotSwap:"✅",gimbalPorts:3,foldable:false,changePayload:true,thermal:false,thermalNote:"ต้องติด H30T",transmission:"O3 Enterprise"},
pros:["Payload มากที่สุด","เปลี่ยน Payload ได้","บินนาน 55 นาที","Hot-swap","IP55","Gimbal 3 ตำแหน่ง"],
cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ Matrice 400 แทน","ขนาดใหญ่ ไม่พับ","ไม่รองรับ Dock"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่ — ใช้ Matrice 400 แทน"],
compatPayloads:["h30t","h30","l2","l3","p1"],compatControllers:["rc_plus"],compatBattery:"TB65",compatCharging:"BS65",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/matrice-350-rtk"},

{id:"m30",name:"Matrice 30",badge:"Mid-range (เลิกขาย)",category:"midrange",status:"discontinued",image:"🚁",
shortDesc:"กล้อง Wide+Zoom+LRF ในตัว — ถูกแทนโดย M4E",
specs:{weight_kg:"3.77",maxFlightTime_min:"41",maxWind_ms:"15",ipRating:"IP55",rtk:"RTK Module เสริม",battery:"TB30 (คู่)",hotSwap:"✅",foldable:true,changePayload:false,thermal:false,camera:"Wide 12MP + Zoom 48MP 16x + LRF 1200m"},
pros:["กล้อง 3 ตัวในตัว","IP55","Hot-swap","Zoom 16x","ทนลม 15 m/s"],
cons:["⚠️ เลิกจำหน่ายแล้ว","❌ ไม่มี Thermal"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatControllers:["rc_plus"],compatBattery:"TB30",compatCharging:"BS30",compatDock:"dock2",
compatSoftware:["pilot2","terra","flighthub2"],link:"https://enterprise.dji.com/matrice-30"},

{id:"m30t",name:"Matrice 30T",badge:"Mid-range+Thermal (เลิกขาย)",category:"midrange",status:"discontinued",image:"🔥",
shortDesc:"M30 + Thermal 640×512 — ถูกแทนโดย M4T",
specs:{weight_kg:"3.77",maxFlightTime_min:"41",maxWind_ms:"15",ipRating:"IP55",rtk:"RTK Module เสริม",battery:"TB30 (คู่)",hotSwap:"✅",foldable:true,changePayload:false,thermal:true,thermalRes:"640×512",camera:"Wide 12MP + Zoom 16x + Thermal 640×512 + LRF 1200m"},
pros:["กล้อง 4 ตัวในตัว","Thermal 640","IP55","Hot-swap","Dock 2"],
cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ M4T หรือ M4TD แทน"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatControllers:["rc_plus"],compatBattery:"TB30",compatCharging:"BS30",compatDock:"dock2",
compatSoftware:["pilot2","terra","flighthub2"],link:"https://enterprise.dji.com/matrice-30"},

{id:"m3d",name:"Matrice 3D",badge:"Dock 2 Visual (เลิกขาย)",category:"compact_dock",status:"discontinued",image:"🤖",
shortDesc:"โดรนเล็กสำหรับ Dock 2 — ถูกแทนโดย M4D",
specs:{ipRating:"IP55",rtk:"Built-in",battery:"M3D Series Battery",foldable:true,changePayload:false,thermal:false},
pros:["Dock 2","เล็กกะทัดรัด"],cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ M4D แทน"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatDock:"dock2",compatBattery:"M3D Series Battery",compatCharging:"M3D Charging Kit",
compatSoftware:["pilot2","flighthub2"],link:"https://enterprise.dji.com/matrice-3d"},

{id:"m3td",name:"Matrice 3TD",badge:"Dock 2+Thermal (เลิกขาย)",category:"compact_dock",status:"discontinued",image:"🤖🔥",
shortDesc:"M3D + Thermal — ถูกแทนโดย M4TD",
specs:{ipRating:"IP55",rtk:"Built-in",battery:"M3D Series Battery",foldable:true,changePayload:false,thermal:true,thermalRes:"640×512"},
pros:["Thermal+Dock 2"],cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ M4TD แทน"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatDock:"dock2",compatBattery:"M3D Series Battery",compatCharging:"M3D Charging Kit",
compatSoftware:["pilot2","flighthub2","terra"],link:"https://enterprise.dji.com/matrice-3d"},

{id:"m3e",name:"Mavic 3 Enterprise",badge:"Compact (เลิกขาย)",category:"compact",status:"discontinued",image:"📷",
shortDesc:"เบา 920g 4/3\" Zoom 56x — ถูกแทนโดย M4E",
specs:{weight_kg:"0.920",maxFlightTime_min:"45",maxWind_ms:"12",ipRating:"❌ ไม่มี",operatingTemp:"-10°C ถึง 40°C",rtk:"❌ ต้องซื้อ RTK Module",battery:"M3E Battery",hotSwap:"❌",foldable:true,changePayload:false,thermal:false,camera:"Wide 20MP 4/3\" + Tele 56x Hybrid"},
pros:["เบาสุด 920g","Zoom 56x","บิน 45 นาที","ราคาถูก"],
cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ M4E แทน","❌ ไม่กันน้ำ"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatControllers:["rc_pro_enterprise"],compatBattery:"M3E Battery",compatCharging:"M3E Charging Hub",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/mavic-3-enterprise"},

{id:"m3t",name:"Mavic 3 Thermal",badge:"Compact+Thermal (เลิกขาย)",category:"compact",status:"discontinued",image:"🔥",
shortDesc:"M3E + Thermal 640×512 — ถูกแทนโดย M4T",
specs:{weight_kg:"0.920",maxFlightTime_min:"45",maxWind_ms:"12",ipRating:"❌ ไม่มี",operatingTemp:"-10°C ถึง 40°C",rtk:"❌ ต้องซื้อ RTK Module",battery:"M3E Battery",hotSwap:"❌",foldable:true,changePayload:false,thermal:true,thermalRes:"640×512",camera:"Wide 20MP 4/3\" + Tele 56x + Thermal 640×512"},
pros:["Thermal ถูกสุด (เดิม)","เบาสุดที่มี Thermal","Zoom 56x"],
cons:["⚠️ เลิกจำหน่ายแล้ว — แนะนำ M4T แทน","❌ ไม่กันน้ำ"],
idealFor:[],notFor:["ไม่แนะนำซื้อใหม่"],
compatPayloads:[],compatControllers:["rc_pro_enterprise"],compatBattery:"M3E Battery",compatCharging:"M3E Charging Hub",compatDock:null,
compatSoftware:["pilot2","terra","flighthub2","modify"],link:"https://enterprise.dji.com/mavic-3-enterprise"}
],

payloads:[
{id:"h30t",name:"Zenmuse H30T",type:"Hybrid+Thermal",shortDesc:"Wide+Zoom 34x+Thermal 1280×1024+LRF 1600m+Night",sensors:"Wide 8K+Zoom 34x+Thermal 1280×1024+LRF 1600m+Night",thermalRes:"1280×1024",zoomMax:"34x",lrfRange:"1600m",nightVision:true,highlight:"Thermal สูงสุดของ DJI",compatAircraft:["m400","m350rtk"]},
{id:"h30",name:"Zenmuse H30",type:"Hybrid Visual",shortDesc:"Wide+Zoom 34x+LRF 1600m+Night ไม่มี Thermal",sensors:"Wide 8K+Zoom 34x+LRF 1600m+Night",thermalRes:null,zoomMax:"34x",lrfRange:"1600m",nightVision:true,highlight:"Zoom ไกลสุด+Night",compatAircraft:["m400","m350rtk"]},
{id:"l2",name:"Zenmuse L2",type:"LiDAR+RGB",shortDesc:"LiDAR 5 Returns 1.2M pts/s + RGB 4/3\"",sensors:"LiDAR 5 Returns+RGB 4/3\" 20MP",accuracy:"± 2 cm",range:"250m",highlight:"LiDAR ทะลุต้นไม้",compatAircraft:["m400","m350rtk"]},
{id:"l3",name:"Zenmuse L3",type:"LiDAR+RGB 🆕",shortDesc:"LiDAR ใหม่ ไกลขึ้น แม่นขึ้น",sensors:"LiDAR ใหม่+RGB ใหม่",accuracy:"< ± 2 cm",range:"> 250m",highlight:"LiDAR ใหม่ล่าสุด",compatAircraft:["m400","m350rtk"]},
{id:"p1",name:"Zenmuse P1",type:"Photogrammetry",shortDesc:"Full-frame 45MP + Mechanical Shutter",sensors:"FF 45MP / 24/35/50mm",highlight:"สูงสุดสำหรับ Mapping",compatAircraft:["m400","m350rtk"]},
{id:"s1",name:"Zenmuse S1",type:"🆕 Special",shortDesc:"Payload พิเศษ คาดว่ากู้ภัย/Security",sensors:"❓ รอยืนยัน",highlight:"อาจรวม Spotlight+Speaker",compatAircraft:["m400","m350rtk"]},
{id:"v1",name:"Zenmuse V1",type:"🆕 Visual",shortDesc:"กล้อง Photogrammetry ใหม่ คาดว่าแทน P1",sensors:"❓ รอยืนยัน",highlight:"Photogrammetry ใหม่",compatAircraft:["m400","m350rtk"]}
],

useCases:[
{id:"solar_inspection",name:"ตรวจสอบแผงโซลาร์เซลล์",icon:"☀️",keywords:["โซลาร์","solar","แผงโซลาร์","hot spot","พลังงานแสงอาทิตย์"],requiresThermal:true,
recommendations:[
{rank:1,aircraft:"m400",payload:"h30t",reason:"Thermal 1280×1024 ละเอียดสุด + Zoom 34x ดูแต่ละแผง",software:["pilot2","terra"],workflow:"วาง Grid → บินถ่าย Thermal+RGB → Terra Thermal Map → วิเคราะห์ ΔT"},
{rank:2,aircraft:"matrice4t",payload:null,reason:"กะทัดรัด IP55 Thermal 640 + LRF ในตัว RTK ในตัว พกง่าย",software:["pilot2","terra"]},
{rank:3,aircraft:"matrice4td",payload:null,reason:"บินตรวจอัตโนมัติ Dock 3 ไม่ต้องมีคน เหมาะฟาร์มใหญ่",software:["pilot2","flighthub2"]}
],cautions:["บินแดดจัด 10:00-14:00","GSD Thermal < 10 cm/pixel","ΔT ตามมาตรฐาน IEC 62446"]},

{id:"powerline_inspection",name:"ตรวจสอบสายส่งไฟฟ้า",icon:"⚡",keywords:["สายส่ง","powerline","หม้อแปลง","เสาไฟ","ลูกถ้วย","พลังงาน"],requiresThermal:true,
recommendations:[
{rank:1,aircraft:"m400",payload:"h30t",reason:"Zoom 34x ดูลูกถ้วย/ข้อต่อชัด + Thermal 1280 + LRF 1600m",software:["pilot2","terra"]},
{rank:2,aircraft:"matrice4t",payload:null,reason:"เบา IP55 Thermal+LRF เหมาะทีมเคลื่อนที่เร็ว",software:["pilot2"]},
{rank:3,aircraft:"matrice4td",payload:null,reason:"Dock 3 ตรวจสายส่งอัตโนมัติประจำ Vehicle-Mount",software:["flighthub2"]}
],cautions:["⚠️ EMI จากสายส่ง","ใช้ RTK","Terra Flagship มี Electricity feature"]},

{id:"building_inspection",name:"ตรวจสอบอาคาร / โครงสร้าง",icon:"🏢",keywords:["อาคาร","building","หลังคา","สะพาน","facade","โครงสร้าง"],requiresThermal:false,
recommendations:[
{rank:1,aircraft:"matrice4t",payload:null,reason:"IP55 + Thermal + LRF กะทัดรัด เหมาะบินรอบอาคาร เข้าที่แคบ"},
{rank:2,aircraft:"m400",payload:"h30t",reason:"Thermal 1280 + Zoom 34x สำหรับอาคารสูง/ใหญ่ ต้องการรายละเอียดมาก"},
{rank:3,aircraft:"matrice4e",payload:null,reason:"ตรวจ Visual เท่านั้น (ไม่ต้อง Thermal) IP55 เบา"}
],cautions:["ตรวจ NOTAM / กพท.","GPS multipath อาคารสูง","RTH ต่ำกว่ายอดอาคาร"]},

{id:"mapping_survey",name:"ทำแผนที่ / สำรวจภูมิประเทศ",icon:"🗺️",keywords:["แผนที่","mapping","สำรวจ","survey","orthomosaic","3d model","topographic","รังวัด"],requiresThermal:false,
recommendations:[
{rank:1,aircraft:"m400",payload:"p1",reason:"Full-frame 45MP + RTK = GSD ต่ำสุด ดีที่สุดสำหรับ Photogrammetry",software:["pilot2","terra"]},
{rank:2,aircraft:"m400",payload:"l2",reason:"LiDAR ทะลุพืชพรรณ → DTM/DSM เหมาะพื้นที่ป่า/สวน",software:["pilot2","terra"]},
{rank:3,aircraft:"matrice4e",payload:null,reason:"4/3\" + RTK ในตัว Mapping ทั่วไป งบน้อยกว่า"}
],cautions:["Photogrammetry ต้องแสงดี","LiDAR file ใหญ่","ป่าหนา → LiDAR","Overlap 70-80%"]},

{id:"search_rescue",name:"ค้นหาและกู้ภัย",icon:"🚨",keywords:["กู้ภัย","rescue","search","ฉุกเฉิน","emergency","ค้นหาคน"],requiresThermal:true,
recommendations:[
{rank:1,aircraft:"matrice4t",payload:null,reason:"Thermal 640 + LRF + IP55 กะทัดรัด deploy เร็ว ทุกสภาพอากาศ"},
{rank:2,aircraft:"m400",payload:"h30t",reason:"Thermal 1280 + Night Scene + Zoom 34x สำหรับกลางคืน/ระยะไกล"},
{rank:3,aircraft:"matrice4td",payload:null,reason:"Dock 3 เฝ้าระวังอัตโนมัติ 24 ชม. Thermal + Vehicle-Mount"}
],cautions:["กลางคืนต้องอนุญาตพิเศษ กพท.","Thermal เห็นคนในป่า"]},

{id:"construction",name:"ติดตามก่อสร้าง",icon:"🏗️",keywords:["ก่อสร้าง","construction","progress","ไซต์","BIM"],requiresThermal:false,
recommendations:[
{rank:1,aircraft:"matrice4e",payload:null,reason:"RTK + IP55 + เบา (1.35 kg) บินบ่อยสะดวก"},
{rank:2,aircraft:"matrice4d",payload:null,reason:"M4D + Dock 3 บินอัตโนมัติทุกวัน ไม่ต้องมีคน",software:["flighthub2"]},
{rank:3,aircraft:"m400",payload:"p1",reason:"ต้องการ 3D Model / Digital Twin ระดับสูง",software:["pilot2","terra"]}
],cautions:["แบต 3-5 ชุด/วัน","Terra Orthomosaic เทียบรายสัปดาห์"]},

{id:"mining",name:"สำรวจเหมือง / ปริมาตร",icon:"⛏️",keywords:["เหมือง","mining","stockpile","ปริมาตร","volume","ดิน"],requiresThermal:false,
recommendations:[
{rank:1,aircraft:"m400",payload:"l2",reason:"LiDAR+RTK แม่นยำสูงสุดสำหรับ Stockpile",software:["pilot2","terra"]},
{rank:2,aircraft:"m400",payload:"p1",reason:"Photogrammetry 45MP เหมืองโล่ง ภาพสวย",software:["pilot2","terra"]},
{rank:3,aircraft:"matrice4e",payload:null,reason:"งบจำกัด RTK ในตัว พื้นที่ไม่ใหญ่"}
],cautions:["LiDAR file ใหญ่มาก","Terra คำนวณ Volume ได้"]},

{id:"agriculture",name:"เกษตรแม่นยำ",icon:"🌾",keywords:["เกษตร","agriculture","NDVI","พืช","ป่าไม้"],requiresThermal:false,
recommendations:[{rank:1,aircraft:"m3m",payload:null,reason:"Multispectral 4-band + RTK ในตัว ออกแบบมาเพื่องานนี้"}],
cautions:["แสงสม่ำเสมอ","Sunlight Sensor calibrate"]},

{id:"autonomous_dock",name:"บินอัตโนมัติ (Dock)",icon:"🤖",keywords:["dock","อัตโนมัติ","autonomous","routine","ไม่ต้องมีคน"],requiresThermal:false,
recommendations:[
{rank:1,aircraft:"matrice4td",payload:null,reason:"M4TD + Dock 3 ใหม่สุด Thermal + IP55 + Vehicle-Mount ติดรถได้",software:["flighthub2"]},
{rank:2,aircraft:"matrice4d",payload:null,reason:"M4D + Dock 3 Visual ไม่มี Thermal งบน้อยกว่า",software:["flighthub2"]}
],cautions:["ต้องไฟฟ้า+4G/Ethernet","FlightHub 2 Professional+","BVLOS กพท."]}
],

software:[
{id:"pilot2",name:"DJI Pilot 2",icon:"🎮",type:"แอปควบคุมการบิน",platform:"Android (ในรีโมท)",pricing:"ฟรี",shortDesc:"แอปหลักควบคุมการบินทุกเที่ยวบิน",
versions:[{name:"DJI Pilot 2",price:"ฟรี",features:["ควบคุมการบิน Manual","Waypoint/Mapping/Oblique/Linear Mission","Terrain Follow / Smart Track / PinPoint","Live Visual/Thermal/Split Screen","วัดอุณหภูมิ Thermal Real-time","RTK/NTRIP support","เชื่อม FlightHub 2","GEO Zone / ADS-B"],bestFor:"ทุกเที่ยวบิน"}],
features:[
{category:"การบิน",items:["ควบคุม Manual","สถานะ Real-time","RTH อัตโนมัติ","Dual Control","แผนที่บิน"]},
{category:"Mission",items:["Waypoint","Mapping (Area Scan)","Oblique (3D)","Linear (ถนน/สายส่ง)","Terrain Follow","Smart Track","PinPoint"]},
{category:"กล้อง/Thermal",items:["Live Visual/Thermal/Split","Zoom control","ถ่ายภาพ/วิดีโอ","วัดอุณหภูมิ Spot/Area/Line","Emissivity/Palette","Radiometric","Isotherm"]},
{category:"RTK",items:["D-RTK 2/3 / NTRIP","สถานะ Fix/Float","PPK Logging"]},
{category:"Safety",items:["GEO Zone","ADS-B (บางรุ่น)","Obstacle Avoidance","Emergency Stop"]}
],
compatAircraft:["m400","matrice4e","matrice4t","matrice4d","matrice4td","m3m"],
importantNotes:["❌ ใช้ DJI Fly ไม่ได้","ต้องใช้ทุกเที่ยวบิน"],salesTips:["💡 ฟรี ไม่ต้องขาย แต่สอนใช้"],link:"https://enterprise.dji.com/pilot-2"},

{id:"terra",name:"DJI Terra",icon:"🗺️",type:"ประมวลผลภาพ",platform:"Windows 10/11",pricing:"License รายปี/ถาวร",shortDesc:"สร้างแผนที่ 2D/3D/Point Cloud/Thermal Map",
versions:[
{name:"Standard",price:"ราคาถูกกว่า",features:["✅ 2D Orthomosaic","✅ 3D Model","✅ DSM/DTM","✅ Point Cloud","✅ Volume","❌ ไม่มี LiDAR","❌ ไม่มี Thermal Map","❌ ไม่มี Electricity"],bestFor:"Mapping ทั่วไป"},
{name:"Flagship",price:"ราคาสูงกว่า",features:["✅ Standard ทั้งหมด +","✅ LiDAR (L1/L2/L3)","✅ Thermal Map / ΔT","✅ Electricity (สายส่ง)","✅ Cluster","✅ Multispectral","✅ Smart Oblique"],bestFor:"LiDAR/Thermal Map/สายส่ง"},
{name:"Std+Modify Bundle",price:"ประหยัดกว่าแยก",features:["✅ Terra Standard + Modify"],bestFor:"3D+ตกแต่ง"},
{name:"Flagship+Modify Bundle",price:"ครบสุด",features:["✅ Terra Flagship + Modify"],bestFor:"ครบทุกฟีเจอร์"},
{name:"Upgrade Std→Flagship",price:"ส่วนต่าง",features:["อัปเกรด Standard→Flagship"],bestFor:"ลูกค้าเดิม"}
],
licenseTypes:[{type:"1 Year Online",desc:"1 ปี ต้อง Internet"},{type:"Permanent Online",desc:"ถาวร ต้อง Internet"},{type:"1 Year Offline",desc:"1 ปี ❌ ไม่ต้อง Internet"},{type:"Permanent Offline",desc:"ถาวร ❌ ไม่ต้อง Internet"}],
systemRequirements:{minimum:{cpu:"i5",ram:"16 GB",gpu:"GTX 1060",storage:"512 GB SSD"},recommended:{cpu:"i7/i9/Xeon",ram:"32-64 GB",gpu:"RTX 3060+ 8GB+",storage:"1 TB+ NVMe"},note:"LiDAR ต้อง RAM 64GB+"},
outputFormats:["GeoTIFF, KML, SHP, DXF","OBJ, OSGB, PLY, B3DM","LAS, PLY, PCD","PDF Report"],
compatAircraft:["m400","matrice4e","matrice4t","matrice4d","matrice4td","m3m"],
importantNotes:["❌ ไม่มี Mac","LiDAR ต้อง Flagship","Offline ย้ายเครื่องยาก"],
salesTips:["💡 P1/L2/L3 → Flagship","💡 Thermal Map → Flagship","💡 สายส่ง → Flagship","💡 แค่ M4E Mapping → Standard","💡 3D สวย → +Modify","💡 ความมั่นคง → Offline"],link:"https://enterprise.dji.com/dji-terra"},

{id:"flighthub2",name:"DJI FlightHub 2",icon:"☁️",type:"จัดการฝูงบิน (Cloud)",platform:"Web Browser",pricing:"Subscription",shortDesc:"จัดการโดรนทุกตัว ดู Live ควบคุม Dock",
versions:[
{name:"Business",price:"เริ่มต้น",features:["✅ Live Map/Video","✅ Flight Logs","✅ Media Mgmt","✅ Team Mgmt","❌ ไม่มี Dock Mgmt"],bestFor:"ทีมเล็ก ไม่มี Dock"},
{name:"Professional",price:"กลาง",features:["✅ Business +","✅ Dock Management","✅ Schedule Flight","✅ Cloud Mapping"],bestFor:"ทีมที่ใช้ Dock"},
{name:"Enterprise",price:"Per Device",features:["✅ Professional +","✅ Multi-site","✅ Analytics","✅ API"],bestFor:"องค์กรใหญ่"},
{name:"On-Premises",price:"สูง+ค่าติดตั้ง",features:["✅ Enterprise +","✅ Server ลูกค้า","✅ ❌ ไม่ส่งข้อมูลออก"],bestFor:"ทหาร/รัฐบาล"}
],
addOns:[{name:"Mapping Images 30K",desc:"เติม 30,000 ภาพ"},{name:"Mapping Images 300K",desc:"เติม 300,000 ภาพ"},{name:"Livestream 100K min",desc:"เติม 100,000 นาที"},{name:"Storage 5TB",desc:"เพิ่ม 5TB"}],
compatAircraft:["m400","matrice4e","matrice4t","matrice4d","matrice4td","m3m"],
importantNotes:["Dock ต้อง Professional+","โควตามีจำกัด"],
salesTips:["💡 ไม่มี Dock → Business","💡 Dock → Professional+","💡 หลาย Site → Enterprise","💡 ทหาร → On-Premises"],link:"https://enterprise.dji.com/flighthub-2"},

{id:"modify",name:"DJI Modify",icon:"🎨",type:"แก้ไข 3D Model",platform:"Windows",pricing:"License",shortDesc:"ลบวัตถุ ปรับ Texture สร้าง Clean 3D",
versions:[{name:"Flagship",price:"เวอร์ชันเดียว",features:["✅ ลบวัตถุ AI","✅ ปรับ Texture/Geometry","✅ Flatten terrain","✅ Water surface","✅ Export OBJ/OSGB/B3DM"],bestFor:"Digital Twin / Smart City"}],
importantNotes:["ต้อง 3D จาก Terra","Bundle กับ Terra ราคาดี"],salesTips:["💡 Bundle กับ Terra","💡 Digital Twin → ต้องมี"],link:"https://enterprise.dji.com/dji-modify"},

{id:"ppp_service",name:"PPP Service",icon:"📡",type:"พิกัดแม่นยำผ่านดาวเทียม",platform:"ในโดรน",pricing:"1 Year",shortDesc:"cm-level ไม่ต้อง Base Station / Internet",
versions:[{name:"1 Year",features:["✅ cm ผ่านดาวเทียม","✅ ไม่ต้อง D-RTK","✅ ไม่ต้อง Internet","✅ ใช้ได้ทุกที่"],bestFor:"พื้นที่ห่างไกล"}],
importantNotes:["Convergence 5-20 นาที"],salesTips:["💡 ไม่มี Internet → PPP","💡 เหมือง/ป่าไม้"]}
],

softwareGuide:{
decisionTree:[
{question:"ต้องการ Mapping/3D?",yes:"→ ต้องมี Terra",yesNext:[{question:"ใช้ LiDAR?",yes:"→ Flagship",no:"→ Standard"},{question:"Thermal Map?",yes:"→ Flagship",no:null},{question:"แก้ไข 3D?",yes:"→ +Modify",no:null}],no:"→ ไม่ต้อง Terra"},
{question:"มีโดรนหลายตัว / ดู Live?",yes:"→ FlightHub 2",yesNext:[{question:"ใช้ Dock?",yes:"→ Professional+",no:"→ Business"},{question:"หลาย Site?",yes:"→ Enterprise",no:null},{question:"ห้ามส่งข้อมูลออก?",yes:"→ On-Premises",no:null}],no:"→ ไม่ต้อง FH2"},
{question:"ต้อง RTK cm?",yes:"→ D-RTK 3 / NTRIP / PPP",yesNext:[{question:"มี Internet?",yes:"→ NTRIP",no:"→ D-RTK 3 หรือ PPP"},{question:"ทุรกันดาร?",yes:"→ PPP",no:null}],no:"→ GPS ปกติ"}
],
commonPackages:[
{name:"📦 Mapping ทั่วไป",items:["Pilot 2 (ฟรี)","Terra Standard"],forText:"M4E → Ortho/3D"},
{name:"📦 LiDAR",items:["Pilot 2 (ฟรี)","Terra Flagship"],forText:"M400+L2/L3"},
{name:"📦 Thermal",items:["Pilot 2 (ฟรี)","Terra Flagship (ถ้า Thermal Map)"],forText:"M4T / M400+H30T"},
{name:"📦 Dock",items:["Pilot 2 (ฟรี)","FlightHub 2 Professional+"],forText:"M4TD+Dock3"},
{name:"📦 Digital Twin",items:["Pilot 2 (ฟรี)","Terra Flagship+Modify Bundle"],forText:"M400+P1"},
{name:"📦 ความมั่นคง",items:["Pilot 2 (ฟรี)","Terra Offline","FH2 On-Premises"],forText:"ทหาร/รัฐบาล"}
]
},

faq:[
{q:["m4t กับ m4e ต่าง","m4t vs m4e","เทียบ m4t m4e"],a:"📊 M4E vs M4T:\n\nM4E (~1.35 kg)\n• Visual เท่านั้น ❌ ไม่มี Thermal\n• ❌ ไม่มี Rangefinder\n• ราคาถูกกว่า\n\nM4T (~1.49 kg)\n• ✅ Thermal 640×512\n• ✅ LRF 1200m\n• ราคาสูงกว่า\n\nเหมือนกัน: IP55, RTK ในตัว, 4/3\", 42 นาที\n\n🎯 ไม่ต้อง Thermal → M4E\n🎯 ต้อง Thermal → M4T"},
{q:["m4d กับ m4td","m4d vs m4td","เทียบ dock drone"],a:"📊 M4D vs M4TD:\n\nM4D → Visual เท่านั้น ❌ ไม่มี Thermal\nM4TD → ✅ มี Thermal 640×512 + LRF\n\nทั้งคู่: สำหรับ Dock 3, IP55, RTK, Anti-Ice\n\n🎯 ตรวจ Visual → M4D (ถูกกว่า)\n🎯 ตรวจ Thermal → M4TD"},
{q:["m400 กับ m350","m400 vs m350","m400 ดีกว่ายังไง"],a:"📊 M400 vs M350 RTK:\n\nM400 (ใหม่)\n• แบต TB100 → 55-60 นาที\n• Tethered Battery บินไม่จำกัด\n• Manifold 3 AI\n• SkyPort V3\n• มอเตอร์ใหม่\n\nM350 (เลิกขาย)\n• แบต TB65 → 55 นาที\n• ❌ ไม่มี Tethered\n• ❌ ไม่มี Manifold\n\n🎯 ซื้อใหม่ → M400\n⚠️ M350 เลิกจำหน่ายแล้ว"},
{q:["dock 2 กับ dock 3","dock 2 vs dock 3","dock ต่าง"],a:"📊 Dock 2 vs Dock 3:\n\nDock 2 → M30/M30T/M3D/M3TD\n• 34 kg\n• ❌ ไม่ติดรถได้\n\nDock 3 (ใหม่) → M4D/M4TD เท่านั้น\n• คาดว่าเล็กกว่า\n• ✅ Vehicle-Mount ติดรถได้\n\n⚠️ ใช้ข้ามรุ่นไม่ได้!"},
{q:["thermal คืออะไร","thermal ทำไม","thermal จำเป็นไหม"],a:"🔥 Thermal = กล้องจับความร้อน\n\n🎯 จำเป็น: โซลาร์/สายส่ง/อาคาร/กู้ภัย/ดับเพลิง\n❌ ไม่จำเป็น: Mapping/สำรวจ/ก่อสร้าง/เกษตร\n\n640×512 → M4T / M4TD (เพียงพอทั่วไป)\n1280×1024 → H30T บน M400 (ดีที่สุด)"},
{q:["rtk คืออะไร","rtk จำเป็นไหม","rtk ทำไม"],a:"📡 RTK = ตำแหน่งแม่นยำ cm\n\n🎯 จำเป็น: Mapping/สำรวจ/รังวัด/LiDAR\n❌ ไม่จำเป็น: Inspection/กู้ภัย\n\nM4E/M4T/M4D/M4TD/M400 = RTK ในตัว ✅\nM3M = RTK ในตัว ✅\n\nวิธีใช้ RTK: D-RTK 3 / NTRIP / PPP"},
{q:["ip55 คืออะไร","ip55 กันน้ำแค่ไหน"],a:"💧 IP55:\n✅ กันฝนปรอย ละอองน้ำ ฝุ่น\n❌ ไม่กันฝนหนัก/จมน้ำ\n\n✅ มี IP55: M400/M4E/M4T/M4D/M4TD/Dock 3\n❌ ไม่มี: M3M (ห้ามบินตอนฝน!)"},
{q:["payload คืออะไร","payload"],a:"🎯 Payload = กล้อง/เซนเซอร์ติดบนโดรน\n\n✅ เปลี่ยนได้: M400 เท่านั้น\n→ H30T (Thermal) / L2 (LiDAR) / P1 (Photo)\n\n❌ เปลี่ยนไม่ได้: M4E/M4T/M4D/M4TD/M3M\n→ กล้องติดตายในตัว"},
{q:["terra standard flagship","terra เวอร์ชัน"],a:"🗺️ Terra:\nStandard → Mapping 2D/3D ทั่วไป\nFlagship → + LiDAR + Thermal Map + สายส่ง\n\n💡 LiDAR → Flagship\n💡 Thermal Map → Flagship\n💡 แค่ M4E Mapping → Standard พอ"},
{q:["flighthub tier","flighthub เลือกยังไง"],a:"☁️ FlightHub 2:\nBusiness → Live+Logs (ไม่มี Dock)\nProfessional → +Dock\nEnterprise → +Multi-site+API\nOn-Premises → +Server ลูกค้า\n\n💡 ไม่มี Dock → Business\n💡 Dock → Professional+"},
{q:["dock คืออะไร","dock ทำอะไร"],a:"🤖 Dock = สถานีโดรนอัตโนมัติ\n\nทำอะไร: ชาร์จ→เปิดฝา→บิน→ถ่ายภาพ→กลับ→ชาร์จ\nไม่ต้องมีคนไปหน้างาน!\n\nDock 3 → M4D/M4TD (ใหม่ ติดรถได้)\nDock 2 → M30/M30T/M3D/M3TD\n\nต้องมี: ไฟฟ้า+4G+FlightHub 2 Pro+อนุญาต BVLOS"},
{q:["dock ต้องใช้อะไร","ติดตั้ง dock"],a:"📋 Dock ต้องมี:\n1. โดรนที่รองรับ\n2. FlightHub 2 Professional+\n3. ไฟฟ้า 24 ชม.\n4. 4G/Ethernet\n5. พื้นที่โล่ง\n6. อนุญาต BVLOS จาก กพท.\n\n⚠️ Dock 2 ≠ Dock 3 ข้ามไม่ได้"},
{q:["แบตใช้กี่ก้อน","battery ใช้ร่วมกัน"],a:"🔋 แบตใช้ร่วมกันไม่ได้!\n\nTB100 → M400 เท่านั้น\nM4 Battery → M4E/M4T เท่านั้น\nM4D Battery → M4D/M4TD เท่านั้น\nM3E Battery → M3M ✅\n\n💡 แนะนำ 3-5 ชุด/วัน"},
{q:["lidar กับ photogrammetry","lidar vs photo"],a:"📊 LiDAR vs Photogrammetry:\n\nPhotogrammetry (P1): ถ่ายภาพ→3D\n✅ ภาพสวย ❌ ทะลุต้นไม้ไม่ได้ ❌ ต้องแสงดี\n\nLiDAR (L2/L3): เลเซอร์→Point Cloud\n✅ ทะลุต้นไม้ ✅ กลางคืนได้ ❌ แพงกว่า\n\n🎯 โล่ง → Photogrammetry\n🎯 ป่าหนา → LiDAR"},
{q:["ราคาเท่าไหร่","ราคา","งบ"],a:"💰 เรียงจากถูก:\n$ → M3M\n$$ → M4E\n$$+ → M4T\n$$$ → M4D+Dock3\n$$$+ → M4TD+Dock3\n$$$$$ → M400+Payload\n\n⚠️ ราคาจริงติดต่อทีมขาย\n💡 M400 ต้องซื้อ Payload แยก!"},
{q:["ซื้อตัวแรก","เริ่มต้น","แนะนำ"],a:"💡 โดรนตัวแรก:\n\nทั่วไป → M4E (IP55+RTK+เบา)\nต้อง Thermal → M4T (IP55+Thermal+RTK)\nเกษตร → M3M\nเปลี่ยน Payload → M400\nอัตโนมัติ → M4TD + Dock 3\n\n🎯 ไม่แน่ใจ → M4T (ครบจบ)"},
{q:["กฎหมายโดรน","ขึ้นทะเบียน","กพท"],a:"⚖️ กฎหมาย:\n1. ขึ้นทะเบียน กสทช.\n2. ลงทะเบียน กพท. (CAAT)\n3. ทำประกันบุคคลที่สาม\n4. โดรน>2kg ต้องใบอนุญาต\n5. ห้ามบินเขตห้ามบิน\n6. ห้ามเหนือ 90m AGL\n7. BVLOS/กลางคืน ต้องอนุญาตพิเศษ\n\n💡 ดูรายละเอียดในหน้า 📋 ลงทะเบียนโดรน"},
{q:["tethered คืออะไร","tethered battery"],a:"🔌 Tethered = บินต่อสายไฟจากพื้น\nTB100C (M400 เท่านั้น)\n✅ บินไม่จำกัดเวลา\n❌ บินได้เฉพาะรัศมีสาย\n\nเหมาะ: เฝ้าระวัง 24 ชม. / ถ่ายทอดสด"},
{q:["manifold คืออะไร","manifold 3"],a:"🧠 Manifold 3 = คอมพิวเตอร์บนโดรน\nประมวลผล AI Real-time\n\nใช้กับ: M400 / M4E / M4T / M4D / M4TD\nต้องมี Accessory Kit เฉพาะรุ่น"}
],

cautions:{
legal:["ขึ้นทะเบียน กสทช. + กพท.","โดรน>2kg ต้องใบอนุญาต","เขตห้ามบิน","ห้ามเหนือ 90m AGL","BVLOS/กลางคืน ต้องอนุญาตพิเศษ","ต้องมีประกันบุคคลที่สาม"],
weather:["M400 ทนลม ≥15 m/s","M4E/M4T/M4D/M4TD ทนลม 12 m/s","IP55 = กันฝนปรอย ❌ ไม่ใช่ฝนหนัก","ห้ามพายุฝนฟ้าคะนอง","M3M ไม่กันน้ำ ❌ ห้ามบินตอนฝน"],
battery:["อุ่นแบตถ้า < 0°C","เก็บ 40-60%","แบตแต่ละรุ่นใช้ข้ามไม่ได้"],
firmware:["Firmware ล่าสุดก่อนบิน","❌ ห้ามอัปเดตหน้างาน","Calibrate เข็มทิศพื้นที่ใหม่"],
thermal:["ต้องมี ΔT","โซลาร์ → แดดจัด 10-14","อาคาร → เช้ามืด/หลังตะวันตก","ตั้ง Emissivity ตามวัสดุ","อย่าชี้ไปดวงอาทิตย์"]
},

registration:{
title:"📋 ขั้นตอนลงทะเบียนโดรน",
intro:"⚠️ ต้องทำครบทั้ง 3 ขั้นตอน ก่อนบินได้อย่างถูกกฎหมาย",
steps:[
{step:1,title:"ลงทะเบียนผู้ครอบครองโดรนกับ กสทช.",icon:"📡",
url:"https://anyregis.nbtc.go.th/#",urlLabel:"สำนักงาน กสทช. — ลงทะเบียนออนไลน์",
documents:["สำเนาบัตรประชาชน / พาสปอร์ต","รูปโดรน + Serial Number","ใบเสร็จ หรือหลักฐานการซื้อ"],
important:["ต้องลงทะเบียน \"ตัวผู้ใช้งาน/ผู้ครอบครอง\"","ถ้าไม่ลง = ผิดกฎหมายทันที","ทำก่อนขั้นตอนที่ 2"]},
{step:2,title:"ลงทะเบียนโดรนกับ สำนักงานการบินพลเรือนแห่งประเทศไทย (CAAT)",icon:"✈️",
url:"https://register-uasportal.caat.or.th/account/login",urlLabel:"CAAT — ลงทะเบียนโดรนออนไลน์",
documents:["เอกสารจาก กสทช. (ขั้นตอนที่ 1)","ประกันภัยโดรน (สำคัญมาก — ต้องมีก่อนลงทะเบียน)","รายละเอียดโดรน (รุ่น, Serial Number, น้ำหนัก)"],
important:["จะได้ \"เลขทะเบียนโดรน\"","ต้องติดเลขทะเบียนนี้บนตัวโดรน","ต้องทำประกันก่อนลงทะเบียน CAAT"]},
{step:3,title:"ทำประกันภัยบุคคลที่สาม (Mandatory)",icon:"🛡️",
url:null,urlLabel:null,
documents:["ข้อมูลโดรน (รุ่น, Serial Number)","ข้อมูลผู้ครอบครอง"],
important:["ต้องมี ก่อน ลงทะเบียน CAAT (ขั้นตอนที่ 2)","คุ้มครองกรณีโดรนทำให้ผู้อื่นบาดเจ็บ / ทรัพย์สินเสียหาย","วงเงินขั้นต่ำแนะนำ: 1 ล้านบาทขึ้นไป","ซื้อได้จากบริษัทประกันทั่วไปที่รับประกันโดรน","ต้องต่ออายุทุกปี"]}
],
summary:"ลำดับที่ถูกต้อง: ประกัน → กสทช. → CAAT → ติดเลขทะเบียน → บินได้!"
}

};

const SEARCH_INDEX={};
KB.aircraft.forEach(a=>{SEARCH_INDEX[a.id]=[a.id,a.name.toLowerCase(),a.shortDesc,a.category,a.badge,a.specs?.camera||"",...(a.idealFor||[]),...(a.pros||[]),...(a.cons||[])].join(" ").toLowerCase()});
KB.useCases.forEach(uc=>{SEARCH_INDEX["uc_"+uc.id]=[uc.id,uc.name,...uc.keywords].join(" ").toLowerCase()});
KB.software.forEach(sw=>{SEARCH_INDEX["sw_"+sw.id]=[sw.id,sw.name,sw.type,sw.shortDesc,...(sw.salesTips||[])].join(" ").toLowerCase()});
KB.faq.forEach((f,i)=>{SEARCH_INDEX["faq_"+i]=f.q.join(" ").toLowerCase()});