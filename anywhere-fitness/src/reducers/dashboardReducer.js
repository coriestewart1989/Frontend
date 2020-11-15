// user dashboard reducer;
// initial state for user dashboard:
//// user: {},
//// classesAttending: [array of classes the user has reserved a spot in],
//// isFetching: false,
//// error: ''
// reducer fn
// switch with cases:
//// FETCH_USER_START:
///// returns spread state with isFetching to true
//// FETCH_USER_SUCCESS:
////// return spread state with user set to action.payload and isFetching
////// to false
//// FETCH_USER_FAILURE:
////// return spread state with error set to action.payload and isFetching
////// to false
//// FETCH_CLASSES_START:
////// return spread state with isFetching set to true
//// FETCH_CLASSES_SUCCESS:
////// return spread state with classes set to action.payload and isFetching
////// to false
//// FETCH_CLASSES_FAILURE:
////// return spread state with error set to action.payload and isFetching
////// to false
//// ADD_CLASSES:
////// return spread state with classes set to action.payload
//// EDIT_CLASSES:
///// return spread state with classes set to map of state.classesAttending
////// that compares class.id to action.payload.id and if true returns action.payload
//////// if false return class
//// DELETE_CLASSES:
////// returns spread state with classes set to filter of state.classesAttending
//////// that compares class.id to action.payload
