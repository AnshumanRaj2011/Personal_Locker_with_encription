function searchProfile(){

let username = document.getElementById("username").value

document.getElementById("profile").innerHTML =
"Viewing profile: " + username

}



let likes = document.querySelectorAll(".like")

likes.forEach(button => {

button.addEventListener("click", () => {

if(button.innerHTML === "❤️"){

button.innerHTML = "💔"

}else{

button.innerHTML = "❤️"

}

})

})
