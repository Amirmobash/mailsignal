const nav=document.querySelector('.nav');document.querySelector('.menu')?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('section, article, .steps div').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease, transform .6s ease';obs.observe(el)});
const st=document.createElement('style');st.textContent='.show{opacity:1!important;transform:none!important}';document.head.append(st);
