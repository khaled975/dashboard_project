import { Row ,Col} from 'antd'
import React from 'react'
import './error.css'
import img from '../../images/Error-bg.png'
const Error = ()=>{
    return (
        <>
            <section className='error-page'>
               <Row align={'middle'} >
                <Col className='box'>
                    <img src={img} alt='img'/>
                </Col>
                <Col className='info'>
                    <h1>Oopps!..404 Not Found</h1>
                </Col>
               </Row>
            </section>
        </>
    )
}

export default Error