window.addEventListener("load", solve);

function solve() {
  const formState = {
    title: null,
    category: null,
    taskContent: null,
  };

  const inputDOMSelectors = {
    title: document.getElementById("task-title"),
    category: document.getElementById("task-category"),
    taskContent: document.getElementById("task-content"),
  };

  const otherDomSelectors = {
    publishBtn: document.getElementById("publish-btn"),
    reviewList: document.getElementById("review-list"),
    publishedList: document.getElementById("published-list"),
  };

  otherDomSelectors.publishBtn.addEventListener("click", publishStoryHandler);

  function publishStoryHandler(event) {
    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      return;
    }

    const { title, category, taskContent } = inputDOMSelectors;

    const li = createElement("li", otherDomSelectors.reviewList, null, [
      "rpost",
    ]);
    const article = createElement("article", li);

    createElement("h4", article, `${title.value}`);
    createElement("p", article, `Category: ${category.value}`);
    createElement("p", article, `Content: ${taskContent.value}`);

    const editBtn = createElement("button", li, "Edit", ["action-btn", "edit"]);
    const postBtn = createElement("button", li, "Post", ["action-btn", "post"]);

    for (const key in inputDOMSelectors) {
      formState[key] = inputDOMSelectors[key].value;
    }

    clearAllInputs();
    editBtn.addEventListener("click", editReviewListHandler);
    postBtn.addEventListener("click", postReviewListHandler);
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors).forEach((input) => {
      input.value = "";
    });
  }
  function editReviewListHandler() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = formState[key];
    }
    otherDomSelectors.reviewList.innerHTML = "";
  }

  function postReviewListHandler() {
    const { title, category, taskContent } = formState;

    otherDomSelectors.reviewList.innerHTML = "";

    const li = createElement("li", otherDomSelectors.publishedList, null, [
      "rpost",
    ]);
    const article = createElement("article", li);

    createElement("h4", article, `${title.value}`);
    createElement("p", article, `Category: ${category.value}`);
    createElement("p", article, `Content: ${taskContent.value}`);

    otherDomSelectors.reviewList.innerHTML = "";
  }
  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }
      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }
    //{src: 'Link', href: 'http'}
    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
