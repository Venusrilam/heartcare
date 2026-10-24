const pages=[["index.html","Home"],["heart-diseases.html","Heart diseases"],["documents.html","Documents"],["services.html","Services"],["about.html","About us"],["careers.html","Careers"],["contact.html","Contact"]];
const svc=["heart-checkup","ecg-echo","stress-test","hypertension-care","cardiac-rehab","emergency-guidance"];
let cur=location.pathname.split("/").pop()||"index.html";
if(svc.some(s=>cur===s+".html"))cur="services.html";
const nav=pages.map(([h,n])=>`<a href="${h}"${h===cur?' class="on"':''}>${n}</a>`).join("");

const H=document.getElementById("site-header");
if(H)H.innerHTML=`
<div class="top"><div class="w"><span>📞 +91 00000 00000 | ✉ care@heartcare.example</span><span>Mon–Sat: 10 AM – 7 PM | Emergency: call 112</span></div></div>
<header><div class="w"><a class="logo" href="index.html">♥ HeartCare</a><nav>${nav}</nav><a class="btn" href="contact.html">Book appointment</a></div></header>`;

const F=document.getElementById("site-footer");
if(F)F.innerHTML=`
<footer><div class="w"><div class="grid">
<div><h1>♥ HeartCare</h1><p>Heart health and awareness.</p></div>
<div><h3>Services</h3><ul>
<li><a href="heart-checkup.html">Heart check-up</a></li>
<li><a href="ecg-echo.html">ECG and echo</a></li>
<li><a href="stress-test.html">Stress test</a></li>
<li><a href="hypertension-care.html">Hypertension care</a></li>
<li><a href="cardiac-rehab.html">Cardiac rehab</a></li></ul></div>
<div><h3>Quick links</h3><ul><li><a href="about.html">About us</a></li><li><a href="documents.html">Documents</a></li><li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact</a></li></ul></div>
<div><h3>Contact</h3><p>+91 00000 00000<br>care@heartcare.example<br>Mon – Sat, 10 AM to 7 PM</p></div></div>
<div class="copy">© 2026 HeartCare. Educational content only, not a substitute for medical advice. In an emergency, call your local emergency number immediately.</div></div></footer>`;