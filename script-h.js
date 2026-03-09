
// function loadCaregories() {
//    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

//   // const data = await res.json();
//   // console.log(data);

//   .then((res) => res.json())
//     .then((json) => displayAllCard(json.data));
// }

// const displayAllCard=(cards)=>{
// const allBtn = document.getElementById("allBtn");
// allBtn.innerHTML = "";

//   for (let card of cards) {
//     const cardDiv = document.createElement("div");
//     cardDiv.innerHTML = `<button onclick="loadAllCard"  class="btn btn-ghost text-xl bg-blue-600 px-10">card-$(card.id)</button>
// `;
// }
// }
// loadCaregories();



const treesContainer = document.getElementById("card-container");

 async function loadTrees() {
   const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
   const data = await res.json();
   displayTrees(data.data);
}
function displayTrees(trees) {
  console.log(trees);
  trees.forEach((tree) => {
    console.log(tree);
    const card = document.createElement("div")
    card.className = "card white shadow-sm gap-4 p-4";
    card.innerHTML = `

        <div class="flex justify-end">
          <p class="bg-[#FEECEC] rounded-2xl text-red-400 text-3 font-medium py-1 px-2">${tree.priority}</p></div>

           <h2 class="text-[#1F2937] font-semibold">${tree.title}</h2>
          <p class="text-[#64748B] font-[12px] line-clamp-2">${tree.description}</p>

          <p>${tree.status}</p>
          
          <p class="bg-[#bbecb8] rounded-2xl text-red-400 text-3 font-medium py-1 px-2">${tree.labels}</p>

          <hr>
          <div>
          <p>${tree.author}</p>
          <p>${tree.createdAt}</p>


     
    

        </div> 
`;
    
    treesContainer.appendChild(card);
      
          
  });
  }



loadTrees();

