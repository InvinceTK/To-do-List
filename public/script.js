document.getElementById('addToDo').addEventListener('click', addButtonClickListener);
document.getElementById("removeToDo").addEventListener('click',removeButtonClickListener)

function addButtonClickListener(){
    const div = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const span = document.createElement("span")
    const node = document.createTextNode("some text");

    span.appendChild(node);
    label.appendChild(input)
    label.appendChild(span)
    div.appendChild(label)

    input.setAttribute("type","checkbox")
    div.className = "To-do"

    const element = document.getElementById("container1");
    element.appendChild(div);
}
function removeButtonClickListener(){
    
    const container = document.getElementById('container1')
    const toDoElements = container.getElementsByClassName("To-do")

    if (toDoElements.length > 0) {
        console.log(toDoElements)
        container.removeChild(container.lastElementChild);
      }

}




