import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

//reducer は第一引数に直前の state を第二引数に action を受け取ります。
export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;//直接変更せずに、新しいstateを返している点です
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};