import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { EdicaoComponent } from './edicao/edicao.component';
import { PipeComponent } from './pipe/pipe.component';
import { DataBrasilPipe } from './data-brasil.pipe';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    CadastroComponent,
    EdicaoComponent,
    PipeComponent,
    DataBrasilPipe,
    CadastroUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
