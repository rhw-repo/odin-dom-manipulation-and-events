// example provided 
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// challenge starts here 
const para = document.createElement('p');
para.innerText = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const hding3 = document.createElement('h3');
hding3.innerText = "I'm a blue h3!";
hding3.style.color = 'blue';
container.appendChild(hding3);

const myDiv = document.createElement("div");
myDiv.style.backgroundColor = "pink";
myDiv.style.borderColor = "black";

const hding1 = document.createElement("p");
hding1.innerText = "I'm in a div";

const paraInDiv = document.createElement("p");
paraInDiv.innerText = "ME TOO!";

myDiv.appendChild(hding1);
myDiv.appendChild(paraInDiv);

container.appendChild(myDiv); 
