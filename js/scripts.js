// 1: Set the text of the <h1> element
const mainHeading = document.querySelector('h1');
mainHeading.textContent = 'Daily Tasks';

// 2: Set the color of the <h1> to a different color
mainHeading.style.color = 'royalblue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.querySelector('.desc');
description.innerHTML = '<p>This is a list of things I do every day.</p>';

// 4: Set the class of the <ul> to 'list'
const toDoList = document.querySelector('ul');
toDoList.setAttribute('class','list');

// 5: Create a new list item and add it to the <ul>
let listItem = document.createElement('li');
toDoList.appendChild(listItem);
toDoList.lastElementChild.innerHTML = '<input> Eat';

// 6: Change all <input> elements from text fields to checkboxes
const userInputFields = document.querySelectorAll('input');
for (let i = 0; i < userInputFields.length; i += 1){userInputFields[i].setAttribute('type','checkbox');};

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const extraDiv = document.querySelector('.extra');
const button = document.createElement('button');
extraDiv.appendChild(button);
button.textContent = "Delete";


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
button.addEventListener('click', () => container.removeChild(extraDiv));