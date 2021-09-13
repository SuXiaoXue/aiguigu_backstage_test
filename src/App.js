/*

*/

import React, { Component } from "react";
import { Button } from "antd";
import './App.css'

export default class App extends Component{

    render() {
        return <div><Button type="primary">123</Button>
        <div className='one'>
            <div className='two'>123</div>
        </div>
        </div>
    }
}