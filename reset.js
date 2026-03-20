document.getElementById("resetBtn").addEventListener("click", () => {
    // Zoznam všetkých ID receptov
    const receptyIDs = [
        "paradajkovapolievka","borsc","hovadzigulas","mexickygulas",
        "treskazkurata","domacapizza","pizzarozky","svieckovanasmotane",
        "domacebuchty","domacepalacinky","jablkovykolac","medoverezy",
        "bananovogastanovykolac","domacichlieb"
    ];

    // Vymazanie počítadiel pre každý recept
    receptyIDs.forEach(id => localStorage.removeItem(id));
    localStorage.removeItem("globalCount"); // vynulovanie globálneho počítadla

    const status = document.getElementById("status");
    status.textContent = "Počítadlá boli vynulované!";
});