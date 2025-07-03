package com.adjenda.adjenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adjenda.adjenda.models.Contato;

public interface ContatoRepository extends JpaRepository <Contato, Integer> {
        
}