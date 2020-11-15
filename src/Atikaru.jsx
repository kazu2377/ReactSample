import React from 'react';
import Blog from './Blog';


const Atikaru = (props) => {
  // this.doActionT = this.props.doActionupdatesaku().bind(this);

  return(
    // 親コンポーネントから値を受けっとっている
  <div> リアクトコンポーネント使い方 {props.title}
  {props.title}

{/* 親コンポーネントのステートを変更している */}
  <button onClick={props.doActionupdatesaku}>Click!</button>

  </div>

  )
}

export default Atikaru;