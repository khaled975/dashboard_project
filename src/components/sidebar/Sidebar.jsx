import React, { useEffect } from "react";
import "./sidebar.css";
import {  Button, Col, Divider, Dropdown, Row, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseOutlined, ContactsOutlined, CustomerServiceOutlined, HomeOutlined, LineChartOutlined, LoginOutlined, MenuFoldOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import userImg from '../../images/userimg.png'
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
//   const navigate = useNavigate
  const auth = localStorage.getItem('token')
//   const checkLogIn = ()=>{
//     if(!auth){
//         navigate('/login')
//     }
//   }
console.log(JSON.parse(auth));
    const [show , setShow] = useState(true)
    const [isOpened , setIsOpened] = useState(true)
    useEffect(()=>{
        const menu = ()=>{
            if(window.innerWidth < 768 ){
            console.log('done');
            setShow(!show)
        }
    }
    window.addEventListener("resize",menu)

    })
  return (
    <>
    
      <nav className={`sidebar ${isOpened && "show"}`}>
                <Row className="nav-header">
                    <Col>
                        <h1>DASHBOARD</h1>
                        <CloseOutlined className="close-icon" onClick={()=>setIsOpened(!isOpened)}/>
                    </Col>
                </Row>
                {
                    auth &&
                    <Row className="user-info">
                    <Col>
                        <img src={userImg} alt="img" className="user-img"/>
                        <h2>Welcome {JSON.parse(auth).data.name}</h2>
                    </Col>
                </Row>
                }
                <Row className="nav-body">
                    <Col>
                    {/* { */}
                        {/* // collapsed   ? */}
                        <ul className="nav">
                            <li>
                                <Button block size="large">
                                    <HomeOutlined />
                                    <Link to='/'> Home</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <ContactsOutlined />
                                    <Link to='/team'> Team</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <CustomerServiceOutlined />
                                    <Link to='/services'> Services</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <TeamOutlined />
                                    <Link to='/manager'> Team Manager</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <SettingOutlined />
                                    <Link to='/settings'> Settingsr</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <LineChartOutlined />
                                    <Link to='/charts'> Charts</Link>
                                </Button>
                            </li>
                            {
                                !auth 
                                    &&
                                <li>
                                    <Button block size="large">
                                        <LoginOutlined />
                                        <Link to='/login'> LogIn</Link>
                                    </Button>
                                </li>
                            }
                        </ul>
             
                    {/* } */}

                    </Col>
                </Row>
                    
                {/* </div> */}
      </nav>
      <MenuFoldOutlined onClick={()=>setIsOpened(!isOpened)} className="open-icon"/>

    </>
  );
};

export default Sidebar;



{/* 
:

<ul className="nav">
<li>
    <Button block size="large">
        <Link to='/'> <HomeOutlined /></Link>
    </Button>
</li>
<li>
    <Button block size="large">
        <Link to='/team'> <ContactsOutlined /> </Link>
    </Button>
</li>
<li>
    <Button block size="large">
        <Link to='/services'> <CustomerServiceOutlined /> </Link>
    </Button>
</li>
<li>
    <Button block size="large">
        <Link to='/manager'> <TeamOutlined /> </Link>
    </Button>
</li>
<li>
    <Button block size="large">
        <Link to='/settings'> <SettingOutlined /> </Link>
    </Button>
</li>
<li>
    <Button block size="large">
        <Link to='/charts'> <LineChartOutlined /> </Link>
    </Button>
</li>
{/* <Divider orientation="left"/> */}