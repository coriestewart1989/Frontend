// user dashboard reducer;
// initial state for user dashboard:
//// user: {}, classesAttending: [array of classes the user has reserved a spot in]
// reducer fn
// switch with cases:
//// FETCH_USER:
////// return spread state with user set to action.payload
//// FETCH_CLASSES:
////// return spread state with classes set to action.payload
//// ADD_CLASSES:
////// return spread state with classes set to action.payload
//// EDIT_CLASSES:
///// return spread state with classes set to map of state.classesAttending
////// that compares class.id to action.payload.id and if true returns action.payload
//////// if false return class
//// DELETE_CLASSES:
////// returns spread state with classes set to filter of state.classesAttending
//////// that compares class.id to action.payload
