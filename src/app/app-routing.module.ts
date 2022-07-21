import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'contato/:idcontato',
    component: EdicaoComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'usuario',
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
