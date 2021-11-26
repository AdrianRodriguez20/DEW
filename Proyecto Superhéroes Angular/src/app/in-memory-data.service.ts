import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './interfaces/hero';
import { Villain } from './interfaces/villain';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron Man' , fechaNacimiento:'29/05/1970' , descripcion:"Tony Stark es un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.", avatar:"https://bit.ly/2ZhHs3i", color:"#FF3232"},
      { id: 12, name: 'Thor', fechaNacimiento:'Desconocido' , descripcion:"Es el dios del trueno y fuerza", avatar:"https://bit.ly/3plgHFU", color:"#69a4ff"},
      { id: 13, name: 'Capitán América' ,fechaNacimiento:'04/07/1918' , descripcion:"Steve Rogers, un hombre que se transforma en el super soldado Capitán América para ayudar en la guerra.", avatar:"https://bit.ly/3rSRK6d", color:"#005dec"},
      { id: 14, name: 'Spiderman', fechaNacimiento:'10/08/2001' , descripcion:"Peter Parker, es mordido por una araña alterada genéticamente. Debido a esta mordida, desarrolla una serie de habilidades que le permiten convertirse el Hombre Araña.", avatar:"https://bit.ly/2NomPQk", color:"#ec0000"},
      { id: 15, name: 'Hulk' ,fechaNacimiento:'18/12/1969' , descripcion:"Bruce Banner era un científico qué quedó expuesto a radiación lo que alteró la estructura de su ADN. Cuando se cabreaba, se transformaba en una criatura de color verde con poderes increíbles.",avatar:"https://bit.ly/3d9nQXn",color:"#108504" },
      { id: 16, name: 'Bruja Escarlata',fechaNacimiento:'27/04/1989' , descripcion:"Wanda es una mutante, posee habilidades para alterar la realidad de formas no especificadas y es, además, una poderosa hechicera.",avatar:"https://bit.ly/3qm50A5",color:"#ec0000" },
      { id: 17, name: 'Doctor Strange',fechaNacimiento:'27/04/1930' , descripcion:"El neurocirujano Doctor Stephen Strange , tras un trágico accidente automovilístico, aprende los secretos del mundo del misticismo y las dimensiones paralelas.", avatar:"https://bit.ly/3dgvFdM",color:"#ec0000"},
      { id: 18, name: 'Viuda Negra' ,fechaNacimiento:'27/04/1939' , descripcion:"Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.", avatar:"https://bit.ly/2OuNyv2",color:"#b70bb2"},
      { id: 19, name: 'Black Panter', fechaNacimiento:'Desconocido' , descripcion:"El Príncipe T'Challa está preparado para ser proclamado nuevo Rey de Wakanda. Tras la pérdida de su padre, quiere ocupar el trono pero se desvanecen ya que unos villanos lo expulsan de Wakanda. ", avatar:"https://bit.ly/37dO1rU",color:"#000000"},
      { id: 20, name: 'Ojo de Halcón', fechaNacimiento:'27/04/1939' , descripcion:"Un villano reconvertido a héroe con la increíble habilidad de ser el mejor tirador del planeta", avatar:"https://bit.ly/3rQcrQ8",color:"#686868"}
    ];
    const villains = [
      { id: 21, name: 'Loki' , fechaNacimiento:'Desconocido' , descripcion:"Se ganó una reputación como el Dios de las Mentiras y organizó un plan para hacer que Odín destierre a Thor, convirtiéndose en el sucesor del trono de Asgard", avatar:"https://bit.ly/2LXIr5S",color:"#024016"},
      { id: 22, name: 'Ultrón',fechaNacimiento:'Desconocido' , descripcion:"Ultrón es un supervillano tecnológico que no se parece a ningún otro. Ultrón es aterrador y fruto de un programa piloto dañado creado por Tony Stark y Bruce Banner para lograr la paz en la Tierra.", avatar:"https://bit.ly/3ddUVBk",color:"#c103c4"},
      { id: 23, name: 'Nebula' ,fechaNacimiento:'15/04/1989' , descripcion:"Nebula es una Lufomoide y la hija adoptiva de Thanos, al igual que Gamora, después que éste atacara su planeta natal. Ella se volvió una asesina y trabajó para él durante años hasta que decidió traicionarlo.", avatar:"https://bit.ly/2ZikGIG",color:"#10dc92"},
      { id: 24, name: 'Cráneo Rojo',fechaNacimiento:'Desconocido' , descripcion:"Cráneo Rojo es uno de los mayores villanos del Capitán América, siendo el enemigo por antonomasia de la sociedad democrática y la libertad. Un ser que ha sembrado miedo y odio allí por donde ha pisado", avatar:"https://bit.ly/3qnCFcC",color:"#4236fe"},
      { id: 25, name: 'Alexader Pierce' ,fechaNacimiento:'23/04/1959' , descripcion:" Pierce fue uno de los líderes de HYDRA y el máximo agente encubierto dentro del Gobierno de los Estados Unidos, S.H.I.E.L.D., y el Consejo Mundial de Seguridad. ", avatar:"https://bit.ly/3pnMINm",color:"#084d59"},
      { id: 26, name: 'Soldado de Invierno',fechaNacimiento:'27/04/1939' , descripcion:"El Sargento Bucky es un ex soldado y el mejor amigo de Steven Rogers. Barnes fue encontrado por HYDRA, quienes experimentaron con él, otorgándole habilidades sobrehumanas. ", avatar:"https://bit.ly/3ao6Nz7",color:"#485df4"},
      { id: 27, name: 'Thanos', fechaNacimiento:'Desconocido' , descripcion:"Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su población inevitablemente agotaría todo el suministro de recursos.", avatar:"https://bit.ly/2OAf9Lj",color:"#7c0b5a"},
      { id: 28, name: 'General Ross' ,fechaNacimiento:'27/04/1939' , descripcion:"Ross es un oficial militar de Estados Unidos. Bruce Banner, y fue jefe del proyecto de la bomba gamma que convirtió a Banner en Hulk", avatar:"https://bit.ly/2ZkCGC5",color:"#82dec3"},
      { id: 29, name: 'Ulysses Klaue',fechaNacimiento:'27/04/1929' , descripcion:"Klaw, es un físico humano que se ha transformado en sonido sólido, y que lleva un emisor sónico en la muñeca derecha como un dispositivo protésico", avatar:"https://bit.ly/3pk8uS7",color:"#310bcb"},
      { id: 30, name: 'Yon-Rogg',fechaNacimiento:'27/04/1939' , descripcion:"Es un alienígena Kree, un comandante militar cuya debilidad es su envidia por los logros de los demás y su amor por la médico Una. Él es enviado a supervisar el problemático planeta Tierra.", avatar:"https://bit.ly/3pfUUPS",color:"#b7a5ff"},
    ];

    return { heroes: heroes, villains: villains };
  }
  

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  /*
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
*/
  genId<T extends Hero | Villain >(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
