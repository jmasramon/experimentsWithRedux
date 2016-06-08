/* jshint esversion:6 */

import {combineReducers} from 'redux';
import {PATCH_DOM, MOVE_MOUSE, MOVE_SCROLL_BAR, CLICK, CHANGE_RESOLUTION} from './trackerActions';

function DOM(state = {}, action) {
	switch (action.type) {
		case PATCH_DOM:
			// return domPatcher.patch(state, action);
			return action.html;
		default:
			return state;
	}
}

function mousePos(state = { 'time': 0, 'x': 0, 'y': 0 }, action) {
	switch (action.type) {
		case MOVE_MOUSE:
			return action.newPosition;
		default:
			return state;
	}
}

function scrollBarPos(state = { 'time': 0, 'data': {'x': 0, 'y': 0 } }, action) {
	switch (action.type) {
		case MOVE_SCROLL_BAR:
			return action.newPosition;
		default:
			return state;
	}
}

function click(state = { done: false, pos: { 'x': 0, 'y': 0 } }, action) {
	switch (action.type) {
		case CLICK:
			return {
				done: true,
				pos: action.position
			};
		default:
			return state;
	}
}

function resolution(state = { 'heigth': 0, 'width':0 }, action) {
	switch (action.type) {
		case CHANGE_RESOLUTION:
			return action.newResolution;
		default:
			return state;
	}
}

const trackerApp = combineReducers({DOM, mousePos, scrollBarPos, click, resolution});
export default trackerApp;