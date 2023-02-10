

// Definindo Interface Model Doamin (MODEL)
// Convensão adotada a partir da Entitie criada na API como representação da Table do DB

export interface ICourse{
    // Definir as props
    Id: number,
    NomeCurso: string,
    Mensalidade: number
}