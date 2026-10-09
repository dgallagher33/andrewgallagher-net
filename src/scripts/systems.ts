/** Meaningful enhancement: previews relationships and inspects Gaia nodes. Static links/content remain functional. */
const system=document.querySelector<HTMLElement>('[data-systems-network]');
if(system){
 const title=system.querySelector<HTMLElement>('[data-system-detail-title]');
 const copy=system.querySelector<HTMLElement>('[data-system-detail-copy]');
 const links=Array.from(system.querySelectorAll<SVGElement>('[data-system-key]'));
 const select=(el:SVGElement)=>{
  const detail=el.getAttribute('data-system-description');
  const heading=el.getAttribute('data-system-title');
  if(copy&&detail)copy.textContent=detail;
  if(title&&heading)title.textContent=heading;
  links.forEach(link=>link.classList.toggle('is-active',link===el));
 };
 links.forEach(link=>{
  link.addEventListener('focus',()=>select(link));
  link.addEventListener('pointerenter',()=>select(link));
 });
 const first=links[0];if(first)select(first);
}
const explorer=document.querySelector<HTMLElement>('[data-gaia-explorer]');
if(explorer){
 const selectors=Array.from(explorer.querySelectorAll<HTMLAnchorElement>('[data-gaia-select]'));
 const panels=Array.from(explorer.querySelectorAll<HTMLElement>('[data-gaia-panel]'));
 const valid=new Set(selectors.map(el=>el.dataset.gaiaSelect));
 function select(key:string){
  if(!valid.has(key))return;
  panels.forEach(panel=>{panel.hidden=panel.dataset.gaiaPanel!==key;});
  selectors.forEach(a=>{
   if(a.dataset.gaiaSelect===key)a.setAttribute('aria-current','true');
   else a.removeAttribute('aria-current');
  });
 }
 const requested=window.location.hash.match(/^#gaia-(sierra|k2|fuji|olympus)$/)?.[1];
 select(requested??'sierra');
 explorer.dataset.enhanced='true';
 selectors.forEach(anchor=>anchor.addEventListener('click',(event)=>{
  event.preventDefault();
  const key=anchor.dataset.gaiaSelect;
  if(!key)return;
  select(key);
  history.replaceState(history.state,'',`#gaia-${key}`);
 }));
 window.addEventListener('popstate',()=>{
  const key=window.location.hash.match(/^#gaia-(sierra|k2|fuji|olympus)$/)?.[1];
  if(key)select(key);
 });
 window.addEventListener('hashchange',()=>{
  const key=window.location.hash.match(/^#gaia-(sierra|k2|fuji|olympus)$/)?.[1];
  if(key)select(key);
 });
}
