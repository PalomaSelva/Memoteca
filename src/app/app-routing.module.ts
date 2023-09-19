import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePensamentosComponent } from './components/pensamentos/create-pensamentos/create-pensamentos.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'list'
  },
  {
    path:'create',
    component: CreatePensamentosComponent
  },
  {
    path:'list',
    component: ListarPensamentosComponent
  },
  {
    path:'pensamentos/excluir/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path:'pensamentos/editar/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
