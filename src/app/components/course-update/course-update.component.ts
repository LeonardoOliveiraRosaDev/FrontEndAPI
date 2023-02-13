// Acrescentar o OnInit  = "Angular hook"
import { Component, OnInit } from '@angular/core';

// Import do Service para uso do componente
import { CourseApiService } from 'src/app/service/course-api.service';

//classe de rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit{
  //Titulo do componente
  titleComponente: string = "Atualizar Curso"

  // criar uma prop para receber os dados da chamada da api
  courseUpdateData: any = {}

  //Definir os objetos literais para os DI
  constructor(
    private courseApi: CourseApiService,
    private routing: Router,
    private copiaRota: ActivatedRoute
  ){}

  // Agora criar uma prop para ser a "copia" da rota que é usada pelo registro
  copiandoRota: any = this.copiaRota.snapshot.params['id']

  // Agora definiremos o Angular Hook ngOnInit , para "priorizar" o carregamento de algum conteudo/funcionanlidade , será "prioridade" de resgatar um unico registro
  ngOnInit(): void {
    this.courseApi.PegarUmRegistro(this.copiandoRota).subscribe((data:any) => {
      this.courseUpdateData = data
    })
  }

  // Neste passo criarei um método/Função para acessar o service que vai chamar a api para atualizar os dados do registro identificado

  upCourseReg(): any {
    // chamar DI
    this.courseApi.AtualizarCourse(this.courseUpdateData.id, this.courseUpdateData).subscribe(() => {
      this.routing.navigate(['/course-list'])
    })
  }
}
