import "../style/dropdown.css";

class Dropdown {
  constructor() {
    this.body = document.createElement("div");
    this.body.classList.add("dropdown-body");
  }

  appendToParent(parent) {
    parent.appendChild(this.body);
  }

  removeFromParent(parent) {
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].className === "dropdown-body") {
        parent.removeChild(parent.children[i]);
      }
    }
  }
}

export default Dropdown;
