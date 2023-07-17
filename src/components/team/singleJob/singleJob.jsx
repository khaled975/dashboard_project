import { Col, Row } from "antd"
import { useParams } from "react-router-dom"

const SingleJob = ()=>{
    const params = useParams()
    return(
        <>
            <section className="singleJob-sec">
                <Row>
                    <Col>
                        <p>name : </p>
                        <p>job : </p>
                        <p>department : </p>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default SingleJob