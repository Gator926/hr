import React, {Component} from 'react';
import {Typography, Input} from "antd";
import  "../css/login.css";

const { Title } = Typography;

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <div className="item">
                        <div className="login-box-header">
                            <Title level={3}>泰康银保渠道招聘管理系统</Title>
                            <Input size="large" placeholder="large size" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;