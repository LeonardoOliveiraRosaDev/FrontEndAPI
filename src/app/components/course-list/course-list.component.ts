// 1º passo Importar o OnInit
import { Component, OnInit } from '@angular/core';

// Importar o Service necessário para o uso do componente
import { CourseApiService } from 'src/app/service/course-api.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
// Definir Titulo
titleComponente: string = 'Lista de Cursos'

// Definir um propriedade para receber os valores da chamada da nossa Api
coursesList: any = []

// Praticar a referencia da instancia do nosso service para fazer uso da DI
constructor (private courseApi: CourseApiService){}

// denifir o Angular Hook ngOnItnit para "priorizar" o carregamento de conteudo desse componente
ngOnInit(): void {
  this.mostrarCursos();
}

// Criar um método/função - para acessar o service que possui a tarefa assincrona que recupera todos os registro do nosso banco de dados
mostrarCursos(): any{
  // chamar a dependencia injector DI para acessar o Service que chama a nossa API -> que acessa a base e tras os registro para o service -> que então disponibiliza para o componente
  this.courseApi.PegarTodosRegistros().subscribe((data:{}) =>{
    this.coursesList = data
    console.log(this.coursesList)
  })
}

//* Observable - tem problema de estar sempre observando */

//  Aproveitando vamos criar um metodo /função para acessar o service que possuia a tarefa assincrona para a exclusão de um registro - que estara devidamente identificado pelo Id
deleteCourseRegistro(id: any) : any{
  // Verificação se o usuario quer de fato apagar aquele determinado curso.
  if(confirm('Tem certeza que deseja excluir esse curso?')){
    this.courseApi.ExcluirCourse(id).subscribe(() => {
      this.mostrarCursos()
    })
  }
}

}
