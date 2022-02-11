import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { KakaoIcon } from "./SocialIcons";
import {useState} from "react";

const Kakaobtn = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  border: solid 2px;
  border-radius: 15px;
  width: 91vh;
`;

const Box = styled.div`
    display: flex;
  justify-content: space-between;
  justify-items: center ;
  
`;

const { Kakao } = window;
function SocialLogin() {
    const kakaoLoginClickHandler = async () => {
        Kakao.Auth.login({
            success: function (authObj) {
                console.log("authObj : ", authObj);
                Kakao.API.request({
                    url: "/v2/user/me",
                    success: function (response) {
                        console.log("닉네임 : ", response.kakao_account.profile.nickname);
                        console.log("이메일 : ", response.kakao_account.email);
                        console.log("id : ", response.id);
                        const result = {id:response.id}
                        fetch("http://localhost:10001/login-detail", {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",
                                // "Authorization":"Bearer "+ authObj.access_token
                            },
                            body: JSON.stringify(response),
                            dataType: "text/plain",
                        })
                            .then(function (jwtToken) {
                                // console.log(jwtToken.text());
                                // let test = jwtToken.sj
                                // console.log(test);
                                return jwtToken.text();
                            })
                            .then(function (jwtToken) {
                                console.log(jwtToken);
                                localStorage.setItem("Authentication", "Bearer " + jwtToken); // 이렇게 하면 웹 브라우저에 저장
                                // localStorage.setItem("jwtToken", jwtToken);
                            });
                        // console.log(jwtToken);
                        // if (jwtToken.status === 200) {
                        //   console.log(2, jwtToken.data); // 토큰
                        //   localStorage.setItem("jwtToken", jwtToken.data); // 이렇게 하면 웹 브라우저에 저장
                        // }
                    },
                    fail: function (error) {
                        console.log(error);
                    },
                });
            },
        });
    };
    return (
        <article className="socialLogin">
            <Kakaobtn className="btn kakao" onClick={kakaoLoginClickHandler}>
                <Box className="kakaoIcon">
                    <KakaoIcon />카카오톡
                </Box>
            </Kakaobtn>
        </article>
    );
}

export default SocialLogin;