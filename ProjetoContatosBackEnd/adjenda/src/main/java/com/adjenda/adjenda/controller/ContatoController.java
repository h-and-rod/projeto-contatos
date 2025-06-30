package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Contato;

import jakarta.annotation.PostConstruct;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class ContatoController {
    
    private List<Contato> contatos = new ArrayList<>();

    @PostConstruct
    public void init(){
        Contato contato1 = new Contato();
        contato1.setNome("João Silva");
        contato1.setEmail("joao.silva@email.com");
        contato1.setTelefone("11999999999");

        Contato contato2 = new Contato();
        contato2.setNome("Maria Souza");
        contato2.setEmail("maria.souza@email.com");
        contato2.setTelefone("11888888888");

        Contato contato3 = new Contato();
        contato3.setNome("Carlos Pereira");
        contato3.setEmail("carlos.pereira@email.com");
        contato3.setTelefone("11777777777");

        contatos.add(contato1);
        contatos.add(contato2);
        contatos.add(contato3);
    }
    
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



