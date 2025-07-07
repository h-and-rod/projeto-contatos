import { Categoria } from "./Categoria";

export interface Contato {
    id: number;
    nome: string;
    apelido: string;
    telefone: string;
    email: string;
    categoria: Categoria;
    endereco: string;
    data_nascimento: string;
    bloqueado: boolean;
    favorito: boolean;
}