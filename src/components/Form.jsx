import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const { name, email, data, handleEmailChange, handleNameChange } = useForm();
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   //    API通信
  //   const [data, setData] = useState([]);

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   // useEffectのお勉強をしましょう🤗
  //   useEffect(() => {
  //     //どのような挙動になるかチェックしてみましょう🤗
  //     // console.log("発火！！！");

  //     // apiの通信の処理を記入します🤗
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/todos/"
  //         );
  //         console.log(response, "データをチェック");
  //         const data = await response.json(); //必須！ jsonの形式にする必要があります🤗
  //         console.log(data, "中身をチェック");
  //         setData(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   console.log("確認");

  return (
    <>
      {/* データを表示 */}
      {data &&
        data.map((i, index) => (
          <div key={index}>
            <p>{index}番目</p>
            <p>{i.title}</p>
            <p>{i.userId}</p>
          </div>
        ))}

      {/*  */}
      <div>
        <p>名前入力</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <p>メールアドレス入力欄</p>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>

      <hr />
      <p>名前入力: {name}</p>
      <p>email入力: {email}</p>
      {/*  */}
    </>
  );
};

export default Form;
