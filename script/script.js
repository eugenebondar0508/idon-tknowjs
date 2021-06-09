'use strict';

const book = document.querySelectorAll('.book');
const ad = document.querySelector('.adv');
const books = document.querySelector('.books');
const bookName = document.querySelectorAll('h2');
const chapters = document.querySelectorAll('li');
// Заменить картинку заднего фона на другую из папки image
const changeBackGround = document.body.style.backgroundImage = 'url(image/adv.jpg)';


// Восстановить порядок книг.
books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);


// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
bookName[4].innerHTML = '<a>"Книга 3. this и Прототипы Объектов"</a>';



// Удалить рекламу со страницы
ad.remove();

// Восстановить порядок глав во второй и пятой книге
chapters[3].after(chapters[6]); 
chapters[6].after(chapters[8]); 
chapters[9].after(chapters[2]); 
chapters[47].after(chapters[55]);
chapters[55].after(chapters[49]);
chapters[49].after(chapters[50]);
chapters[53].after(chapters[51]);
console.log(chapters);

const newChapter = document.createElement('li');
newChapter.textContent = '“Глава 8: За пределами ES6”';
chapters[25].after(newChapter);

