import React, {useState, useEffect} from 'react';
import ProductService from "../../service/ProductService";
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const Text = styled.h2`
  padding-bottom: 20px;
  color: white;
`;
const Container = styled.tbody`
  padding-top: 30px;
  padding-bottom: 33vh;
  display: block;
  justify-content: center;
  align-items: center;
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


const DetailProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductById()
    }, [])

    const {id} = useParams();

    const getProductById = () => {
        ProductService.getProductById(id).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

     const deleteProduct = (productId) => {
        ProductService.deleteProduct(productId).then((response) => {
            getProductById();
            window.location.replace("/product");
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <Container className="container">
            <Text className="text-center"> 작품 : {product.name} </Text>
            <TableWrapper>
                <thead>
                <Table1> 작품 명</Table1> {/* name */}
                <Table1> 사진</Table1> {/* file */}
                <Table1> 가격</Table1> {/* pricwe */}
                <Table1> 결제 상태</Table1> {/* product_status */}
                <Table1> 크기 </Table1> {/* createtime */}
                <Table1> 작품 종류</Table1> {/* createtime */}
                <Table1> 게시 일</Table1> {/* createtime */}
                <Table1> 수정 일</Table1> {/* createtime */}
                <Table1> 수정 및 삭제</Table1> {/* createtime */}
                </thead>
                <tbody>
                            <tr key={product.id}>
                                <Table> {product.name} </Table>
                                <Table >
                                    <Image src={"http://localhost:10002/" + product.fileinfo}></Image>
                                </Table>
                                <Table>{product.price}</Table>
                                <Table>{product.product_status}</Table>
                                <Table>{product.size_hight} * {product.size_width}</Table>
                                <Table>{product.product_type}</Table>
                                <Table>{product.createtime}</Table>
                                <Table>{product.updatetime}</Table>

                                <Table>
                                    <Link class="btn btn-outline-light"
                                          to={`/edit-product/${product.id}`}>수정</Link>
                                    <Link className="btn btn-outline-light"  to={"/product"} onClick={() => deleteProduct(product.id)  }
                                            style={{marginLeft: "9px"}}> 삭제
                                    </Link>
                                    <Link className="btn btn-outline-light"  to={`/product-detail/${product.id}`} onClick={() => getProductById(product.id)}
                                          style={{marginLeft: "9px"}}> 담기
                                    </Link>
                                </Table>
                            </tr>

                </tbody>
            </TableWrapper>
        </Container>
    );
};

export default DetailProduct;