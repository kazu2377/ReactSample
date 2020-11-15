const { connect } = require("react-redux");

console.log("sssss");

// ステートの値
let state_value = {
  counter:0,
  message:"COUNTER"
}

function counter(state=state_value)
{
  console.log(state.counter);

  return{
    counter:500,
    message:"kazuki"
  }
}

class app{
  
}
counter();
state_value=counter();

console.log(state_value.counter);

let i=connect();
app=i(app);

console.log("いろいろ修正");

