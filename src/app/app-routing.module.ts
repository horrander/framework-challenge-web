import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecomposicaoComponent } from './components/decomposicao/decomposicao.component';

const routes: Routes = [
  { path: '', component: DecomposicaoComponent },
  { path: 'decomposicao', component: DecomposicaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
