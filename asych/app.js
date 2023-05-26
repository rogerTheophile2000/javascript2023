// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then(reponse => {
//   console.log(`Réponse reçue : ${reponse.status}`);
// });

// console.log("Requête initiée…");


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then(reponse => {
//   const jsonPromise = reponse.json();
//   jsonPromise.then(json => {
//     console.log(json[0].name);
//   });
// });

// async function fetchProducts() {
//     try {
//       // Après cette ligne, notre fonction attendra que l'appel à `fetch()`
//       // soit réglé, soit on aura un objet Response dans la variable reponse
//       // soit on aura une erreur qui sera levée
//       const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP : ${response.status}`);
//       }
//       // Après cette ligne, notre fonction attendra que l'appel à
//       // `response.json()` soit réglé et la variable json contiendra
//       // un objet JSON ou alors une erreur sera levée
//       const json = await response.json();
//       console.log(json[0].name);
//     }
//     catch(error) {
//       console.error(`Impossible d'obtenir les produits : ${error}`);
//     }
//   }
  
//   fetchProducts();

async function fetchProducts() {
    try {
      const reponse = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!reponse.ok) {
        throw new Error(`Erreur HTTP : ${reponse.status}`);
      }
      const json = await reponse.json();
      return json;
    }
    catch(error) {
      console.error(`Impossible d'obtenir les produits : ${error}`);
    }
  }
  
  const jsonPromise = fetchProducts();
  jsonPromise.then((json) => console.log(json[0].name));
  
  