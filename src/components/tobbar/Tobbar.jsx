import { BellOutlined, LoginOutlined, MenuFoldOutlined, MoreOutlined, NotificationOutlined, SearchOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Row,Col, Input } from "antd";
import React from "react";
import './topbar.css'
import Sidebar from "../sidebar/Sidebar";
const Topbar = ()=>{
    const showMenu = ()=>{
        console.log(Sidebar);
        
    }
    return(
        <>
            <section className="topbar">
                    <Row justify={"space-between"} align={'middle'}>
                        {/* <Col>
                            <MenuFoldOutlined onClick={showMenu}/>
                        </Col> */}
                        <Col>
                            <div>
                                <Input placeholder = 'Search' suffix={<SearchOutlined className="searchIcon"/>}/>
                            </div>
                        </Col>
                        <Col className="topbar-icons">
                            <div>
                                <SettingOutlined style={{fontSize:'22px'}}/>
                                <UserOutlined style={{fontSize:'22px'}}/>
                                <BellOutlined  style={{fontSize:'22px'}}/>
                                <LoginOutlined  style={{fontSize:'22px'}}/>
                            </div>
                        </Col> 
                    </Row>
            </section>
        </>
    )
}

export default Topbar