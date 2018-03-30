export const selectUser = (user)=>{
	console.log('selected'+ user);
	return {
		type: "USER_SELECTED",
		payload: user
	}
}


export const tryMM = function(text){
	return {
		type: "TEXT_ADDED",
		payload: text
	}
}