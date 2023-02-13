// NÃO ESQUECER DE INSTANCIAR O SERVICE NO  APP.MODULE.TS
// providers: [ CourseApiService, xxxxxxxx ]

import { Injectable } from '@angular/core';

// Importar as Dependecias para as Requisições Http , e tb auxilia nas credenciais de acesso ao CrossDomain
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar a Dependencia para auxiliar nas operações com os dados
import { ICourse } from '../model/ICourse';

// Importar a Dependencia para implementações das Tarefas Assincronas necessárias.

// TS - Observable - Esta Observando até ser chamado !
// TS - subscribe - Agora ele vai chamar o observable
import { Observable } from 'rxjs';

/*
@Injectable({
  // providedIn: 'root ' cria uma instancia unica do service
  providedIn: 'root'
})
*/

@Injectable()

export class CourseApiService {
  // Criar uma prop para acessar o endereço da api .
  apiEndUrl: string = "http://localhost:5121/api/Course" 

  // Objeto referencial da nossa requisição http
  constructor(private RequiHttp: HttpClient) { }

  // Definir as credenciais de acesso para o cross-domain entre FrontEnd e BackEnd. Recurso que nos da a possibilidade de cruzar o dominio do front para o back e modificar a base de dados ! Devido a modificação que é feita na base com o POST, PUT, DELETE, sem isso abaixo ele nao deixa gravar nada na base
  credAcess = {
    headers: new HttpHeaders({
      // FAZ PARTE DE UM TRANSPORTADOR DE CONTEUDO EM UM DETERMINADO FORMATO.
      'Content-Type' : 'application/json'
    })
  }

    /*
    ++++++++++++++++++++++++++++++++++++
      FLuxo de Dados a partir da nossa 
            API do nosso BackEnd
            Get(Pegar) - Post(Enviar) - Put(Atualizar/alterar) -
            Delete(Excluir)
    ++++++++++++++++++++++++++++++++++++
    */

// 1º Processo - Recuperar todos os Dados completos da base

PegarTodosRegistros() : Observable<ICourse>{
   //apiEndUrl = http://localhost:5121/api/Course
  return this.RequiHttp.get<ICourse>(this.apiEndUrl+'/GetAll')
}

// 2º Processo - Recuperar apenas um dado especifico e Identificado da Base

PegarUmRegistro(id: number) : Observable<ICourse>{
  //apiEndUrl = http://localhost:5121/api/Course/GetOne/2
  return this.RequiHttp.get<ICourse>(this.apiEndUrl+'/GetOne/'+id)
}

// 3º Processo: Inserir dados na base
//JSON.stringify()- cria uma unica frase em formato Json cria uma unica string , uma unica linha serialized
inserirCurso(data: any) : Observable<ICourse>{
  //apiEndUrl = http://localhost:5121/api/Course/AddRegister
  console.log(data)
  return this.RequiHttp.post<ICourse>(this.apiEndUrl+'/AddRegister', JSON.stringify(data), this.credAcess)
  // JSON.stringify == {"id:0,NomeCurso: XXXXXX, Mensalidade: XXXXXX"}
}

// 4º Processo: Atualizar 1 registro especifico do DB
AtualizarCourse(id: any, novoRegistro: any) : Observable<ICourse>{
  return this.RequiHttp.put<ICourse>(this.apiEndUrl+'/UpRegister/'+id, JSON.stringify(novoRegistro), this.credAcess)
  // JSON.stringify == {"id:0,NomeCurso: XXXXXX, Mensalidade: XXXXXX"}
}
  
// 5º processo: Excluir um dado da base especifico 
ExcluirCourse(id: any){
  return this.RequiHttp.delete<ICourse>(this.apiEndUrl+'/delRegister/'+id, this.credAcess)
}

}
