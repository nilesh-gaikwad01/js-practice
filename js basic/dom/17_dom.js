  document.getElementById('message').innerHTML ="<h1>Chai Aur Code</h1>"
        const message =document.getElementById('message');
        const btn = document.getElementById('changebtn');

        btn.addEventListener("click",() => {
            message.innerHTML =("Now you clicked the button")
        })

  document.getElementById('bg-Colorbtn').addEventListener("click",() =>{
    document.getElementById('bg-box').style.backgroundColor = "orange";
  })