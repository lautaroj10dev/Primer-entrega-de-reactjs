const productos = [
  {
    id: 1,
    nombre: "Café Espresso",
    precio: 1200,
    categoria: "Bebidas",
    descripcion: "Café espresso doble, intenso y aromático",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Exprimido de Naranja",
    precio: 1600,
    categoria: "Bebidas",
    descripcion: "Jugo natural de naranja recién exprimido",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Cappuccino",
    precio: 1900,
    categoria: "Bebidas",
    descripcion: "Café con leche espumada y cacao en polvo",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Té",
    precio: 1500,
    categoria: "Bebidas",
    descripcion: "Té caliente variedad a elegir",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Submarino",
    precio: 1400,
    categoria: "Bebidas",
    descripcion: "Chocolate caliente",
    imagen: ""
  },
  {
    id: 6,
    nombre: "Medialunas Jamón y Queso",
    precio: 1000,
    categoria: "Desayunos",
    descripcion: "Medialunas frescas rellenas de jamón y queso",
    imagen: ""
  },
  {
    id: 7,
    nombre: "Huevos Revueltos con Tostadas",
    precio: 2300,
    categoria: "Desayunos",
    descripcion: "Huevos revueltos acompañados de tostadas crujientes",
    imagen: ""
  },
  {
    id: 8,
    nombre: "Waffles con Frutos Rojos",
    precio: 3200,
    categoria: "Desayunos",
    descripcion: "Waffles esponjosos con frutillas, arándanos y miel",
    imagen: ""
  },
  {
    id: 9,
    nombre: "Tostadas",
    precio: 1500,
    categoria: "Desayunos",
    descripcion: "Tostadas caseras con mermelada o manteca",
    imagen: ""
  },
  {
    id: 10,
    nombre: "Ensalada con Pollo a la Plancha",
    precio: 4200,
    categoria: "Almuerzos",
    descripcion: "Ensalada fresca con pechuga de pollo a la plancha",
    imagen: ""
  },
  {
    id: 11,
    nombre: "Puré de Calabaza y Batata con Carne",
    precio: 6500,
    categoria: "Almuerzos",
    descripcion: "Puré cremoso de calabaza y batata con carne estofada",
    imagen: ""
  },
  {
    id: 12,
    nombre: "Sándwich de Miga",
    precio: 2800,
    categoria: "Almuerzos",
    descripcion: "Sándwich de miga",
    imagen: ""
  },
  {
    id: 13,
    nombre: "Bife de Chorizo con Puré de Papas",
    precio: 5200,
    categoria: "Almuerzos",
    descripcion: "Bife de chorizo jugoso con puré casero",
    imagen: ""
  },
  {
    id: 14,
    nombre: "Tiramisú",
    precio: 2800,
    categoria: "Meriendas",
    descripcion: "Tiramisú italiano clásico con mascarpone y café",
    imagen: ""
  },
  {
    id: 15,
    nombre: "Chocotorta",
    precio: 3000,
    categoria: "Meriendas",
    descripcion: "Torta de chocolinas con queso cream y dulce de leche",
    imagen: ""
  },
  {
    id: 16,
    nombre: "Torta Matilda",
    precio: 3500,
    categoria: "Meriendas",
    descripcion: "Torta Matilda con almendras y cobertura de chocolate",
    imagen: ""
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === id);
      resolve(producto);
    }, 500);
  });
};

export const getProductosByCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtrados = productos.filter(p => p.categoria === categoria);
      resolve(filtrados);
    }, 500);
  });
};