import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private storageKey = 'pessoas';

  constructor() {}

  obterPessoas(): Pessoa[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

  adicionarPessoa(pessoa: Pessoa): void {
    const pessoas = this.obterPessoas();
    pessoa.id = new Date().getTime(); // ID simples com timestamp
    pessoas.push(pessoa);
    this.salvarLocal(pessoas);
  }

  atualizarPessoa(pessoa: Pessoa): void {
    const pessoas = this.obterPessoas().map(p => p.id === pessoa.id ? pessoa : p);
    this.salvarLocal(pessoas);
  }

  removerPessoa(id: number): void {
    const pessoas = this.obterPessoas().filter(p => p.id !== id);
    this.salvarLocal(pessoas);
  }

  obterPorId(id: number): Pessoa | undefined {
    return this.obterPessoas().find(p => p.id === id);
  }

  private salvarLocal(pessoas: Pessoa[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(pessoas));
  }
}