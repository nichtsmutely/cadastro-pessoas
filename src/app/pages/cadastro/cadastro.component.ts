import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['']
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const novaPessoa: Pessoa = this.form.value;
      this.pessoaService.adicionarPessoa(novaPessoa);
      this.router.navigate(['/listagem']);
    }
  }
}
