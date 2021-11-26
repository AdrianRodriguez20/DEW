import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from '../interfaces/article';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const articles = [
      {
        id: 1,
        name: 'Pack PS4 500GB',
        categoryId: 4,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79610902/fee_786_587_png/Consola---Sony-PS4-500GB--Negro---Marvel%27s-Spider-Man---Horizon-Zero-Dawn-Complete-Edition---Ratchet-and-Clank',
        description: 'Mucho más que una consola, la PlayStation 4 desarrollada por Sony es un dispositivo inteligente y versátil a través del cual descubrirás un mundo de entretenimiento que romperá con todas tus expectativas, con este pack obtendrás el juego Fifa 21. Disfruta de películas en Blu-Ray, series de TV, música y un contenido en constante actualización con las novedades de PlayStation Network.',
        price: 499.95,
        timestamp: 567577
      },
      {
        id: 2,
        name: 'TX Xiaomi 43"',
        categoryId: 1,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81202541/fee_786_587_png/TV-LED-43%22---Xiaomi-Mi-TV-4S-UHD-4K--Quad-Core--Bluetooth--Android-TV--PatchWall--Google-Assistant--Chromecast',
        description: 'La TV LED 43" Xiaomi Mi TV 4S está pensada para que la exprimas al máximo. Con alta conectividad, preparada para contenidos Ultra HD y sonido Dolby Audio. Con Xiaomi descubrirás las ventajas de tecnología superior. Muy buena calidad de imagen Ultra HD 4K. Esta televisión cuenta con un panel de 43 pulgadas de resolución Ultra HD 4K (3840 x 2160).',
        price: 324.95,
        timestamp: 456664        
      },
      {
        id: 3,
        name: 'Frigorífico Samsung',
        categoryId: 5,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72637620/fee_786_587_png/Frigor%C3%ADfico-americano---Samsung-Black-DOI-RF50N5970B1--486-l--Dispensador-hielo--Triple-Metal-Cooling--Negro',
        description: 'Frigorífico americano Samsung Black DOI RF50N5970B1 con 4 puertas conserva tus alimentos frescos durante más tiempo. Con dispensador de hielo y casi 500 litros de capacidad para aprovechar al máximo de tus alimentos y bebidas. Su triple sistema de refrigeración controla y optimiza la temperatura, el nivel de humedad y evita que se mezclen los olores en sus tres compartimentos.',
        price: 1525.95,
        timestamp: 456762        
      }
      ,
      {
        id: 4,
        name: 'Secadora Balay',
        categoryId: 5,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-79312998/fee_786_587_png/Lavadora-secadora---Balay-3TW976BA--7-Kg---4-Kg--1400-rpm--74-dB--A--Blanco',
        description: 'Ruido casi nulo, eficiencia energética y lavados rápidos y a la hora que elijas; ¿qué más se puede pedir? La lavadora secadora Balay 3TW976BA de color blanco dejará toda tu ropa impoluta y seca de manera silenciosa, fácil y rápida a la vez que ahorras energía (¡y dinero!).',
        price: 899.95,
        timestamp: 937456        
      },
      {
        id: 5,
        name: 'TV Led Sony 55"',
        categoryId: 1,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78732630/fee_786_587_png',
        description: 'Con el SmartTV Sony KD55XH8077SAEP, tendrás la posibilidad de ver unas películas de alta calidad desde tu casa, gracias a la tecnología LED. Detalles ultrarrealistas en todo lo que ves con una nitidez excepcional.',
        price: 559.95,
        timestamp: 456238        
      }, 
      {
        id: 6,
        name: 'Apple iPhone SE',
        categoryId: 3,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76622452/fee_786_587_png/REACONDICIONADO-Apple-iPhone-SE-%282%C2%AA-gen.%29--Negro--64-GB--4.7%22-Retina-HD--Chip-A13-Bionic--iOS',
        description: 'Bienvenido a la experiencia del iPhone SE (2ª gen.). Sumérgete en la Retina HD de 4.7 pulgadas del móvil Apple iPhone SE (2ª gen.) de 64 GB en color negro. Cuenta además con el chip A13 Bionic, con una inteligencia y potencia nunca vistas en un smartphone. Todo lo que te gusta del iPhone, en un renovado modelo.',
        price: 359.95,
        timestamp: 565676        
      },
      {
        id: 7,
        name: 'Amazfit GTS',
        categoryId: 3,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76556483/fee_786_587_png',        
        description: 'Lleva siempre contigo el smartwatch Amazfit GTS Rose y mantente siempre en línea y en forma gracias a sus funciones. Gracias a su diseño podrás llevarlo durante todo el día, tanto si vas a hacer deporte como a trabajar.',
        price: 75.95,
        timestamp: 456345        
      },
      {
        id: 8,
        name: 'Tablet Huawei 10"',
        categoryId: 3,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77468935/fee_786_587_png',
        description: 'No dejes escapar la tablet Huawei Mediapad T10s para navegar y disfrutar allí donde quiera que vayas. Gracias a su procesador Kirin 710A y su batería de gran capacidad no tendrás problemas de fluidez y te olvidarás de cargarla durante muchas horas. ',
        price: 124.95,
        timestamp: 456777        
      },
      {
        id: 9,
        name: 'iRobot Roomba 975',
        categoryId: 10,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77787551/fee_786_587_png',
        description: 'iRobot tiene más de 30 años de experiencia en robótica e innovación con más de 30 millones de robots para el hogar vendidos en todo el mundo. Tanto si eliges Roomba, Braava o ambos, tus suelos recibirán el cuidado especializado que merecen.',
        price: 324.95,
        timestamp: 567545        
      },
      {
        id: 10,
        name: 'Patinete Xiaomi 1S',
        categoryId: 10,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77129733/fee_786_587_png',
        description: '¿Buscas una forma alternativa, económica y sana de moverte? El patinete eléctrico Xiaomi Mi Electric Scooter 1S en negro, con un sencillo pero elegante diseño, es ideal para ti y con él podrás desplazarte sin esfuerzo cuando necesites ir rápido.',
        price: 303.95,
        timestamp: 567511        
      },
      {
        id: 11,
        name: 'Impresora Bother',
        categoryId: 2,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78695827/fee_786_587_png',
        description: 'Si necesitas una impresora de alta capacidad para tu trabajo, no busques más. ¡La has encontrado! La impresora láser HL-L8360CDW tiene una capacidad de impresión de hasta 4000 páginas al mes. Además, permite la impresión a doble cara para todo lo que imprimas en formato folleto. De esta manera ahorrarás en papel. ',
        price: 382.95,
        timestamp: 945456        
      },
      {
        id: 12,
        name: 'Horno Candy',
        categoryId: 5,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75701593/fee_786_587_png',
        description: 'El horno Candy FCP886X es ideal para cocinar cualquier tipo de alimento. Con su capacidad 70 litros podrás cocinar la cantidad de comida que quieras.',
        price: 230.95,
        timestamp: 768456        
      },
      {
        id: 13,
        name: 'AA Fujitsu',
        categoryId: 10,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81921812/fee_786_587_png',
        description: 'El aire acondicionado Fujitsu ASY 35 UI-KP cuenta con una potencia de 2923 frigorías que será ideal para refrescar tu comedor, salón o dormitorio. Su compresor climatiza más rápidamente en menos tiempo y ofrece un consumo mínimo. Gracias a él podrás pasarte todo el verano sin sudar y sin subidas excesivas en la factura de la luz. Y no te preocupes por si en invierno hace mucho frío porque tiene modo calefacción.',
        price: 495.95,
        timestamp: 456111        
      },
      {
        id: 14,
        name: 'Silla Gaming Woxter',
        categoryId: 2,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77107024/fee_786_587_png',
        description: 'Silla gaming con altura ajustable y reposabrazos Stinger Station Alien Pink. La silla de diseño Racing, Stinger Station Alien está creada para que disfrutes al máximo de una experiencia envolvente y confortable en tus largas e intensas sesiones de juegos y también en tus jornadas de trabajo o estudios. ',
        price: 96.95,
        timestamp: 567552       
      },
      {
        id: 15,
        name: 'Auriculares JVC',
        categoryId: 10,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77893039/fee_786_587_png',
        description: 'Escucha los temas de los artistas del momento con los auriculares inalámbricos JVC HA-S20BT-B-E en color negro. Podrás escuchar la música que más te guste sin cables que te molesten, así como hablar con tus amigos gracias al micrófono que lleva incorporado.',
        price: 23.95,
        timestamp: 456542        
      },
      {
        id: 16,
        name: 'Xiaomi Mi Note 10 Lite',
        categoryId: 3,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74787068/fee_786_587_png',
        description: 'Si necesitas un móvil versátil y funcional al mismo tiempo que no quieres renunciar al rendimiento, no te pierdas la oportunidad de hacerte con tu móvil Xiaomi Mi Note 10 Lite en color lila, con 6 GB de RAM y 128 GB de capacidad. Tecnología y componentes de calidad a tu alcance.',
        price: 319.95,
        timestamp: 458766        
      },
      {
        id: 17,
        name: 'Portátil Lenovo 15,6"',
        categoryId: 2,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75496553/fee_786_587_png',
        description: 'Lenovo IdeaPad 3 15IIL05 te ofrece prestaciones básicas de calidad combinadas con un diseño moderno y elegante para que uses a gusto tu ordenador para tareas cotidianas.',
        price: 532.95,
        timestamp: 456756        
      },
      {
        id: 18,
        name: 'TV Sony KDL 32"',
        categoryId: 1,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74911146/fee_786_587_png',
        description: 'Una ventana al mundo. El televisor LED Sony KDL32WD753 de 32 pulgadas no sólo te dará una calidad excepcional en color y claridad, también será tu gran entretenimiento gracias a la conectividad WiFi. ',
        price: 319.95,
        timestamp: 423656        
      },
      {
        id: 19,
        name: 'Cyberpunk 2077 PC',
        categoryId: 4,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75701541/fee_786_587_png/PC-Cyberpunk-2077-%28Ed.-Day-One%29',
        description: 'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.',
        price: 49.95,
        timestamp: 412356        
      },
      {
        id: 20,
        name: 'Football Manager PC',
        categoryId: 4,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78373292/fee_786_587_png',
        description: 'Disfruta de nuevos niveles de profundidad, dramatismo y autenticidad futbolística a medida que mejoras tus cualidades de gestión y te esfuerzas por alcanzar la cima en los clubes de fútbol más importantes del mundo.',
        price: 47.95,
        timestamp: 400056        
      },
      {
        id: 21,
        name: 'Heavy Rain PC',
        categoryId: 4,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71880779/fee_786_587_png/PC-Heavy-Rain',
        description: 'Experimenta un emocionante thriller psicológico lleno de innumerables giros de guion. A lo largo de cuatro días de misterio y suspense, la caza de un asesino conocido sólo como el Asesino del Origami, llamado así por su macabra rúbrica dejando hojas de papel doblado en las escenas del crimen. Cuatro personajes, cada uno con sus propios motivos y pistas, deben participar en un intento desesperado de impedir que el asesino reclame una nueva víctima.',
        price: 9.95,
        timestamp: 456000        
      },
      {
        id: 22,
        name: 'Xbox Series S',
        categoryId: 4,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77466092/fee_786_587_png/Consola---Microsoft-Xbox-Series-S--512-GB-SSD--Blanco',
        description: 'Presentamos la Xbox Series S, la consola Xbox más pequeña y elegante de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de nueva generación a un precio asequible.',
        price: 299.95,
        timestamp: 645643      
      },
      {
        id: 23,
        name: 'PC Lenovo Legion',
        categoryId: 2,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_80435709/fee_786_587_png/PC-gaming--Lenovo-Legion-T5-28IMB05--Intel%C2%AE-Core%E2%84%A2-i5-10400--8-GB--512-GB-SSD--GeForce%C2%AE-RTX%E2%84%A2-2060--FreeDOS',
        description: 'El PC gaming Lenovo Legion T5 28IMB05 de color negro te ofrecerá el rendimiento necesario para cualquier tipo de tarea, desde trabajar con grandes hojas de cálculo hasta programas de edición vídeo.',
        price: 899.95,
        timestamp: 456786        
      },
      {
        id: 24,
        name: 'TV Led LG 43"',
        categoryId: 1,
        mainImage: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76257952/fee_786_587_png/TV-LED-43%22---LG-43UN81006LB--UHD-4K--WiFi--Bluetooth--Inteligencia-Artificial--HDR-10-Pro--Smart-TV',
        description: 'Siente la pureza de las imágenes con la TV LED LG 65NANO816NA con Smart TV 4K UHD NanoCell de 164 cm (65"). Con Inteligencia Artificial, Procesador Inteligente Quad Core, Deep Learning, HDR10 Pro, HLG, Sonido Ultra Surround, 4xHDMI 2.0, 2xUSB 2.0, Bluetooth 5.0 y WiFi.',
        price: 397.95,
        timestamp: 453356        
      }    
    ];
    
    return { articles };

  }
 
}
