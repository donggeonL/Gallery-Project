import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Main from "./routes/Main";
import Header from "./common/Header";
import ArtistDetail from "./routes/ArtistDetail";
import LoginDetail from "./routes/LoginDetail";
import Footer from "./common/Footer";
import BasketDetail from "./routes/BasketDetail";
import SignUpDetail from "./routes/SignUpDetail";
import ListProduct from "./components/product/ListProduct";
import AddProduct from "./components/product/AddProduct";
import DetailProduct from "./components/product/DetailProduct";

const Container = styled.div`
    background-color: gray;
`;

function App() {
    return (
        <Container>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/artist-detail" exact component={ArtistDetail}/>
                    <Route path="/login-detail" exact component={LoginDetail}/>
                    <Route path="/basket-detail" exact component={BasketDetail}/>
                    <Route path="/signup" exact component={SignUpDetail}/>
                    <Route path="/product" exact component={ListProduct}></Route>
                    <Route path="/add-product" exact component={AddProduct}></Route>
                    <Route path="/edit-product/:id" exact component={AddProduct}></Route>
                    <Route path="/product-detail/:id" exact component={DetailProduct}></Route>
                </Switch>
                <Footer/>
            </Router>
        </Container>
    );
}

export default App;
