import React, {Component} from 'react';
import {Layout, Menu, Icon, Row, Col, Button} from 'antd';
import '../../css/Home/Home.css'

const {Header, Content, Sider} = Layout;
// const {SubMenu} = Menu;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart"/>
                                <span>首页</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop"/>
                                <span>面试安排一览表</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="desktop"/>
                                <span>招聘人员跟进</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="desktop"/>
                                <span>入职人员跟进</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="desktop"/>
                                <span>招聘人员总览</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="desktop"/>
                                <span>人员详情查询</span>
                            </Menu.Item>
                {/*            <SubMenu*/}
                {/*                key="sub1"*/}
                {/*                title={*/}
                {/*                    <span>*/}
                {/*  <Icon type="user"/>*/}
                {/*  <span>User</span>*/}
                {/*</span>*/}
                {/*                }*/}
                {/*            >*/}
                {/*                <Menu.Item key="3">Tom</Menu.Item>*/}
                {/*                <Menu.Item key="4">Bill</Menu.Item>*/}
                {/*                <Menu.Item key="5">Alex</Menu.Item>*/}
                {/*            </SubMenu>*/}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <div className="hear-menu-bar">
                                <Row>
                                    <Col span={1}>
                                        {
                                            this.state.collapsed ? (
                                                <Button onClick={this.handleChangeCollapse.bind(this)}><Icon type="menu-unfold" /></Button>
                                            ) : (
                                                <Button onClick={this.handleChangeCollapse.bind(this)}><Icon type="menu-fold" /></Button>
                                            )
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Header>
                        <Content style={{margin: '0 16px'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360, marginTop: 24, height: '100%'}}>Bill is a cat.</div>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }

    handleChangeCollapse(){
        this.setState({"collapsed": !this.state.collapsed})
    }
}

export default Home;