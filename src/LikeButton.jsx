import React from 'react';


const LikeButton = (props) => {
  // this.doActionT = this.props.doActionupdatesaku().bind(this);

  return(
  <div> 

  <button id={'counter'}>いいね数 ステート受け取り</button>
  {props.count}
  </div>

  )
}

export default LikeButton;