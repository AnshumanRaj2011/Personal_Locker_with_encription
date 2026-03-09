function searchProfile(){

let username = document.getElementById("username").value

document.getElementById("profile").innerHTML =
"Viewing public profile: " + username


let reels = `

<video controls autoplay loop>
<source src="https://www.w3schools.com/html/mov_bbb.mp4">
</video>

<video controls autoplay loop>
<source src="https://www.w3schools.com/html/movie.mp4">
</video>

`


document.getElementById("reels").innerHTML = reels

}
