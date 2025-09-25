import { CarruselprincipalComponent } from "../carruselprincipal/carruselprincipal.component";
import { imagenes } from "../models/imagenes";


export const CAROUSEL_DATA_ITEMS: imagenes[] = [
   {
    id: 0,
    tittle: { first: "¡Promociones temporada 2025!" ,
        second: "Veni a disfrutar con nosotros"
    },
    link: "/productos/temporada-alta",
    image: "assets/img/fondos/bariloche.jpg",
    order: 1,
  
  },
  {
    id: 1,
     tittle: { first: "Veni a disfrutar de la nieve con nosotros" ,
        second: "Promo temporada alta"
    },
    link: "/productos/descuentos",
    image: "assets/img/fondos/fondo.jpg",
    order: 2,
  
  },
 
    {
    id: 2,
     tittle: { first: "Viajes a las leñas" ,
        second: "Promo temporada alta"
    },
    link: "/productos/familia",
    image: "assets/img/fondos/fondo5.jpg",
    order: 3,

  },
    {
    id: 3,
     tittle: { first: "Hace tu reserva" ,
        second: "Promo temporada alta"
    },
    link: "/productos/familia",
    image: "assets/img/fondos/fondo.jpg",
    order: 3,

  },
   {
    id: 4,
     tittle: { first: "¿Te lo vas a perder?" ,
        second: "Promo temporada alta"
    },
    link: "/productos/familia",
    image: "assets/img/fondos/culopatines.jpg",
    order: 3,
   
  },
];
