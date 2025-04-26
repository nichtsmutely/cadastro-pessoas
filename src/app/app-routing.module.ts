import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EdicaoComponent } from './pages/edicao/edicao.component';

const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'listagem', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'edicao/:id', component: EdicaoComponent },
  { path: '**', redirectTo: 'listagem' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }