import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoas = this.pessoaService.obterPessoas();
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir esta pessoa?')) {
      this.pessoaService.removerPessoa(id);
      this.carregarPessoas();
    }
  }

  visualizar(id: number): void {
    this.router.navigate(['/detalhes', id]);
  }

  editar(id: number): void {
    this.router.navigate(['/edicao', id]);
  }
}