import * as todoActions from "./TodoActions";
import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Todo Actions", () => {
  it("Should get todos", () => {
    const todo = { id: 1, title: "someName", status: true };
    const expectedAction = {
      type: "GET_TODO_SUCCESS",
      todo
    };

    const action = todoActions.getTodoSuccess(todo);

    expect(action).toEqual(expectedAction);
  });

  it("Should add todos", () => {
    const todo = { id: 1, title: "someName", status: true };
    const expectedAction = {
      type: "ADD_TODO_SUCCESS",
      todo
    };

    const action = todoActions.addTodoSuccess(todo);

    expect(action).toEqual(expectedAction);
  });
});

describe("Async action", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("should get todos", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, title: "title", status: true }
      });
    });

    const expectedActions = {
      type: "GET_TODO_SUCCESS",
      todo: { id: 1, title: "title", status: true }
    };

    const store = mockStore({});
    return store.dispatch(todoActions.getTodo()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedActions);
    });
  });

  it("should add todos", () => {
    const requestData = { id: 2, title: "title", status: true };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 2, title: "title", status: true }
      });
    });

    const expectedActions = {
      type: "ADD_TODO_SUCCESS",
      todo: { id: 2, title: "title", status: true }
    };

    const store = mockStore({});
    return store.dispatch(todoActions.addTodo(requestData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedActions);
    });
  });
});
