// 1)while
var i = 1;
console.log("1) While");
while(i <= 50) {
    console.log(i++);
}

//2)do-while
console.log("2) Do & While");
i = 10;
do {
    console.log(i--);
} while (i >= 0);

//3)for
console.log("3) For");
for (let i = 0; i <= 100; i +=2) {
    console.log(i);
};