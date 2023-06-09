let product =[
    { id:1,
     picture:"https://ibb.co/PTLzBsh",
     name: "Camera",
     title: "Camera",
    cost : "R550",
     },
     { id:2,
         picture:"https://ibb.co/PTLzBsh",
         name: "gaming pc",
         title: "Pc",
        cost : "R15000",
         },
         { id:2,
             picture:"https://ibb.co/PTLzBsh",
             name: "Xbox",
             title: "Xbox Series X",
            cost : "R10000",
             },
             { id:2,
                 picture:"https://ibb.co/PTLzBsh",
                 name: "Playstation 5",
                 title: "Playstation 5",
                cost : "R12000",
                 },
                 { id:2,
                     picture:"https://ibb.co/PTLzBsh",
                     name: "headphones",
                     title: "headphones",
                    cost : "R 400",
                     },
  ];
  
  let myProducts = document.querySelector(".allCards"); 
   product.forEach((data) => {
     myProducts.innerHTML += `
     <div class="col-4">
       <div class= "card">
          <div class="images">
              <img src="${data.picture}" alt="${data.name}" loading="lazy" class="img-fluid">
              <h3>${data.title}</h3>
          </div>
     <p class="price">${data.cost}</p>
     </div>
    </div>
     `
  });