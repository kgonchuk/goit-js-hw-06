
const items = document.querySelectorAll('.item');
const allItems = items.length
console.log(`Number of categories: ${allItems}`)



items.forEach((element) => {
    const elTitle = element.querySelector('h2').textContent;
    const oneEl = element.querySelectorAll('li');
    const titleElQty = oneEl.length;

    console.log(`Category: ${elTitle} \n Elements: ${titleElQty}`)
})


