import React, {Component} from 'react';
import { Modal } from 'antd';

class UnEmployeeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "小明",
            sex: "男",
            birth_year: 1987,
            birth_month: 12,
            work_year: 12,
            degree: "本科",
            residence: "成都",
            household_place: "成都",
            phone: "15544554444",
            email: "xxxx.@qq.com",
            creator: "周于琳",
            follower: "周于琳",
            create_time: "2020-01-01 12:00:00",
            update_time: "2020-01-01 14:00:00",
            visible: this.props.UNEmployee.un_employee_visible
        }
    }
    render() {
        return (
            <div>
                <Modal
                    title={this.state.name + "个人情况"}
                    visible={this.props.UNEmployee.un_employee_visible}
                    // visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default UnEmployeeModal;