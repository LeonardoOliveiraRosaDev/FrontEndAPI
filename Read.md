====== DICAS NODE JS E @ANGULAR/CLI ======

____________________________________________________________________________

Esse no prompt do Dos

verificar se o node esta instalado e qual versao
node -v
18.3.0

verficar qual angular esta instalado
ng version apartir do 10 nao teremos problemas


Este no PowerShell do Windows
Saber como esta a politicar de execucao de script do sistema
Get-ExecutionPolicy

se tiver restrict fazer o passo a baixo:

Set-ExecutionPolicy unrestricted

Opção A "Maiuscula"

Depois executar novamente o Get-ExecutionPolicy
E tem que aparecer Unrestricted

Agora dentro da pasta no visual studio code com a pasta do projeto ja aberta vamos abrir um novo terminal 

ng - Angular

Comando para criar um novo projeto
- ng new FrontEndAPI
	Primeira  pergunta se queremos instalar as rotas do angular colocar Yes
	Segunda pergunta sobre o css que ja vem marcado como padrão so dar enter

Para testar o projeto para iniciar usar esse comando !
	- Fechar a pasta do Visual Code
	- Procurar a pasta onde o projeto foi criado
	- Digitar esse código para inicar a aplicação ng serve --open 

Importasr para o projeto angular

//DEFINIR  A IMPORTAÇÃO DE DUAS DEPENDENCIAS IMPORTANTES PARA O PROJETO NO APP.MODULES.TS
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

Criar um Service via terminal Angular/CLI

Esse Service ira atuar como Controller
no terminal comando 
 ng g s nome

g - generete
s - service

entao sera assim 
ng g s student-api

Para criar componentes primeiro acessamos a pasta components :
cd src/app/components

g - generate
c - component

Agora depois de estamos na pasta components , para criar registro usar esse codigo a baixo:
ng g c student-list

// dentro do app-routing.module.ts
// para criar rota primeiro temos que importar os componentes
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentUniqueComponent } from './components/student-unique/student-unique.component';

// Traçando as rotas do componentes dentro deste const routes !
const routes: Routes = [
  {path:'student-list', component:StudentListComponent},
  {path:'student-unique/:id', component:StudentUniqueComponent}
];