let button = document.getElementById("button")
let DARK = document.querySelector(".d-flex p");

button.addEventListener("click",()=>{
    if(DARK.innerHTML === 'Light Mode'){

        button.classList.remove('fa-regular');
        button.classList.add('fa-solid');
        DARK.innerHTML = "Dark Mode";
        
        document.querySelector(".navbar").style.backgroundColor = 'hsl(209, 23%, 22%)';
        document.querySelector(".navbar").style.borderBottomColor = 'hsl(208,25%,10%)';
        document.querySelector(".back").style.backgroundColor = 'hsl(209, 23%, 22%)';        
        document.querySelector(".navbar-brand").style.color = 'white';
        document.querySelector(".back").style.color = 'white';
        DARK.style.color = 'white';
        
        document.querySelector(".detail").style.backgroundColor = 'hsl(207, 26%, 17%)'
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'

        document.querySelector(".country").style.color = 'white';
        

        let borders = document.querySelectorAll(".border")
        borders.forEach(i =>{
            i.style.color ='white'
        })
        

    }
    else{

        button.classList.remove('fa-solid');
        button.classList.add('fa-regular');
        DARK.innerHTML = "Light Mode";

        document.querySelector(".navbar").style.backgroundColor = 'white';
        document.querySelector(".navbar").style.borderBottomColor = 'hsl(0,10%,76%)';
        document.querySelector(".back").style.backgroundColor = 'white';        
        document.querySelector(".navbar-brand").style.color = 'black';
        document.querySelector(".back").style.color = 'black';
        DARK.style.color = 'black';
        
        document.querySelector(".detail").style.backgroundColor = 'hsl(0, 0%, 98%)'
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'

        document.querySelector(".country").style.color = 'black';
        

        let borders = document.querySelectorAll(".border")
        borders.forEach(i =>{
            i.style.color ='black'
        })
        

    
    }

});
