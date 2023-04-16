window.addEventListener("load", solve);

function solve() {
  const formState = {
    title: null,
    description: null,
    label: null,
    estimationPoints: null,
    assignee: null,
  };

  const inputDOMSelectors = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    estimationPoints: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  const otherDomSelectors = {
    createTaskBtn: document.getElementById("create-task-btn"),
    deleteTaskBtn: document.getElementById("delete-task-btn"),
    mainSection: document.getElementById("tasks-section"),
  };

  otherDomSelectors.createTaskBtn.addEventListener("click", createTaskHandler);
  otherDomSelectors.deleteTaskBtn.addEventListener(
    "click",
    deleteArticleHandler
  );
  let articleTaskId = 0;
  let totalPoints = 0;

  function createTaskHandler(event) {
    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      console.log("EMPTY FIELD");
      return;
    }

    const { title, description, label, estimationPoints, assignee } =
      inputDOMSelectors;

    const article = createElement(
      "article",
      otherDomSelectors.mainSection,
      null,
      ["task-card"],
      `task-${articleTaskId + 1}`
    );
    articleTaskId += 1;

    let labelClass = "";
    let labelIcon = "";
    switch (label.value) {
      case "Feature":
        labelClass = "feature";
        labelIcon = "&#8865;";
        break;
      case "Low Priority Bug":
        labelClass = "low-priority";
        labelIcon = "&#9737;";
        break;
      case "High Priority Bug":
        labelClass = "high-priority";
        labelIcon = "&#9888;";
        break;

      default:
        break;
    }
    createElement("div", article, `${label.value} ${labelIcon}`, [
      "task-card-label",
      `${labelClass}`,
    ]);
    createElement("h3", article, `${title.value}`, ["task-card-title"]);
    createElement("p", article, `${description.value}`, [
      "task-card-description",
    ]);
    createElement(
      "div",
      article,
      `Estimated at ${estimationPoints.value} pts`,
      ["task-card-points"]
    );
    totalPoints += Number(estimationPoints.value);
    createElement("div", article, `Assigned to: ${assignee.value}`, [
      "task-card-assignee",
    ]);

    let taskAction = createElement("div", article, null, ["task-card-actions"]);
    let deleteBtn = createElement("button", taskAction, "Delete");
    deleteBtn.addEventListener("click", editArticleHandler);
    for (const key in inputDOMSelectors) {
      formState[key] = inputDOMSelectors[key].value;
    }
    document.getElementById(
      "total-sprint-points"
    ).textContent = `Total Points ${totalPoints}pts`;

    clearAllInputs();
  }

  function editArticleHandler(event) {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = formState[key];
    }

    document.getElementById("task-id").id =
      event.currentTarget.parentNode.parentNode.id;

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].setAttribute("disabled", true);
    }

    otherDomSelectors.deleteTaskBtn.removeAttribute("disabled");
    otherDomSelectors.createTaskBtn.setAttribute("disabled", true);
  }

  function deleteArticleHandler(event) {
    let elementId = event.currentTarget.parentNode.parentNode[0].id;
    document.getElementById(elementId).id = "task-id";
    let elementToDelete = document.getElementById(elementId);

    elementToDelete.remove();

    otherDomSelectors.deleteTaskBtn.setAttribute("disabled", true);
    otherDomSelectors.createTaskBtn.removeAttribute("disabled");
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].removeAttribute("disabled");
    }
    clearAllInputs();
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors).forEach((input) => {
      input.value = "";
    });
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
