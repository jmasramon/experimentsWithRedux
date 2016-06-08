/* jshint esversion:6 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import trackerApp from './trackerReducers';
import Rx from 'rxjs';
// import App from './App';

// let trakerStore = createStore(trackerApp);
export const trakerStore = createStore(trackerApp, {},
    window.devToolsExtension && window.devToolsExtension()
);



// To test without react (server side):
// console.log('window.devToolsExtension', window.devToolsExtension);

import { patchDom, moveMouse, moveScrollBar, click, changeResolution } from './trackerActions';

console.log('initial state:', trakerStore.getState());


let unsubscribe = trakerStore.subscribe( () => console.log('current state:', trakerStore.getState()));

trakerStore.dispatch(patchDom('<div>'));
trakerStore.dispatch(moveMouse({ 'time': 1234, 'x': 3, 'y': 2 }));
trakerStore.dispatch(moveScrollBar({'time': 3747, 'data':{'x': 0, 'y': 600} }));
trakerStore.dispatch(click({ 'x': 4, 'y': 5 }));
trakerStore.dispatch(changeResolution({ 'heigth': 125, 'width':78 }));

var mouseMoves = {
  "type": 8,
  "time": 1465312812356,
  "data": [
    {
      "x": 1219,
      "y": 396,
      "time": 1465312810630.0
    },
    {
      "x": 1443,
      "y": 254,
      "time": 1465312810682.0
    },
    {
      "x": 1520,
      "y": 195,
      "time": 1465312810732.0
    },
    {
      "x": 1528,
      "y": 170,
      "time": 1465312810783.0
    },
    {
      "x": 1528,
      "y": 144,
      "time": 1465312810836.0
    },
    {
      "x": 1515,
      "y": 116,
      "time": 1465312810887.0
    },
    {
      "x": 1487,
      "y": 81,
      "time": 1465312810939.0
    },
    {
      "x": 1435,
      "y": 53,
      "time": 1465312810990.0
    },
    {
      "x": 1373,
      "y": 43,
      "time": 1465312811041.0
    },
    {
      "x": 1332,
      "y": 42,
      "time": 1465312811092.0
    },
    {
      "x": 1315,
      "y": 45,
      "time": 1465312811144.0
    },
    {
      "x": 1310,
      "y": 52,
      "time": 1465312811179.0
    },
    {
      "x": 1328,
      "y": 84,
      "time": 1465312811231.0
    },
    {
      "x": 1398,
      "y": 115,
      "time": 1465312811281.0
    },
    {
      "x": 1441,
      "y": 116,
      "time": 1465312811332.0
    },
    {
      "x": 1449,
      "y": 89,
      "time": 1465312811383.0
    },
    {
      "x": 1436,
      "y": 63,
      "time": 1465312811434.0
    },
    {
      "x": 1410,
      "y": 56,
      "time": 1465312811484.0
    },
    {
      "x": 1293,
      "y": 106,
      "time": 1465312811537.0
    },
    {
      "x": 1196,
      "y": 170,
      "time": 1465312811588.0
    },
    {
      "x": 1162,
      "y": 240,
      "time": 1465312811638.0
    },
    {
      "x": 1160,
      "y": 306,
      "time": 1465312811673.0
    },
    {
      "x": 1160,
      "y": 632,
      "time": 1465312812244.0
    }
  ]
};

var mouseMoves$ = Rx.Observable
	.interval(100)
	.take(mouseMoves.data.length)
	.map(i => mouseMoves.data[i]);

var scrollMoves = [{
          "time": 1465312812144,
          "data": {
            "x": 0.0,
            "y": 326.0
          }
        },
        {
          "time": 1465312812095,
          "data": {
            "x": 0.0,
            "y": 236.0
          }
        },
        {
          "time": 1465312812043,
          "data": {
            "x": 0.0,
            "y": 165.0
          }
        },
        {
          "time": 1465312811992,
          "data": {
            "x": 0.0,
            "y": 72.0
          }
        },
        {
          "time": 1465312811942,
          "data": {
            "x": 0.0,
            "y": 4.0
          }
        }];

var scrollMoves$ = Rx.Observable
	.interval(400)
	.take(scrollMoves.length)
	.map(i => scrollMoves[i]);

var mouseClicks = [
        {
          "type": 1,
          "time": 1465312819376,
          "data": {
            "x": 288.0,
            "y": 361.0
          }
        },
        {
          "type": 1,
          "time": 1465312811234,
          "data": {
            "x": 38.0,
            "y": 371.0
          }
        },
        {
          "type": 1,
          "time": 1465312819399,
          "data": {
            "x": 21.0,
            "y": 12.0
          }
        }];

var mouseClicks$ = Rx.Observable
	.interval(700)
	.take(mouseClicks.length)
	.map(i => mouseClicks[i]);

Rx.Observable
	.merge(mouseMoves$, scrollMoves$, mouseClicks$)
	.subscribe(function(event) {
		if (event.type) {
			trakerStore.dispatch(click(event));			
		} else if (event.data) {
			trakerStore.dispatch(moveScrollBar(event));
		} else {
			trakerStore.dispatch(moveMouse(event));
		}
	});


unsubscribe();