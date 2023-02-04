import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// para criar rota primeiro temos que importar os componentes
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentUniqueComponent } from './components/student-unique/student-unique.component';

// Traçando as rotas do componentes dentro deste const routes !
const routes: Routes = [
  {path:'student-list', component:StudentListComponent},
  {path:'student-unique/:id', component:StudentUniqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
