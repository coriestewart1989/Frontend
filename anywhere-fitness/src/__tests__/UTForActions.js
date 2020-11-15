// I don't know if this will work or don't so if this test fails,
//// don't worry about it
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import logger from "redux-logger";
import moxios from "moxios";
import * as actions from "../actions";
import * as constants from "../constants";
import { fetchClasses as mockFetchClasses } from "../__mocks__/fetchClasses";
import { classesData } from "../__mocks__/classesData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions unit testing", () => {
  beforeEach(() => moxios.install());
  beforeEach(() => moxios.install());

  it("create FETCH_CLASSES_SUCCESS after successfully fetching classes", () => {
    moxios.await(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: mockFetchClasses,
      });
    });
    const expectedActions = [
      { type: constants.GET_CLASSES_START },
      { type: constants.GET_CLASSES_SUCCESS, payload: classesData },
    ];
    const store = mockStore({ classes: [] });
    return store.dispatch(actions.fetchClasses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
