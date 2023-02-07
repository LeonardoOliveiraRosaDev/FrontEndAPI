import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// para criar rota primeiro temos que importar os componentes
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentUniqueComponent } from './components/student-unique/student-unique.component';
import { StudentInsertComponent } from './components/student-insert/student-insert.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';



// Traçando as rotas do componentes dentro deste const routes !
const routes: Routes = [
  {path:'student-list', component:StudentListComponent},
  {path:'student-unique/:id', component:StudentUniqueComponent},
  {path: 'student-insert', component:StudentInsertComponent},
  {path: 'student-update/:id', component:StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
