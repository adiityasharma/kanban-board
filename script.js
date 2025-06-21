const todoInput = document.querySelector("#todoInput")
const todoAddBtn = document.querySelector("#todoAddBtn")
const todoContent = document.querySelector("#todoContent")

const doingInput = document.querySelector("#doingInput")
const doingAddBtn = document.querySelector("#doingAddBtn")
const doingContent = document.querySelector("#doingContent")

const doneInput = document.querySelector("#doneInput")
const doneAddBtn = document.querySelector("#doneAddBtn")
const doneContent = document.querySelector("#doneContent")


todoAddBtn.addEventListener("click", () => {

  if (!todoInput.value) return alert("can't save empty value")

  const div = document.createElement("div")
  const h3 = document.createElement("h3")
  const p = document.createElement("p")
  const i = document.createElement("i")

  div.setAttribute("class", "task")
  h3.setAttribute("class", "task-title")
  p.setAttribute("class", "task-time")
  i.setAttribute("id", "deleteBtn")
  i.setAttribute("class", "fa-solid fa-trash")

  h3.innerText = todoInput.value

  const now = new Date()

  p.innerText = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

  div.append(i, h3, p)

  todoContent.appendChild(div)

  todoInput.value = ""

})

doingAddBtn.addEventListener("click", () => {

  if (!doingInput.value) return alert("can't save empty value")

  const div = document.createElement("div")
  const h3 = document.createElement("h3")
  const p = document.createElement("p")
  const i = document.createElement("i")

  div.setAttribute("class", "task")
  h3.setAttribute("class", "task-title")
  p.setAttribute("class", "task-time")
  i.setAttribute("id", "deleteBtn")
  i.setAttribute("class", "fa-solid fa-trash")

  h3.innerText = doingInput.value

  const now = new Date()

  p.innerText = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

  div.append(i, h3, p)

  doingContent.appendChild(div)

  doingInput.value = ""
})

doneAddBtn.addEventListener("click", () => {

  if (!doneInput.value) return alert("can't save empty value")

  const div = document.createElement("div")
  const h3 = document.createElement("h3")
  const p = document.createElement("p")
  const i = document.createElement("i")

  div.setAttribute("class", "task")
  h3.setAttribute("class", "task-title")
  p.setAttribute("class", "task-time")
  i.setAttribute("id", "deleteBtn")
  i.setAttribute("class", "fa-solid fa-trash")

  h3.innerText = doneInput.value

  const now = new Date()

  p.innerText = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

  div.append(i, h3, p)

  doneContent.appendChild(div)

  doneInput.value = ""
})

const arr = [todoContent, doingContent, doneContent]

arr.forEach(item => {

  item.addEventListener("click", (e) => {
    if (e.target.id == "deleteBtn") {

      e.target.parentElement.remove()
    }
  })
})
