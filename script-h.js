



const allBtn = document.getElementById("allBtn");

const treesContainer = document.getElementById("card-container");
treesContainer.innerHTML = "";

 async function loadTrees() {
   const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
   const data = await res.json();
   displayTrees(data.data);
}

 async function loadDetails(id) {
   const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}");
   const data = await res.json();
   showdetails(data.data);
}

function showDetails(tree) {

  const detailsContainer = document.getElementById("details-container");
}

function displayTrees(trees) {
  console.log(trees);

     trees.forEach((tree) => {
     console.log(tree);
     const card = document.createElement("div")
     card.className = "card white shadow-sm gap-4 p-4";
       const countElement = document.getElementById("card-count");
       


  


      countElement.innerText = trees.length;
       card.innerHTML = `

        <div class="flex justify-end">
          <p class="bg-[#FEECEC] rounded-2xl text-red-400 text-3 font-medium py-1 px-2">${tree.priority}</p></div>

           <h2 class="text-[#1F2937] font-semibold">${tree.title}</h2>
             
          <p class="text-[#64748B] font-[12px] line-clamp-2">${tree.description}</p>
           <p>${tree.description.slice(0,60)}...</p>

          <p>${tree.status}</p>
          
          <p class="bg-[#bbecb8] rounded-2xl text-red-400 text-3 font-medium py-1 px-2"> ${tree.labels}</p>

          <hr>
          <div>
          <p>${tree.author}</p>
          <p>${tree.createdAt}</p>

          
          


     
    

        </div> 
`;
    
       card.onclick = () => loadDetails(tree.id);
    treesContainer.appendChild(card);
       
  });
  }



loadTrees();

