export type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino'
}

export type PetType = 'dog' | 'cat' | 'fish'