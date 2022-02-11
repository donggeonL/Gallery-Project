package com.adopter.gallery.service;

import com.adopter.gallery.model.Basket;
import com.adopter.gallery.repository.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BasketService {

    @Autowired
    private BasketRepository basketRepository;

    public List<Basket> getAllBasket(){
        return basketRepository.findAll();
    }
}
