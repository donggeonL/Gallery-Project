import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Container = styled.div`
  padding: 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  background-size: cover;
  gap: 15px;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
`;

const Logo = styled.div`
  width: auto;
  height: auto;
  color: white;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover{
    cursor: pointer;
  }
`;

const Box = styled.div`
  width: auto;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &:hover{
    cursor: pointer;
  }
`;

// 세션 스토리지에 따른 스타일 다르게 하기
function Logging() {
    const history = useHistory();
    const log = sessionStorage.getItem("id");
    if (log === null) {
        return <Box  onClick={() => history.push("/login-detail")}> 로그인 </Box>;

    }
    else if (log != null) {
        return <Box onClick={Logout}> 로그아웃 </Box>;
    }
}

// 로그 아웃시 세션스토리지 삭제 및 새로고침
function Logout() {
    sessionStorage.removeItem("id");
    return  window.location.replace("/");

}

const Header = () => {
    const history = useHistory();

    return (
        <Container>
            <BoxWrapper>
                <Logo onClick={() => history.push("/")}>
                    CLOUD Gallery
                </Logo>
            </BoxWrapper>
            <BoxWrapper>
                <Box onClick={() => history.push("/artist-detail")}>
                    작가
                </Box>
                <Box onClick={() => history.push("/product")}>
                    작품
                </Box>
            </BoxWrapper>
            <BoxWrapper>
                <Box onClick={() => history.push("/basket-detail")}>
                    장바구니
                </Box>
                {Logging()}
            </BoxWrapper>
        </Container>
    );
};
export default Header;
