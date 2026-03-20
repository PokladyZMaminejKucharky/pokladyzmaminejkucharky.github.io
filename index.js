// Všetky recepty a ich údaje
const recepty = [
    { id: "paradajkovapolievka", nazov: "Paradajková polievka", popis: "Jednoduchá polievka ako z detstva", img: "originalneobrazky/paradajkovapolievka.jpg", tag: "vegan", tagEmoji: "🌱 Vegán", link: "paradajkovapolievka.html" },
    { id: "borsc", nazov: "Boršč", popis: "Tradičná hustá polievka z hovädzieho mäsa a červenej repy", img: "originalneobrazky/borsc.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "borsc.html" },
    { id: "hovadzigulas", nazov: "Hovädzí guláš", popis: "Tradičný domáci guláš vhodný na obed alebo večeru", img: "originalneobrazky/hovadzigulas.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "hovadzigulas.html" },
    { id: "mexickygulas", nazov: "Mexický guláš", popis: "Pikantný hovädzí guláš s paradajkovým základom", img: "originalneobrazky/mexickygulas.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "mexickygulas.html" },
    { id: "treskazkurata", nazov: "Treska z kuraťa", popis: "Studený šalát s kuracím mäsom a kyslou zeleninou", img: "originalneobrazky/treskazkurata.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "treskazkurata.html" },
    { id: "domacapizza", nazov: "Domáca pizza", popis: "Čerstvá pizza s vlastným cestom a plnkami", img: "originalneobrazky/domacapizza.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "domacapizza.html" },
    { id: "pizzarozky", nazov: "Pizza rožky", popis: "Mäkké rožky plnené salámou a syrom", img: "originalneobrazky/pizzarozky.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "pizzarozky.html" },
    { id: "svieckovanasmotane", nazov: "Sviečková na smotane", popis: "Tradičné sviatočné jedlo so smotanovou omáčkou", img: "originalneobrazky/svieckovanasmotane.jpg", tag: "maso", tagEmoji: "🥩 Mäso", link: "svieckovanasmotane.html" },
    { id: "domacebuchty", nazov: "Domáce buchty", popis: "Mäkké kysnuté buchty plnené tradičným lekvárom", img: "originalneobrazky/domacebuchty.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "domacebuchty.html" },
    { id: "domacepalacinky", nazov: "Domáce palacinky", popis: "Jemné palacinky s džemom alebo tvarohom", img: "originalneobrazky/domacepalacinky.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "domacepalacinky.html" },
    { id: "jablkovykolac", nazov: "Jablkový koláč", popis: "Voňavý koláč s jablkami a škoricou", img: "originalneobrazky/jablkovykolac.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "jablkovykolac.html" },
    { id: "medoverezy", nazov: "Medové rezy", popis: "Sladké vrstvené medové rezy s krémom a čokoládou", img: "originalneobrazky/medoverezy.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "medoverezy.html" },
    { id: "bananovogastanovykolac", nazov: "Banánovo-gaštanový koláč", popis: "Sladký koláč s banánmi a gaštanovým pyré", img: "originalneobrazky/bananovogastanovykolac.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "bananovogastanovykolac.html" },
    { id: "domacichlieb", nazov: "Domáci chlieb", popis: "Tradičný chlieb s varenými zemiakmi a kmínom", img: "originalneobrazky/domacichlieb.jpg", tag: "vege", tagEmoji: "🥦 Vegetarián", link: "domacichlieb.html" }
];

// načítanie počtu zobrazení z localStorage
recepty.forEach(r => {
    r.views = +localStorage.getItem(r.id) || 0;
});

// zoradenie podľa počtu zobrazení
const top3 = recepty.sort((a, b) => b.views - a.views).slice(0, 3);

// vytvorenie HTML pre top 3
const container = document.getElementById("topReceptyContainer");

top3.forEach(r => {
    const div = document.createElement("div");
    div.className = "recept";
    div.innerHTML = `
        <img src="${r.img}" alt="${r.nazov}">
        <div class="text">
            <h3>${r.nazov}</h3>
            <p>${r.popis}</p>
            <p class="tag ${r.tag}">${r.tagEmoji}</p>
            <p class="views">Zobrazenia: <span>${r.views}</span></p>
            <a href="${r.link}" data-id="${r.id}">Zobraziť recept →</a>
        </div>
    `;
    container.appendChild(div);

    // pridanie click listenera pre počítadlo
    div.querySelector("a").addEventListener("click", () => {
        localStorage.setItem(r.id, r.views + 1);
    });
});