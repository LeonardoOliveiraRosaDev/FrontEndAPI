

// Definindo Interface Model Doamin (MODEL)
// Convensão adotada a partir da Entitie criada na API como representação da Table do DB

export interface ICourse{
    // Definir as props
    id: number,
    nomeCurso: string,
    mensalidade: number
}