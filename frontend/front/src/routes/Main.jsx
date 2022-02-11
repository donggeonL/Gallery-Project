import React from "react";
import styled from "styled-components";
import NewArtist from "../components/main/NewArtist";
import ArtGallery from "../components/main/ArtGallery";
import MainSlider from "../components/main/MainSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
    return (
        <Container>
            <MainSlider/>
            <ArtGallery/>
            <NewArtist/>
        </Container>
    );
};

export default Main;