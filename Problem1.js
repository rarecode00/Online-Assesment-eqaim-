// Let suppose the number of digts is 8

let count = 0;

for(let i = 0; i < 8 ; i++){
    for(let j = i + 1; j < 8; j++){
        for(let k = j + 1; k < 8; k++){
              count++;
        }
    }
}

console.log(count) // this return number of digits greater 2 or more digits.