import React, {Component} from 'react';
import { Input, Icon, Button } from 'antd';
import "../css/login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <div>
                        <h2>泰康银保续期招聘管理系统</h2>
                    </div>
                    <div className="login-box-input">
                        <Input size="large"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名" value={this.state.username} onChange={this.handleChangeUsername.bind(this)}
                        />
                    </div>
                    <div className="login-box-input">
                        <Input size="large"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" placeholder="密码" value={this.state.password} onChange={this.handleChangePassword.bind(this)}
                        />
                    </div>
                    <div className="login-box-input">
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button" onClick={this.handleClickButton.bind(this)}>
                            登陆
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    handleChangeUsername(event){
        this.setState({username: event.target.value})
    }

    handleChangePassword(event){
        this.setState({password: event.target.value})
    }

    handleClickButton(){
        fetch("http://localhost:8000/users/", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "get",
        }).then(
            response => response.json()
        ).then(data => {
            console.log(data);
        })
    }
}

export default Login;