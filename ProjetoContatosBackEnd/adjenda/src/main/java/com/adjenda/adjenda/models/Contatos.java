package com.adjenda.adjenda.models;

public class Contatos {
    private int id;
    private String nome;
    private String apelido;
    private String telefone;
    private String email;
    private String categoria;
    private String endereco;
    private String data_de_nascimento;
    private Boolean bloqueado;
    private Boolean favorito;
    
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
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getData_de_nascimento() {
        return data_de_nascimento;
    }
    public void setData_de_nascimento(String data_de_nascimento) {
        this.data_de_nascimento = data_de_nascimento;
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

