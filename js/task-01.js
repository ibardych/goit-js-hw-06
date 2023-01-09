const categories = document.querySelectorAll('ul#categories > li.item');
console.log('Number of categories:', categories.length);

categories.forEach((item) => {
  console.log('\nCategory:', item.querySelector('h2').innerHTML);
  console.log('Elements:', item.querySelectorAll('li').length);
});