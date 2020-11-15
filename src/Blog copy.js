// import React from 'react';
// import Atikaru from './Atikaru';
// import ClassConp from './ClassConp';
// import LikeButton from './LikeButton';
// import axios from 'axios';

// let data={TITLE:'交通費申請'};
// const samplecon=React.createContext(data);


// class Blog extends React.Component{
//   static contextType=samplecon;

//   constructor(props){
//     console.log(props);
//     super(props);

//     //ステートのセット
//     this.state = {
//       msg:'Hello Components.',
//       co:0,
//       rooms: [],
//       renderChild: true,
//     };

    
   
//     // let timer = setInterval(()=>{
//     //   this.setState((state)=>({
//     //     msg: state.msg + "!"
//     //   }));
//     // }, 10000);
//     this.doAction1 = this.doActionupdate.bind(this);
//     this.doAction2 = this.doAction.bind(this);
//     this.doAction3 = this.dofalse.bind(this);

//     this.doActionapi = this.docomponentDidMount.bind(this);
//   }


//   componentDidMount() {
//     document.getElementById('counter').addEventListener('click',this.countUp)
//     console.log("componentDidMount イベントセット")
//    }

//    componentDidUpdate() {
//     console.log("componentDidUpdate 毎回動く")

//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount 最後")
//   }

//   //API実行
//   docomponentDidMount() {

//     // const url = "https://api.github.com/users/kazu2377";
//     const url = "http://localhost:3000/api/v1/list";
    
//     //APIを実行して、データを取得セットステートでステートを更新する
//     axios.get(url).then((res) => {
//        //console.log(res.data);
//        this.setState({ rooms: res.data });
     
//     });

//     //ステートの中に保存されたAPIのデータを出力
//     this.state.rooms.forEach(function( value ) {
//       console.log( value );
//     });
    
//   }

//   //ステートの変更
//   doAction(){
//     this.setState((state)=> ({
//       msg: '変更 '
//     }));
//   }
//   //ステートの変更
//   doActionupdate(){
//     this.setState((state)=> ({
//       msg: '更新 '
//     }));
//   }

//   doActionupdatesaku(){
//     this.setState((state)=> ({
//       co:state.co+100
//     }));
//   }

//   dofalse(){
//     this.setState((state)=> ({
//       renderChild:false
//     }));
//   }

//   //JAVAscriptでのイベントリスナーでの子コンポーネントからの呼び出し
//   countUp=()=>{ 
//     this.setState(
      
//        {co:this.state.co+100}

//     )
//   }

//   render(){
//     return (
//       <div>
//         {/* //ステートを出力、プロップスとステートのやり方がある　
//         //プロップスは値を受け取る　ステートは値を管理する変更したり、別のコンポーネントに引き渡す */}
//        <p> test  {this.props.msg}{this.state.msg}</p>
//        <p> プロップス　count  {this.state.co}</p>
      
//       {/* //ボタンにイベントを設定 */}
//        <button onClick={this.doAction2}>変更</button>
//        <button onClick={this.doAction1}>更新</button>

//        {/* //ボタンを押したらAPIを起動　node.jsからデータを取得 */}
//        <button onClick={this.doActionapi}>api</button>

//        <samplecon.Provider value={this.context.TITLE}>

//          {/* //Atikaruコンポーネントにtitleのプロップスと、関数を渡してAtikaruコンポーネントからクリックしてステートを変更する */}
//        <Atikaru title={"react"} doActionupdatesaku={ () => this.doActionupdatesaku()}/>
//       </samplecon.Provider>

//           {/* APIで取得したデータをマップメソッドで出力する */}
//           { this.state.rooms.map(( value )=> (
//             <div><p>{value.title }</p>
//             <p>{value.done}</p>


//             <input
//             type="checkbox"
//             name={value.title}
//             value={value.title}
//             checked={value.done}
//             /></div>


//           ))


//           }
//           {/* //コンテキストサンプル */}
//            {this.context.TITLE}

//             {/* //ステート渡し */}
//            <LikeButton count={this.state.co}/>

//            {/* コンポーネントの破棄 ClassConpを破棄している*/}
//            {this.state.renderChild? <ClassConp/> : null}
//            <button onClick={this.doAction3}>コンポーネントの破棄</button>

//       </div>
//     );
//   }
// }

// export default Blog