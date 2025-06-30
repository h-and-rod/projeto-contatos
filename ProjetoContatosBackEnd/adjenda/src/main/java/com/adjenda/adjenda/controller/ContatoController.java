package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;

import com.adjenda.adjenda.models.Contato;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ContatoController {
    
    @GetMapping("contacts")
    public Contato getContatos() {
        
        Contato contato = new Contato();

        return contato;
    }
    

}
