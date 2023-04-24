import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import HeaderView from '../form/headerView';
import FormList from '../form/formList';
import FormView from '../form/formView';
import SideBarData from './sideBarContain';
const { Header, Sider, Content } = Layout;

export default function SideBar() {
    const [userNumber, setUserNumber] = useState(1)
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    onClick={(text: any) => setUserNumber(text.key)}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'user 1',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'user 2',
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: 'user 3',
                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: 'user 4',
                        },
                        {
                            key: '5',
                            icon: <UserOutlined />,
                            label: 'user 5',
                        },
                        {
                            key: '6',
                            icon: <UserOutlined />,
                            label: 'user 6',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    {userNumber == 1 ?
                        <>
                            <HeaderView />
                            <div style={{ display: 'flex', }}>
                                <FormList />
                                <FormView />
                            </div>
                        </>
                        : <SideBarData userNumber={userNumber} />
                    }
                </Content>
            </Layout>
        </Layout>
    )
}
