import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import ProductService from "../../service/ProductService";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
`;
const AddProduct = () => {

    const [name, setname] = useState('')
    const [info, setinfo] = useState('')
    const [price, setprice] = useState('')
    const [product_type, setproduct_type] = useState('')
    const [size_hight, setsize_hight] = useState('')
    const [size_width, setsize_width] = useState('')
    const [file, setfile] = useState('')

    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();

        const product = new FormData();
        product.append("name", name);
        product.append("info", info);
        product.append("price", price);
        product.append("product_type", product_type);
        product.append("size_hight", size_hight);
        product.append("size_width", size_width);

        if (id) {
            const file = document.querySelector('input[name=file]').files[0];
            console.log(file)
            product.append("file", file);
            ProductService.updateProduct(id, product).then((response) => {
                history.push('/product')
            }).catch(error => {
                console.log(error)
            })
        } else {
            const file = document.querySelector('input[name=file]').files[0];
            console.log(file)
            product.append("file", file);
            ProductService.createProduct(product).then((response) => {
                console.log(response.data)
                history.push('/product');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        ProductService.getProductById(id).then((response) => {
            setname(response.data.name)
            setproduct_type(response.data.product_type)
            setinfo(response.data.info)
            setprice(response.data.price)
            setsize_hight(response.data.size_hight)
            setsize_width(response.data.size_width)
            setfile(response.data.file)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center"> 작품 수정하기 </h2>
        } else {
            return <h2 className="text-center">작품 게시하기</h2>
        }
    }

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 이름 :</label>
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 가격 :</label>
                                    <input
                                        type="text"
                                        placeholder="Price"
                                        name="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 소개 :</label>
                                    <input
                                        type="info"
                                        placeholder="Product Info"
                                        name="info"
                                        className="form-control"
                                        value={info}
                                        onChange={(e) => setinfo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 종류 :</label>
                                    <input
                                        type="product_type"
                                        placeholder="product_type"
                                        name="product_type"
                                        className="form-control"
                                        value={product_type}
                                        onChange={(e) => setproduct_type(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 높이 :</label>
                                    <input
                                        type="size_hight"
                                        placeholder="size_hight"
                                        name="size_hight"
                                        className="form-control"
                                        value={size_hight}
                                        onChange={(e) => setsize_hight(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 길이 :</label>
                                    <input
                                        type="size_width"
                                        placeholder="size_width"
                                        name="size_width"
                                        className="form-control"
                                        value={size_width}
                                        onChange={(e) => setsize_width(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> 작품 이미지 :</label>
                                    <input
                                        type="file"
                                        name="file"
                                        className="form-control"
                                        onChange={(e) => setfile(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => {
                                    saveOrUpdateProduct(e);
                                    e.preventDefault();
                                }}>Submit
                                </button>
                                <Link to="/product" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </Container>
    );
};
export default AddProduct;