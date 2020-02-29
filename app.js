function reverse_array(input_array) {
    for (let i = 0; i < Math.floor(input_array.length/2); i++) {
        let temp=input_array[i];
        input_array[i]=input_array[input_array.length-i-1];
        input_array[input_array.length-i-1] = temp;
    } return input_array;
}

let array = [1,3,5,6,8,4,7,2];
let a = reverse_array(array);
alert('Mang sau khi dao nguoc la '+a);
