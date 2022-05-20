fetch('https://apple-products.api.stdlib.com/apple-products@dev/')
   .then((response) => response.json())
   .then((object) => {
      const allProducts = object.data;
      console.log(allProducts);
   });
