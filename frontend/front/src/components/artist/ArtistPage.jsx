import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ArtistService from "../../service/ArtistService";



const Text = styled.h2`
  color: white;
`;

const Container = styled.tbody`
  display: block;
  padding-bottom: 30vh;
  padding-top: 30px;
`;

const TableWrapper = styled.table`
  display: block;
  justify-content: center;
  align-items: center;
`;

const Table = styled.td`
  height: 100px;
  width: 100vh;
  color: aliceblue;
  font-size: small;
  border: 1px solid;
  text-align: center;
`;

const Table1 = styled.th`
  justify-content: center;
  color: aliceblue;
  font-size: small;
  border: 1px solid;
  text-align: center;
`;

const ArtistPage = () => {
    const [artist, setartist] = useState([])
    useEffect(() => {

        getAllArtist();
    }, [])

    const getAllArtist = () => {
        ArtistService.getAllArtist().then((response) => {
            setartist(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container className="container">
            <Text className="text-center"> 작가 리스트 </Text>
            <TableWrapper>
                <thead>
                <Table1> 작가 </Table1> {/* name */}
                <Table1> 지역 </Table1> {/* price */}
                <Table1> E-mail </Table1> {/* product_status */}
                <Table1> Tel </Table1> {/* createtime */}

                </thead>
                <tbody>
                {
                    artist.map(
                        artist =>
                            <tr key={artist.id}>
                                <Table> {artist.name} </Table>
                                <Table>{artist.country}</Table>
                                <Table>{artist.email}</Table>
                                <Table>{artist.p_number}</Table>
                            </tr>
                    )
                }
                </tbody>
            </TableWrapper>
        </Container>
    );
};

export default ArtistPage;