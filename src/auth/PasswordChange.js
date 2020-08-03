import React from 'react';
import styled from "styled-components";
import { useFirebase } from '../firebase/useFirebase'
import { Form, Input, Button, Layout, message, PageHeader } from "antd";
import { Link, useNavigate } from "@reach/router";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function PasswordChange() {

    const { user } = useFirebase();
    const navigate = useNavigate();

    const onFormFinish = (values) => {
        if (user) {
            if (values.new_password === values.verify_password) {
                user.updatePassword(values.new_password).then(function() {
                    message.success("Password was updated.");
                    navigate('/');
                  }).catch(function(error) {
                    message.errror(error.message);
                  });
            }
        } else {
            navigate('/login');
        }
    }



    return (
        <MainLayout>
            <PageHeader title="Password change" />
            <Form onFinish={onFormFinish}>

                <Form.Item
                    label="New password"
                    name="new_password"
                    rules={[
                        {
                        required: true,
                        message: "Please input your new password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Verify Password"
                    name="verify_password"
                    rules={[
                        {
                        required: true,
                        message: "Please input your new password again!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Change Password
                    </Button>
                </Form.Item>
            </Form>

            <Link to="/">Cancel</Link>
        </MainLayout>
    );
}

export default PasswordChange;
