export {};
const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-scenario-button]'));
const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-scenario]'));
const controls = document.querySelector<HTMLElement>('[data-ha-controls]');
function showScenario(id: string) {
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.scenarioButton === id)));
  panels.forEach(panel => { panel.hidden = panel.dataset.scenario !== id; });
}
if (controls && buttons.length && panels.length) {
  controls.hidden = false;
  showScenario('select');
  buttons.forEach(button => button.addEventListener('click', () => showScenario(button.dataset.scenarioButton ?? 'select')));
}
