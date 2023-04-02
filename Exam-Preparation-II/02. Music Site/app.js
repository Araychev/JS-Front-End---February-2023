window.addEventListener("load", solve);

function solve() {
  let totalLikes = 0;

  const inputDOMSelectors = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  const otherDOMSelectors = {
    allHitsContainer: document.querySelector(".all-hits-container"),
    addBtn: document.getElementById("add-btn"),
    totalLikeContainer: document.querySelector(".likes>p"),
    savedContainer: document.querySelector(".saved-container"),
  };

  otherDOMSelectors.addBtn.addEventListener("click", addSongHandler);

  function addSongHandler(event) {
    event.preventDefault();
    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      console.log("EMPTY FIELD");
      return;
    }
    console.log("all are valid");
    const { genre, name, author, date } = inputDOMSelectors;

    const divContainerSongs = createElement(
      "div",
      otherDOMSelectors.allHitsContainer,
      "",
      ["hits-info"]
    );

    createElement("img", divContainerSongs, null, null, null, {
      src: "./static/img/img.png",
    });

    createElement("h2", divContainerSongs, `Genre: ${genre.value}`);
    createElement("h2", divContainerSongs, `Name: ${name.value}`);
    createElement("h2", divContainerSongs, `Author: ${author.value}`);
    createElement("h3", divContainerSongs, `Date: ${date.value}`);

    const saveBtn = createElement("button", divContainerSongs, "Save song", [
      "save-btn",
    ]);
    saveBtn.addEventListener("click", saveSongHandler);
    const likeBtn = createElement("button", divContainerSongs, "Like song", [
      "like-btn",
    ]);

    likeBtn.addEventListener("click", addLike);

    const delBtn = createElement("button", divContainerSongs, "Delete", [
      "delete-btn",
    ]);

    delBtn.addEventListener("click", deleteSongHandler);
    clearAllInputs();
  }

  function saveSongHandler() {
    const songRef = this.parentNode; // this is an object reference
    const songRefCopy = { ...this.parentNode }; // this is copy
    const saveBtn = songRef.querySelector(".save-btn");
    const likeBtn = songRef.querySelector(".like-btn");

    otherDOMSelectors.savedContainer.appendChild(songRef);

    saveBtn.remove();
    likeBtn.remove();
  }

  function addLike() {
    //event.currentTarget = this
    this.setAttribute("disabled", true);
    totalLikes++;
    otherDOMSelectors.totalLikeContainer.textContent = `Total Likes: ${totalLikes}`;
  }

  function deleteSongHandler() {
    this.parentNode.remove();
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
