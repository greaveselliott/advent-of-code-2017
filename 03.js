function n(n){
    return n > 9 ? "" + n: "0" + n;
}

spiralArray = function (edge) {
    var array = Array(edge);
    var location_x = 0; 
    var location_y = edge;
    var total = edge * edge--;
    var direction_x = 1;
    var direction_y = 0;
    var i = 0; 
    var j = 0;

    while (location_y) {
        array[--location_y] = [];
    }

    while (i < total) {
        // value being assigned
        array[location_y][location_x] = n(total - i++);

        location_x += direction_x; 
        location_y += direction_y;
        if (++j == edge) {
            if (direction_y < 0) {
                location_x++; 
                location_y++; 
                edge -= 2
            }
            j = direction_x;
            direction_x = -direction_y; 
            direction_y = j; 
            j = 0;
       }
       
    }
    return array;
}