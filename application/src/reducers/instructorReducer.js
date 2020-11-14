// instructor reducer; for each intructors classes
// initial state object with properties:
//// classes
// that is an array of objects with properties:
//// name
//// type
//// start time
//// duration
//// intensity level
//// location
//// current number of attendees
//// max class size

// reducer function
// switch with cases:
//// FETCH_CLASSES
////// returns spread state with classes set to action.payload
//// ADD_CLASSES
////// returns spread state with classes set to action.payload
//// REMOVE_CLASSES
////// returns spread state with classes set to a filter of state.classes
//////// comparing class.id to action.payload
//// EDIT_CLASSES
////// returns spread state with classes set to a map of state.classes comparing
//////// class.id to action.payload.id and if true returns action.payload, if
//////// false returns class
//// Default case
////// return state
