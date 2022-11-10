//adding list item via prompts using DOM. -- VERY IMPORTANT ASPECT
let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  var data = prompt("Enter a list Value :");

  if (!data) {
    break;
  }

  let listItem = document.createElement("li");
  listItem.textContent = data;
  ul.append(listItem);
}
