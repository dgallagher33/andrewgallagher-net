/** Small browser-native enhancements, with a complete static fallback. */
const progress=document.createElement('div');
progress.className='scroll-progress';
progress.setAttribute('aria-hidden','true');
document.body.append(progress);
let pending=false;
function updateProgress(){
 const max=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+'%';
 pending=false;
}
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateProgress)}},{passive:true});
window.addEventListener('resize',updateProgress);
updateProgress();
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.setAttribute('data-in-view','');observer.unobserve(entry.target)}})},{threshold:.45});
 document.querySelectorAll('.journey-grid li').forEach(el=>observer.observe(el));
}
