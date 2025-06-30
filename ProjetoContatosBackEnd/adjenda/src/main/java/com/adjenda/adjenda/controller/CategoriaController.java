package com.adjenda.adjenda.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.adjenda.adjenda.models.Categoria;

@RestController
public class CategoriaController {
    
    private List<Categoria> categorias = Arrays.asList(
        new Categoria(1, "Amigos"),
        new Categoria(2, "Familiares"),
        new Categoria(3, "Colegas de Trabalho"),
        new Categoria(4, "Escola"),
        new Categoria(5, "Faculdade"),
        new Categoria(6, "Outros")
    );

    @GetMapping("categorias/{id}")
    public ResponseEntity<Categoria> getCategoria(@PathVariable int id) {
 
        Categoria cat = categorias.stream()
                                  .filter(c -> c.getId() == id)
                                  .findFirst()
                                  .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
        return ResponseEntity.ok(cat);
    }

    @GetMapping("categorias")
    public List<Categoria> getAllCategorias() {
        return categorias;
    }
}

