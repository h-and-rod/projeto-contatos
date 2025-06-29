package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ContactsController {
    
    @GetMapping("contacts")
    public String getContacts() {
        return new String("Hello");
    }
    

}
