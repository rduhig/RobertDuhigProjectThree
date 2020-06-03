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

const plants = [
    {name: "Hoptree", binomialName: "Ptelea trifoliata", sun: ["partial", "full"], type: "tree", age: "P", height: "20 feet", bloom: "LSp", color: "white"},
    {name: "Pipevine", binomialName: "Aristolochia macrophylla", sun: ["partial", "full"], type: "vine", age: "P", height: "30 feet", bloom: "LSp", color: "purple"},
    {name: "Pawpaw", binomialName: "Asimina triloba", sun: ["partial", "full"], type: "tree", age: "P", height: "25 feet"},
    {name: "Spicebush", binomialName: "Lindera benzoin", sun: ["partial", "full"], type: "shrub", age: "P", height: "12 feet", bloom: "ESp", color: "yellow"},
    {name: "Sweet Crabapple", binomialName: "Malus coronaria", sun: ["partial", "full"], type: "tree", age: "P", height: "30 feet", bloom: "LSp", color: "pink"},
    {name: "Tuliptree", binomialName: "Liriodendron tulipifera", sun: ["full"], type: "tree", age: "P", height: "100 feet", bloom: "ESu", color: "yellow"},
    {name: "Black Cherry", binomialName: "Prunus serotina", sun: ["full"], type: "tree", age: "P", height: "80 feet", bloom: "Su", color: "white"},
    {name: "Pussy Willow", binomialName: "Salix discolor", sun: ["partial", "full"], type: "tree", age: "P", height: "20 feet", bloom: "ESp", color: "white"},
    {name: "Aniseroot", binomialName: "Osmorhiza longistylis", sun: ["shade", "partial"], type: "herb", age: "SLP", height: "2 feet", bloom: "ESu", color: "white"},
    {name: "Golden Alexander", binomialName: "Zizia aurea", sun: ["partial", "full"], type: "herb", age: "SLP", height: "2 feet", bloom: "LSp", color: "yellow"},
    {name: "Great Angelica", binomialName: "Angelica atropurpurea", sun: ["partial", "full"], type: "herb", age: "B", height: "6 feet", bloom: "LSp", color: "green"},
    {name: "Anise", binomialName: "Pimpinella anisum", sun: ["full"], type: "herb", age: "A", height: "3 feet", bloom: "Su", color: "white"},
    {name: "Caraway", binomialName: "Carum carvi", sun: ["full"], type: "herb", age: "B", height: "2 feet", bloom: "ESu", color: "white"},
    {name: "Coriander", binomialName: "Coriandrum sativum", sun: ["partial", "full"], type: "herb", age: "A", height: "2 feet", bloom: "Su", color: "white"},
    {name: "Dill", binomialName: "Anethum graveolens", sun: ["full"], type: "herb", age: "A", height: "2 feet", bloom: "Su", color: "yellow"},
    {name: "Fennel", binomialName: "Foeniculum vulgare", sun: ["full"], type: "herb", age: "P", height: "8 feet", bloom: "LSu", color: "yellow"},
    {name: "Lovage", binomialName: "Levisticum officinale", sun: ["partial", "full"], type: "herb", age: "P", height: "6 feet", bloom: "LSp", color: "yellow"},
    {name: "Parsley", binomialName: "Petroselinum crispum", sun: ["full"], type: "herb", age: "B", height: "2 feet", bloom: "Su", color: "yellow"},
];