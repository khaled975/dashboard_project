import { Badge, Col, Row } from 'antd'
import React from 'react'
import  {LineChart}  from '../charts/Charts'
import './stats.css'
 const Stats = ()=>{
    return( 
    <>
        <section className='stats-sec'>
            <Row gutter={[16,16]} justify={'center'}>
                <Col lg={14} xs={24}>
                    <div className='box'>
                        <LineChart/>
                    </div>
                </Col>
                <Col lg={10} xs={24}>
                        <ul>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                            <li>
                                <div className='id'>
                                    <h4>9ad9jd2</h4>
                                    <p>john doe</p>
                                </div>
                                <p>2023/07/09</p>
                                <Badge count={'$848'} style={{backgroundColor:'#00C49F'}} overflowCount={2000}></Badge>
                            </li>
                        </ul>
                </Col>
            </Row>
        </section>
    </>
    )
}

export default Stats