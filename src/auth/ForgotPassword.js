import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Layout, PageHeader, message } from "antd";
import { Link } from "@reach/router";
import { useNavigate } from "@reach/router";
import { useFirebase } from "../firebase/useFirebase";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function ForgotPassword() {
  const { resetPassword } = useFirebase();
  const navigate = useNavigate();

  const onFormFinish = (values) => {
    resetPassword(values.email).then(function() {
        message.success("Password reset was sent to your email");
        navigate('/login')
      }).catch(function(error) {
        message.error(error.message);
      });
  };

  return (
    <MainLayout>
      <PageHeader title="Login" />
      <Form onFinish={onFormFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Reset password
          </Button>
        </Form.Item>
      </Form>

        <Link to="/login">Cancel</Link>
    </MainLayout>
  );
}

export default ForgotPassword;
