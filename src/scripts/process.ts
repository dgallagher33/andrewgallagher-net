/** Optional view switch; both stages are always visible without JavaScript. */
const section=document.querySelector<HTMLElement>('[data-process-comparison]');
const controls=section?.querySelector<HTMLElement>('[data-process-controls]');
if(section && controls){
 const buttons=Array.from(controls.querySelectorAll<HTMLButtonElement>('[data-process-view]'));
 function select(view:'both'|'before'|'after'){
  section.dataset.processCurrent=view;
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.processView===view)));
 }
 controls.hidden=false;
 buttons.forEach(button=>button.addEventListener('click',()=>{
  const view=button.dataset.processView;
  if(view==='both'||view==='before'||view==='after')select(view);
 }));
 select('both');
}
