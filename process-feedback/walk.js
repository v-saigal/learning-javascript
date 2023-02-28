const ten_minute_walk = (directions) => {
    const is_ten_minutes = directions.length == 10;
    let northSouthBalance = 0;
    let eastWestBalance = 0;


    directions.forEach(direction => {
        const isNorth = direction == 'n';
        const isSouth = direction == 's';
        const isEast = direction == 'e';
        const isWest = direction == 'w';

        if (isNorth){northSouthBalance+=1};
        if (isSouth){northSouthBalance-=1};
        if (isEast){eastWestBalance+=1};
        if (isWest){eastWestBalance-=1};

    });
    const isBalanced = (northSouthBalance == 0) && (eastWestBalance == 0)

    if (is_ten_minutes && isBalanced) {return true}
    else{return false }

}

module.exports = ten_minute_walk;
