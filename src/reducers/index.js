import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_ADD_TOTAL,
  MEMORY_RESET,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        ...initialState,
      };
    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };
    case MEMORY_ADD_TOTAL:
      return {
        ...state,
        total: state.memory + state.total,
      };

    case MEMORY_RESET:
      return {
        ...state,
        memory: initialState.memory,
      };

    default:
      return state;
  }
};

export default reducer;
