import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcandidatComponent } from './components/candidat/addcandidat/addcandidat.component';
import { EditcandidatComponent } from './components/candidat/editcandidat/editcandidat.component';
import { SearchcandidatComponent } from './components/candidat/searchcandidat/searchcandidat.component';
import { ExamproComponent } from './components/exampro/exampro.component';
import { AddcentreComponent } from './components/centre/addcentre/addcentre.component';
import { EditcentreComponent } from './components/centre/editcentre/editcentre.component';
import { SearchcentreComponent } from './components/centre/searchcentre/searchcentre.component';
import { MenuComponent } from './components/menu/menu.component';




const routes: Routes = [
  {path: 'addcandidat', component: AddcandidatComponent},
  {path: 'listcandidats', component: EditcandidatComponent},
  {path: 'searchcandidat', component: SearchcandidatComponent},
  {path: 'addcentre', component: AddcentreComponent},
  {path: 'editcentre', component: EditcentreComponent},
  {path: 'searcentre', component: SearchcentreComponent},
  {path: 'exampro', component: ExamproComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: '**', component: ExamproComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
