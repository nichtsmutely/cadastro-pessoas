import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EdicaoComponent } from './pages/edicao/edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    DetalhesComponent,
    EdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }