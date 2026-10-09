// Grounded in the Home Assistant project conversations, August–October 2026.
// These are interaction requirements and acceptance checks, not a claim that
// every hardware transition has been measured or verified.
export const scenarios = [
  {
    id: 'select', label: 'Choose a scene', title: 'Selection and activation are different actions.',
    context: 'The light is off. Someone wants to choose the scene that will be used next.',
    event: 'Press the macro/configuration button.',
    behavior: 'Advance the selected scene without turning the fixture on. The main paddle remains the familiar way to activate it.',
    feedback: 'The switch LED represents the selected next-on scene, so the next action is visible before the light changes.',
    check: 'With the light off, changing the selection should leave it off. The next on press should apply the scene represented by the LED.',
  },
  {
    id: 'red', label: 'Turn on red', title: 'The transition is part of the experience.',
    context: 'The fixture was previously white, is now off, and red is selected for the next activation.',
    event: 'Press the on paddle.',
    behavior: 'Apply the intended red color and brightness as part of activation, rather than restoring the old white state first.',
    feedback: 'The visible result should be red from the start. A brief flash of the prior scene still fails the interaction requirement.',
    check: 'Repeat white → off → select red → on. Observe the first visible output as well as the final state.',
  },
  {
    id: 'fixture', label: 'Control a fixture', title: 'Two bulbs should present one useful control.',
    context: 'Two Inovelli Zigbee bulbs are installed in a single two-bulb fixture.',
    event: 'Use the grouped light control.',
    behavior: 'Address the fixture as one lighting target, keeping the individual bulbs available for device-level investigation.',
    feedback: 'The person using the room should be able to identify the fixture without needing to understand the coordinator that owns the group entity.',
    check: 'Check group on/off and scene behavior, then inspect the entity and device representation separately. A group existing is not the same as an intuitive fixture interface.',
  },
];

export const futureWork = [
  {
    title: 'A voice interface built around Home Assistant',
    status: 'Exploring',
    description: 'Researching a custom, Google-Home-like speaker that fits the Home Assistant environment.',
    question: 'How can a spoken request become a clear, verifiable action without making voice the only useful way to control the home?',
  },
  {
    title: 'Whole-home energy visibility',
    status: 'Exploring',
    description: 'Researching ways to bring total household power consumption into Home Assistant.',
    question: 'Which measurements would help explain household consumption and support useful decisions?',
  },
];
