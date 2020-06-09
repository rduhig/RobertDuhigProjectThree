const app = {};

app.plants = [
    {name: "Hoptree", binomialName: "Ptelea trifoliata", sun: ["partial", "full"], type: "Tree", lifespan: "Perennial", height: "20 feet", bloom: "Late Spring", color: "White", img: "./assets/plants/hoptree.jpg"},
    {name: "Pipevine", binomialName: "Aristolochia macrophylla", sun: ["partial", "full"], type: "Vine", lifespan: "Perennial", height: "30 feet", bloom: "Late Spring", color: "Purple", img: "./assets/plants/pipevine.jpg"},
    {name: "Pawpaw", binomialName: "Asimina triloba", sun: ["partial", "full"], type: "Tree", lifespan: "Perennial", height: "25 feet", bloom: "", color: "", img: "./assets/plants/pawpaw.jpg"},
    {name: "Spicebush", binomialName: "Lindera benzoin", sun: ["partial", "full"], type: "Shrub", lifespan: "Perennial", height: "12 feet", bloom: "Early Spring", color: "Yellow", img: "./assets/plants/spicebush.jpg"},
    {name: "Sweet Crabapple", binomialName: "Malus coronaria", sun: ["partial", "full"], type: "Tree", lifespan: "Perennial", height: "30 feet", bloom: "Late Spring", color: "Pink", img: "./assets/plants/sweetCrabapple.jpg"},
    {name: "Tuliptree", binomialName: "Liriodendron tulipifera", sun: ["full"], type: "Tree", lifespan: "Perennial", height: "100 feet", bloom: "Early Summer", color: "Yellow", img: "./assets/plants/tuliptree.jpg"},
    {name: "Black Cherry", binomialName: "Prunus serotina", sun: ["full"], type: "Tree", lifespan: "Perennial", height: "80 feet", bloom: "Summer", color: "White", img: "./assets/plants/blackCherry.jpg"},
    {name: "Pussy Willow", binomialName: "Salix discolor", sun: ["partial", "full"], type: "Tree", lifespan: "Perennial", height: "20 feet", bloom: "Early Spring", color: "White", img: "./assets/plants/pussyWillow.jpg"},
    {name: "Aniseroot", binomialName: "Osmorhiza longistylis", sun: ["shade", "partial"], type: "Herb", lifespan: "Short-lived Perennial", height: "2 feet", bloom: "Early Summer", color: "White", img: "./assets/plants/aniseroot.jpg"},
    {name: "Golden Alexander", binomialName: "Zizia aurea", sun: ["partial", "full"], type: "Herb", lifespan: "Short-lived Perennial", height: "2 feet", bloom: "Late Spring", color: "Yellow", img: "./assets/plants/goldenAlexander.jpg"},
    {name: "Great Angelica", binomialName: "Angelica atropurpurea", sun: ["partial", "full"], type: "Herb", lifespan: "Biennial", height: "6 feet", bloom: "Late Spring", color: "Green", img: "./assets/plants/greatAngelica.jpg"},
    {name: "Anise", binomialName: "Pimpinella anisum", sun: ["full"], type: "Herb", lifespan: "Annual", height: "3 feet", bloom: "Summer", color: "White", img: "./assets/plants/anise.jpg"},
    {name: "Caraway", binomialName: "Carum carvi", sun: ["full"], type: "Herb", lifespan: "Biennial", height: "2 feet", bloom: "Early Summer", color: "White", img: "./assets/plants/caraway.jpg"},
    {name: "Coriander", binomialName: "Coriandrum sativum", sun: ["partial", "full"], type: "Herb", lifespan: "Annual", height: "2 feet", bloom: "Summer", color: "White", img: "./assets/plants/coriander.jpg"},
    {name: "Dill", binomialName: "Anethum graveolens", sun: ["full"], type: "Herb", lifespan: "Annual", height: "2 feet", bloom: "Summer", color: "Yellow", img: "./assets/plants/dill.jpg"},
    {name: "Fennel", binomialName: "Foeniculum vulgare", sun: ["full"], type: "Herb", lifespan: "Perennial", height: "8 feet", bloom: "Late Summer", color: "Yellow", img: "./assets/plants/fennel.jpg"},
    {name: "Lovage", binomialName: "Levisticum officinale", sun: ["partial", "full"], type: "Herb", lifespan: "Perennial", height: "6 feet", bloom: "Late Spring", color: "Yellow", img: "./assets/plants/lovage.jpg"},
    {name: "Parsley", binomialName: "Petroselinum crispum", sun: ["full"], type: "Herb", lifespan: "Biennial", height: "2 feet", bloom: "Summer", color: "Yellow", img: "./assets/plants/parsley.jpg"},
];

app.filteredPlants = [];
app.chosenPlants = [];

app.displayPlants = () => {
    app.filteredPlants.forEach(plant => {
        const plantID = plant.name.toLowerCase().replace(/\s/g, "");

        $(".filteredPlants ul").append(`
            <li>
                <input type="checkbox" id="${plantID}">
                <label for="${plantID}">
                    <img src="${plant.img}" alt="${plant.name}">
                    <div class="details">
                    <div class="flexContainer">
                    <span>${plant.name}</span>
                    <span class="binomialName">${plant.binomialName}</span>
                    <span>${plant.type}</span>
                    <span>${plant.lifespan}</span>
                    <span>${plant.height}</span>
                    <span>${plant.bloom}</span>
                    <span class="color">${plant.color}</span>
                    </div>
                    </div>
                </label>
            </li>
        `);
    });
};

app.displayGarden = (plantNames) => {
    app.chosenPlants = app.filteredPlants.filter(plant => plantNames.includes(plant.name.toLowerCase().replace(/\s/g, "")));
    app.chosenPlants.forEach(plant => {
        $(".gardenBox ul").append(`
            <li class="gardenPlant">
                <img src="${plant.img}" alt="${plant.name}>
                <span>${plant.name}</span>
            </li>
        `);

        $(".step3 button[type=submit]").prop("disabled", true);
        $(".garden").removeClass("hidden");
    });
};

app.selectLightExposure = light => {
    app.plants.forEach(plant => {
        if ($.inArray(light, plant.sun) >= 0) {
            app.filteredPlants.push(plant);
        }
    });

    $(".step1").toggleClass("selected");
    $(".step1 input").prop("disabled", true);
    $(".step1 button").prop("disabled", true);
    $(".step2").toggleClass("selected").toggleClass("hidden");
};

app.selectFilters = (type, lifespan, bloom, color) => {
    if (type) {
        app.filteredPlants = app.filteredPlants.filter(plant => plant.type === type);
    }
    if (lifespan) {
        app.filteredPlants = app.filteredPlants.filter(plant => plant.lifespan === lifespan);
    }
    if (bloom) {
        app.filteredPlants = app.filteredPlants.filter(plant => plant.bloom.includes(bloom));
    }
    if (color) {
        app.filteredPlants = app.filteredPlants.filter(plant => plant.color === color);
    }

    $(".step2").toggleClass("selected");
    $(".step2 select").prop("disabled", true);
    $(".step2 button").prop("disabled", true);
    $(".step3").toggleClass("selected").toggleClass("hidden");
    app.displayPlants();
};

app.init = () => {
    const $form1 = $(".sunExposure");
    const $form2 = $(".filters");
    const $form3 = $(".filteredPlants");
    const $submit1 = $(".step1 button");
    const $submit2 = $(".step2 button");
    $submit1.prop("disabled", true);
    $(".step3 button[type=submit]").prop("disabled", true);
    
    $(".step1 input[type=radio]").on("click", () => {
        $submit1.prop("disabled", false);
    });

    $($form1).on("submit", (e) => {
        e.preventDefault();
        const light = $(".step1 input[type=radio]:checked").val();
        app.selectLightExposure(light);
    });

    $($form2).on("submit", (e) => {
        e.preventDefault();
        const type = $("#type option:selected").val();
        const lifespan = $("#lifespan option:selected").val();
        const bloom = $("#bloom option:selected").val();
        const color = $("#color option:selected").val();
        app.selectFilters(type, lifespan, bloom, color);
    });

    $($form3).on("submit", (e) => {
        e.preventDefault();
        const plantNames = [];

        $(".step3 input[type=checkbox]:checked").toArray().forEach(item => {
            plantNames.push($(item).attr("id"));
        });

        app.displayGarden(plantNames);
    });

    $(".step3 ul").on("change", "li", () => {
        $(".step3 button[type=submit]").prop("disabled", false);
    });

    $(".step3 button[type=reset]").on("click", () => {
        location.reload(true);
    });
};

$(() => {
    app.init();
});