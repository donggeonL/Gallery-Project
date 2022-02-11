package com.adopter.gallery;

import com.adopter.gallery.model.Basket;
import com.adopter.gallery.model.Product;
import com.adopter.gallery.repository.BasketRepository;
import com.adopter.gallery.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BoardTest {

    @Autowired
    ProductRepository productRepository;

    @Test
    void contextLoads(){
        Product product = new Product();
        product.setProduct_status("미 결제");
        product.setProduct_type("그림");
        product.setPrice(10000);
        product.setName("센텀 풍경");
        product.setInfo("센텀 풍경입니다");
        product.setSize_hight("150");
        product.setSize_width("200");

        productRepository.save(product);
    }
}
