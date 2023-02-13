// para o insert temos que trazer uma nova importação do @angular o Input
import { Component, Input } from '@angular/core';

// importa o service para o nosso componente
import { CourseApiService } from 'src/app/service/course-api.service';

// Importar classe Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-insert',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent {
// titulo do componente
titleComponente: string = "Inserir um Curso"

// Criar uma prop - que sera um objeto literal para receber os valores que serão recebidos a partir da view
@Input() newCurso ={
  nomeCurso: '',
  mensalidade: 0
}
// definir a DI das classe Service e Router
constructor(
  private courseApi: CourseApiService,
  private roteando: Router
){}
// Criar um método/Função para acessar o service e enviar os dados para a tarefa assincrona de inserção de dados
inserirUmCurso(): any{
  // chamada da DI que acessa API
  this.courseApi.inserirCurso(this.newCurso).subscribe(() => {
    this.roteando.navigate(['/course-list'])
    console.log(this.newCurso)
  })
}
}
