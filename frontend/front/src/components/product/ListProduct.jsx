import React, {useState, useEffect} from 'react';
import ProductService from "../../service/ProductService";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
`;

const Section__container = styled.section`
  padding: 50px;
  text-align: center;
  margin: auto;
  max-width: 1200px;
`;

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

const Job = styled.div`
  display: flex;
  align-items: center;
`;

const Job__description = styled.div`
  margin: 0 16px;
  text-align: left;
`;

const Job__name = styled.div`
  color: white;
  font-size: 30px;
`;

const Job__period = styled.div`
  color: white;
  font-size: 30px;
`;

const Job__status = styled.div`
  color: white;
  font-size: 20px;
`;


const Table1 = styled.th`
  justify-content: center;
  color: aliceblue;
  font-size: small;
  border: 1px solid;
  text-align: center;
`;

const ListProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = () => {
        ProductService.getAllProduct().then((response) => {
            setProduct(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container className="container">
            <Text className="text-center"> 작품 리스트 </Text>
            <Link to="/add-product" className="btn btn-primary mb-2"> 작품 추가하기 </Link>
            <TableWrapper>
                <tbody>
                {/*{*/}
                {/*    product.map(*/}
                {/*        product =>*/}
                {/*            <tr key={product.id}>*/}
                {/*                <Table>*/}
                {/*                    <Link class="btn btn-outline-light"*/}
                {/*                          to={`/product-detail/${product.id}`}> {product.name} </Link>*/}
                {/*                </Table>*/}
                {/*                <Table>*/}
                {/*                    <Image src={"http://localhost:10002/" + product.fileinfo}></Image>*/}
                {/*                </Table>*/}
                {/*                <Table>{product.price}</Table>*/}
                {/*                <Table>{product.product_status}</Table>*/}
                {/*                <Table>{product.createtime}</Table>*/}
                {/*            </tr>*/}
                {/*    )*/}
                {/*}*/}

                {
                    product.map(
                        product =>
                            <Section__container>
                                <Job>
                                    <Image src={"http://localhost:10002/" + product.fileinfo}></Image>
                                    <Job__description>
                                        <Link class="btn btn-outline-light" to={`/product-detail/${product.id}`}> 제목
                                            : {product.name} </Link>
                                        <Job__name>{product.price}</Job__name>
                                        <Job__period>{product.product_status}</Job__period>
                                        <Job__status>{product.createtime}</Job__status>
                                    </Job__description>
                                </Job>
                            </Section__container>
                    )
                }
                </tbody>
            </TableWrapper>
        </Container>
    );
};

export default ListProduct;