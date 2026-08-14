/* ===== ARONE ENGINEERING — ข้อมูลสินค้า =====
   แก้ไข/เพิ่มสินค้าได้ที่ไฟล์นี้ไฟล์เดียว หน้าเว็บทั้งหมดจะอัปเดตอัตโนมัติ */
window.AR1_CATEGORIES = [
  { id:"fitting", name:"หัวสายไฮดรอลิค (Hose Fitting)", icon:"🔩",
    desc:"หัวสายไฮดรอลิครุ่น GJS สำหรับย้ำสาย มี 2 ผิวเคลือบ (Brass-tone / Silver-tone) ขนาด -04 ถึง -16" }
];

window.AR1_PRODUCTS = [];

/* ===== หัวสายไฮดรอลิค GJS — 5 ขนาด × 2 ผิวเคลือบ ===== */
(function(){
  const FIN = { B:"Brass-tone", S:"Silver-tone" };
  const FIN_TH = { B:"สีทองเหลือง", S:"สีเงิน" };
  /* ข้อมูลจากตารางสเปก GJS (JIC Female Swivel Nut) */
  const SPEC = {
    "0404": { bore:'1/4"',  thread:"7/16-20 UNF"  },
    "0606": { bore:'3/8"',  thread:"9/16-18 UNF"  },
    "0808": { bore:'1/2"',  thread:"3/4-16 UNF"   },
    "1212": { bore:'3/4"',  thread:"1.1/16-12 UN" },
    "1616": { bore:'1"',    thread:"1.5/16-12 UN" }
  };
  ["0404","0606","0808","1212","1616"].forEach(sz => {
    const dash = "-" + sz.slice(0,2);
    ["B","S"].forEach(f => {
      window.AR1_PRODUCTS.push({
        id:"GJS-"+sz+"-"+f, code:"GJS-"+sz,
        cat:"fitting", catName:"หัวสายไฮดรอลิค (Hose Fitting)",
        shape:"hose", shapeName:"หัวสาย",
        finish:FIN[f],
        img:"assets/products/GJS-"+sz+"-"+f+".jpg",
        video:"assets/video/products/GJS-"+sz.slice(0,2)+".mp4",
        dwg:"assets/products/GJS-dwg.png",
        specPdf:"assets/specs/GJS-spec.pdf",
        name:"หัวสายไฮดรอลิค GJS-"+sz+" — "+FIN[f]+" ("+FIN_TH[f]+")",
        price:null,
        lead:"หัวสายไฮดรอลิครุ่น GJS ขนาด "+dash+" ผิวเคลือบ "+FIN[f]+" ("+FIN_TH[f]+") สำหรับย้ำประกอบกับสายไฮดรอลิค ผลิตและควบคุมคุณภาพโดย ARONE Engineering ดูสเปกและตารางขนาดฉบับเต็มได้จากแบบแนบ (Drawing/PDF)",
        specs:{
          "รุ่น":"GJS-"+sz,
          "ประเภท":"หัวสายไฮดรอลิค JIC 37° ตัวเมีย นัทหมุนฟรี (JIC Female Swivel Nut)",
          "ระบบเกลียว":"JIC 37° (UNF / UN)",
          "ขนาด":dash,
          "Hose Bore":SPEC[sz].bore,
          "Thread Size":SPEC[sz].thread,
          "ผิวเคลือบ":FIN[f]+" ("+FIN_TH[f]+")",
          "หมายเหตุ":"ดูขนาดเกลียวและ Hose Bore ฉบับเต็มได้จากแบบ (Drawing) หรือดาวน์โหลดสเปก PDF ด้านล่าง"
        },
        feats:[
          "มี 2 ผิวเคลือบให้เลือก: Brass-tone (สีทองเหลือง) และ Silver-tone (สีเงิน)",
          "มีให้เลือก 5 ขนาด: -04, -06, -08, -12, -16",
          "ผลิตและควบคุมคุณภาพโดย ARONE Engineering",
          "สอบถามสเปก ขนาด และราคาได้ทาง LINE หรือโทร 091 775 9944"
        ]
      });
    });
  });
})();

/* ===== ระบบเกลียว (Thread standard) — ถอดรหัสจากรหัสรุ่นอัตโนมัติ ===== */
window.AR1_THREADS = [
  { id:"JIC37", name:"เกลียว JIC 37° (UNF/UN)", tokens:["GJS"] },
  { id:"OTHER", name:"อื่น ๆ / อเนกประสงค์", tokens:[] }
];
(function(){
  const map = {};
  window.AR1_THREADS.forEach(t => t.tokens.forEach(k => map[k] = t.id));
  window.AR1_PRODUCTS.forEach(p => {
    const set = new Set();
    p.id.split("-").forEach(tok => { if (map[tok]) set.add(map[tok]); });
    p.threads = set.size ? [...set] : ["OTHER"];
  });
})();
