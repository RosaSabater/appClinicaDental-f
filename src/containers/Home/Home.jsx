import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Card, Col} from 'antd';
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
                        <Col span={5}>
                            <Card className="card" title="Tratamientos" bordered={false}>
                                Tratamientos
                            </Card>
                        </Col>

                        <Col span={5}>
                            <Card className="card" title="Ortodoncias" bordered={false}>
                                Ortodoncias
                            </Card>
                        </Col>
                        
                        <Col span={5}>
                            <Card className="card" title="Nuestros profesionales" bordered={false}>
                                Nuestros profesionales
                            </Card>
                        </Col>
                </div>

            </>
        )


    }

}

export default Home;