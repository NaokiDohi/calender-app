import { INCREMENT, DECREMENT } from "./constants";

//payloadはnumber型で引数で受け取った分だけ count を増加または減少させることができるようにした
//increment(c)を呼ぶことで、INCREMENTという引数のc分だけ
//state のcountを増加させることができる action を発行することができるようになります。
//decrementも同様です。

export const increment = payload => ({
  type: INCREMENT,
  payload //"アクションの実行に必要な任意のデータ"
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});