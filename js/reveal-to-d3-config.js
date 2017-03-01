/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'sketch-lines': {
    init: () => {
      pt.sketchLines.init();
    },
    '-1': () => {
      pt.sketchLines.drawLines(hamiltonAllLines);
    },
    0: () => {
      pt.sketchLines.drawLines(hamiltonGroupedLines);
    },
    1: () => {
      pt.sketchLines.lowerOpacity();
    },
    2: () => {
      pt.sketchLines.drawLines(hamiltonLines, true);
    }
  }
  // 'olympic-intro': {
  //   'init': function() {
  //     pt.olympicIntro.init(olympicData);
  //   },
  //   '-1': function() {
  //     pt.olympicIntro.smallStart();
  //   },
  //   0: function() {
  //     pt.olympicIntro.bigEnd();
  //   },
  // },
};

function removeSVGs() {

  //Remove (heavy) all existing svg currently running

}//removeSVGs
