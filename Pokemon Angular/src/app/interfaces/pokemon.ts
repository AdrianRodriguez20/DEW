export interface Pokemon{
    id?: number;
    pokemonNumber?: number;
    category?: string;
    race?: string;
    image?: string;
    level?: number;
    name?: string;
    description?: string;
    types?:  {
        id?:number;
        name?:string

    }[];
    weaknesses?: {
        id?:number;
        name?:string
    }[]
}
