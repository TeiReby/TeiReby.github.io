/************** 
 * 실험_통제 *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '실험_통제';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'norm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(trial3RoutineBegin());
flowScheduler.add(trial3RoutineEachFrame());
flowScheduler.add(trial3RoutineEnd());
flowScheduler.add(trial4RoutineBegin());
flowScheduler.add(trial4RoutineEachFrame());
flowScheduler.add(trial4RoutineEnd());
flowScheduler.add(trial5RoutineBegin());
flowScheduler.add(trial5RoutineEachFrame());
flowScheduler.add(trial5RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(real_prepRoutineBegin());
flowScheduler.add(real_prepRoutineEachFrame());
flowScheduler.add(real_prepRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': '실험자극.xlsx', 'path': '실험자극.xlsx'},
    {'name': './experiment/슬라이드1.PNG', 'path': './experiment/슬라이드1.PNG'},
    {'name': './control/슬라이드1.PNG', 'path': './control/슬라이드1.PNG'},
    {'name': './introimage/슬라이드7.PNG', 'path': './introimage/슬라이드7.PNG'},
    {'name': './wav/1_비맥락1.wav', 'path': './wav/1_비맥락1.wav'},
    {'name': './wav/1_맥락1.wav', 'path': './wav/1_맥락1.wav'},
    {'name': './wav/1_맥락2.wav', 'path': './wav/1_맥락2.wav'},
    {'name': './experiment/슬라이드2.PNG', 'path': './experiment/슬라이드2.PNG'},
    {'name': './control/슬라이드4.PNG', 'path': './control/슬라이드4.PNG'},
    {'name': './introimage/슬라이드8.PNG', 'path': './introimage/슬라이드8.PNG'},
    {'name': './wav/2_비맥락1.wav', 'path': './wav/2_비맥락1.wav'},
    {'name': './wav/2_맥락1.wav', 'path': './wav/2_맥락1.wav'},
    {'name': './wav/2_비맥락2.wav', 'path': './wav/2_비맥락2.wav'},
    {'name': './experiment/슬라이드3.PNG', 'path': './experiment/슬라이드3.PNG'},
    {'name': './control/슬라이드2.PNG', 'path': './control/슬라이드2.PNG'},
    {'name': './wav/1_비맥락2.wav', 'path': './wav/1_비맥락2.wav'},
    {'name': './experiment/슬라이드4.PNG', 'path': './experiment/슬라이드4.PNG'},
    {'name': './control/슬라이드3.PNG', 'path': './control/슬라이드3.PNG'},
    {'name': './wav/2_맥락2.wav', 'path': './wav/2_맥락2.wav'},
    {'name': './experiment/슬라이드5.PNG', 'path': './experiment/슬라이드5.PNG'},
    {'name': './control/슬라이드5.PNG', 'path': './control/슬라이드5.PNG'},
    {'name': './wav/3_비맥락1.wav', 'path': './wav/3_비맥락1.wav'},
    {'name': './wav/3_맥락1.wav', 'path': './wav/3_맥락1.wav'},
    {'name': './wav/3_맥락2.wav', 'path': './wav/3_맥락2.wav'},
    {'name': './experiment/슬라이드6.PNG', 'path': './experiment/슬라이드6.PNG'},
    {'name': './control/슬라이드6.PNG', 'path': './control/슬라이드6.PNG'},
    {'name': './wav/3_비맥락2.wav', 'path': './wav/3_비맥락2.wav'},
    {'name': './experiment/슬라이드7.PNG', 'path': './experiment/슬라이드7.PNG'},
    {'name': './control/슬라이드7.PNG', 'path': './control/슬라이드7.PNG'},
    {'name': './wav/4_비맥락1.wav', 'path': './wav/4_비맥락1.wav'},
    {'name': './wav/4_맥락1.wav', 'path': './wav/4_맥락1.wav'},
    {'name': './wav/4_맥락2.wav', 'path': './wav/4_맥락2.wav'},
    {'name': './experiment/슬라이드8.PNG', 'path': './experiment/슬라이드8.PNG'},
    {'name': './control/슬라이드8.PNG', 'path': './control/슬라이드8.PNG'},
    {'name': './wav/4_비맥락2.wav', 'path': './wav/4_비맥락2.wav'},
    {'name': './experiment/슬라이드9.PNG', 'path': './experiment/슬라이드9.PNG'},
    {'name': './control/슬라이드9.PNG', 'path': './control/슬라이드9.PNG'},
    {'name': './wav/5_비맥락1.wav', 'path': './wav/5_비맥락1.wav'},
    {'name': './wav/5_맥락1.wav', 'path': './wav/5_맥락1.wav'},
    {'name': './wav/5_맥락2.wav', 'path': './wav/5_맥락2.wav'},
    {'name': './experiment/슬라이드10.PNG', 'path': './experiment/슬라이드10.PNG'},
    {'name': './control/슬라이드10.PNG', 'path': './control/슬라이드10.PNG'},
    {'name': './wav/5_비맥락2.wav', 'path': './wav/5_비맥락2.wav'},
    {'name': './experiment/슬라이드11.PNG', 'path': './experiment/슬라이드11.PNG'},
    {'name': './control/슬라이드11.PNG', 'path': './control/슬라이드11.PNG'},
    {'name': './wav/6_비맥락1.wav', 'path': './wav/6_비맥락1.wav'},
    {'name': './wav/6_맥락1.wav', 'path': './wav/6_맥락1.wav'},
    {'name': './wav/6_맥락2.wav', 'path': './wav/6_맥락2.wav'},
    {'name': './experiment/슬라이드12.PNG', 'path': './experiment/슬라이드12.PNG'},
    {'name': './control/슬라이드12.PNG', 'path': './control/슬라이드12.PNG'},
    {'name': './wav/6_비맥락2.wav', 'path': './wav/6_비맥락2.wav'},
    {'name': './experiment/슬라이드13.PNG', 'path': './experiment/슬라이드13.PNG'},
    {'name': './control/슬라이드13.PNG', 'path': './control/슬라이드13.PNG'},
    {'name': './wav/7_비맥락1.wav', 'path': './wav/7_비맥락1.wav'},
    {'name': './wav/7_맥락1.wav', 'path': './wav/7_맥락1.wav'},
    {'name': './wav/7_맥락2.wav', 'path': './wav/7_맥락2.wav'},
    {'name': './experiment/슬라이드14.PNG', 'path': './experiment/슬라이드14.PNG'},
    {'name': './control/슬라이드14.PNG', 'path': './control/슬라이드14.PNG'},
    {'name': './wav/7_비맥락2.wav', 'path': './wav/7_비맥락2.wav'},
    {'name': './experiment/슬라이드15.PNG', 'path': './experiment/슬라이드15.PNG'},
    {'name': './control/슬라이드15.PNG', 'path': './control/슬라이드15.PNG'},
    {'name': './wav/8_비맥락1.wav', 'path': './wav/8_비맥락1.wav'},
    {'name': './wav/8_맥락1.wav', 'path': './wav/8_맥락1.wav'},
    {'name': './wav/8_맥락2.wav', 'path': './wav/8_맥락2.wav'},
    {'name': './experiment/슬라이드16.PNG', 'path': './experiment/슬라이드16.PNG'},
    {'name': './control/슬라이드16.PNG', 'path': './control/슬라이드16.PNG'},
    {'name': './wav/8_비맥락2.wav', 'path': './wav/8_비맥락2.wav'},
    {'name': './experiment/슬라이드17.PNG', 'path': './experiment/슬라이드17.PNG'},
    {'name': './control/슬라이드17.PNG', 'path': './control/슬라이드17.PNG'},
    {'name': './wav/9_비맥락1.wav', 'path': './wav/9_비맥락1.wav'},
    {'name': './wav/9_맥락1.wav', 'path': './wav/9_맥락1.wav'},
    {'name': './wav/9_맥락2.wav', 'path': './wav/9_맥락2.wav'},
    {'name': './experiment/슬라이드18.PNG', 'path': './experiment/슬라이드18.PNG'},
    {'name': './control/슬라이드18.PNG', 'path': './control/슬라이드18.PNG'},
    {'name': './wav/9_비맥락2.wav', 'path': './wav/9_비맥락2.wav'},
    {'name': './experiment/슬라이드19.PNG', 'path': './experiment/슬라이드19.PNG'},
    {'name': './control/슬라이드19.PNG', 'path': './control/슬라이드19.PNG'},
    {'name': './wav/10_비맥락1.wav', 'path': './wav/10_비맥락1.wav'},
    {'name': './wav/10_맥락1.wav', 'path': './wav/10_맥락1.wav'},
    {'name': './wav/10_맥락2.wav', 'path': './wav/10_맥락2.wav'},
    {'name': './experiment/슬라이드20.PNG', 'path': './experiment/슬라이드20.PNG'},
    {'name': './control/슬라이드20.PNG', 'path': './control/슬라이드20.PNG'},
    {'name': './wav/10_비맥락2.wav', 'path': './wav/10_비맥락2.wav'},
    {'name': './experiment/슬라이드21.PNG', 'path': './experiment/슬라이드21.PNG'},
    {'name': './control/슬라이드21.PNG', 'path': './control/슬라이드21.PNG'},
    {'name': './wav/11_비맥락1.wav', 'path': './wav/11_비맥락1.wav'},
    {'name': './wav/11_맥락1.wav', 'path': './wav/11_맥락1.wav'},
    {'name': './wav/11_맥락2.wav', 'path': './wav/11_맥락2.wav'},
    {'name': './experiment/슬라이드22.PNG', 'path': './experiment/슬라이드22.PNG'},
    {'name': './control/슬라이드22.PNG', 'path': './control/슬라이드22.PNG'},
    {'name': './wav/11_비맥락2.wav', 'path': './wav/11_비맥락2.wav'},
    {'name': './experiment/슬라이드23.PNG', 'path': './experiment/슬라이드23.PNG'},
    {'name': './control/슬라이드23.PNG', 'path': './control/슬라이드23.PNG'},
    {'name': './wav/12_비맥락1.wav', 'path': './wav/12_비맥락1.wav'},
    {'name': './wav/12_맥락1.wav', 'path': './wav/12_맥락1.wav'},
    {'name': './wav/12_맥락2.wav', 'path': './wav/12_맥락2.wav'},
    {'name': './experiment/슬라이드24.PNG', 'path': './experiment/슬라이드24.PNG'},
    {'name': './control/슬라이드24.PNG', 'path': './control/슬라이드24.PNG'},
    {'name': './wav/12_비맥락2.wav', 'path': './wav/12_비맥락2.wav'},
    {'name': './experiment/슬라이드25.PNG', 'path': './experiment/슬라이드25.PNG'},
    {'name': './control/슬라이드25.PNG', 'path': './control/슬라이드25.PNG'},
    {'name': './wav/13_비맥락1.wav', 'path': './wav/13_비맥락1.wav'},
    {'name': './wav/13_맥락1.wav', 'path': './wav/13_맥락1.wav'},
    {'name': './wav/13_맥락2.wav', 'path': './wav/13_맥락2.wav'},
    {'name': './experiment/슬라이드26.PNG', 'path': './experiment/슬라이드26.PNG'},
    {'name': './control/슬라이드26.PNG', 'path': './control/슬라이드26.PNG'},
    {'name': './wav/13_비맥락2.wav', 'path': './wav/13_비맥락2.wav'},
    {'name': './experiment/슬라이드27.PNG', 'path': './experiment/슬라이드27.PNG'},
    {'name': './control/슬라이드27.PNG', 'path': './control/슬라이드27.PNG'},
    {'name': './wav/14_비맥락1.wav', 'path': './wav/14_비맥락1.wav'},
    {'name': './wav/14_맥락1.wav', 'path': './wav/14_맥락1.wav'},
    {'name': './wav/14_맥락2.wav', 'path': './wav/14_맥락2.wav'},
    {'name': './experiment/슬라이드28.PNG', 'path': './experiment/슬라이드28.PNG'},
    {'name': './control/슬라이드28.PNG', 'path': './control/슬라이드28.PNG'},
    {'name': './wav/14_비맥락2.wav', 'path': './wav/14_비맥락2.wav'},
    {'name': './experiment/슬라이드29.PNG', 'path': './experiment/슬라이드29.PNG'},
    {'name': './control/슬라이드29.PNG', 'path': './control/슬라이드29.PNG'},
    {'name': './wav/15_비맥락1.wav', 'path': './wav/15_비맥락1.wav'},
    {'name': './wav/15_맥락1.wav', 'path': './wav/15_맥락1.wav'},
    {'name': './wav/15_맥락2.wav', 'path': './wav/15_맥락2.wav'},
    {'name': './experiment/슬라이드30.PNG', 'path': './experiment/슬라이드30.PNG'},
    {'name': './control/슬라이드30.PNG', 'path': './control/슬라이드30.PNG'},
    {'name': './wav/15_비맥락2.wav', 'path': './wav/15_비맥락2.wav'},
    {'name': './experiment/슬라이드31.PNG', 'path': './experiment/슬라이드31.PNG'},
    {'name': './control/슬라이드31.PNG', 'path': './control/슬라이드31.PNG'},
    {'name': './wav/16_비맥락1.wav', 'path': './wav/16_비맥락1.wav'},
    {'name': './wav/16_맥락1.wav', 'path': './wav/16_맥락1.wav'},
    {'name': './wav/16_맥락2.wav', 'path': './wav/16_맥락2.wav'},
    {'name': './experiment/슬라이드32.PNG', 'path': './experiment/슬라이드32.PNG'},
    {'name': './control/슬라이드32.PNG', 'path': './control/슬라이드32.PNG'},
    {'name': './wav/16_비맥락2.wav', 'path': './wav/16_비맥락2.wav'},
    {'name': './experiment/슬라이드33.PNG', 'path': './experiment/슬라이드33.PNG'},
    {'name': './control/슬라이드33.PNG', 'path': './control/슬라이드33.PNG'},
    {'name': './wav/17_비맥락1.wav', 'path': './wav/17_비맥락1.wav'},
    {'name': './wav/17_맥락1.wav', 'path': './wav/17_맥락1.wav'},
    {'name': './wav/17_맥락2.wav', 'path': './wav/17_맥락2.wav'},
    {'name': './experiment/슬라이드34.PNG', 'path': './experiment/슬라이드34.PNG'},
    {'name': './control/슬라이드34.PNG', 'path': './control/슬라이드34.PNG'},
    {'name': './wav/17_비맥락2.wav', 'path': './wav/17_비맥락2.wav'},
    {'name': '실험자극.xlsx', 'path': '실험자극.xlsx'},
    {'name': './experiment/슬라이드1.PNG', 'path': './experiment/슬라이드1.PNG'},
    {'name': './control/슬라이드1.PNG', 'path': './control/슬라이드1.PNG'},
    {'name': './introimage/슬라이드7.PNG', 'path': './introimage/슬라이드7.PNG'},
    {'name': './wav/1_비맥락1.wav', 'path': './wav/1_비맥락1.wav'},
    {'name': './wav/1_맥락1.wav', 'path': './wav/1_맥락1.wav'},
    {'name': './wav/1_맥락2.wav', 'path': './wav/1_맥락2.wav'},
    {'name': './experiment/슬라이드2.PNG', 'path': './experiment/슬라이드2.PNG'},
    {'name': './control/슬라이드4.PNG', 'path': './control/슬라이드4.PNG'},
    {'name': './introimage/슬라이드8.PNG', 'path': './introimage/슬라이드8.PNG'},
    {'name': './wav/2_비맥락1.wav', 'path': './wav/2_비맥락1.wav'},
    {'name': './wav/2_맥락1.wav', 'path': './wav/2_맥락1.wav'},
    {'name': './wav/2_비맥락2.wav', 'path': './wav/2_비맥락2.wav'},
    {'name': './experiment/슬라이드3.PNG', 'path': './experiment/슬라이드3.PNG'},
    {'name': './control/슬라이드2.PNG', 'path': './control/슬라이드2.PNG'},
    {'name': './wav/1_비맥락2.wav', 'path': './wav/1_비맥락2.wav'},
    {'name': './experiment/슬라이드4.PNG', 'path': './experiment/슬라이드4.PNG'},
    {'name': './control/슬라이드3.PNG', 'path': './control/슬라이드3.PNG'},
    {'name': './wav/2_맥락2.wav', 'path': './wav/2_맥락2.wav'},
    {'name': './experiment/슬라이드5.PNG', 'path': './experiment/슬라이드5.PNG'},
    {'name': './control/슬라이드5.PNG', 'path': './control/슬라이드5.PNG'},
    {'name': './wav/3_비맥락1.wav', 'path': './wav/3_비맥락1.wav'},
    {'name': './wav/3_맥락1.wav', 'path': './wav/3_맥락1.wav'},
    {'name': './wav/3_맥락2.wav', 'path': './wav/3_맥락2.wav'},
    {'name': './experiment/슬라이드6.PNG', 'path': './experiment/슬라이드6.PNG'},
    {'name': './control/슬라이드6.PNG', 'path': './control/슬라이드6.PNG'},
    {'name': './wav/3_비맥락2.wav', 'path': './wav/3_비맥락2.wav'},
    {'name': './experiment/슬라이드7.PNG', 'path': './experiment/슬라이드7.PNG'},
    {'name': './control/슬라이드7.PNG', 'path': './control/슬라이드7.PNG'},
    {'name': './wav/4_비맥락1.wav', 'path': './wav/4_비맥락1.wav'},
    {'name': './wav/4_맥락1.wav', 'path': './wav/4_맥락1.wav'},
    {'name': './wav/4_맥락2.wav', 'path': './wav/4_맥락2.wav'},
    {'name': './experiment/슬라이드8.PNG', 'path': './experiment/슬라이드8.PNG'},
    {'name': './control/슬라이드8.PNG', 'path': './control/슬라이드8.PNG'},
    {'name': './wav/4_비맥락2.wav', 'path': './wav/4_비맥락2.wav'},
    {'name': './experiment/슬라이드9.PNG', 'path': './experiment/슬라이드9.PNG'},
    {'name': './control/슬라이드9.PNG', 'path': './control/슬라이드9.PNG'},
    {'name': './wav/5_비맥락1.wav', 'path': './wav/5_비맥락1.wav'},
    {'name': './wav/5_맥락1.wav', 'path': './wav/5_맥락1.wav'},
    {'name': './wav/5_맥락2.wav', 'path': './wav/5_맥락2.wav'},
    {'name': './experiment/슬라이드10.PNG', 'path': './experiment/슬라이드10.PNG'},
    {'name': './control/슬라이드10.PNG', 'path': './control/슬라이드10.PNG'},
    {'name': './wav/5_비맥락2.wav', 'path': './wav/5_비맥락2.wav'},
    {'name': './experiment/슬라이드11.PNG', 'path': './experiment/슬라이드11.PNG'},
    {'name': './control/슬라이드11.PNG', 'path': './control/슬라이드11.PNG'},
    {'name': './wav/6_비맥락1.wav', 'path': './wav/6_비맥락1.wav'},
    {'name': './wav/6_맥락1.wav', 'path': './wav/6_맥락1.wav'},
    {'name': './wav/6_맥락2.wav', 'path': './wav/6_맥락2.wav'},
    {'name': './experiment/슬라이드12.PNG', 'path': './experiment/슬라이드12.PNG'},
    {'name': './control/슬라이드12.PNG', 'path': './control/슬라이드12.PNG'},
    {'name': './wav/6_비맥락2.wav', 'path': './wav/6_비맥락2.wav'},
    {'name': './experiment/슬라이드13.PNG', 'path': './experiment/슬라이드13.PNG'},
    {'name': './control/슬라이드13.PNG', 'path': './control/슬라이드13.PNG'},
    {'name': './wav/7_비맥락1.wav', 'path': './wav/7_비맥락1.wav'},
    {'name': './wav/7_맥락1.wav', 'path': './wav/7_맥락1.wav'},
    {'name': './wav/7_맥락2.wav', 'path': './wav/7_맥락2.wav'},
    {'name': './experiment/슬라이드14.PNG', 'path': './experiment/슬라이드14.PNG'},
    {'name': './control/슬라이드14.PNG', 'path': './control/슬라이드14.PNG'},
    {'name': './wav/7_비맥락2.wav', 'path': './wav/7_비맥락2.wav'},
    {'name': './experiment/슬라이드15.PNG', 'path': './experiment/슬라이드15.PNG'},
    {'name': './control/슬라이드15.PNG', 'path': './control/슬라이드15.PNG'},
    {'name': './wav/8_비맥락1.wav', 'path': './wav/8_비맥락1.wav'},
    {'name': './wav/8_맥락1.wav', 'path': './wav/8_맥락1.wav'},
    {'name': './wav/8_맥락2.wav', 'path': './wav/8_맥락2.wav'},
    {'name': './experiment/슬라이드16.PNG', 'path': './experiment/슬라이드16.PNG'},
    {'name': './control/슬라이드16.PNG', 'path': './control/슬라이드16.PNG'},
    {'name': './wav/8_비맥락2.wav', 'path': './wav/8_비맥락2.wav'},
    {'name': './experiment/슬라이드17.PNG', 'path': './experiment/슬라이드17.PNG'},
    {'name': './control/슬라이드17.PNG', 'path': './control/슬라이드17.PNG'},
    {'name': './wav/9_비맥락1.wav', 'path': './wav/9_비맥락1.wav'},
    {'name': './wav/9_맥락1.wav', 'path': './wav/9_맥락1.wav'},
    {'name': './wav/9_맥락2.wav', 'path': './wav/9_맥락2.wav'},
    {'name': './experiment/슬라이드18.PNG', 'path': './experiment/슬라이드18.PNG'},
    {'name': './control/슬라이드18.PNG', 'path': './control/슬라이드18.PNG'},
    {'name': './wav/9_비맥락2.wav', 'path': './wav/9_비맥락2.wav'},
    {'name': './experiment/슬라이드19.PNG', 'path': './experiment/슬라이드19.PNG'},
    {'name': './control/슬라이드19.PNG', 'path': './control/슬라이드19.PNG'},
    {'name': './wav/10_비맥락1.wav', 'path': './wav/10_비맥락1.wav'},
    {'name': './wav/10_맥락1.wav', 'path': './wav/10_맥락1.wav'},
    {'name': './wav/10_맥락2.wav', 'path': './wav/10_맥락2.wav'},
    {'name': './experiment/슬라이드20.PNG', 'path': './experiment/슬라이드20.PNG'},
    {'name': './control/슬라이드20.PNG', 'path': './control/슬라이드20.PNG'},
    {'name': './wav/10_비맥락2.wav', 'path': './wav/10_비맥락2.wav'},
    {'name': './experiment/슬라이드21.PNG', 'path': './experiment/슬라이드21.PNG'},
    {'name': './control/슬라이드21.PNG', 'path': './control/슬라이드21.PNG'},
    {'name': './wav/11_비맥락1.wav', 'path': './wav/11_비맥락1.wav'},
    {'name': './wav/11_맥락1.wav', 'path': './wav/11_맥락1.wav'},
    {'name': './wav/11_맥락2.wav', 'path': './wav/11_맥락2.wav'},
    {'name': './experiment/슬라이드22.PNG', 'path': './experiment/슬라이드22.PNG'},
    {'name': './control/슬라이드22.PNG', 'path': './control/슬라이드22.PNG'},
    {'name': './wav/11_비맥락2.wav', 'path': './wav/11_비맥락2.wav'},
    {'name': './experiment/슬라이드23.PNG', 'path': './experiment/슬라이드23.PNG'},
    {'name': './control/슬라이드23.PNG', 'path': './control/슬라이드23.PNG'},
    {'name': './wav/12_비맥락1.wav', 'path': './wav/12_비맥락1.wav'},
    {'name': './wav/12_맥락1.wav', 'path': './wav/12_맥락1.wav'},
    {'name': './wav/12_맥락2.wav', 'path': './wav/12_맥락2.wav'},
    {'name': './experiment/슬라이드24.PNG', 'path': './experiment/슬라이드24.PNG'},
    {'name': './control/슬라이드24.PNG', 'path': './control/슬라이드24.PNG'},
    {'name': './wav/12_비맥락2.wav', 'path': './wav/12_비맥락2.wav'},
    {'name': './experiment/슬라이드25.PNG', 'path': './experiment/슬라이드25.PNG'},
    {'name': './control/슬라이드25.PNG', 'path': './control/슬라이드25.PNG'},
    {'name': './wav/13_비맥락1.wav', 'path': './wav/13_비맥락1.wav'},
    {'name': './wav/13_맥락1.wav', 'path': './wav/13_맥락1.wav'},
    {'name': './wav/13_맥락2.wav', 'path': './wav/13_맥락2.wav'},
    {'name': './experiment/슬라이드26.PNG', 'path': './experiment/슬라이드26.PNG'},
    {'name': './control/슬라이드26.PNG', 'path': './control/슬라이드26.PNG'},
    {'name': './wav/13_비맥락2.wav', 'path': './wav/13_비맥락2.wav'},
    {'name': './experiment/슬라이드27.PNG', 'path': './experiment/슬라이드27.PNG'},
    {'name': './control/슬라이드27.PNG', 'path': './control/슬라이드27.PNG'},
    {'name': './wav/14_비맥락1.wav', 'path': './wav/14_비맥락1.wav'},
    {'name': './wav/14_맥락1.wav', 'path': './wav/14_맥락1.wav'},
    {'name': './wav/14_맥락2.wav', 'path': './wav/14_맥락2.wav'},
    {'name': './experiment/슬라이드28.PNG', 'path': './experiment/슬라이드28.PNG'},
    {'name': './control/슬라이드28.PNG', 'path': './control/슬라이드28.PNG'},
    {'name': './wav/14_비맥락2.wav', 'path': './wav/14_비맥락2.wav'},
    {'name': './experiment/슬라이드29.PNG', 'path': './experiment/슬라이드29.PNG'},
    {'name': './control/슬라이드29.PNG', 'path': './control/슬라이드29.PNG'},
    {'name': './wav/15_비맥락1.wav', 'path': './wav/15_비맥락1.wav'},
    {'name': './wav/15_맥락1.wav', 'path': './wav/15_맥락1.wav'},
    {'name': './wav/15_맥락2.wav', 'path': './wav/15_맥락2.wav'},
    {'name': './experiment/슬라이드30.PNG', 'path': './experiment/슬라이드30.PNG'},
    {'name': './control/슬라이드30.PNG', 'path': './control/슬라이드30.PNG'},
    {'name': './wav/15_비맥락2.wav', 'path': './wav/15_비맥락2.wav'},
    {'name': './experiment/슬라이드31.PNG', 'path': './experiment/슬라이드31.PNG'},
    {'name': './control/슬라이드31.PNG', 'path': './control/슬라이드31.PNG'},
    {'name': './wav/16_비맥락1.wav', 'path': './wav/16_비맥락1.wav'},
    {'name': './wav/16_맥락1.wav', 'path': './wav/16_맥락1.wav'},
    {'name': './wav/16_맥락2.wav', 'path': './wav/16_맥락2.wav'},
    {'name': './experiment/슬라이드32.PNG', 'path': './experiment/슬라이드32.PNG'},
    {'name': './control/슬라이드32.PNG', 'path': './control/슬라이드32.PNG'},
    {'name': './wav/16_비맥락2.wav', 'path': './wav/16_비맥락2.wav'},
    {'name': './experiment/슬라이드33.PNG', 'path': './experiment/슬라이드33.PNG'},
    {'name': './control/슬라이드33.PNG', 'path': './control/슬라이드33.PNG'},
    {'name': './wav/17_비맥락1.wav', 'path': './wav/17_비맥락1.wav'},
    {'name': './wav/17_맥락1.wav', 'path': './wav/17_맥락1.wav'},
    {'name': './wav/17_맥락2.wav', 'path': './wav/17_맥락2.wav'},
    {'name': './experiment/슬라이드34.PNG', 'path': './experiment/슬라이드34.PNG'},
    {'name': './control/슬라이드34.PNG', 'path': './control/슬라이드34.PNG'},
    {'name': './wav/17_비맥락2.wav', 'path': './wav/17_비맥락2.wav'},
    {'name': 'introimage/슬라이드1.PNG', 'path': 'introimage/슬라이드1.PNG'},
    {'name': 'introimage/슬라이드2.PNG', 'path': 'introimage/슬라이드2.PNG'},
    {'name': 'introimage/슬라이드3.PNG', 'path': 'introimage/슬라이드3.PNG'},
    {'name': 'introimage/슬라이드4.PNG', 'path': 'introimage/슬라이드4.PNG'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'introimage/슬라이드9.PNG', 'path': 'introimage/슬라이드9.PNG'},
    {'name': 'introimage/슬라이드5.PNG', 'path': 'introimage/슬라이드5.PNG'},
    {'name': 'introimage/슬라이드6.PNG', 'path': 'introimage/슬라이드6.PNG'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var trialClock;
var key_resp;
var image;
var trial3Clock;
var key_resp_3;
var image_2;
var trial4Clock;
var key_resp_4;
var image_3;
var trial5Clock;
var key_resp_5;
var image_4;
var routine_1Clock;
var key_resp_11;
var image_9;
var prac_soundClock;
var sound_1;
var image_7;
var sound_4;
var practiceClock;
var key_resp_6;
var image_10;
var real_prepClock;
var key_resp_9;
var image_5;
var real_choiceClock;
var key_resp_10;
var image_11;
var real_soundClock;
var sound_2;
var image_8;
var sound_3;
var realClock;
var key_resp_7;
var image_12;
var endClock;
var key_resp_8;
var image_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'introimage/슬라이드1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial3"
  trial3Clock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'introimage/슬라이드2.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial4"
  trial4Clock = new util.Clock();
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'introimage/슬라이드3.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial5"
  trial5Clock = new util.Clock();
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'introimage/슬라이드4.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "routine_1"
  routine_1Clock = new util.Clock();
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "prac_sound"
  prac_soundClock = new util.Clock();
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_1.setVolume(1.0);
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'introimage/슬라이드9.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_4.setVolume(1.0);
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "real_prep"
  real_prepClock = new util.Clock();
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'introimage/슬라이드5.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "real_choice"
  real_choiceClock = new util.Clock();
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "real_sound"
  real_soundClock = new util.Clock();
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_2.setVolume(1.0);
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'introimage/슬라이드9.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_3.setVolume(1.0);
  // Initialize components for Routine "real"
  realClock = new util.Clock();
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'introimage/슬라이드6.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var trialMaxDurationReached;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp);
    trialComponents.push(image);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial3MaxDurationReached;
var _key_resp_3_allKeys;
var trial3MaxDuration;
var trial3Components;
function trial3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial3MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('trial3.started', globalClock.getTime());
    trial3MaxDuration = null
    // keep track of which components have finished
    trial3Components = [];
    trial3Components.push(key_resp_3);
    trial3Components.push(image_2);
    
    for (const thisComponent of trial3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial3' ---
    // get current time
    t = trial3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial3' ---
    for (const thisComponent of trial3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "trial3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial4MaxDurationReached;
var _key_resp_4_allKeys;
var trial4MaxDuration;
var trial4Components;
function trial4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial4MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('trial4.started', globalClock.getTime());
    trial4MaxDuration = null
    // keep track of which components have finished
    trial4Components = [];
    trial4Components.push(key_resp_4);
    trial4Components.push(image_3);
    
    for (const thisComponent of trial4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial4' ---
    // get current time
    t = trial4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial4' ---
    for (const thisComponent of trial4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "trial4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial5MaxDurationReached;
var _key_resp_5_allKeys;
var trial5MaxDuration;
var trial5Components;
function trial5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial5MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('trial5.started', globalClock.getTime());
    trial5MaxDuration = null
    // keep track of which components have finished
    trial5Components = [];
    trial5Components.push(key_resp_5);
    trial5Components.push(image_4);
    
    for (const thisComponent of trial5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial5' ---
    // get current time
    t = trial5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial5' ---
    for (const thisComponent of trial5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "trial5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '실험자극.xlsx', '0:2'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(routine_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(routine_1RoutineEachFrame());
      trialsLoopScheduler.add(routine_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(prac_soundRoutineBegin(snapshot));
      trialsLoopScheduler.add(prac_soundRoutineEachFrame());
      trialsLoopScheduler.add(prac_soundRoutineEnd(snapshot));
      trialsLoopScheduler.add(practiceRoutineBegin(snapshot));
      trialsLoopScheduler.add(practiceRoutineEachFrame());
      trialsLoopScheduler.add(practiceRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '실험자극.xlsx', '2: 35'),
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(real_choiceRoutineBegin(snapshot));
      trials_2LoopScheduler.add(real_choiceRoutineEachFrame());
      trials_2LoopScheduler.add(real_choiceRoutineEnd(snapshot));
      trials_2LoopScheduler.add(real_soundRoutineBegin(snapshot));
      trials_2LoopScheduler.add(real_soundRoutineEachFrame());
      trials_2LoopScheduler.add(real_soundRoutineEnd(snapshot));
      trials_2LoopScheduler.add(realRoutineBegin(snapshot));
      trials_2LoopScheduler.add(realRoutineEachFrame());
      trials_2LoopScheduler.add(realRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var routine_1MaxDurationReached;
var _key_resp_11_allKeys;
var routine_1MaxDuration;
var routine_1Components;
function routine_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    image_9.setImage(sound_direction);
    psychoJS.experiment.addData('routine_1.started', globalClock.getTime());
    routine_1MaxDuration = null
    // keep track of which components have finished
    routine_1Components = [];
    routine_1Components.push(key_resp_11);
    routine_1Components.push(image_9);
    
    for (const thisComponent of routine_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_1' ---
    // get current time
    t = routine_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_1' ---
    for (const thisComponent of routine_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "routine_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_soundMaxDurationReached;
var prac_soundMaxDuration;
var prac_soundComponents;
function prac_soundRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_sound' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    prac_soundMaxDurationReached = false;
    // update component parameters for each repeat
    sound_1.setValue(control_sound_left);
    sound_1.secs=2;
    sound_1.setVolume(1.0);
    sound_4.setValue(control_sound_right);
    sound_4.secs=2;
    sound_4.setVolume(1.0);
    psychoJS.experiment.addData('prac_sound.started', globalClock.getTime());
    prac_soundMaxDuration = null
    // keep track of which components have finished
    prac_soundComponents = [];
    prac_soundComponents.push(sound_1);
    prac_soundComponents.push(image_7);
    prac_soundComponents.push(sound_4);
    
    for (const thisComponent of prac_soundComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function prac_soundRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_sound' ---
    // get current time
    t = prac_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_1
    if (t >= 0.05 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.05 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_1.tStart + 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
        sound_1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // start/stop sound_4
    if (t >= 0.0 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_4.tStart + 0.5) {
        sound_4.stop();  // stop the sound (if longer than duration)
        sound_4.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_soundComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_soundRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_sound' ---
    for (const thisComponent of prac_soundComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_sound.stopped', globalClock.getTime());
    sound_1.stop();  // ensure sound has stopped at end of Routine
    sound_4.stop();  // ensure sound has stopped at end of Routine
    if (prac_soundMaxDurationReached) {
        prac_soundClock.add(prac_soundMaxDuration);
    } else {
        prac_soundClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practiceMaxDurationReached;
var _key_resp_6_allKeys;
var practiceMaxDuration;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practiceMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    image_10.setImage(control);
    psychoJS.experiment.addData('practice.started', globalClock.getTime());
    practiceMaxDuration = null
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(key_resp_6);
    practiceComponents.push(image_10);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var real_prepMaxDurationReached;
var _key_resp_9_allKeys;
var real_prepMaxDuration;
var real_prepComponents;
function real_prepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_prep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    real_prepMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('real_prep.started', globalClock.getTime());
    real_prepMaxDuration = null
    // keep track of which components have finished
    real_prepComponents = [];
    real_prepComponents.push(key_resp_9);
    real_prepComponents.push(image_5);
    
    for (const thisComponent of real_prepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function real_prepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_prep' ---
    // get current time
    t = real_prepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of real_prepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_prepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_prep' ---
    for (const thisComponent of real_prepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('real_prep.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "real_prep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var real_choiceMaxDurationReached;
var _key_resp_10_allKeys;
var real_choiceMaxDuration;
var real_choiceComponents;
function real_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    real_choiceMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    image_11.setImage(sound_direction);
    psychoJS.experiment.addData('real_choice.started', globalClock.getTime());
    real_choiceMaxDuration = null
    // keep track of which components have finished
    real_choiceComponents = [];
    real_choiceComponents.push(key_resp_10);
    real_choiceComponents.push(image_11);
    
    for (const thisComponent of real_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function real_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_choice' ---
    // get current time
    t = real_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of real_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_choice' ---
    for (const thisComponent of real_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('real_choice.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "real_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var real_soundMaxDurationReached;
var real_soundMaxDuration;
var real_soundComponents;
function real_soundRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_sound' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    real_soundMaxDurationReached = false;
    // update component parameters for each repeat
    sound_2.setValue(control_sound_left);
    sound_2.secs=2;
    sound_2.setVolume(1.0);
    sound_3.setValue(control_sound_right);
    sound_3.secs=2;
    sound_3.setVolume(1.0);
    psychoJS.experiment.addData('real_sound.started', globalClock.getTime());
    real_soundMaxDuration = null
    // keep track of which components have finished
    real_soundComponents = [];
    real_soundComponents.push(sound_2);
    real_soundComponents.push(image_8);
    real_soundComponents.push(sound_3);
    
    for (const thisComponent of real_soundComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function real_soundRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_sound' ---
    // get current time
    t = real_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_2
    if (t >= 0.05 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.05 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_2.tStart + 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // start/stop sound_3
    if (t >= 0.0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_3.tStart + 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of real_soundComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_soundRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_sound' ---
    for (const thisComponent of real_soundComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('real_sound.stopped', globalClock.getTime());
    sound_2.stop();  // ensure sound has stopped at end of Routine
    sound_3.stop();  // ensure sound has stopped at end of Routine
    if (real_soundMaxDurationReached) {
        real_soundClock.add(real_soundMaxDuration);
    } else {
        real_soundClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var realMaxDurationReached;
var _key_resp_7_allKeys;
var realMaxDuration;
var realComponents;
function realRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    realMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    image_12.setImage(control);
    psychoJS.experiment.addData('real.started', globalClock.getTime());
    realMaxDuration = null
    // keep track of which components have finished
    realComponents = [];
    realComponents.push(key_resp_7);
    realComponents.push(image_12);
    
    for (const thisComponent of realComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real' ---
    // get current time
    t = realClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real' ---
    for (const thisComponent of realComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('real.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "real" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _key_resp_8_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(key_resp_8);
    endComponents.push(image_6);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
