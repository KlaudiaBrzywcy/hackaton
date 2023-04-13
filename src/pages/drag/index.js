import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { sendResults } from "@/actions";

export default function Drag() {



const initialSkills = [
  "Coding Ninja",
  "CLL Evangelist",
  "GIT",
  "Shell",
  "Automated Testing",
  "Web Security",
  "Technical Consultant",
  "Documentation Keeper",
  "Delivery",
  "Knowledge Guide",
  "API",
  "Docker",
  "Typescript",
  "Architecture",
  "Frontend performance guide",
  "Interface Producer",
  "Javascript",
  "Angular",
  "React"
];

const skills = initialSkills;
const ref = useRef(null)
let draggedItem = null

useEffect(() => {
  const li = ref.current;
  li.addEventListener("dragstart", handleDragStart);
  li.addEventListener("dragover", handleDragOver);
  li.addEventListener("drop", handleDrop);

  return () => {
    li.removeEventListener("dragstart", handleDragStart);
    li.removeEventListener("dragover", handleDragOver);
    li.removeEventListener("drop", handleDrop);
  };
}, []);

function handleDragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  const targetItem = event.target;
  const data = event.dataTransfer.getData("text/plain");

  if (targetItem.tagName === "LI") {
    if (targetItem.nextSibling === draggedItem) {
      targetItem.parentNode.insertBefore(
        draggedItem,
        targetItem.nextSibling.nextSibling
      );
    } else {
      targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
    }
  } else {
    list.appendChild(draggedItem);
  }
}



// log the results
function saveAndSubmitResults() {
  const items = list.querySelectorAll("li");
  const order = [];

  for (let i = 0; i < items.length; i++) {
    order.push(items[i].innerHTML);
  }

  // submit
  console.log(order);
  const orderObject= order.reduce((prev,curr, index) => {
    prev[curr] = order.length - index;
    return prev
  }, {})

  console.log(orderObject);
  sendResults(orderObject)
}


return (
  <div className={styles.container}>
     <ul className={styles.list} id="list" ref={ref}>
      {skills.map(skill => {
        return (
          <li key={skill} draggable={true}>
            {skill}
          </li>
        )
      })}
     </ul>
      <hr />
      <button id="submit" onClick={saveAndSubmitResults} type="submit">Submit</button>
  </div>
)

}