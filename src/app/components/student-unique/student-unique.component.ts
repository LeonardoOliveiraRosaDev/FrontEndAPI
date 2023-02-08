import { Component, OnInit } from '@angular/core';

// importação/referencia do service no componente
import { StudentApiService } from 'src/app/service/student-api.service';

// importação da classe ActivateRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-unique',
  templateUrl: './student-unique.component.html',
  styleUrls: ['./student-unique.component.css']
})
export class StudentUniqueComponent implements OnInit{
  
  // Definir um titulo para o Componente
  titleComp: string = 'Detalhes do perfil do estudante'

  // 1º passo: criar uma prop para ser o elemento lógico que recebera os valores das props do registro
  studentUniqueRegister: any = {}

  // 2º passo: praticar a referencia de instancia das classes service e ActivateRoute para gerar a DI
  constructor(
    private stuApi: StudentApiService,
    private copyRoute: ActivatedRoute
  ){}

  // 3º passo: fazer a "cópia" da rota com seu elemento de identificação - id
    copyingRoute: any = this.copyRoute.snapshot.params['id']

  // 4º passo: implementar o Angular hook "priorizar" algum conteudo / funcionalidade
  ngOnInit(): void {
    this.onRegister()
  }

  // 5º passo: criar um método/função oara acessar o service que possui a tarefa assincrona que recupera um unico registro devidamente identificado
  onRegister(): any{
    // Chamar a DI para trazer os valores do registro que foi selecionado a partir da view studentsList
    this.stuApi.GetOneRegister(this.copyingRoute).subscribe((data:{}) =>{
      this.studentUniqueRegister = data
    })
  }
}
