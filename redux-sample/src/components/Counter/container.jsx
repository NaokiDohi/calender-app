// ==========ここから追加する==========
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";
// ==========ここまで追加する==========

import Counter from "./presentation";

// ==========ここから追加する==========
const mapStateProps = ({ count }) => ({ count });
//store の現在の状態を引き数として受け取って必要なものだけを props に流す
//ES5なら
//const mapStateProps = state => {
//  return { count: state.count };
//};

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});
//引き数に dispatch を受け取って、必要な action だけを dispatch する関数を定義して props として渡す
//このように定義してやることで、props.increment()と呼び出せる



export default connect(
  mapStateProps,//store からどの state を引っ張ってくるかを定義
  mapDispatchProps//どんな dispatcher を props に渡すかを定義
)(Counter);
// ==========ここまで追加する==========
