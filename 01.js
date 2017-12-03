var mock = "112233558"
var total = 0;

var circular_loop = function(numbers, start_at) {
    var length = numbers.length;

    for (i = 0; i < length; i++) {
        var this_number = numbers[(start_at + i) % length];
        var next_number = numbers[(start_at + i + 1) % length];
        
        if (this_number === next_number) {
            total = total + +this_number;
        }
    } 
}(mock, 0);


console.log(total);