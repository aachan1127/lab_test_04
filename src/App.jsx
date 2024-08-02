import { useState } from "react";
import "./App.css";
import Test from "./Test";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [test, setTest] = useState(100);
  // 追加したuseState👇
  const [flag, setFlag] = useState(false);

  const [num, setNum] = useState();

  // 更新の処理の練習
  const handleClick = () => {
    setTest("変更したよ！");
  };

  // 追加したuseStateのflagを更新する処理👇 ボタンを押すたびに反転する！
  const handleFlagClick = () => {
    setFlag(!flag);
  };

  // 新しくおまじないを作ります🤗
  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3); //0,1,2
    setNum(random); //ボタンが押されるたびにランダムな数字が作られて、それが設定される
  };

  return (
    <>
    <h1>デプロイチェック！</h1>
      <Form />

      {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}

      <button onClick={handleNumClick}>ボタンを押しましょう</button>

      {/* 条件分岐の練習 */}
      {flag && <h1>今はtrueです</h1>}
      {!flag && <h1>今はfalseです</h1>}

      <div>{test}</div>

      <button onClick={handleFlagClick}>ボタンを押してみよう</button>

      <Test
        gs="07月30日react2回目"
        lab={17}
        react="目じるしの練習をしています"
      />

      <Button text="送信" />
      <br />
      <Button text="登録" />
    </>
  );
}

export default App;
