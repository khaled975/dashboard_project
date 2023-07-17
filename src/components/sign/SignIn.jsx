import { Col, Row } from 'antd'
import React, { useState } from 'react'
import './sign.css'
import { FacebookFilled, FacebookOutlined, GoogleOutlined, InstagramOutlined, LockOutlined, RightCircleOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignIn = ()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const getUserInfo = ()=>{
       axios.post('https://alrayademo-back.appssquare.com/api/admin/login',{
        email:username,
        password:password
       })
       .then((res)=>{
        const userToken = localStorage.setItem('token',JSON.stringify(res.data))
        navigate('/')
       })
       .catch((err)=>{console.log(err.message);})
    }

    return (
        <>
            <section className='sign'>
                        {/* <div className="container"> */}
                            <Row className='screen'>
                                <Col className='box'>
                                    <div className='form'>
                                        <div className="filed">
                                            <UserOutlined/>
                                            <input type="text" className="inp username" placeholder="User name / Email" onChange={(e)=>(setUsername(e.target.value))}/>
                                        </div>
                                        <div className="filed">
                                            <LockOutlined/>
                                            <input type="password" className="inp password" placeholder="Password"  onChange={(e)=>(setPassword(e.target.value))}/>
                                        </div>
                                        <button className="btn" onClick={getUserInfo}>
                                            <span>Log In Now</span>
                                            <RightCircleOutlined />
                                        </button>		
                                    </div>
                                    <div className="social">
                                        <h2>log in via</h2>
                                        <div className="social-icons">
                                            <a href="#" className="social-icon"><FacebookFilled/></a>
                                            <a href="#" className="social-icon"><InstagramOutlined/></a>
                                            <a href="#" className="social-icon"><GoogleOutlined/></a>
                                        </div> 
                                    </div> 
                                </Col>
                                <Col className='shapes'>
                                    <span className="shape shape1"></span>
                                    <span className="shape shape2"></span>
                                    <span className="shape shape3"></span>		
                                    <span className="shape shape4"></span>
                                </Col>
                            </Row>
                {/* <Row className="screen">
                    <Col className="box">
                        <form className="login">
                            <div className="filed">
                                <UserOutlined/>
                                <input type="text" className="login__input" placeholder="User name / Email"/>
                            </div>
                            <div className="filed">
                                <LockOutlined/>
                                <input type="password" className="login__input" placeholder="Password"/>
                            </div>
                            <button className="button sub-btn">
                                <span>Log In Now</span>
                                <RightOutlined />
                            </button>				
                        </form>
                        <div className="social">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon"><FacebookOutlined/></a>
                                <a href="#" className="social-icon"><InstagramOutlined/></a>
                                <a href="#" className="social-icon"><GoogleOutlined/></a>
                            </div> 
                        </div>
                    </Col>
                    <Col className="shapes">
                        <span className="shape shape4"></span>
                        <span className="shape shape3"></span>		
                        <span className="shape shape2"></span>
                        <span className="shape shape1"></span>
                    </Col>		
                </Row> */}
            {/* </div> */}
            </section>
        </>
    )
}

export default SignIn