import { combineReducers } from 'redux';

import studioReducer from '../StudioReducer/index';

export default combineReducers({
	studio: studioReducer,
});
