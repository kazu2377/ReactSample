import React from 'react';


class ClassConp extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor now!');
    }

    componentDidMount() {
        console.log('componentDidMount now!');
    }

    // handleClick() {
    //     this.setState({
    //         clicked: true,
    //     })
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate now!')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate now!')
        return true;
    }

    componentWillUnmount() {
      console.log("componentWillUnmount 最後")
    }
    render() {
        console.log('render now!');
        return (
            // <button onClick={this.handleClick}>Click</button>
            <div>aaaaaaa</div>
        );
    }
}

export default ClassConp;