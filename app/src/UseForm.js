import React from 'react';
import {MyTablePage} from "./IsolateDemo";
import {Form, Input} from "antd";

const Item = Form.Item;

export function UseForm() {
    const [form] = Form.useForm();
    const slot1 = <Item name={'a'} initialValue={''}>
        <Input/>
    </Item>
    return <Form form={form}>
        <MyTablePage slot1={slot1}/> </Form>
}
