//When the document loads
$(document).ready(function() {

    console.log("Hello");

    // ------------------------------------------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'})

    //------------------------------------------------------------------------
    // Browse

    // Hide all description text from plant cards
    $("#descriptionText").hide();

    //------------------------------------------------------------------------
    // Wishlist
});

// When a plant card is clicked
$(".card").click(function(){

    //Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");
});

//When a remove button is clicked
$(document).ready(function(){

    //Remove button click event
    $(document).on("click", ".btn-btn-danger", function(){
        $(this).closest("tr").remove();
    });
})