package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Contato;

import jakarta.annotation.PostConstruct;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class ContatoController {
    
    private List<Contato> contatos = Arrays.asList( new Contato(1, "João Silva", "João", "123456789", null, null, null, null, null, null),
                                                    new Contato(2, "Maria Oliveira", "Maria", "987654321", null, null, null, null, null, null),
                                                    new Contato(3, "Carlos Pereira", "Carlos", "456789123", null, null, null, null, null, null));

    
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
        return contatos;
    }

}
