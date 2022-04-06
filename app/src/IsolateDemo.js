import React, {useRef, useState, useEffect} from "react";
import {Table, Input, Modal,Form} from 'antd';

//
export function MyTablePage({slot1 = null, slot2 = null}) {
    let data = [];
    let c = useRef(0);
    for (let i = 0; i < 999; i++) {
        data.push({key: i, a: i + 'a', b: i + 'b', c: i + 'c'});

    }
    let columns = [
        {
            dataIndex: "a", title: "aa", key: "a", onCell: (record) => {
                return {...record, title: "aa", children: record['aw']}
            }
        },
        {dataIndex: "b", title: "b", key: "b"},
        {dataIndex: "c", title: "c", key: "c"},

    ]

    return <div style={{background:`rgb(125,${Math.random()*255},${Math.random()*255})`}}>
        <div style={{display:"flex"}}>slot1: {slot1}</div>
        <div style={{display:"flex"}}>slot2: {slot2} </div>
        <Table components={{
            body: {

                cell: ({...props}) => {

                    c.current++;
                    // console.log(c.current);
                    return <td>{props.children}</td>
                },
            }
        }
        }
               dataSource={data} columns={columns}/>
    </div>
}
function Slot2() {
    let [t, setT] = useState("")

    return <div>
        <Input value={t} onChange={(e) => setT(e.target.value)}/>
    </div>;

}
export function IsolateDemo() {
    let [t, setT] = useState("")


    let slot1 = <div>
        <Input value={t} onChange={(e) => setT(e.target.value)}/>
    </div>;



    return <MyTablePage slot1={slot1} slot2={<Slot2/>}/>
}