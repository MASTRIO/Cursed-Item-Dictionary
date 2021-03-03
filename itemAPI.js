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
       itemDatabase();
    }
}

function newItem(userName,ID,name,iconPath,iconWidth,iconHeight,caption,description) {
    if (ID == wantedItemID) {
        // Display Name
        document.getElementById("display-Name").innerHTML = "[#" + ID + "] " + name;
        // Contributer
        document.getElementById("display-Contributer").innerHTML = "Contributed by: " + userName;
        // Caption
        document.getElementById("display-Caption").innerHTML = '<i>"' + caption + '"</i>';
        // Icon
        document.getElementById("display-Icon").innerHTML = '<img src="itemImg/' + iconPath + '" width="' + iconWidth + '" height="' + iconHeight + '"></img>';
        // Icon
        document.getElementById("display-Description").innerHTML = description;
    }
}

function itemDatabase() {
    /* 
            PUT ALL ITEMS FOR THE API IN HERE:
            ----------------------------------
    */
    // Waxed Slightly Weathered Cut Copper Stairs
    newItem(
        "MASTRIO",
        1,
        "Waxed Slightly Weathered Cut Copper Stairs",
        "waxed_slightly_weathered_cut_copper_stairs.jpg",
        450,
        250,
        "The longest name in the game!",
        "Not exactly a cursed item but come on, seriously, that name is so goddamn long.<br>In fact it's the longest name in the entire game!"
    );
    newItem(
        "MASTRIO",
        2,
        "Plot Armour",
        "plot_armour.png",
        250,
        250,
        "We win these!",
        "The most powerful armour in existence<br>It makes you immune to all harm because your too important to the plot<br>Well unless you dying is apart of the plot..."
    );
    newItem(
        "MASTRIO",
        3,
        "Grain",
        "grain.png",
        250,
        250,
        "Do you think I'm bread?",
        "Grain is bread and he tastes like bread because he is bread...<br><br>EAT EAT EAT EAT EAT EAT"
    );
    newItem(
        "MASTRIO",
        4,
        "Rick",
        "rick.png",
        250,
        250,
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
}