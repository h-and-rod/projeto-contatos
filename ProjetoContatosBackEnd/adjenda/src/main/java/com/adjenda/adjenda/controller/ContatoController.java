package com.adjenda.adjenda.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Contato;
import com.adjenda.adjenda.repositories.ContatoRepository;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@CrossOrigin
@RequestMapping("contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Contato> getContato(@PathVariable int id) {
        return contatoRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found"));
    }

    @GetMapping
    public List<Contato> getAllContatos() {
        return contatoRepository.findAll();
    }

    @PostMapping
    public Contato createContato(@RequestBody Contato contato) {
        return contatoRepository.save(contato);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContato(@PathVariable int id) {
        if (!contatoRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found");
        }
        contatoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contato> updateContato(@PathVariable int id, @RequestBody Contato contatoAtualizado) {
        return contatoRepository.findById(id)
            .map(contato -> {
                contato.setNome(contatoAtualizado.getNome());
                contato.setApelido(contatoAtualizado.getApelido());
                contato.setTelefone(contatoAtualizado.getTelefone());
                contato.setEmail(contatoAtualizado.getEmail());
                contato.setCategoria(contatoAtualizado.getCategoria());
                contato.setEndereco(contatoAtualizado.getEndereco());
                contato.setData_nascimento(contatoAtualizado.getData_nascimento());
                contato.setBloqueado(contatoAtualizado.getBloqueado());
                contato.setFavorito(contatoAtualizado.getFavorito());
                Contato atualizado = contatoRepository.save(contato);
                return ResponseEntity.ok(atualizado);
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found"));
    }

    
}
