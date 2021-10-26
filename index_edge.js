/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Vikna_dveri_Etalon',
                type: 'image',
                rect: ['-16px', '-3px','156px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Vikna_dveri_Etalon.png",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'r1',
                type: 'image',
                rect: ['-152px', '341px','111px','241px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r1.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'door',
                type: 'image',
                rect: ['-8px', '130px','135px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"door.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'in',
                type: 'image',
                rect: ['-113px', '282px','106px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"in.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'room',
                type: 'image',
                rect: ['-122px', '261px','134px','67px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"room.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'addr',
                type: 'image',
                rect: ['130px', '261px','71px','333px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"addr.png",'0px','0px']
            },
            {
                id: 'phone',
                type: 'image',
                rect: ['155px', '274px','50px','307px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phone.png",'0px','0px']
            },
            {
                id: 'r2',
                type: 'image',
                rect: ['6px', '335px','111px','245px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r2.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'in2',
                type: 'image',
                rect: ['-272px', '342px','111px','238px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"in.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['6', '620px','106','20','auto', 'auto'],
                c: [
                {
                    id: 'insta',
                    type: 'image',
                    rect: ['7px', '-1px','116px','25px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"insta.png",'0px','0px'],
                    transform: [[],[],[],['0.7','0.7']]
                },
                {
                    id: 'i',
                    type: 'image',
                    rect: ['0px', '0px','20px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"i.png",'0px','0px']
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_phone}": [
                ["style", "top", '274px'],
                ["style", "height", '307px'],
                ["style", "opacity", '0'],
                ["style", "left", '142px'],
                ["style", "width", '50px']
            ],
            "${_insta}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '7px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_in}": [
                ["style", "top", '282px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-113px']
            ],
            "${_addr}": [
                ["style", "top", '261px'],
                ["style", "opacity", '0'],
                ["style", "left", '130px']
            ],
            "${_door}": [
                ["style", "top", '130px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px']
            ],
            "${_r2}": [
                ["style", "top", '335px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-86px']
            ],
            "${_Group}": [
                ["style", "top", '620px'],
                ["style", "opacity", '0']
            ],
            "${_i}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_room}": [
                ["style", "top", '261px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-122px']
            ],
            "${_r1}": [
                ["style", "top", '341px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '154px'],
                ["style", "height", '241px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,204,0,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_in2}": [
                ["style", "top", '342px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-122px'],
                ["style", "height", '238px']
            ],
            "${_Vikna_dveri_Etalon}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '-16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 26000,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "style", "${_phone}", "left", '35px', { fromValue: '142px'}], position: 19736, duration: 1550, easing: "easeInOutQuad" },
                { id: "eid64", tween: [ "style", "${_phone}", "left", '-75px', { fromValue: '35px'}], position: 25500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid5", tween: [ "style", "${_room}", "left", '-7px', { fromValue: '-122px'}], position: 818, duration: 501, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_room}", "left", '113px', { fromValue: '-7px'}], position: 9338, duration: 658, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "style", "${_r1}", "opacity", '1', { fromValue: '0'}], position: 5254, duration: 603, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_r1}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 411, easing: "easeInOutQuad" },
                { id: "eid2", tween: [ "style", "${_Vikna_dveri_Etalon}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 575, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_in}", "left", '7px', { fromValue: '-113px'}], position: 9428, duration: 793, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_in}", "left", '-133px', { fromValue: '7px'}], position: 14135, duration: 815, easing: "easeInOutQuad" },
                { id: "eid47", tween: [ "transform", "${_in2}", "scaleY", '0.9', { fromValue: '0'}], position: 9963, duration: 736, easing: "easeInOutQuad" },
                { id: "eid3", tween: [ "style", "${_door}", "opacity", '1', { fromValue: '0'}], position: 442, duration: 376, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "transform", "${_r1}", "scaleX", '0.9', { fromValue: '0'}], position: 5179, duration: 662, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 442, duration: 376, easing: "easeInOutQuad" },
                { id: "eid60", tween: [ "style", "${_addr}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 750, easing: "easeInOutQuad" },
                { id: "eid62", tween: [ "style", "${_addr}", "opacity", '0', { fromValue: '1'}], position: 20250, duration: 500, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "style", "${_in2}", "left", '4px', { fromValue: '-122px'}], position: 9819, duration: 668, easing: "easeInOutQuad" },
                { id: "eid53", tween: [ "style", "${_in2}", "left", '-146px', { fromValue: '4px'}], position: 13750, duration: 815, easing: "easeInOutQuad" },
                { id: "eid45", tween: [ "style", "${_in2}", "opacity", '1', { fromValue: '0'}], position: 9819, duration: 670, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_in2}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 385, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "style", "${_r1}", "left", '3px', { fromValue: '154px'}], position: 5065, duration: 776, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_r1}", "left", '126px', { fromValue: '3px'}], position: 9250, duration: 870, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "style", "${_phone}", "opacity", '1', { fromValue: '0'}], position: 20286, duration: 750, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "style", "${_phone}", "opacity", '0', { fromValue: '1'}], position: 25500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "transform", "${_r1}", "scaleY", '0.9', { fromValue: '0'}], position: 5179, duration: 662, easing: "easeInOutQuad" },
                { id: "eid41", tween: [ "style", "${_r2}", "left", '4px', { fromValue: '-86px'}], position: 1190, duration: 490, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "style", "${_r2}", "left", '154px', { fromValue: '4px'}], position: 5000, duration: 815, easing: "easeInOutQuad" },
                { id: "eid40", tween: [ "style", "${_in}", "opacity", '1', { fromValue: '0'}], position: 9698, duration: 529, easing: "easeInOutQuad" },
                { id: "eid12", tween: [ "style", "${_r2}", "opacity", '1', { fromValue: '0'}], position: 1190, duration: 491, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_r2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 385, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "transform", "${_in2}", "scaleX", '0.9', { fromValue: '0'}], position: 9963, duration: 736, easing: "easeInOutQuad" },
                { id: "eid58", tween: [ "style", "${_addr}", "left", '23px', { fromValue: '130px'}], position: 14950, duration: 1550, easing: "easeInOutQuad" },
                { id: "eid61", tween: [ "style", "${_addr}", "left", '-77px', { fromValue: '23px'}], position: 20250, duration: 500, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "transform", "${_r2}", "scaleX", '0.9', { fromValue: '0'}], position: 1296, duration: 539, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "transform", "${_r2}", "scaleY", '0.9', { fromValue: '0'}], position: 1296, duration: 539, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_room}", "opacity", '1', { fromValue: '0'}], position: 943, duration: 376, easing: "easeInOutQuad" },
                { id: "eid39", tween: [ "style", "${_room}", "opacity", '0', { fromValue: '1'}], position: 9338, duration: 321, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15728487");
