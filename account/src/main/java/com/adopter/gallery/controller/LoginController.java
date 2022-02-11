package com.adopter.gallery.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}