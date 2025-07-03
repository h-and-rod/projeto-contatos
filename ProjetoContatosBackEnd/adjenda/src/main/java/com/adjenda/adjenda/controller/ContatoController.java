package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Contato;
import com.adjenda.adjenda.repositories.ContatoRepository;

import jakarta.annotation.PostConstruct;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin
public class ContatoController {
    
    private List<Contato> contatos = Arrays.asList();

    @Autowired
    private ContatoRepository contatoRepository;
    
    @GetMapping("contatos/{id}")
    public ResponseEntity<Contato> getContato(@PathVariable int id) {
 
        Contato contato = contatos.stream()
                                  .filter(c -> c.getId() == id)
                                  .findFirst()
                                  .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found"));
        return ResponseEntity.ok(contato);
    }

    @GetMapping("contatos")
    public List<Contato> getAllContatos() {
        return contatoRepository.findAll();
    }

}
