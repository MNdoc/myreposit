import {ENABLE_BUTTON, DISABLE_BUTTON, CHANGE_THEME, ASYNC_INCREMENT, DECREMENT, INCREMENT} from './types'

export function increment() {
	return {
		type: INCREMENT
	}
}

export function decrement() {
	return {
		type: DECREMENT
	}
}

export function disableButton() {
	return {
		type: DISABLE_BUTTON
	}
}

export function enableButton() {
	return {
		type: ENABLE_BUTTON
	}
}


export function changeTheme(newTheme) {
	return {
		type: CHANGE_THEME,
		payload: newTheme
	}
}

export function asyncIncrement() {
	return function(dispatch) {
		dispatch(disableButton())
		setTimeout(() => {
			dispatch({type: ASYNC_INCREMENT})
			dispatch(enableButton())
		}, 1500)
	}
}