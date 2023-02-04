// propósito dessa interface e atuar como o model domain
// para a aplicação

import { NumberSymbol } from "@angular/common";

//Definindo a Interface
export interface IStudent{
    // Definir as props que compoem a Interface
    id: number
    name: string
    age: number
    gender: string
}