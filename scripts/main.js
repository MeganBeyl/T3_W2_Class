// ----------------------------------------------------------------------------
// Plants Array
// ----------------------------------------------------------------------------

const arrPlants =[
    {
        name: "Ficus Tree",
        price: 250,
        description: "Beautiful and lush, this sweet-looking indoor plant gives off a refreshing aura with it's emerald-green leaves and long thin stem. Easy to care for and is at an ideal height, the Ficus Tree is a great addition to brighten your home.",
        image: "plant1.png",
        lightAmount: "low",
        addedDate: "2023-03-25",
    },
    {
        name: "Thin Leaf Tree",
        price: 350,
        description: "A tall, and beautiful slim friend, reaching for the stars.",
        image: "Plant2.png",
        lightAmount: "bright",
        addedDate: "2023-05-01",
    },
    {
        name: "Medium Palm Tree",
        price: 400,
        description: "A plant to show off to your family at the next gathering.",
        image: "Plant4.png",
        lightAmount: "low",
        addedDate: "2023-07-04",
    },
    {
        name: "Wrinkly Mini Shrub",
        price: 200,
        description: "Brings in the shade from the outside world, into your home.",
        image: "Plant8.png",
        lightAmount: "bright",
        addedDate: "2023-03-25",
    },
    {
        name: "Soft Leaf Bush",
        price: 250,
        description: "Small, yet light bush that breathes life into your space.",
        image: "Plant6.png",
        lightAmount: "low",
        addedDate: "2023-03-25",
    },
];

let appliedFilter = "";
let appliedSort = "date added";

// ----------------------------------------------------------------------------
// When the document loads
// ----------------------------------------------------------------------------
$(document).ready(function() {

    console.log("Hello");

    // ------------------------------------------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'})

    //------------------------------------------------------------------------
    // Browse

    loadPlants();
});

// ----------------------------------------------------------------------------
// Load all plants
// ----------------------------------------------------------------------------
function loadPlants(plantsToShow){
    console.log(plantsToShow);

    for (let i = 0; i < plantsToShow.length; i++){
        const plant = plantsToShow[i];

        console.log(plant);

        //1: Select the plants container add the plant card to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantContainer").children().eq(i+1);

        // 3: Set the content for the current plant card from the plant array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', 'assets/' + plant.image);

        // 4: Hide the description text from the current card
        $(currentChild).find("#descriptionText").hide();
    }

    

};

// ----------------------------------------------------------------------------
// When a filter or sort is clicked
// ----------------------------------------------------------------------------

$("input[name ='filterRadio']").click(function() {
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortPlants();
});

$("input[name ='sortRadio']").click(function() {
    appliedSort = $(this).attr('value');

    console.log(appliedSort);
    filterSortPlants();
});

function filterSortPlants(){

    let filteredSortedArrPlants = [];

    //filter plants
    filteredSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter);

    loadPlants(filteredSortedArrPlants);
}

// ----------------------------------------------------------------------------
// When a plant card is clicked
// ----------------------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function(){

    //Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");
});

// ----------------------------------------------------------------------------
//When a remove button is clicked
// ----------------------------------------------------------------------------
$(document).ready(function(){

    //Remove button click event
    $(document).on("click", ".btn-btn-danger", function(){
        $(this).closest("tr").remove();
    });
});