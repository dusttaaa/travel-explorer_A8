$(document).ready(function(){
    console.log("jQuery is ready!");
    const submitButton = $("#submitTravel");
    const spinner = $("#submitSpinner");
    const submitText = $("#submitText");
    const notification = $("#travelStatus");

    $("#multiStepForm").on("submit", function(event){
        console.log("Form submitted!");
        event.preventDefault();
        notification.hide();

        spinner.removeClass("d-none");
        submitText.text("Please wait...");
        submitButton.prop("disabled",true);

        setTimeout(function(){
            spinner.addClass("d-none");
            submitText.text("Submit");
            submitButton.prop("disabled",false);
            notification.fadeIn(400).delay(2000).fadeOut(400);
        },2000);
    });
});