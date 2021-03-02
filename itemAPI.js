// * Variables
let wantedItemID;
let confirmChoice;

// * Functions
function searchItem() {
    // Gets wanted Item ID
    wantedItemID = prompt("What is the ID of the item your searching for? (e.g. 001,002,003)")
    confirmChoice = confirm("Is #" + wantedItemID + " the item ID you wanted?")

    // Search For Item
    if (confirmChoice == true) {
        /* 
            PUT ALL ITEMS FOR THE API IN HERE:
            ----------------------------------
            EXAMPLE ITEM:
            newItem(
                "NAME",
                "itemImg/ITEM_ICON",
                "DESCRIPTION"
            );
        */
        newItem(
            "test dummy",
            "itemImg/apple.png",
            "A big fat apple that can go poo on the loo doo doo dee doo hahahaha"
        );
    }
}

function newItem(name,iconPath,description) {
    
}