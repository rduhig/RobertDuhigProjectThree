/* ~~~~~~~~~~~~~~~~~~~~ MVP ~~~~~~~~~~~~~~~~~~~~ */

// store all the plants as objects in an array

// create an array to store the plants that are compatible with the user's selected garden conditions

// when the user selects their sun exposure condition, traverse the plant array and add all the matching plants to the compatible array

// when the user selects their soil type, traverse the compatible array and add all the matching plants to the new array

// display the contents of the compatible array to the user

// when the user selects their chosen plants with checkboxes, populate a div with the picture and name of that chosen plant

// create a button to clear the user's garden conditions and displayed plants

/* ~~~~~~~~~~~~~~~~~~~~ STRETCH GOALS ~~~~~~~~~~~~~~~~~~~~ */

// create an array to store the plants that match the user's selected filters

// when the user selects options to filter the plants, traverse the compatible array and add all the matching plants to the filtered array

// display the contents of the filtered array to the user

// create a button to clear the user's filters

// for each plant that is displayed, create a div with a background color that matches the bloom of that plant, and overlay that div on the bloom timeline to represent that plant's bloom period

const app = {};

app.plants = [
    {name: "Hoptree", binomialName: "Ptelea trifoliata", sun: ["partial", "full"], type: "Tree", age: "Perennial", height: "20 feet", bloom: "Late Spring", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Pipevine", binomialName: "Aristolochia macrophylla", sun: ["partial", "full"], type: "Vine", age: "Perennial", height: "30 feet", bloom: "Late Spring", color: "Purple", img: "https://source.unsplash.com/random/100x100"},
    {name: "Pawpaw", binomialName: "Asimina triloba", sun: ["partial", "full"], type: "Tree", age: "Perennial", height: "25 feet", bloom: "", color: "", img: "https://source.unsplash.com/random/100x100"},
    {name: "Spicebush", binomialName: "Lindera benzoin", sun: ["partial", "full"], type: "Shrub", age: "Perennial", height: "12 feet", bloom: "Early Spring", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Sweet Crabapple", binomialName: "Malus coronaria", sun: ["partial", "full"], type: "Tree", age: "Perennial", height: "30 feet", bloom: "Late Spring", color: "Pink", img: "https://source.unsplash.com/random/100x100"},
    {name: "Tuliptree", binomialName: "Liriodendron tulipifera", sun: ["full"], type: "Tree", age: "P", height: "100 feet", bloom: "Early Summer", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Black Cherry", binomialName: "Prunus serotina", sun: ["full"], type: "Tree", age: "Perennial", height: "80 feet", bloom: "Summer", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Pussy Willow", binomialName: "Salix discolor", sun: ["partial", "full"], type: "Tree", age: "Perennial", height: "20 feet", bloom: "Early Spring", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Aniseroot", binomialName: "Osmorhiza longistylis", sun: ["shade", "partial"], type: "Herb", age: "Short-lived Perennial", height: "2 feet", bloom: "Early Summer", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Golden Alexander", binomialName: "Zizia aurea", sun: ["partial", "full"], type: "Herb", age: "Short-lived Perennial", height: "2 feet", bloom: "Late Spring", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Great Angelica", binomialName: "Angelica atropurpurea", sun: ["partial", "full"], type: "Herb", age: "Biennial", height: "6 feet", bloom: "Late Spring", color: "Green", img: "https://source.unsplash.com/random/100x100"},
    {name: "Anise", binomialName: "Pimpinella anisum", sun: ["full"], type: "Herb", age: "Annual", height: "3 feet", bloom: "Summer", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Caraway", binomialName: "Carum carvi", sun: ["full"], type: "Herb", age: "Biennial", height: "2 feet", bloom: "Early Summer", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Coriander", binomialName: "Coriandrum sativum", sun: ["partial", "full"], type: "Herb", age: "Annual", height: "2 feet", bloom: "Summer", color: "White", img: "https://source.unsplash.com/random/100x100"},
    {name: "Dill", binomialName: "Anethum graveolens", sun: ["full"], type: "Herb", age: "Annual", height: "2 feet", bloom: "Summer", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Fennel", binomialName: "Foeniculum vulgare", sun: ["full"], type: "Herb", age: "Perennial", height: "8 feet", bloom: "Late Summer", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Lovage", binomialName: "Levisticum officinale", sun: ["partial", "full"], type: "Herb", age: "Perennial", height: "6 feet", bloom: "Late Spring", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
    {name: "Parsley", binomialName: "Petroselinum crispum", sun: ["full"], type: "Herb", age: "Biennial", height: "2 feet", bloom: "Summer", color: "Yellow", img: "https://source.unsplash.com/random/100x100"},
];

app.filteredPlants = [];

app.displayPlants = () => {
    app.filteredPlants.forEach(plant => {
        const plantID = plant.name.toLowerCase().replace(/\s/g, "");

        $(".filteredPlants ul").append(`
            <li>
                <input type="checkbox" id="${plantID}">
                <label for="${plantID}">
                    <img src="https://source.unsplash.com/random/50x50">
                    <span>${plant.name}</span>
                    <span class="binomialName">${plant.binomialName}</span>
                    <span>${plant.type}</span>
                    <span>${plant.age}</span>
                    <span>${plant.height}</span>
                    <span>${plant.bloom}</span>
                    <span class="color">${plant.color}</span>
                </label>
            </li>
        `);
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
    // $(".step2 button").prop("disabled", false);
    // $(".step2").toggleClass("disabled");
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
    // $(".step2 button").prop("disabled", true);
    app.displayPlants();
};

app.init = () => {
    const $form1 = $(".sunExposure");
    const $form2 = $(".filters");
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