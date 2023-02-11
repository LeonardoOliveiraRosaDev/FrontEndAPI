import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

//service
import { StudentApiService } from 'src/app/service/student-api.service';

// classe de rotas
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  // definir o titulo do componente
  titleComp: string = 'Atualizar registro'

  // 1º passo: criar uma prop para receber os dados
  studentUpdateData: any = {}

  // 2º passo: definir os objetos literais para os Dis
  constructor(
    private stuApi: StudentApiService,
    private routing: Router,
    private copyRoute: ActivatedRoute
  ){}

  // 3º passo: criar uma prop para atuar como "copia" da rota usada pelo registro
  copyingRoute: any = this.copyRoute.snapshot.params['id']


  // 4º passo: definir o uso do Angular hook para "priorizar" o carregamento de algum conteudo - o conteudo/funcionalidade será a "prioridade" de resgatar um unico registro identificado
  ngOnInit(): void {
    this.stuApi.GetOneRegister(this.copyingRoute).subscribe((data) =>{
      this.studentUpdateData = data
    })
  }

  // 5º passo: criar método/função oara acessar o service que chama a API para atualizar os dados
  upStudentRegister(): any{
    // chamar DI
    this.stuApi.updateStudent(this.studentUpdateData.id, this.studentUpdateData).subscribe(() => {
      this.routing.navigate(['/student-list'])
    })
  }
}
