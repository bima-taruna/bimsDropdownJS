import "./style/index.css";
import Dropdown from "./component/dropdown";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

(function () {
  const parent = document.querySelector(".dropdown-parent");
  const testButton = document.getElementById("dropdown-test-button");
  testButton.addEventListener("click", () => {
    const newDropdown = new Dropdown();
    if (!testButton.classList.contains("activated")) {
      testButton.classList.add("activated");
      newDropdown.appendToParent(parent);
    } else {
      testButton.classList.remove("activated");
      newDropdown.removeFromParent(parent);
    }
  });
})();
