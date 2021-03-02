// * Variables
let wantedItemID;
let confirmChoice;

// * Functions
function searchItem() {
    // Gets wanted Item ID
    wantedItemID = prompt("What is the ID of the item your searching for? (e.g. 1,2,3)")
    confirmChoice = confirm("Is #" + wantedItemID + " the item ID you wanted?")

    // Search For Item
    if (confirmChoice == true) {
        /* 
            PUT ALL ITEMS FOR THE API IN HERE:
            ----------------------------------
            EXAMPLE ITEM:
            newItem(
                "USERS_GITHUB_NAME"
                "ID",
                "NAME",
                "ITEM_ICON",
                "CAPTION",
                "DESCRIPTION"
            );
        */
        newItem(
            "MASTRIO",
            "1",
            "test dummy",
            "apple.png",
            "bean man go brrrrrrrrrrrrr",
            "A big fat apple that can go poo on the loo doo doo dee doo hahahaha"
        );
        newItem(
            "MASTRIO",
            "2",
            "The second test I made pog",
            "apple.png",
            "holy moly it's a poop",
            "So we back in the mine<br>Got our pickaxe swinging from side to side<br>Side-side to side<br>This task, a grueling one<br>Hope to find some diamonds tonight, night, night<br>Diamonds tonight"
        );
    }
}

function newItem(userName,ID,name,iconPath,caption,description) {
    if (ID == wantedItemID) {
        // Display Name
        document.getElementById("display-Name").innerHTML = "[#" + ID + "] " + name;
        // Contributer
        document.getElementById("display-Contributer").innerHTML = "Contributed by: " + userName;
        // Caption
        document.getElementById("display-Caption").innerHTML = '<i>"' + caption + '"</i>';
        // Icon
        document.getElementById("display-Icon").innerHTML = '<img src="itemImg/' + iconPath + '"></img>';
        // Icon
        document.getElementById("display-Description").innerHTML = description;
    }
}