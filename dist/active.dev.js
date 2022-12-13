"use strict";

var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
li.forEach(function (el) {
  el.addEventListener('click', function () {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});