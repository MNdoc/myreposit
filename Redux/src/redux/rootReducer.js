import {ENABLE_BUTTON, DISABLE_BUTTON, CHANGE_THEME, ASYNC_INCREMENT, DECREMENT, INCREMENT} from './types'
import {combineReducers} from 'redux'
function counterReducer(state = 0, action) {
	if (action.type == INCREMENT) {
		return state + 1
	}
	else if(action.type == DECREMENT) {
		return state - 1
	}
	else if(action.type == ASYNC_INCREMENT) {
		return state + 3
	}
	return state;
}

const initialThemeState = {
	value: 'light',
	disabled: false
}
function themeReducer(state = initialThemeState, action) {
	switch(action.type) {
		case CHANGE_THEME:
			return {...state, value: action.payload}
		case ENABLE_BUTTON:
			return {...state, disabled: false}
		case DISABLE_BUTTON:
			return {...state, disabled: true}
		default: return state;
	}
}
export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer
})

