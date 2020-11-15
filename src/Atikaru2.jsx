import React,{useState,useEffect} from 'react';
import MyButton from './MyButton';

const Atikaru2 = (props) => {

  const [isatai, countUpdd]=useState('kazuki');
  const [atai, counter]=useState(0);

  const countupp= ()=> counter(atai + 1);
  
  useEffect(()=>{document.getElementById('counterup').addEventListener('click',countupp)});

  return(
      <div> リアクトコンポーネント使い方 {props.title}
      <button onClick={ () => countUpdd('shimizu') }>Click!</button>

      カウンとアップ
      <button  id='counterup'>{atai}Click!</button>

      {/* 関数コンポーネントでの親コンポーネントの修正方法 　イベントとtitle　関数はプロップスを持たない*/}
      <MyButton title={"MyButtonの使い方"} OnBtnClick={countupp}/>

      {isatai}
      </div>
  )
};



export default Atikaru2;