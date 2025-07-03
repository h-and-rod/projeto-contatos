package com.adjenda.adjenda.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "TBL_CONTATO")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String apelido;
    private String telefone;
    private String email;
    @ManyToOne
    private Categoria categoria;
    private String endereco;
    private String data_nascimento;
    private Boolean bloqueado;
    private Boolean favorito;
    

    public Contato(int id, String nome, String apelido, String telefone, String email, Categoria categoria, String endereco, String data_de_nascimento, Boolean bloqueado, Boolean favorito) {
        this.id = id;
        this.nome = nome;
        this.apelido = apelido;
        this.telefone = telefone;
        this.email = email;
        this.categoria = categoria;
        this.endereco = endereco;
        this.data_nascimento = data_de_nascimento;
        this.bloqueado = bloqueado;
        this.favorito = favorito;
    }

    public Contato() {
    
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getApelido() {
        return apelido;
    }
    public void setApelido(String apelido) {
        this.apelido = apelido;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getData_de_nascimento() {
        return data_nascimento;
    }
    public void setData_de_nascimento(String data_de_nascimento) {
        this.data_nascimento = data_de_nascimento;
    }
    public Boolean getBloqueado() {
        return bloqueado;
    }
    public void setBloqueado(Boolean bloqueado) {
        this.bloqueado = bloqueado;
    }
    public Boolean getFavorito() {
        return favorito;
    }
    public void setFavorito(Boolean favorito) {
        this.favorito = favorito;
    }

    


}

