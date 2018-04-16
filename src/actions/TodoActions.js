import axios from "axios";
import uuidv4 from "uuid/v4";

export const getTodoSuccess = todo => {
  return {
    type: "GET_TODO_SUCCESS",
    todo
  };
};

export const addTodoSuccess = todo => {
  return {
    type: "ADD_TODO_SUCCESS",
    todo
  };
};

const addTodoFailure = error => {
  return {
    type: "ADD_TODO_FAILURE",
    error
  };
};

export const getTodo = () => {
  return dispatch => {
    return axios
      .get("http://localhost:5000/todos")
      .then(resp => {
        dispatch(getTodoSuccess(resp.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addTodo = todo => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/todos", {
        title: todo.title,
        status: todo.status,
        id: uuidv4()
      })
      .then(response => {
        dispatch(addTodoSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(addTodoFailure(error));
      });
  };
};
