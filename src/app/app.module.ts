import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//DEFINIR  A IMPORTAÇÃO DE DUAS DEPENDENCIAS IMPORTANTES PARA O PROJETO NO APP.MODULES.TS
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar o service
import { StudentApiService } from './service/student-api.service';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentUniqueComponent } from './components/student-unique/student-unique.component';
import { StudentInsertComponent } from './components/student-insert/student-insert.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { CourseApiService } from './service/course-api.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseInsertComponent } from './components/course-insert/course-insert.component';
import { CourseUniqueComponent } from './components/course-unique/course-unique.component';
import { CourseUpdateComponent } from './components/course-update/course-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentUniqueComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    CourseListComponent,
    CourseInsertComponent,
    CourseUniqueComponent,
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // aqui, no array providers, será inicializado o service
  // Neste momento foi "criado" o Singleton do service.
  providers: [StudentApiService, CourseApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
