export const funkos = [
  {
    id: 1,
    name: "Funko Goku",
    price: 15.99,
    category: "Dragon ball",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJaXX0sol10BgSalHqIE_gm8cGlpnFSNTLw&s",
    description: "Funko Pop goku, figura coleccionable de vinilo.",
    stock: 10
  },
  {
    id: 2,
    name: "Funko Vegeta",
    price: 16.99,
    category: "Dragon ball",
    image: "https://http2.mlstatic.com/D_NQ_NP_992711-MLA43576274674_092020-O.webp",
    description: "Funko Pop de Vegeta, figura coleccionable de vinilo.",
    stock: 8
  },
  {
    id: 3,
    name: "Funko Gohan",
    price: 14.99,
    category: "Dragon ball",
    image: "https://http2.mlstatic.com/D_NQ_NP_655426-MLA43472371537_092020-O.webp",
    description: "Funko Pop de Gohan, figura coleccionable de vinilo.",
    stock: 12
  },
  {
    id: 4,
    name: "Funko Freezer",
    price: 17.99,
    category: "Dragon ball",
    image: "https://http2.mlstatic.com/D_NQ_NP_813923-MLA40936057079_022020-O.webp",
    description: "Funko Pop de freezer, figura coleccionable de vinilo.",
    stock: 15
  },
  {
    id: 5,
    name: "Funko Broly",
    price: 18.99,
    category: "Dragon ball",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS930n0txN72pNx3YMaS5o2-iMf1C04jVXvQA&s",
    description: "Funko Pop de Broly, figura coleccionable de vinilo.",
    stock: 6
  },
  {
    id: 6,
    name: "Funko Iron man",
    price: 18.99,
    category: "Marvel",
    image: "https://acdn-us.mitiendanube.com/stores/806/999/products/funko-pop-iron-man-04-original-d_nq_np_804754-mla26965245820_032018-f1-698f1745db6242f56315331740466313-1024-1024.jpg",
    description: "Funko Pop de Iron man, figura coleccionable de vinilo.",
    stock: 6
  },
  {
    id: 7,
    name: "Funko Spider man",
    price: 18.99,
    category: "Marvel",
    image: "https://http2.mlstatic.com/D_NQ_NP_832652-MLA49065131353_022022-O.webp",
    description: "Funko Pop de Spider man, figura coleccionable de vinilo.",
    stock: 6
  },
  {
    id: 8,
    name: "Funko Batman",
    price: 18.99,
    category: "DC",
    image: "https://http2.mlstatic.com/D_NQ_NP_602931-MLM74218919443_012024-O.webp",
    description: "Funko Pop de Batman, figura coleccionable de vinilo.",
    stock: 6
  },
  {
    id: 9,
    name: "Funko Superman",
    price: 18.99,
    category: "DC",
    image: "https://images.bigbadtoystore.com/images/p/full/2024/09/9e1ee7ed-df7c-4d3e-a5cc-59a0e63f3a93.jpg",
    description: "Funko Pop de Superman, figura coleccionable de vinilo.",
    stock: 6
  }
];


export const getFunkos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(funkos);
    }, 1000); 
  });
};


export const getFunkoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const funko = funkos.find(item => item.id === parseInt(id));
      resolve(funko);
    }, 800);
  });
};


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