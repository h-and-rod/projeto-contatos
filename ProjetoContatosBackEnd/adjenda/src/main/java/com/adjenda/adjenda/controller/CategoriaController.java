package com.adjenda.adjenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Categoria;
import com.adjenda.adjenda.repositories.CategoriasRepository;

@RestController
public class CategoriaController {
    
    @Autowired
    private CategoriasRepository categoriasRepository;

    @GetMapping("categorias/{id}")
    public ResponseEntity<Categoria> getCategoria(@PathVariable int id) {
    Categoria cat = categoriasRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    return ResponseEntity.ok(cat);
}

    @GetMapping("categorias")
    public List<Categoria> getAllCategorias() {
        return categoriasRepository.findAll();
    }
}

