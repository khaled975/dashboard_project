import { MailOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import {DemoPie, RingChart} from '../charts/Charts'
import './numbers.css'
// import { data } from '../stats/Stats'
const Numbers = ()=>{
    return( 
    <>
        <section className='numbers-sec'>
            <Row gutter={[16,16]} justify={'center'}>
                <Col lg={6} md={12} xs={24}>
                    <div className='box'>
                        <div className='info'>
                            <MailOutlined />
                            <p>15,990</p>
                            <span>Emails sent</span>
                        </div>
                       <div className='charts'>
                            <RingChart value={.7}/> 
                       </div>
                    </div>
                </Col>
                <Col lg={6} md={12} xs={24}>
                    <div className='box'>
                        <div className='info'>
                            <MailOutlined />
                            <p>15,990</p>
                            <span>Emails sent</span>
                        </div>
                       <div className='charts'>
                            <RingChart value={.58}/>
                       </div>
                    </div>
                </Col>
                <Col lg={6} md={12} xs={24}>
                    <div className='box'>
                        <div className='info'>
                            <MailOutlined />
                            <p>15,990</p>
                            <span>Emails sent</span>
                        </div>
                       <div className='charts'>
                            <RingChart value={.82}/> 
                       </div>
                    </div>
                </Col>
                <Col lg={6} md={12} xs={24}>
                    <div className='box'>
                        <div className='info'>
                            <MailOutlined />
                            <p>15,990</p>
                            <span>Emails sent</span>
                        </div>
                       <div className='charts'>
                            <RingChart value={.49}/> 
                       </div>
                    </div>
                </Col>
            </Row>
        </section>
    </>
    )
}

export default Numbers