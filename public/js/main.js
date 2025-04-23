const { application } = require("express")

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addButton = document.getElementById("add-button")

addButton.addEventListener('click', async(e) =>{
    e.preventDefault()
    const taskText = inputBox.value

    if(!taskText) return

    try {
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: taskText}),
        })

        const newTask = await response.json()
        console.log("Task added:", newTask)

        const taskElement = document.createElement("div")
        taskElement.textContent = newTask.text

        inputBox.value = ""
    } catch (err){
        console.error("Error adding task:", err)
    }
    })

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)