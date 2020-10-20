import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';
import './Home.scss';

class Home extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {

        return (
            <>

                <Carousel autoplay>
                    <div className="cajafotos">
                        <img alt="foto1" src="images/dentist1.jpg" className="foto"></img>
                    </div>
                    <div className="cajafotos">
                        <img alt="foto2" src="images/dentist2.jpg" className="foto"></img>
                    </div>
                    <div className="cajafotos">
                        <img alt="foto3" src="images/dentist3.jpg" className="foto"></img>
                    </div>
                    <div className="cajafotos">
                        <img alt="foto4" src="images/dentist4.jpg" className="foto"></img>
                    </div>
                </Carousel>

                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>

            </>
        )


    }

}

export default Home;