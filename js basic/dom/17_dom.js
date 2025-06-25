  document.getElementById('message').innerHTML ="<h1>Chai Aur Code</h1>"
        const message =document.getElementById('message');
        const btn = document.getElementById('changebtn');

        btn.addEventListener("click",() => {
            message.innerHTML =("Now you clicked the button")
        })
