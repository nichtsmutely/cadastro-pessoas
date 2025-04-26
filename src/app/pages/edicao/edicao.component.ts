import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {
  form!: FormGroup;
  pessoaId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoaId = Number(this.route.snapshot.paramMap.get('id'));
    const pessoa = this.pessoaService.obterPorId(this.pessoaId);

    if (!pessoa) {
      alert('Pessoa não encontrada.');
      this.router.navigate(['/listagem']);
      return;
    }

    this.form = this.fb.group({
      nome: [pessoa.nome, Validators.required],
      email: [pessoa.email, [Validators.required, Validators.email]],
      telefone: [pessoa.telefone]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const pessoaAtualizada: Pessoa = {
        id: this.pessoaId,
        ...this.form.value
      };
      this.pessoaService.atualizarPessoa(pessoaAtualizada);
      this.router.navigate(['/listagem']);
    }
  }
}