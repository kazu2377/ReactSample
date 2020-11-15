import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';
import Memo from './memo/memo';
import HookTest from './HookTest';

import Blog from './Blog';
// Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>

        ここからHookTest クラスコンポーネントの書き方
         <Blog msg="親のコンポーネントからわたってきたよ"/>

         ここからHookTest 関数コンポーネントの書き方
         <HookTest msg="HookTest"/>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
       
      </div>
    );
  }
}


export default connect()(App);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './App.css';


// // ステートのマッピング
// function mappingState(state) {
//   return state;
// }


// // Appコンポーネント
// class App extends Component {


//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Redux</h1>
//         <Message />
//         <Button />
//       </div>
//     );
//   }
// }
// // ストアのコネクト
// App = connect()(App);


// // メッセージ表示のコンポーネント
// class Message extends Component {
//   style = {
//     fontSize:"20pt",
//     padding:"20px 5px"
//   }

//   render(){
//     return (
//       <p style={this.style}>
//         {this.props.message}: {this.props.counter}
//       </p>
//     );
//   }
// }
// // ストアのコネクト
// Message = connect(mappingState)(Message);


// //
// class Button extends Component {
//   style = {
//     fontSize:"16pt",
//     padding:"5px 10px"
//   }

//   constructor(props){
//     super(props);
//     this.doAction = this.doAction.bind(this);
//   }

//   // ボタンクリックでディスパッチを実行
//   doAction(e){
//     if (e.shiftKey){
//       this.props.dispatch({ type:'DECREMENT' });
//     } else {
//       this.props.dispatch({ type:'INCREMENT' });
//     }
//   }


//   render(){
//     return (
//       <button style={this.style}
//           onClick={this.doAction}>
//         click
//       </button>
//     );
//   }
// }
// // ストアのコネクト
// Button = connect()(Button);


// export default App;