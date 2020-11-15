// customer reducer
// initial state object with properties
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
//// isAttending

// reducer function
// switch with cases:
//// FETCH_CLASSES
////// returns spread state with classes set to action.payload
//// FILTER_CLASSES
////// return spread state with classes set to filter of state.classes
////// comparing class[action.payload.property] to action.payload.search
//// SET_ATTENDING
////// return spread state with classes set to map of state.classes comparing
//////// class.id to action.payload.id; if true returning action.payload; if
//////// false returning action.payload
//// default case
////// return state
