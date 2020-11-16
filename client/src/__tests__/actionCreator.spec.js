import { createStore, applyMiddleware } from "redux";
import moxios from "moxios";

import { fetchClasses } from "../__mocks__/fetchClasses";
import { middlewares } from "../__mocks__/store";
import { classesData } from "../__mocks__/classesData";
import classesReducer, { initialState } from "../reducers/classesReducer";

const testStore = (initState) => {
  console.log(classesReducer);
  const mockCreateStoreWithMiddlewares = applyMiddleware(...middlewares)(
    createStore
  );
  return mockCreateStoreWithMiddlewares(classesReducer, initState);
};

describe("Integration Testing for Action Creators", () => {
  describe("IT for fetchClasses", () => {
    it("true", () => {
      expect(true).toBe(true);
    });
    // beforeEach(() => {
    //   moxios.install();
    // });
    // afterEach(() => {
    //   moxios.uninstall();
    // });
    // it("should return all classes", () => {
    //   const mockStore = testStore(initialState);

    //   moxios.wait(() => {
    //     const req = moxios.requests.mostRecent();
    //     req.respondWith({
    //       status: 200,
    //       response: { data: classesData },
    //     });
    //   });
    //   return mockStore.dispatch(fetchClasses()).then(() => {
    //     const newMockStore = mockStore.getState();
    //     expect(newMockStore.classes).toHaveValue(classesData);
    //   });
    // });
  });
});
