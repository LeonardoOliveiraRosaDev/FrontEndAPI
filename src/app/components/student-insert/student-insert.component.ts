import { Component, Input } from '@angular/core';

//importação/referencia do service
import { StudentApiService } from 'src/app/service/student-api.service';

// importação/referencia da classe Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent {
  //definir o titulo do componente
  titleComp: string = "Inserir um registro"

  // 1º passo: criar uma prop - objeto literal para receber os valores que serão recebidos a partir da view 
  @Input() insertRegister ={
    name: '',
    age: 0,
    gender: ''
  }

  // 2º passo: definir a DI das classe Service e Router
  constructor(
    private stuApi: StudentApiService,
    private routing: Router
  ){}

  // 3º passo: Criar um método/Função para acessar o service e enviar os dados para a tarefa assincrona de inserção
  insertOneRegister(): any{
    // chamada da DI que acessa API
    this.stuApi.insertStudentRegister(this.insertRegister).subscribe(() => {
      this.routing.navigate(['/student-list'])
    })
  }

}
