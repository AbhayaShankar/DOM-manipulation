//Learning DOM manipulation - Modyfying the Document

// let createElement = document.createElement("div"); // creating an element in DOM
// createElement.innerHTML = "Creating a new Element in the DOM."; //creating message to display in the element created.
// document.body.append(createElement); //adding the element to the body, so that it would be displayed on the page.
// createElement.style.color = "red"; //adding styles to the text

//ABHAYA SHANKAR
let olList = document.getElementById("ol");
olList.before("before");
olList.after("after");

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
olList.prepend(liFirst);

let liSecond = document.createElement("li");
liSecond.innerHTML = "append";
olList.append(liSecond);
