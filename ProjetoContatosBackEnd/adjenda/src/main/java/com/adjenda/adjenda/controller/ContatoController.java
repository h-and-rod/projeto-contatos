package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;

import com.adjenda.adjenda.models.Contato;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ContatoController {
    
    @GetMapping("contato")
    public Contato getContatos() {
        
        Contato contato = new Contato();

        return contato;
    }

    @GetMapping("contatos")
    public List<Contato> getAllContatos() {
    
        List<Contato> listContatos = new ArrayList<>();

        return listContatos;
    }

}



