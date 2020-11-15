import customerClassesReducer from "../reducers/customerClassesReducer";
import * as actions from "../actions";
import classesData from "../__mocks__/classesData";

describe("Unit Testing for Reducers", () => {
  it("should return initial state", () => {
    expect(customerClassesReducer(undefined, {})).toEqual({});
  });

  it("should handle GET_CLASSES_START", () => {
    const startAction = {
      type: actions.GET_CLASSES_START,
    };
    expect(customerClassesReducer({}, startAction)).toEqual({});
  });

  it("should handle GET_CLASSES_SUCCESS", () => {
    const successAction = {
      type: actions.GET_CLASSES_SUCCESS,
      payload: classesData,
    };
    expect(customerClassesReducer({}, successAction)).toEqual(classesData);
  });

  it("should handle UPDATE_CLASSES_SUCCESS", () => {
    const updateAction = {
      type: actions.UPDATE_CLASSES_SUCCESS,
      payload: classesData,
    };
    expect(customerClassesReducer({}, updateAction)).toEqual(classesData);
  });
});
