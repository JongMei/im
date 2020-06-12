import {Form, Input, Avatar, Button,Alert } from 'antd';
import React from "react";
import { withRouter } from "react-router-dom";
import {InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {Link} from "react-router-dom";
import './login.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Login extends React.Component {
    constructor(props) {
        console.log(props,'onde')
        super(props)
        this.state = {
            tips:''
        }
    }

    onFinish = values => {
        console.log('Success:', values);
        let postData ={
            name:values.username,
            password:values.password
        }
        fetch('//localhost:3001/api/signIn', {
            // post提交
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(postData)//把提交的内容转字符串
        })
        .then(res => res.json())
        .then(data => {
            if(data.code != 200){
                this.setState({
                    tips:data.message
                })
            }else{
                //注册成功，跳转到好友列表
                this.props.history.push('/List')
            }
        })
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="main">
                <div className="row"><Avatar size={64} icon={<UserOutlined/>}/></div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label=""
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请填写用户名，5-10个字符',
                            },
                        ]}
                    >
                        <Input placeholder="请填写用户名，5-10个字符"/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请填写密码，6-20个字符',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="请填写密码，6-20个字符"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Form.Item>
                    {this.state.tips.length > 0 ?
                        <Alert className="tips"  message={this.state.tips} type="error" showIcon />:''
                    }
                    <Form.Item {...tailLayout}>
                        <Button className="btn" type="primary" htmlType="submit" shape="round" size='large'>
                            登录
                        </Button>
                    </Form.Item>
                    <Link to="/sign" className="singbtn">还没账号？点击去注册！</Link>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login);