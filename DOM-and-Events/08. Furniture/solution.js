function solve() {
  const [generateTextArea, buyTextArea] = Array.from(
    document.getElementsByTagName("textarea")
  );
  const [generateBtn, buyBtn] = Array.from(
    document.getElementsByTagName("button")
  );

  generateBtn.addEventListener("click", generateHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement("tr", "", tbody);
      const firstColumnTd = createElement("td", "", tableRow);
    }
  }
}

function createElement(type, content, parentNote, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== "input") {
    htmlElement.textContent = content;
  }

  if (content && type === "input") {
    htmlElement.value = content;
  }

  if (id) {
    htmlElement.id = id;
  }

  //[list, item]
  if (classes) {
    htmlElement.classList.add(...classes);
  }

  if (parentNote) {
    parentNote.appendChild(htmlElement);
  }

  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }

  return htmlElement;
}
