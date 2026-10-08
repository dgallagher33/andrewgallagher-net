type Theme='light'|'dark';
const control=document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const label=control?.querySelector<HTMLElement>('[data-theme-label]');
const media=window.matchMedia('(prefers-color-scheme: dark)');
let explicit:Theme|null=null;
try{const stored=localStorage.getItem('ag-theme');if(stored==='light'||stored==='dark')explicit=stored;}catch{/* Storage can be unavailable. */}
function render(){
 const active:Theme=explicit??(media.matches?'dark':'light');
 document.documentElement.dataset.theme=active;
 if(control){
  control.hidden=false;
  control.setAttribute('aria-pressed',String(active==='dark'));
  control.setAttribute('aria-label',active==='dark'?'Switch to light theme':'Switch to dark theme');
 }
 if(label)label.textContent=active==='dark'?'Light mode':'Dark mode';
}
control?.addEventListener('click',()=>{
 explicit=document.documentElement.dataset.theme==='dark'?'light':'dark';
 try{localStorage.setItem('ag-theme',explicit);}catch{/* Still allow theme toggle for this page. */}
 render();
});
media.addEventListener?.('change',()=>{if(!explicit)render();});
render();
