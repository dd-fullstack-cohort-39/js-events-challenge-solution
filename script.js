function changeTextColor () {
  document.getElementById("text-color").style.color = "fuchsia"
}

function resetTextColor () {
  document.getElementById("text-color").style.color = ''
}

  function findReplace (event) {
    event.preventDefault()
    let text = document.getElementById("find-replace").innerText
    const searchTerm = document.getElementById("text-find").value
    const replacementTerm = document.getElementById("text-replace").value

    const headAche = new RegExp(searchTerm, 'gi')

    const newText = text.replace(headAche, replacementTerm)
    document.getElementById("find-replace").innerText = newText

}

function shuffleText () {
  const text = document.getElementById("shuffle").textContent
  const textArray = text.split(' ')
  let count = 0
  textArray.forEach(currentValue => {
    for (let i = textArray.length; i> 0;  i--) {
      count++

      //create random index bound to thew length of the array
      let randomNumber = Math.floor(Math.random() * (i + 1 ))
      // grab the current index
      let temp = textArray[i]
      // reassign current index to random index
      textArray[i] = textArray[randomNumber]
      // reassign random index to current index
      textArray[randomNumber] = temp

  }
})
  console.log(count, textArray.length)
  document.getElementById("shuffle").textContent = ""

  document.getElementById("shuffle").textContent = textArray.join(" ")
}

function grabJson () {

 console.log(fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => {
   return response.json()
 })
   .then(response => {
     document.getElementById("target").innerText = response.title
   })
 )


}