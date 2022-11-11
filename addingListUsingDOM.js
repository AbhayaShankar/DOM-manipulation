//adding list item via prompts using DOM. -- VERY IMPORTANT ASPECT
// let ul = document.createElement("ul");
// document.body.append(ul);

// while (true) {
//   var data = prompt("Enter a list Value :");

//   if (!data) {
//     break;
//   }

//   let listItem = document.createElement("li");
//   listItem.textContent = data;
//   ul.append(listItem);
// }

function showNotification({ top = 0, right = 0, className, html }) {
  let notifictaion = document.createElement("div");
  notifictaion.className = "notifictaion";

  if (className) {
    notifictaion.classList.add(className);
  }

  notifictaion.style.top = top + "px";
  notifictaion.style.right = right + "px";
  notifictaion.innerHTML = html;
  document.body.append(notifictaion);
  setTimeout(() => notifictaion.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);

// SCROLL HEIGHT Of the Document.

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

console.log(scrollHeight);
