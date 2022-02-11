import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {route} from "express/lib/router";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 15%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 10px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 10px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: 0.2s ease-out forwards;
  }
`;

const Button1 = styled.button`
  max-width: 100%;
  padding: 10px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #50BCDF;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(0, 103, 163);
    animation: 0.2s ease-out forwards;
  }
`;

const handleClick = function(e) {
    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;
    // alert(email + password)
    const ajax = fetch(`http://localhost:10002/login-detail?email=${email}&password=${password}`)
    ajax.then((res) => {
        return res.json();
    }).then((result) => {
        alert(result.msg);

        // 로그인 성공일 때
        if(result.code == 200) {
            // localstorage 저장
            // localStorage.setItem("id", email);
            sessionStorage.setItem("id", email);
            // const id = localStorage.getItem("id");
            document.location.href="/";
        }

    });
    e.preventDefault();
    e.stopPropagation();

}

const LoginPage = () => {
    const history = useHistory();
    return (
        <Wrapper>
            <Form>
                <Input
                    placeholder="이메일"
                    type="email"
                    name="email"  // 데이터베이스
                />
                <Input
                    placeholder="비밀번호"
                    type="password"
                    name="password" // 데이터베이스
                />
                <Button onClick={handleClick}> Sign In </Button>
                <Button1 onClick={() => history.push("Signup")}> Sign Up </Button1>
            </Form>
        </Wrapper>
    );
};

export default LoginPage;