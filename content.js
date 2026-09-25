(async()=>{
  const{createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
  const supabase=createClient('https://oxirewjzmnfnbwiugoac.supabase.co','sb_publishable_gkc-Cjh2ykNYvlf5JRf3NQ_UU2s73jC');
  const{data,error}=await supabase.from('nande_roga_site').select('content').eq('id',1).maybeSingle();
  if(error)return;
  const c=data?.content||{};
  const set=(sel,v)=>{const el=document.querySelector(sel);if(el&&v)el.textContent=v};
  set('#nosotros .eyebrow',c.about_eyebrow);set('#nosotros h2',c.about_title);
  const ap=document.querySelectorAll('#nosotros .two-col>div:first-child p');if(ap[0]&&c.about_lead)ap[0].textContent=c.about_lead;if(ap[1]&&c.about_p2)ap[1].textContent=c.about_p2;if(ap[2]&&c.about_p3)ap[2].textContent=c.about_p3;
  set('#habitaciones .eyebrow',c.lodging_eyebrow);set('#habitaciones .section-heading h2',c.lodging_title);set('#habitaciones .section-heading p',c.lodging_text);
  const rooms=document.querySelectorAll('.room-card');[['room1_title','room1_text'],['room2_title','room2_text'],['room3_title','room3_text']].forEach((k,i)=>{const card=rooms[i];if(!card)return;const h=card.querySelector('h3'),p=card.querySelector('.room-body p');if(h&&c[k[0]])h.textContent=c[k[0]];if(p&&c[k[1]])p.textContent=c[k[1]]});
  set('#servicios .eyebrow',c.services_eyebrow);set('#servicios .section-heading h2',c.services_title);set('#servicios .section-heading p',c.services_text);
  set('.experience-band .eyebrow',c.experience_eyebrow);set('.experience-band h2',c.experience_title);set('.experience-band p',c.experience_text);
  set('#galeria .eyebrow',c.gallery_eyebrow);set('#galeria .section-heading h2',c.gallery_title);set('#galeria .section-heading p',c.gallery_text);
  set('#contacto .eyebrow',c.contact_eyebrow);set('#contacto h2',c.contact_title);set('#contacto .lead',c.contact_text);
  const fp=document.querySelector('.footer-grid>div:first-child>p');if(fp&&c.footer_text)fp.textContent=c.footer_text;
})();