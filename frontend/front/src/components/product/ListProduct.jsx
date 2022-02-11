import React, {useState, useEffect} from 'react';
import ProductService from "../../service/ProductService";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
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
                <thead>
                <Table1> 작품</Table1> {/* name */}
                <Table1> 사진</Table1> {/* fileinfo */}
                <Table1> 가격</Table1> {/* price */}
                <Table1> 결제 상태</Table1> {/* product_status */}
                <Table1> 게시 일</Table1> {/* createtime */}

                </thead>
                <tbody>
                {
                    product.map(
                        product =>
                            <tr key={product.id}>
                                <Table>
                                    <Link class="btn btn-outline-light"
                                          to={`/product-detail/${product.id}`}> {product.name} </Link>
                                </Table>
                                <Table>
                                    <Image src={"http://localhost:10002/" + product.fileinfo}></Image>
                                </Table>
                                <Table>{product.price}</Table>
                                <Table>{product.product_status}</Table>
                                <Table>{product.createtime}</Table>
                            </tr>
                    )
                }
                </tbody>
            </TableWrapper>
        </Container>
    );
};

export default ListProduct;