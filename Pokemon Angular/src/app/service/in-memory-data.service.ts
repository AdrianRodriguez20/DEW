import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from '../interfaces/pokemon';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService {


  createDb(){
    const pokemons: Pokemon[] = [
      {
        id: 1,
        pokemonNumber: 25,
        category: 'Ratón',
        race: 'Pikachu',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        level: 7,
        types: [
          {
          id: 6,
          name: 'Eléctrico'
          }
        ],
        description: 'Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.',
        weaknesses: [
          {
            id: 15,
            name: 'Tierra'
          },
        ]
      },
      {
        id: 2,
        pokemonNumber: 1,
        category: 'Semilla',
        name: 'Bulba-bul',
        race: 'Bulbasaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        level: 8,
        types: [
          {
            id: 5,
            name: 'Planta'
          }
        ],
        description: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
        weaknesses: [
          {
            id: 1,
            name: 'Fuego'
          },
          {
            id: 8,
            name: 'Psíquico'
          },
          {
            id: 3,
            name: 'Volador'
          },
          {
            id: 13,
            name: 'Hielo'
          },                    
        ]
      },
      {
        id: 3,
        pokemonNumber: 4,
        category: 'Lagartija',
        race: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        level: 7,
        types: [
          {
            id: 1,
            name: 'Fuego'
          }
        ],
        description: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
        weaknesses: [
          {
            id: 4,
            name: 'Agua'
          },
          {
            id: 15,
            name: 'Tierra'
          },
          {
            id: 9,
            name: 'Roca'
          }
        ]
      },
      {
        id: 4,
        pokemonNumber: 7,
        category: 'Tortuguita',
        race: 'Squirtle',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        level: 5,
        types: [
          {
          id: 4,
          name: 'Agua'
          }
        ],
        description: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
        weaknesses: [
          {
            id: 5,
            name: 'Planta'
          },
          {
            id: 6,
            name: 'Eléctrico'
          }
        ]
      },
      {
        id: 5,
        pokemonNumber: 14,
        category: 'Capullo',
        race: 'Kakuna',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
        level: 3,
        types: [
          {
            id: 12,
            name: 'Bicho'
          },
          {
            id: 10,
            name: 'Veneno'
          },          
        ],
        description: 'Aunque es casi incapaz de moverse, en caso de sentirse amenazado puede envenenar a los enemigos con su aguijón.',
        weaknesses: [
          {
            id: 1,
            name: 'Fuego'
          },
          {
            id: 8,
            name: 'Psíquico'
          },
          {
            id: 3,
            name: 'Volador'
          },
          {
            id: 9,
            name: 'Roca'
          }         
        ]
      },
      {
        id: 6,
        pokemonNumber: 133,
        category: 'Evolución',
        race: 'Eevee',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
        level: 15,
        types: [
          {
            id: 11,
            name: 'Normal'
          }          
        ],
        description: 'Es capaz de alterar la composición de su cuerpo para adaptarse al entorno.',
        weaknesses: [
          {
            id: 17,
            name: 'Lucha'
          }        
        ]
      },
      {
        id: 7,
        pokemonNumber: 129,
        category: 'Pez',
        race: 'Magikarp',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
        level: 33,
        types: [
          {
            id: 4,
            name: 'Agua'
          }          
        ],
        description: 'Es el Pokémon más débil y patético que existe, con una fuerza y velocidad prácticamente nulas.',
        weaknesses: [
          {
            id: 5,
            name: 'Planta'
          },
          {
            id: 6,
            name: 'Eléctrico'
          },          
        ]
      },
      {
        id: 8,
        pokemonNumber: 16,
        category: 'Pajarito',
        race: 'Pidgey',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
        level: 7,
        types: [
          {
            id: 11,
            name: 'Normal'
          },
          {
            id: 3,
            name: 'Volador'
          }
        ],
        description: 'Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar.',
        weaknesses: [
          {
            id: 6,
            name: 'Eléctrico'
          },
          {
            id: 13,
            name: 'Hielo'
          },
          {
            id: 9,
            name: 'Roca'
          }                    
        ]
      },
      {
        id: 9,
        pokemonNumber: 54,
        category: 'Pato',
        race: 'Psyduck',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        level: 16,
        types: [
          {
            id: 4,
            name: 'Agua'
          }
        ],
        description: 'Siempre padece dolores de cabeza. Tras desatar sus misteriosos poderes, la jaqueca remite unos instantes.',
        weaknesses: [
          {
            id: 5,
            name: 'Planta'
          },
          {
            id: 6,
            name: 'Eléctrico'
          }             
        ]
      }, 
      {
        id: 10,
        pokemonNumber: 19,
        category: 'Ratón',
        race: 'Rattata',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
        level: 4,
        types: [
          {
            id: 11,
            name: 'Normal'
          }
        ],
        description: 'Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca.',
        weaknesses: [
          {
            id: 17,
            name: 'Lucha'
          }                    
        ]
      },
      {
        id: 11,
        pokemonNumber: 56,
        category: 'Mono Cerdo',
        race: 'Mankey',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
        level: 13,
        types: [
          {
            id: 17,
            name: 'Lucha'
          }
        ],
        description: 'Este ágil Pokémon vive en los árboles. Se enfada con facilidad y, cuando lo hace, se abalanza contra todo lo que se encuentre a su alrededor.',
        weaknesses: [
          {
            id: 8,
            name: 'Psíquico'
          },
          {
            id: 3,
            name: 'Volador'
          },
          {
            id: 16,
            name: 'Hada'
          }                                       
        ]
      },
      {
        id: 12,
        pokemonNumber: 150,
        category: 'Genético',
        race: 'Mewtwo',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
        level: 67,
        types: [
          {
            id: 8,
            name: 'Psíquico'
          }
        ],
        description: 'Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.',
        weaknesses: [
          {
            id: 12,
            name: 'Bicho'
          },
          {
            id: 7,
            name: 'Fantasma'
          },
          {
            id: 18,
            name: 'Siniestro'
          }                                       
        ]
      },
      {
        id: 13,
        pokemonNumber: 74,
        category: 'Roca',
        race: 'Geodude',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
        level: 11,
        types: [
          {
            id: 9,
            name: 'Roca'
          },
          {
            id: 15,
            name: 'Tierra'
          }
        ],
        description: 'Se suele encontrar en senderos de montaña y sitios parecidos. Conviene andar con cuidado para no pisarlo sin querer y provocar su enfado.',
        weaknesses: [
          {
            id: 14,
            name: 'Acero'
          },
          {
            id: 17,
            name: 'Lucha'
          },
          {
            id: 4,
            name: 'Agua'
          },
          {
            id: 13,
            name: 'Hielo'
          },
          {
            id: 5,
            name: 'Planta'
          },
          {
            id: 15,
            name: 'Tierra'
          }                                                        
        ]
      },
      {
        id: 14,
        pokemonNumber: 94,
        category: 'Sombra',
        race: 'Gengar',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
        level: 41,
        types: [
          {
            id: 7,
            name: 'Fantasma'
          },
          {
            id: 10,
            name: 'Veneno'
          }
        ],
        description: 'Las noches de luna llena, a este Pokémon le gusta imitar las sombras de la gente y burlarse de sus miedos.',
        weaknesses: [
          {
            id: 7,
            name: 'Fantasma'
          },
          {
            id: 18,
            name: 'Siniestro'
          },
          {
            id: 8,
            name: 'Psíquico'
          },
          {
            id: 15,
            name: 'Tierra'
          }                                                      
        ]
      },
      {
        id: 15,
        pokemonNumber: 77,
        name: 'Cola de Fuego',        
        category: 'Caballo de Fuego',
        race: 'Ponyta',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        level: 26,
        types: [
          {
            id: 1,
            name: 'Fuego'
          }
        ],
        description: 'Al nacer es un poco lento, pero va fortaleciendo las patas paulatinamente al disputar carreras con sus congéneres.',
        weaknesses: [
          {
            id: 4,
            name: 'Agua'
          },
          {
            id: 15,
            name: 'Tierra'
          },          
          {
            id: 9,
            name: 'Roca'
          }                                                     
        ]
      },
      {
        id: 16,
        pokemonNumber: 79,
        category: 'Atontado',
        race: 'Slowpoke',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
        level: 35,
        types: [
          {
            id: 4,
            name: 'Agua'
          },
          {
            id: 8,
            name: 'Psíquico'
          },          
        ],
        description: 'Es lento y abstraído. Aunque le devoren la cola, ni siquiera se percata, ya que no siente ningún dolor. Tampoco nota cuando le vuelve a crecer.',
        weaknesses: [
          {
            id: 7,
            name: 'Fantasma'
          },
          {
            id: 18,
            name: 'Siniestro'
          },          
          {
            id: 5,
            name: 'Planta'
          },
          {
            id: 6,
            name: 'Eléctrico'
          },          
          {
            id: 12,
            name: 'Bicho'
          }          
        ]
      },
      {
        id: 17,
        pokemonNumber: 124,
        category: 'Forma Humana',
        race: 'Jynx',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
        level: 52,
        types: [
          {
            id: 13,
            name: 'Hielo'
          },
          {
            id: 8,
            name: 'Psíquico'
          },          
        ],
        description: 'En cierta parte de Galar se conocía a Jynx como la Reina del Hielo y se reverenciaba con cierto temor.',
        weaknesses: [
          {
            id: 7,
            name: 'Fantasma'
          },
          {
            id: 14,
            name: 'Acero'
          },          
          {
            id: 1,
            name: 'Fuego'
          },
          {
            id: 6,
            name: 'Eléctrico'
          },          
          {
            id: 18,
            name: 'Siniestro'
          },
          {
            id: 9,
            name: 'Roca'
          },
          {
            id: 12,
            name: 'Bicho'
          }                               
        ]
      },
      {
        id: 18,
        pokemonNumber: 137,
        category: 'Virtual',
        race: 'Porygon',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
        level: 43,
        types: [
          {
            id: 11,
            name: 'Normal'
          }         
        ],
        description: 'Se trata del primer Pokémon del mundo creado a partir de códigos de programación gracias al uso de tecnología de vanguardia.',
        weaknesses: [
          {
            id: 17,
            name: 'Lucha'
          }                   
        ]
      },
      {
        id: 19,
        pokemonNumber: 143,
        name: 'Dormilón',
        category: 'Dormir',
        race: 'Snorlax',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
        level: 43,
        types: [
          {
            id: 11,
            name: 'Normal'
          }         
        ],
        description: 'No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.',
        weaknesses: [
          {
            id: 17,
            name: 'Lucha'
          }                   
        ]
      }                        
    ];
    return { pokemons };
  }
}
