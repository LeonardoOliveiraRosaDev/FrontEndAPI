import { Injectable } from '@angular/core';

// Importar as Dependecias para as Requisições Http , e tb auxilia nas credenciais de acesso ao CrossDomain
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar a Dependencia para auxiliar nas operações com os dados
import { ICourse } from '../model/ICourse';

// Importar a Dependencia para implementações das Tarefas Assincronas necessárias.
import { Observable } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})
*/

@Injectable()

export class CourseApiService {
  // Criar uma prop para acessar o endereço da api .
  apiEndUrl: string = "http://localhost:5121/api/Course" 

  // Objeto referencial da nossa requisição http
  constructor(private RequiHttp: HttpClient) { }

  // Definir as credenciais de acesso para o cross-domain entre FrontEnd e BackEnd.
  credAcess = {
    headers: new HttpHeaders({
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
  return this.RequiHttp.get<ICourse>(this.apiEndUrl+'/GetAll')
}

// 2º Processo - Recuperar apenas um dado especifico e Identificado da Base

PegarUmRegistro(id: number) : Observable<ICourse>{
  //apiEndUrl = http://localhost:5121/api/Student/GetOne/2
  return this.RequiHttp.get<ICourse>(this.apiEndUrl+'/GetOne/'+id)
}

// 3º Processo: Inserir dados na base
inserirCurso(data: any) : Observable<ICourse>{
  //apiEndUrl = http://localhost:5121/api/Student/AddRegister
  return this.RequiHttp.post<ICourse>(this.apiEndUrl+'/AddRegister', JSON.stringify(data), this.credAcess)
}

// 4º Processo: Atualizar 1 registro especifico do DB
AtualizarCourse(id: any, novoRegistro: any) : Observable<ICourse>{
  return this.RequiHttp.put<ICourse>(this.apiEndUrl+'UpRegister/'+id, JSON.stringify(novoRegistro), this.credAcess)
}
  
// 5º processo: Excluir um dado da base
ExcluirCourse(id: any) : Observable<ICourse>{
  return this.RequiHttp.delete<ICourse>(this.apiEndUrl+'/delRegister/'+id, this.credAcess)
}

}
