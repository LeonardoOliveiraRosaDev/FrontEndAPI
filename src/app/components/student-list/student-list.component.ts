import { Component, OnInit } from '@angular/core';

// importar/referencia do service para o uso do componente
import { StudentApiService } from 'src/app/service/student-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  //definir um titulo para o componente
  titleComp: string = 'Lista de Etudante'

  // 1º passo: definir uma prop para receber os valores da chamada do service
  studentsList: any =[]

  // 2º passo: praticar a referencia de intancia do service para fazer uso da DI
  constructor(private stuApi: StudentApiService){}

  
  // 3º passo: definição do Angular hook ngOnInit para "priorizar" o carregamento de conteudo desse componente
  ngOnInit(): void {
    //?????
    this.showRegisters();
  }

  // 4º passo: Criar um método/função - para acessar o service que possui a tarefa assincrona que recupera todos os registros da base
  showRegisters(): any{
  // Chamar a dependencia injector DI para acessar o service que chama a API -> que acessa a base e traz os registros para o service -> que então disponibiliza para o componente
  this.stuApi.GetAllRegisters().subscribe((data:{}) => {
    this.studentsList = data
  })
  }

  // 5º passo: criar um método/função para acessar o service que possui a tarefa assincrona para a exclusão de um registro - devidamente identificado
  delStudentRegister(id: any): any{
    // verificar se o usuário, realmente, deseja excluir o registro
    if(confirm('Deseja, realmente, excluir esse registro?')){
      this.stuApi.deleteRegister(id).subscribe(() => {
        this.showRegisters() 
      })
    }
  }
}
