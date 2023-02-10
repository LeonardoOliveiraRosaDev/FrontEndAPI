import { Injectable } from '@angular/core';
// 3 passos basicos para colocar as dependencias que iremos precisar
  
// 1º Dependencia: vai auxiliar na implementações das requisições http 
      // e tambem auxiliar na implementação das credencias de acesso
      // necessárias para o cross-domain
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  
// 2º Dependencia: vai auxliar nas operações com os dados
  import { IStudent } from '../model/IStudent';
  
// 3º Dependencia: auxiliará na implementações da tarefas assincronas necessárias
import { Observable } from 'rxjs';



// O INJECTABLE SIGINIFICA QUE ESTAMOS DANDO A ESSA CLASSE API SERVICE ESTAMOS DANDO A CAPACIDADE/HABILIDADE POSSIBILITA INJEÇÃO DE DEPENDENCIA
// QUANDO ESTIVER ASSIM ESSA CLASSE A BAIXO DO INJECTABLE PODE SOFRER INJEÇÃO DE DEPENDENCIA 
// AQUI IREMOS CONTINUAR COM O INJETABLE POR BOA PRATICA.


@Injectable()

export class StudentApiService {

  // é necessário estabelecer uma prop para receber como valor a url/"endereço" pelo qual a Api será Chamada !
  apiUrlBase: string = "http://localhost:5121/api/Student"

  // Praticar a injeção de dependência a partir do construtor da classe - para a criação do objeto referencial de requisição http

  constructor(private httpReq: HttpClient) { }

  // é preciso definir as credenciais de acesso para o cross-domain entre as aplicações
  crossAuth = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  /*
  ==========================================================================================
            ESTABELECER O FLUXO DE DADOS A PARTIR DA CHAMADA DA API NO BACKEND

                          Vamos trabalhar com as requisições:

                            Get(); Post(), Put(), e Delete()
  ==========================================================================================
  */

  // 1º parte: estabelecer um método/requisição http para chamar a API e acessar o método que recupera todos os registros da base.
  GetAllRegisters(): Observable<IStudent>{
    //apiUrlBase = http://localhost:5121/api/Student/GetAll
    return this.httpReq.get<IStudent>(this.apiUrlBase+'/GetAll')
  } 

  // 2º parte: estabelecer o método/requisição para recuperar um único registro da base - fazendo a chamada da API - e oferecer o elemento identificação á API.
  GetOneRegister(id: number) : Observable<IStudent>{
    //apiUrlBase = http://localhost:5121/api/Student/GetOne/2
    return this.httpReq.get<IStudent>(this.apiUrlBase+'/GetOne/'+id)
  }

  // 3º parte: estabelecer o método/requisição/função para inserir dados na base - fazendo a chamada da API
  insertStudentRegister(reciveData: any): Observable<IStudent>{
    // http://localhost:5121/api/Student/AddRegister
    return this.httpReq.post<IStudent>(this.apiUrlBase+'/AddRegister',JSON.stringify(reciveData), this.crossAuth)
  }

  // 4º parte: estabelecer o método/requisição/função para atualizar os dados da base - fazendo a chamada da API
  updateStudent(id: any, otherRegiste: any): Observable<IStudent>{
     // http://localhost:5121/api/Student/upRegister/:id

     return this.httpReq.put<IStudent>(this.apiUrlBase+'/UpRegister/'+id, JSON.stringify(otherRegiste), this.crossAuth)
     }
       // 5º parte: estabelecer o método/requisição/função para a exclusão de um registro -chamando a API
       deleteRegister(id: any){
        // http://localhost:5121/api/Student/delRegister/:id
        return this.httpReq.delete<IStudent>(this.apiUrlBase+'/delRegister/'+id, this.crossAuth)
       }
}

