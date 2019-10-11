/* function submitComment(){
    const inputField = document.getElementById('name');
    const name = inputField.value;
    

    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    
    
    const comment = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerHTML = `${name} says:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h4);
    comment.appendChild(p);

   console.log(comment)


   document.getElementById('commentContainer').appendChild(comment);

} */


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('form--userInput').addEventListener('submit',function(event){
        event.preventDefault();
        
        const inputField = document.getElementById('name');
        const name = inputField.value;
        
    
        const textArea = document.getElementById('msg');
        const msg = textArea.value;
        if (!name || !msg){   
            //console.log(msg)
            window.alert('Please input name and message')
            return;
        }else{
    
        
        const comment = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const status = document.createElement('div');
        status.classList.add('status');

        const star = document.createElement('i');
        star.classList.add('fa-star');
        star.classList.add('far');
        star.addEventListener('click',function(event){
            console.log(star)
            /* if (star.classList.contains('far')){
                star.classList.remove('far');
                star.classList.add('fas');
            } */

            star.classList.toggle('far');
            star.classList.toggle('fas');
        })
         



        const hideBtn = document.createElement('button');
        //Does this id matters? 
        hideBtn.id = 'hide'
        hideBtn.innerText ='X'

        hideBtn.addEventListener('click',function(event){
                hideOrShow(p)
            })


        hideBtn.addEventListener('click',function(event){
            if (hideBtn.innerText == 'X'){
                hideBtn.innerText = 'Show'
            }else{
                hideBtn.innerText = 'X'
            }
        })

        h4.innerText = `${name} says:`;
        p.innerText = msg;
        comment.classList.add('comment');
        comment.appendChild(status);
        status.appendChild(hideBtn);
        status.appendChild(star);
        comment.appendChild(h4);
        comment.appendChild(p);
        

    
       console.log(comment)
    
    
       document.getElementById('commentContainer').appendChild(comment);


        }
    })
});


function hideOrShow(prop){
    if(prop.style.display !== 'none'){
        prop.style.display = 'none'
    }else{
        prop.style.display ='block'
    }
}


//if I comment out the below, the default comment: Mimi ... doesn't work

//Hide the comment
const hideBtn = document.getElementById('hide');
hideBtn.addEventListener('click',function(event){
const pToHide = document.querySelector('div.comment p')
    console.log(pToHide);
    hideOrShow(pToHide)
})


//Change btn innerText when p is hide or shown
hideBtn.addEventListener('click',function(event){
   if (hideBtn.innerText == 'X'){
       hideBtn.innerText = 'Show'
   }else{
       hideBtn.innerText = 'X'
   }
})


//Pinned comment




//Show comment count on html.index

