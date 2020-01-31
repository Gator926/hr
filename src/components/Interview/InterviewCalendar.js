import React, {Component} from 'react';
import {Calendar, Badge} from 'antd';
import InterviewDrawer from "./InterviewDrawer";
import "../../css/Interview/InterviewCalendar.css"

class InterviewCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: {
                visible: false,
                year: null,
                month: null,
                date: null,
                interviews: [
                    {interviewer: "魏总", interviewee: "小明", start_time:"14:00", end_time:"16:00", follower: "周于琳"}
                ]
            }
        }
    }


    render() {
        function getListData(value) {
            let listData;
            if (value.month() === 0 && value.date() === 1) {
                listData = [
                    {type: 'warning', content: '小明 : 14:00 - 16:00'},
                    {type: 'success', content: '小明 : 14:00 - 16:00'},
                ];
            }
            return listData || [];
        }

        function dateCellRender(value) {
            const listData = getListData(value);
            return (
                <ul className="events">
                    {listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content}/>
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <div>
                <Calendar dateCellRender={dateCellRender} onSelect={this.handleClickCal.bind(this)}/>
                <InterviewDrawer ResultDrawer={this.handleChangeDrawer.bind(this)} Drawer={this.state.drawer}/>
            </div>
        );
    }

    handleClickCal(value) {
        this.setState({
            drawer: {
                visible: !this.state.drawer.visible,
                year: value.year(),
                month: value.month(),
                date: value.date(),
                interviews: [
                    {interviewer: "魏总", interviewee: "小明", start_time:"14:00", end_time:"16:00", follower: "周于琳"}
                ]
            }
        })
    }

    handleChangeDrawer(value){
        this.setState({drawer: value})
    }
}

export default InterviewCalendar;