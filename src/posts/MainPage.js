import React from "react";
import styled from "styled-components";
import { Button, Layout } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link } from "@reach/router";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function MainPage() {
  const { user, signout } = useFirebase();

  const onLogoutClick = () => {
    try {
      signout();
    } catch (error) {
      console.log("error logging out");
    }
  };

  if (!user) {
    return (
      <MainLayout>
        <div>
          Please login in <Link to="/login">here</Link>
        </div>
        <div>
          or register <Link to="/register">here</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Button onClick={onLogoutClick}>Logout</Button>
      <Link to="/passwordChange">Change password</Link>
    </MainLayout>
  );
}

export default MainPage;
