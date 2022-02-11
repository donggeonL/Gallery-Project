package com.adopter.gallery.controller;

import com.adopter.gallery.exception.ResourceNotFoundException;
import com.adopter.gallery.model.Basket;
import com.adopter.gallery.model.Product;
import com.adopter.gallery.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BasketController {
    @Autowired
    private BasketService basketService;

    @GetMapping("/basket")
    public List<Basket> getAllBasket() {

        return basketService.getAllBasket();
    }


}
