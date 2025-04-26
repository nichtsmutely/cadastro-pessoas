import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  pessoa!: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pessoa = this.pessoaService.obterPorId(id);
    if (!this.pessoa) {
      alert('Pessoa não encontrada.');
      this.router.navigate(['/listagem']);
    }
  }
}