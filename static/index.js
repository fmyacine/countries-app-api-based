let search = document.getElementById("search")

let button = document.getElementById("button")
let DARK = document.querySelector(".d-flex p");

button.addEventListener("click",()=>{
    if(DARK.innerHTML === 'Light Mode'){

        button.classList.remove('fa-regular');
        button.classList.add('fa-solid');
        DARK.innerHTML = "Dark Mode";
    
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector(".header").style.backgroundColor = "hsl(209, 23%, 22%)";
        document.querySelector('.content').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.header').style.borderBottomColor = 'hsl(210, 25%, 10%)';

        let card = document.querySelectorAll(".card")
        card.forEach(i =>{
            i.style.backgroundColor = 'hsl(209, 23%, 22%)';
        });

        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        
        let cardbody = document.querySelectorAll('.card-body')    

        cardbody.forEach(i =>{
            i.style.color = 'white';
        });

        document.querySelector('.region').style.backgroundColor ='hsl(209, 23%, 22%)';
        document.querySelector('.region').style.color = 'white'
        document.querySelector('.input').style.backgroundColor = 'hsl(209, 23%, 22%)'
        document.querySelector('.input input').style.backgroundColor = 'hsl(209, 23%, 22%)'
        document.querySelector('.input input').classList.add('custom-placeholder');

    }
    else{

        button.classList.remove('fa-solid');
        button.classList.add('fa-regular');
        DARK.innerHTML = "Light Mode";
    
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        document.querySelector(".header").style.backgroundColor = "white";
        document.querySelector('.content').style.backgroundColor = 'hsl(0, 0%, 98%)';
        document.querySelector('.header').style.borderBottomColor = 'hsl(0, 10%, 76%)';

        let card = document.querySelectorAll(".card")
        card.forEach(i =>{
            i.style.backgroundColor = 'white';
        });

        document.body.style.color = 'black';
        document.querySelector(".navbar-brand").style.color = 'black';
        
        let cardbody = document.querySelectorAll('.card-body')    

        cardbody.forEach(i =>{
            i.style.color = 'black';
        });

        document.querySelector('.region').style.backgroundColor ='white';
        document.querySelector('.region').style.color = 'black'
        document.querySelector('.input').style.backgroundColor = 'white'
        document.querySelector('.input input').style.backgroundColor = 'white'
        document.querySelector('.input input').classList.remove('custom-placeholder');

    }

});


search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        var inputValue = search.value;
        if (inputValue) {
            
            console.log("hi");
            $.ajax({
                type: "GET",
                url: "/",
                success: function(data, textStatus, jqXHR) {
                    console.log('Request succeeded');
                    console.log(data);
                    window.location.href = "/?name=" + inputValue;
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log('Request failed');
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    }
});
let region = document.querySelector('.region'); 

region.addEventListener('change', (event) => {
    console.log("hi")
    let selectedRegion = event.target.value;    
    $.ajax({
        type: "GET",
        url: "/",
        success: function(data, textStatus, jqXHR) {
            console.log('Request succeeded');
            console.log(data);
            window.location.href = "/?region=" + selectedRegion;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Request failed');
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});