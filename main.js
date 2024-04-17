var jsPsych = initJsPsych({
    on_finish: function(){
      jsPsych.data.displayData();
    }
});

//////////////////////// Reusable elements ///////////////////////////////////////

const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:60px;">+</div>`,
    choices: "NO_KEYS",
    trial_duration: 3000,
}

const iti_fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:60px;">+</div>`,
    choices: "NO_KEYS",
    trial_duration: 1000,
}

const enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

const exit_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
}

//////////////////////// Begin experiment timeline ///////////////////////////////


var timeline = [];


const initial_instructions = {
    type: jsPsychInstructions,
    pages: [
        'Welcome to the experiment!',
        'You will get to draw strange shapes!',
        'Exciting right? Let\'s begin!' 
    ],
    show_clickable_nav: true
}
timeline.push(initial_instructions);

///////////////// Demo //////////////////////////////

const demo_instructions = {
    type: jsPsychInstructions,
    pages:[
        'First you will do two practice rounds to familiarize yourself with the task.'
    ],
    show_clickable_nav: true
}
timeline.push(demo_instructions);


var demo_vars = [
    {stimulus: "img/demo-1.png"},
    {stimulus: "img/demo-2.png"}
];

const demo_stimulus = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: "NO_KEYS",
    trial_duration: 500,
    stimulus_width: 250,
    stimulus_height: 250
}

const demo_recall = {
    type: jsPsychSketchpad,
    prompt: '<p style="width:380px">Draw the shape that you saw.</p>',
    prompt_location: 'abovecanvas',
    stroke_color_palette: ['black', 'white'],
    stroke_color: 'black',
    canvas_width: 500,
    canvas_height: 300
}

var demo = {
    timeline: [demo_stimulus, fixation, demo_recall],
    timeline_variables: demo_vars,
    randomize_order: true
}

timeline.push(enter_fullscreen);
timeline.push(demo);
timeline.push(exit_fullscreen);

///////////////// Main experiment ///////////////////

const main_instructions = {
    type: jsPsychInstructions,
    pages:[
        'Now it\'s time for the actual experiment.'
    ],
    show_clickable_nav: true
}
timeline.push(main_instructions);

var main_vars = [
    { stimulus: "img/main-1.png"},
    { stimulus: "img/main-2.png"},
    { stimulus: "img/main-3.png"},
    { stimulus: "img/main-4.png"}
];

const main_stimulus = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: "NO_KEYS",
    trial_duration: 500,
    stimulus_width: 250,
    stimulus_height: 250
}

const main_recall = {
    type: jsPsychSketchpad,
    prompt: '<p style="width:380px">Draw the shape that you saw.</p>',
    prompt_location: 'abovecanvas',
    stroke_color_palette: ['black', 'white'],
    stroke_color: 'black',
    canvas_width: 500,
    canvas_height: 300,
    trial_duration: 10000,
    show_countdown_trial_duration: true,
}

var main_experiment = {
    timeline: [main_stimulus, fixation, main_recall],
    timeline_variables: main_vars,
    randomize_order: true
}

timeline.push(enter_fullscreen);
timeline.push(main_experiment);
timeline.push(exit_fullscreen);

jsPsych.run(timeline);