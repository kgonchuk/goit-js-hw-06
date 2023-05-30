const title = document.querySelectorAll('.item');
let total = 0;
[...title].forEach((item) => {total += item});
console.dir(total)