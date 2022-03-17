function findTreasure(x, y) {
    var treasureX = 3;
    var treasureY = 9;

    if (x == treasureX && y == treasureY) {
        console.log("You found the treasure!");
    }

    while(x != treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right.");
            x++;
        } else if (x >treasureX) {
            console.log("Stepping to the left.");
            x--;
        }
    }

    while(y != treasureY) {
        if (y < treasureY) {
            console.log("Stepping to the north.");
            y++;
        } else if (y >treasureY) {
            console.log("Stepping to the south.");
            y--;
        }
    }

    console.log("You found the treasure!");
}

findTreasure(3, 9);
findTreasure(6, 3);
findTreasure(3, 8);