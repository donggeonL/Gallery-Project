import axios, {Axios} from "axios";

// const PRODUCT_BASE_REST_API_URL = 'http://52.79.178.195:10002/api/product'
const PRODUCT_BASE_REST_API_URL = 'http://localhost:10002/api/product'

class ProductService{
    getAllProduct(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }

    createProduct(product){

        return axios({
            url: PRODUCT_BASE_REST_API_URL,
            method: 'post',
            data: product,
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    }

    getProductById(productId){
        return axios.get(PRODUCT_BASE_REST_API_URL + '/' + productId);
    }

    updateProduct(productId, product){
        // return axios.put(PRODUCT_BASE_REST_API_URL + '/' +productId, product);
        return axios({
            url: PRODUCT_BASE_REST_API_URL + '/' +productId, product,
            method: 'put',
            data: product,
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + productId);
    }
}

export default new ProductService();