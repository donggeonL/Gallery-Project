import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductService from "../../service/ProductService";

const Container = styled.div`
  justify-content: center;
  align-content: center;
  padding-top: 30px;
  padding-bottom: 75vh;
  margin: 20px 20px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const Pont = styled.th`
  color: white;
  text-align: center;
`;

const Pont1 = styled.th`
  text-align: center;
`;

const Button = styled.td`
  align-content: center;
  display: flex;
  justify-content: center;
`;

const Paybtn = styled.button`
  display: inline;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

const H2 = styled.h2`
    text-align: center;
  color: white;
`;

const BusketList = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        ProductService.getProductById().then((response) => {
            setProduct(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container>
            <H2> 장바구니 내역 </H2>
            <br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <Pont>작품명</Pont>
                        <Pont>작품사진</Pont>
                        <Pont>가격</Pont>
                        <Pont>결제상태</Pont>
                        <Pont>결제</Pont>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        product.map(
                            product =>
                                <tr key={product.id}>
                                    <Pont1> {product.name} </Pont1>
                                    <Pont1 >
                                        <Image src={"http://localhost:10002/" + product.fileinfo}> 사진 </Image>
                                    </Pont1>
                                    <Pont1> {product.price} </Pont1>
                                    <Pont1> {product.product_status} </Pont1>
                                    <Button>
                                        <Paybtn>
                                            결제
                                        </Paybtn>
                                    </Button>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </Container>
    );

}

export default BusketList;