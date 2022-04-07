import React, {useMemo, memo, useState, useRef} from "react";
import {MyTablePage} from "./IsolateDemo";
import {Input} from "antd";

const Wrap = memo(MyTablePage);

export function UseMemo() {
    let [state, setState] = useState('');

    return <div>
        <div><Input onChange={(e) => setState(e.target.value)}/></div>
        <Wrap/>
    </div>

}

export function UseMemo2() {

    let [state, setState] = useState('');
    let [state2, setState2] = useState('');
    let Wrap = useMemo(() => {
        return <MyTablePage slot1={state}/>
    }, [ state]);

    return <div>
        <div>input1:<Input onChange={(e) => setState(e.target.value)}/></div>
        <div>input2:<Input onChange={(e) => setState2(e.target.value)}/></div>
        {Wrap}
    </div>

}