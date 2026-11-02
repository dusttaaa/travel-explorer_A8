$(document).ready(function(){
    console.log("About jQuery is ready!");
    const copyButton = $("#copyInfoBtn");
    const copyIcon = $("#copyIcon");
    const copyText = $("#copyText");
    const description = $("#memberDescription");
    const copyMessage = $("#copyMessage");

    copyButton.on("click",function(){
        console.log("Copy button clicked!");
        const textToCopy = description.text();
        navigator.clipboard.writeText(textToCopy).then(function(){
            copyIcon.text("✓");
            copyText.text("Copied!");
            copyMessage.removeClass("d-none");
            setTimeout(function(){
                copyIcon.text("⧉");
                copyText.text("Copy Info");
                copyMessage.addClass("d-none");
            },2000);
        });
    });
    
});