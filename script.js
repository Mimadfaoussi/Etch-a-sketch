const bigcontainer = document.querySelector('#bigcontainer');

const btn = document.querySelector('#matrix');

let x;



function create_square_linex16(x)
{
    for ( let i = 0; i < x; i++)
    {
        const container = document.createElement('div');
        container.classList.add('container');
        bigcontainer.appendChild(container);

        for (let j = 0; j < x; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square)
        }
        
    }
    
}


btn.addEventListener('click',()=>{
    x = Number(prompt("give me a number"));

    create_square_linex16(x);


    const squares = document.querySelectorAll('.square');

    squares.forEach(function(square) {

        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = "red";
            console.log('test');
        
        });
    });

});

