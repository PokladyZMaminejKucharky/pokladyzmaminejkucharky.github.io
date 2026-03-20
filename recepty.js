// globálne počítadlo
let globalCount = +localStorage.getItem("globalCount") || 0;
document.getElementById("globalCount").textContent = globalCount;

// všetky odkazy na recepty
document.querySelectorAll(".recept a").forEach(link => {

    const id = link.dataset.id;

    let count = +localStorage.getItem(id) || 0;
    document.getElementById(id).textContent = count;

    link.addEventListener("click", () => {
        localStorage.setItem(id, ++count);
        localStorage.setItem("globalCount", ++globalCount);
    });

});