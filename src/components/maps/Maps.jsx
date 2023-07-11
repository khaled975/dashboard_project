import { Col, Row } from 'antd'
import React from 'react'
import { AreaChart, BarsChart, LiquidChart } from '../charts/Charts'
import './maps.css'
const Maps = ()=>{
    return(
        <>
        <section className='maps-sec'>
            <Row gutter={[16,16]}>
                <Col lg={8} md={12} xs={24}>
                    <div className='box'>
                        <LiquidChart/>
                    </div>
                </Col>
                <Col lg={16} md={12} xs={24}>
                    <div className='box'>
                        <BarsChart/>
                        {/* <AreaChart/> */}
                    </div>
                </Col>
            </Row>
        </section>
        </>
    )
}


export default Maps