import { combineReducers } from 'redux';

const userSelected = (state = null , action) => {
	console.log(action.payload);
    switch (action.type) {
        case "USER_SELECTED" :
        	console.log(action.payload);
            return action.payload;
            break;
        default:
            return state;
    }
}
 
export default combineReducers({ 
	userSelected
});