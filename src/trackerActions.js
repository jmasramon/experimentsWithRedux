/* jshint esversion:6 */

export const PATCH_DOM = 'PATCH_DOM';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const MOVE_SCROLL_BAR = 'MOVE_SCROLL_BAR';
export const CLICK = 'CLICK';
export const CHANGE_RESOLUTION = 'CHANGE_RESOLUTION';

export function patchDom(html) {
	return {type: PATCH_DOM, html};
}

export function moveMouse(newPosition) {
	return {type: MOVE_MOUSE, newPosition};
}

export function moveScrollBar(newPosition) {
	return {type: MOVE_SCROLL_BAR, newPosition};
}

export function click(position) {
	return {type: CLICK, position};
}

export function changeResolution(newResolution) {
	return {type: CHANGE_RESOLUTION, newResolution};
}

