import React from "react";
import { Row, Col } from 'antd';
import './my.css'
class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{

            }
        };
    }

    componentDidMount() {
        console.log(0)
    }

    render() {
        return (
            <div className="my">
                <Row className="row">
                    <Col span={6} push={18}>
                        <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" className="avtor"/>
                    </Col>
                    <Col span={18} pull={6}>
                        <p>用户名</p>
                        <p>用户id</p>
                    </Col>
                </Row>
                <Row className="row">
                    <Col span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Personal;
