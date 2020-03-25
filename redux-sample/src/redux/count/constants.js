//reducer や middlware（後述）がどの処理を行うかを判断するために使われます。
//直接値を変更できないのでこのような方法が取られます。定数や typescript であれば enum で定義されることが多いです。
//export constと書くことで個々の関数や変数などを外部のファイルから読み込める
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";