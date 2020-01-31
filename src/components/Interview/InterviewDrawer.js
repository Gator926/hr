import React, {Component} from 'react';
import {Drawer, Card, Button, Tag} from 'antd';
import "../../css/Interview/InterviewDrawer.css";

class InterviewDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeDrawer: false,

        }
    }

    onClose = () => {
        let drawer = this.props.Drawer;
        drawer.visible = false;
        this.props.ResultDrawer(drawer);
    };

    render() {
        return (
            <div>
                <Drawer width="300"
                    title={this.props.Drawer.year + "年" + (this.props.Drawer.month + 1) + "月" + this.props.Drawer.date + "日 面试安排"}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.props.Drawer.visible}
                >
                    {
                        this.props.Drawer.interviews.map((interview, index)=>{
                            return (
                                <Card key={index}>
                                    <p><Tag color="blue" onClick={this.handleChangeChildrenDrawer.bind(this)}>{"面试时间: " + interview.start_time + " — " + interview.end_time}</Tag></p>
                                    <p><Tag color="blue">面试者: {interview.interviewee}</Tag></p>
                                    <p><Tag color="blue">面试官: {interview.interviewer}</Tag></p>
                                    <p><Tag color="blue">跟进者: {interview.follower}</Tag></p>
                                    <Button id="delete-interview" type="danger" block onClick={this.handleChangeChildrenDrawer.bind(this)}>删除面试</Button>
                                </Card>
                            )
                        })
                    }
                    <Drawer visible={this.state.timeDrawer} title="Two-level Drawer" onClose={this.handleChangeChildrenDrawer.bind(this)}>
                        This is two-level drawer
                    </Drawer>
                </Drawer>
            </div>
        );
    }

    handleChangeChildrenDrawer(){
        this.setState({timeDrawer: !this.state.timeDrawer});
    }
    //
    // handleChildrenDrawerClose(){
    //     this.setState({childrenDrawer: !this.state.childrenDrawer});
    // }
}

export default InterviewDrawer;