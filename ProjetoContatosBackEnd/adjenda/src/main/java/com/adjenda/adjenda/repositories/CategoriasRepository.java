package com.adjenda.adjenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adjenda.adjenda.models.Categoria;

public interface CategoriasRepository extends JpaRepository <Categoria, Integer> {
        
}
