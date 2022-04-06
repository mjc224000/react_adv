import react from 'react';
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import {Button} from "antd";

const initState = {count: 0}
const ADD = "ADD";

function Add() {
    return {
        type: ADD
    }
}

function reducer(state = initState, action) {

    switch (action.type) {
        case ADD: {
            return {count: state.count + 1}
        }
        default : {
            return state
        }
    }

}

const store = createStore(reducer);

function Child({count}) {
    console.log('child')
    return <div>Child</div>
}

const WrapChild=connect((state)=>{
    return {count:0}
})(Child)
function Counter({count, add}) {
    console.log("counter")
    return <div>Counter:{count}
        <div><Button onClick={add}>add</Button></div>
    </div>
}

let CounterWrap = connect(state => ({
    count: state.count
}), dispatch => {
    return {add: () => dispatch(Add())};
})(Counter);

function Foo() {
     
    return <div>
        <WrapChild/>
        <CounterWrap/>
    </div>
}

export function ReduxDemo() {

    return <Provider store={store}>
        <div>
            reduxDemo
            <Foo/>
        </div>
    </Provider>
}