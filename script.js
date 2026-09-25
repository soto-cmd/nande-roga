const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuToggle?.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',nav.classList.contains('open'));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

let siteWhatsapp='595972795003';
const hugoWhatsapp='595984340489';

const serviceStyle=document.createElement('style');
serviceStyle.textContent=`#servicios{position:relative;overflow:hidden}#servicios:before{content:"";position:absolute;right:-140px;top:90px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(111,118,84,.08),transparent 68%);pointer-events:none}.service-grid{gap:24px}.service-item{position:relative;min-height:248px;padding:30px 28px 28px;background:linear-gradient(145deg,#fffdfa 0%,#fdf9f3 100%);border:1px solid rgba(168,88,55,.16);border-radius:24px;box-shadow:0 10px 30px rgba(71,50,36,.045);transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease,background .28s ease;overflow:hidden}.service-item:after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--terracotta),var(--olive));opacity:0;transform:scaleX(.45);transition:.28s}.service-item:hover{transform:translateY(-5px);box-shadow:0 20px 44px rgba(71,50,36,.09);border-color:rgba(168,88,55,.28);background:#fff}.service-item:hover:after{opacity:.9;transform:scaleX(1)}.service-icon{width:52px;height:52px;display:grid;place-items:center;margin-bottom:20px;border-radius:15px;background:linear-gradient(145deg,rgba(168,88,55,.105),rgba(111,118,84,.08));color:var(--terracotta);border:1px solid rgba(168,88,55,.12);transition:transform .28s ease,background .28s ease,color .28s ease}.service-item:hover .service-icon{transform:translateY(-2px) rotate(-2deg);background:var(--terracotta);color:#fff}.service-icon svg{width:25px;height:25px;display:block;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}.service-item h3{font-family:"Lora",serif;font-size:1.48rem;font-weight:600;letter-spacing:-.018em;line-height:1.25;margin:0 0 11px;color:var(--ink)}.service-item p{font-family:"DM Sans",sans-serif;font-size:.97rem;line-height:1.72;margin:0;color:#74675e;max-width:31ch}.service-item:nth-child(3n+2) .service-icon{color:var(--olive);background:linear-gradient(145deg,rgba(111,118,84,.11),rgba(168,88,55,.055));border-color:rgba(111,118,84,.14)}.service-item:nth-child(3n+2):hover .service-icon{background:var(--olive);color:#fff}@media(max-width:900px){.service-item{min-height:230px}}@media(max-width:580px){.service-grid{gap:16px}.service-item{min-height:0;padding:25px 23px;border-radius:20px}.service-icon{width:48px;height:48px;margin-bottom:17px}.service-item h3{font-size:1.36rem}.service-item p{font-size:.94rem;max-width:none}}`;
document.head.appendChild(serviceStyle);

const icons={
 wifi:'<svg viewBox="0 0 24 24"><path d="M2.5 8.8a14.2 14.2 0 0 1 19 0"/><path d="M5.8 12.2a9.4 9.4 0 0 1 12.4 0"/><path d="M9.2 15.6a4.3 4.3 0 0 1 5.6 0"/><path d="M12 19.2h.01"/></svg>',
 hotwater:'<svg viewBox="0 0 24 24"><path d="M6 4h8a3 3 0 0 1 3 3v2"/><path d="M14 9h6"/><path d="M17 9v2"/><path d="M7 14c0 1.2-1.5 2-1.5 3.4A1.6 1.6 0 0 0 7 19a1.6 1.6 0 0 0 1.5-1.6C8.5 16 7 15.2 7 14Z"/><path d="M12 14c0 1.2-1.5 2-1.5 3.4A1.6 1.6 0 0 0 12 19a1.6 1.6 0 0 0 1.5-1.6C13.5 16 12 15.2 12 14Z"/></svg>',
 parking:'<svg viewBox="0 0 24 24"><path d="M4 15l1.5-5.2A2.5 2.5 0 0 1 7.9 8h8.2a2.5 2.5 0 0 1 2.4 1.8L20 15"/><path d="M3 15h18v4H3z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
 patio:'<svg viewBox="0 0 24 24"><path d="M12 21V10"/><path d="M12 14c-4.5 0-7-2.6-7-6 4.2 0 7 2.2 7 6Z"/><path d="M12 11c.5-4.5 3.2-7 7-7 0 4.1-2.5 6.8-7 7Z"/><path d="M8 21h8"/></svg>',
 kitchen:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M3 3v7a2 2 0 0 0 2 2h1V3"/><path d="M5 3v18"/><path d="M19 3v18"/><path d="M19 3c2 2 2 7 0 9"/></svg>',
 games:'<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>',
 reading:'<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>',
 night:'<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.6 8.6 0 1 0 20 15.5Z"/><path d="M16 4v3"/><path d="M14.5 5.5h3"/></svg>',
 hammock:'<svg viewBox="0 0 24 24"><path d="M4 6v13"/><path d="M20 6v13"/><path d="M5 9c3 6 11 6 14 0"/><path d="M7 11.5c2.5 3.5 7.5 3.5 10 0"/></svg>',
 groups:'<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><circle cx="9" cy="14" r="1.8"/><circle cx="15" cy="14" r="1.8"/><path d="M7 20c.5-2.2 3.5-3.5 5-3.5s4.5 1.3 5 3.5"/></svg>',
 attention:'<svg viewBox="0 0 24 24"><path d="M8 12 5.5 9.5a2.1 2.1 0 0 1 3-3L12 10l3.5-3.5a2.1 2.1 0 0 1 3 3L16 12"/><path d="M4 13.5 9.5 19a3.5 3.5 0 0 0 5 0l5.5-5.5"/></svg>',
 laundry:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M7 6h2"/><path d="M12 6h5"/><circle cx="12" cy="14" r="4"/><path d="M9.5 14c1.5-1 3.5 1 5 0"/></svg>',
 water:'<svg viewBox="0 0 24 24"><path d="M7 5h10v15H7z"/><path d="M9 5V3h6v2"/><path d="M9 10h6"/><path d="M12 13c0 1.2-1.5 2-1.5 3.3A1.6 1.6 0 0 0 12 18a1.6 1.6 0 0 0 1.5-1.7C13.5 15 12 14.2 12 13Z"/></svg>'
};

document.querySelectorAll('.service-item').forEach((card,index)=>{const old=card.querySelector(':scope > span');if(!old)return;const icon=document.createElement('div');icon.className='service-icon';icon.innerHTML=icons[card.dataset.serviceKey]||icons.attention;old.replaceWith(icon);card.style.setProperty('--delay',`${index*22}ms`);});

function applyContent(content={}){
  document.querySelectorAll('[data-content]').forEach(el=>{const v=content[el.dataset.content];if(typeof v==='string'&&v.trim())el.textContent=v;});
  document.querySelectorAll('[data-list-content]').forEach(el=>{const v=content[el.dataset.listContent];if(typeof v==='string'&&v.trim())el.innerHTML=v.split('\n').filter(Boolean).map(x=>`<li>${escapeHtml(x.trim())}</li>`).join('');});
}
function escapeHtml(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function setBackground(el,url,label){if(!el)return;el.style.setProperty('background-image',`url("${url}")`,'important');if(label){el.setAttribute('role','img');el.setAttribute('aria-label',label);}}

(async()=>{
  try{
    const{createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    const supabase=createClient('https://oxirewjzmnfnbwiugoac.supabase.co','sb_publishable_gkc-Cjh2ykNYvlf5JRf3NQ_UU2s73jC');
    const[siteRes,mediaRes]=await Promise.all([
      supabase.from('nande_roga_site').select('*').eq('id',1).maybeSingle(),
      supabase.from('nande_roga_media').select('*').order('section').order('position')
    ]);
    if(siteRes.data){
      const s=siteRes.data,c=s.content||{};
      siteWhatsapp=(s.whatsapp||siteWhatsapp).replace(/\D/g,'');
      const h1=document.querySelector('.hero h1'),hp=document.querySelector('.hero-content>p');
      if(h1&&s.hero_title)h1.textContent=s.hero_title;if(hp&&s.hero_text)hp.textContent=s.hero_text;
      applyContent(c);
      const ps=[...document.querySelectorAll('.contact-list p')];
      if(ps[0])ps[0].innerHTML=`<strong>WhatsApp de Nilda</strong><br><a href="https://wa.me/${siteWhatsapp}" target="_blank" rel="noopener">+595 972 795003</a><br><strong>WhatsApp de Hugo</strong><br><a href="https://wa.me/${hugoWhatsapp}" target="_blank" rel="noopener">+595 984 340489</a>`;
      if(ps[1])ps[1].innerHTML=`<strong>Ubicación</strong><br>${escapeHtml(s.location||'Santa María de Fe, Misiones, Paraguay')}`;
      if(ps[2])ps[2].innerHTML=`<strong>Horario de atención</strong><br>${escapeHtml(s.hours||'Consultar disponibilidad')}`;
      const footerSpans=[...document.querySelectorAll('.footer-grid>div:last-child span')];
      if(footerSpans[0])footerSpans[0].textContent=(s.location||'Santa María de Fe, Misiones, Paraguay').split(',')[0];
      if(footerSpans[1])footerSpans[1].textContent='Misiones · Paraguay';
      document.querySelectorAll('a[href*="wa.me/"]').forEach(a=>{if(!a.href.includes(hugoWhatsapp))a.href=`https://wa.me/${siteWhatsapp}?text=${encodeURIComponent('Hola, quisiera consultar disponibilidad en Ñande Róga')}`;});
    }
    const targets={about:[document.querySelector('.photo-a'),document.querySelector('.photo-b')],room_yvoty:[document.querySelector('.room-one')],room_arami:[document.querySelector('.room-two')],room_jerovia:[document.querySelector('.room-three')],gallery:[...document.querySelectorAll('.gallery-grid .g')]};
    for(const item of mediaRes.data||[]){
      const url=supabase.storage.from('nande-roga').getPublicUrl(item.storage_path).data.publicUrl;
      if(item.section==='hero'){
        const st=document.createElement('style');st.textContent=`.hero:before{background-image:url("${url}")!important}`;document.head.appendChild(st);
      }else if(item.section==='experience'){
        const el=document.querySelector('.experience-band');if(el){el.style.setProperty('background-image',`linear-gradient(rgba(62,50,34,.65),rgba(62,50,34,.65)),url("${url}")`,'important');if(item.alt_text){el.setAttribute('role','img');el.setAttribute('aria-label',item.alt_text);}}
      }else{
        setBackground((targets[item.section]||[])[item.position||0],url,item.alt_text);
      }
    }
  }catch(err){console.warn('Ñande Róga: se usaron los contenidos de respaldo.',err);}
})();

document.getElementById('bookingForm')?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),checkin=document.getElementById('checkin').value,checkout=document.getElementById('checkout').value,guests=document.getElementById('guests').value;const text=`Hola, soy ${name}. Quisiera consultar disponibilidad en Ñande Róga. Entrada: ${checkin}. Salida: ${checkout}. ${guests}.`;window.open(`https://wa.me/${siteWhatsapp}?text=${encodeURIComponent(text)}`,'_blank','noopener');});