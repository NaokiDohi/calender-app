import { combineReducers } from "redux";
import { count } from "./count/reducer";

//redux のcreateStoreというメソッドを使って store を作成します。
//これの引き数には全ての reducer を渡す必要があります。

const rootReducer = combineReducers({ count });

export default rootReducer;

//export defaultという記法は、そのファイルの一番重要な関数や変数を export するときに使います。