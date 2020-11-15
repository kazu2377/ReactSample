import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';



//ボタンをコンポーネントとして抽出
function MyButton({OnBtnClick,title}) {
  //イベントハンドラには props 経由で受け取る MyComponent の関数 を設定

  return (
    <button onClick={OnBtnClick}>
      Change to {title}
    </button>
  );
}

export default MyButton;