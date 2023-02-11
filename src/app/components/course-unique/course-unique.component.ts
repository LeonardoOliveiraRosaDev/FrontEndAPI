import { Component, OnInit } from '@angular/core';

// importar nosso service do componente
import { CourseApiService } from 'src/app/service/course-api.service';
// importaçao da Classe ActivateRoute
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-unique',
  templateUrl: './course-unique.component.html',
  styleUrls: ['./course-unique.component.css']
})
export class CourseUniqueComponent implements OnInit {
  //Titulo
  titleComponente: string = 'Detalhe do Curso'

  // Prop para ser o elemento lógico que recebera os valores das props do Curso
  courseUnico: any = {}

  // praticar a referencia de instancia das classe service e ActivateRoute para gerar a DI
  constructor(
    private courseApi: CourseApiService,
    private copiaRoute: ActivatedRoute
  ){}

  // Fazer uma copia da rota com o seu elemento de identificação "id"
  copiandoRota: any = this.copiaRoute.snapshot.params['id']

  //Priorizar o nosso componente com o Angular Hook ngOnInit
  ngOnInit(): void {
    this.oneCourse()
  }

  //metodo / Função acessar o service para recuperar um curso identificado
  oneCourse(): any{
    // Chamar a DI para trazer os valores do registro que foi selecionado a partir da view studentsList
    this.courseApi.PegarUmRegistro(this.copiandoRota).subscribe((data:{}) =>{
      this.courseUnico = data
    })
  }
}
