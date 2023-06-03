const bigcontainer = document.querySelector('#bigcontainer');

function create_square_linex16()
{
    for ( let i = 0; i < 16; i++)
    {
        const container = document.createElement('div');
        container.classList.add('container');
        bigcontainer.appendChild(container);

        for (let j = 0; j < 16; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square)
        }
        
    }
    
}


create_square_linex16();


const squares = document.querySelectorAll('.square');

squares.forEach(function(square) {

    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor = "red";
        console.log('test');
    
    });
});

