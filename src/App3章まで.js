import React, { Component } from 'react';

import './App.css';

let data = {title:'Title',
message:'this is sample message.'};

const SampleContext = React.createContext(data);

class App extends Component {



  msgStyle1 = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  msgStyle2 = {
    fontSize:"20pt",
    color:"white",
    backgroundColor:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  btnStyle = {
    fontSize:"16pt",
    pading:"10px"
  }

  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      msg:'count start!',
      flg:true,
      list:this.data
    };
    this.doAction = this.doAction.bind(this);

    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);

    this.doCheck2 = this.doCheck2.bind(this);

  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '!!'
    });
    event.preventDefault();
  }


  doAction(es){
  
    this.setState((state)=> ({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg
    }));
  }


  doCheck2(event) {
    alert(event.target.value +
      "は長すぎます。(最大10文字)");
  }

  render(){
    return <div>
      <h1>React2</h1>
      {this.state.flg ?
        <p style={this.msgStyle1}>count: {this.state.msg}</p>
      :
        <p style={this.msgStyle2}>{this.state.msg}です。</p>
      }
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
      
      <p style={this.msgStyle1}>count: {this.props.title}</p>


      <List title="サンプル・リスト" data={this.data} />


      <Message title="Children!">
        これはコンポーネント内のコンテンツです。
        マルでテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message>




      <h1>Reactform</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input type="text" style={this.inputStyle} onChange={this.doChange} />
        </label>
        <input type="submit" style={this.inputStyle} value="Click" />

        <input type="text" style={this.inputStyle} onChange={this.doChange} required pattern="[A-Za-z _,.]+" />
      </form>


      <h2>{this.state.message}</h2>
      <MessageChack maxlength="10" onCheck={this.doCheck2} />


      <Title />
      <Messagecontext />
    </div>;
  }
}


class Title extends Component {
  static contextType = SampleContext;
  render(){
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}


class Messagecontext extends Component {
  static contextType = SampleContext;
  render(){
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}


class Message extends Component {
  li = {
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding: "0px",
  }


  render(){
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for(let i = 0;i < arr.length;i++){
      if (arr[i].trim() != ''){
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value,key)=>(
      <li style={this.li} key={key}>{value}.</li>)
    );
    return <div>
      <h2>{this.props.title}</h2>
      <ol>{list}</ol>
    </div>
  }
}

class List extends Component {
  number = 1;


  title = {
    fontSize:"20pt",
    fontWeight:"bold",
    color:"blue",
  };


  render(){
    let data = this.props.data;
     return (
      <div>
       <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) =>
            <Item number={this.number++} value={item}
              key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}


class Item extends Component {
  li = {
    listStyleType:"square",
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding: "0px",
  }
  num = {
    fontWeight:"bold",
    color:"red"
  }


  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}] </span>
          {this.props.value}
      </li>
    );
  }
}


class MessageChack extends Component {
  inputStyle = {
    fontSize:"12pt",
    padding:"5px"
  }


  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }


  doChange(e){
    if (e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value =
        e.target.value.substr(0,this.props.maxlength);
    }
  }


  render(){
    return <input type="text" style={this.inputStyle}
      onChange={this.doChange} />
  }
}

export default App;