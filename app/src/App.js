import React from 'react'
import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef, createContext, useContext, useCallback, cloneElement} from 'react';
import {Button, Input} from "antd";
import "antd/dist/antd.css"
import {ReduxDemo} from "./ReduxDemo";
import {IsolateDemo} from "./IsolateDemo";
import {UseForm} from "./UseForm";
import {UseMemo,UseMemo2} from "./UseMemo";

function App() {

    return (<div className="App">
      <UseMemo2/>
    </div>);
}

export default App;
