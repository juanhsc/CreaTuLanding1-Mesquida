export const funkos = [
  {
    id: 1,
    name: "Funko Pop Batman",
    price: 15.99,
    category: "DC",
    image: "https://via.placeholder.com/300x400/000000/FFFFFF?text=Batman+Funko",
    description: "Funko Pop de Batman, figura coleccionable de vinilo.",
    stock: 10
  },
  {
    id: 2,
    name: "Funko Pop Spider-Man",
    price: 16.99,
    category: "Marvel",
    image: "https://via.placeholder.com/300x400/FF0000/FFFFFF?text=Spider-Man+Funko",
    description: "Funko Pop de Spider-Man, figura coleccionable de vinilo.",
    stock: 8
  },
  {
    id: 3,
    name: "Funko Pop Harry Potter",
    price: 14.99,
    category: "Movies",
    image: "https://via.placeholder.com/300x400/800080/FFFFFF?text=Harry+Potter+Funko",
    description: "Funko Pop de Harry Potter, figura coleccionable de vinilo.",
    stock: 12
  },
  {
    id: 4,
    name: "Funko Pop Pikachu",
    price: 17.99,
    category: "Anime",
    image: "https://via.placeholder.com/300x400/FFFF00/000000?text=Pikachu+Funko",
    description: "Funko Pop de Pikachu, figura coleccionable de vinilo.",
    stock: 15
  },
  {
    id: 5,
    name: "Funko Pop Darth Vader",
    price: 18.99,
    category: "Star Wars",
    image: "https://via.placeholder.com/300x400/000000/FFFFFF?text=Darth+Vader+Funko",
    description: "Funko Pop de Darth Vader, figura coleccionable de vinilo.",
    stock: 6
  }
];

// Función que simula una llamada a API (como pide tu profesor)
export const getFunkos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(funkos);
    }, 1000); // Simula 1 segundo de carga
  });
};

// Función para obtener un funko por ID
export const getFunkoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const funko = funkos.find(item => item.id === parseInt(id));
      resolve(funko);
    }, 800);
  });
};

// Función para obtener funkos por categoría
export const getFunkosByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = funkos.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filtered);
    }, 1000);
  });
};