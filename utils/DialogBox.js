/* Pop up Dialog Box */
dialogBoxes = [];

//Close dialog box when clicking outside
/*
$(document).click(function(event) {
    if (dialogBoxOpened) {
        if (!$(event.target).closest('.dialog-box-container').length){
            --dialogBoxCount;
            dialogBoxes.splice(0, 1);
            $(".dialog-box-container").remove();
            
            if (dialogBoxes.length == 0) {
                dialogBoxOpened = false;
            } else {
                dialogBoxes[0].style.display +
            }
        }
    }
});*/
$(document).click(function(event) {
    if (dialogBoxOpened && dialogBoxes.length >= 1) {
        if (!$(event.target).closest(dialogBoxes[0]).length){
            dialogBoxes[0].remove();
            dialogBoxes.splice(0, 1);
            if (dialogBoxes.length == 0) {
                dialogBoxOpened = false;
            } else {
                dialogBoxes[0].style.visibility = "visible";
            }
        }
    }
});


//Dialog box close buttons
/*
$(document).on('click', '.dialog-box-close-button', function( event ) {
    console.log("clicked close button");
    if (dialogBoxOpened) {
        $(this).closest('.dialog-box-container').remove();
        --dialogBoxCount;
        if (dialogBoxes.length == 0) {
            dialogBoxOpened = false;
        }
    }
});
*/
$(document).on('click', '.dialog-box-close-button', function( event ) {
    if (dialogBoxOpened && dialogBoxes.length >= 1) {
        dialogBoxes[0].remove();
        dialogBoxes.splice(0, 1);
        if (dialogBoxes.length == 0) {
            dialogBoxOpened = false;
        } else {
            dialogBoxes[0].style.visibility = "visible";
        }
    }
});

var dialogBoxOpened = false;

dialogBoxCreate = function(txt) {
    var container = document.createElement("div");
    container.setAttribute("class", "dialog-box-container");
    
    var content = document.createElement("div");
    content.setAttribute("class", "dialog-box-content");
    
    var closeButton = document.createElement("span");
    closeButton.setAttribute("class", "dialog-box-close-button");
    closeButton.innerHTML = "&times;"
    
    var textE = document.createElement("p");
    textE.innerHTML = txt;
    
    content.appendChild(closeButton);
    content.appendChild(textE);
    container.appendChild(content);
    
    document.body.appendChild(container);
    if (dialogBoxes.length >= 1) {
        container.style.visibility = "hidden";
    }
    dialogBoxes.push(container);
    
    setTimeout(function() {
        dialogBoxOpened = true;
    }, 400);
}