/* ===== ARONE ENGINEERING — สคริปต์ส่วนกลาง ===== */
(function(){
  const B = window.AR1_BASE || "";
  const money = n => "฿" + Number(n).toLocaleString("th-TH", {minimumFractionDigits:2});

  /* ---- ช่องทางติดต่อ (แก้ที่นี่ที่เดียว) ---- */
  const LINE = "https://line.me/R/ti/p/@687gazo";
  const FB   = "https://www.facebook.com/profile.php?id=100083024514339";
  window.AR1_LINE = LINE; window.AR1_FB = FB;

  /* ---------- Header ---------- */
  window.AR1_header = function(active){
    const links = [
      ["index.html","หน้าแรก"],
      ["categories.html","หมวดหมู่สินค้า"],
      ["shop.html","สินค้าทั้งหมด"],
      ["index.html#services","บริการของเรา"],
      ["index.html#facility","โรงงานของเรา"],
      ["index.html#about","เกี่ยวกับเรา"],
      ["contact.html","ติดต่อเรา"]
    ];
    const nav = links.map(([h,t])=>`<a href="${B}${h}" class="${active===h?'active':''}">${t}</a>`).join("");
    return `
    <div class="topbar"><div class="container">
      <div class="tb-left">รับผลิตงาน CNC : ข้อต่อ • อแดปเตอร์ • คอปเปอร์ลิ่ง ตามสเปก</div>
      <div class="tb-right">
        <a href="tel:0917759944">📞 091 775 9944</a>
        <a href="${LINE}" target="_blank" rel="noopener">LINE @687gazo</a>
        <a href="${FB}" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div></div>
    <header class="site-header"><div class="container">
      <a class="brand" href="${B}index.html">
        <img src="${B}assets/logo.png" alt="ARONE Engineering">
      </a>
      <nav class="nav" id="nav">${nav}</nav>
      <button class="menu-btn" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
    </div></header>`;
  };

  /* ---------- Footer ---------- */
  window.AR1_footer = function(){
    return `
    <footer class="footer"><div class="container">
      <div class="footer-grid">
        <div>
          <div class="fbrand"><img src="${B}assets/logo.png" alt="ARONE Engineering"></div>
          <p style="max-width:420px">ผู้ผลิตงาน CNC ข้อต่อ อแดปเตอร์ และคอปเปอร์ลิ่ง สำหรับงานไฮดรอลิคและอุตสาหกรรม
          ผลิตตามสเปกด้วยความแม่นยำสูง พร้อมแบบ (Drawing) ประกอบทุกชิ้นงาน</p>
          <p style="margin-top:12px;color:#8e96a1">979/4 ม.2 ต.แพรกษาใหม่ อ.เมือง<br>จ.สมุทรปราการ 10280</p>
        </div>
        <div>
          <h4>เมนู</h4>
          <a href="${B}index.html">หน้าแรก</a>
          <a href="${B}categories.html">หมวดหมู่สินค้า</a>
          <a href="${B}shop.html">สินค้าทั้งหมด</a>
          <a href="${B}index.html#services">บริการของเรา</a>
          <a href="${B}contact.html">ติดต่อเรา</a>
        </div>
        <div>
          <h4>ติดต่อ</h4>
          <a href="tel:0917759944">📞 091 775 9944</a>
          <a href="mailto:emsaccount@erawan-ms.net">✉ emsaccount@erawan-ms.net</a>
          <a href="${LINE}" target="_blank" rel="noopener">💬 LINE : @687gazo</a>
          <a href="${FB}" target="_blank" rel="noopener">📘 Facebook : ARONE Engineering</a>
          <a href="https://maps.google.com/?q=979/4+หมู่+2+ตำบลแพรกษาใหม่+อำเภอเมือง+สมุทรปราการ+10280" target="_blank" rel="noopener">📍 979/4 ม.2 ต.แพรกษาใหม่<br>&nbsp;&nbsp;&nbsp;อ.เมือง จ.สมุทรปราการ 10280</a>
        </div>
      </div>
      <div class="footer-bottom">© 2026 ARONE Engineering — สงวนลิขสิทธิ์ทุกประการ</div>
    </div></footer>`;
  };

  /* ---------- Product card ---------- */
  window.AR1_card = function(p){
    const inner = p.img
      ? `<img src="${B}${p.img}" alt="${p.id}" loading="lazy">`
      : `<span class="dwg">◵ DRAWING</span>`;
    return `
    <div class="pcard">
      <a class="thumb ${p.img?'has-img':''}" href="${B}product.html?id=${p.id}">
        <span class="code-badge">${p.id}</span>
        ${inner}
      </a>
      <div class="body">
        <span class="cat-tag">${p.shapeName || p.catName}</span>
        <h3><a href="${B}product.html?id=${p.id}">${p.name}</a></h3>
        <div class="price">${p.price==null?'<span class="ask">สอบถามราคา</span>':money(p.price)}</div>
        <p class="desc">${p.lead.slice(0,90)}${p.lead.length>90?'…':''}</p>
        <div class="pfoot">
          <a class="btn btn-view" href="${B}product.html?id=${p.id}">ดูแบบ & สเปก</a>
        </div>
      </div>
    </div>`;
  };

  window.AR1_money = money;

  /* ---------- Search ---------- */
  window.AR1_search = function(e, inputId){
    e.preventDefault();
    const q = (document.getElementById(inputId||"q").value||"").trim();
    location.href = (window.AR1_BASE||"") + "shop.html" + (q?("?q="+encodeURIComponent(q)):"");
  };

  /* highlight matched text inside a product name/code */
  window.AR1_mark = function(text, q){
    if(!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if(i < 0) return text;
    return text.slice(0,i) + '<mark>' + text.slice(i, i+q.length) + '</mark>' + text.slice(i+q.length);
  };
})();
