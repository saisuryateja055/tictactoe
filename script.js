
let data=document.querySelectorAll(".box");
let msg=document.querySelector(".hide");
console.dir(msg); 

const winningPattern=[[0,1,2],[3,4,5],[6,7,8],
[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]

let resets=document.querySelectorAll(".reset");


let player1=true ;




const check= data.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
        if (player1){
            box.innerText='X';
            player1=false;

        }
        else{
            box.innerText='O';
            player1=true;
        }
        box.disabled=true   ; 

        checkwinner();
    }
    )
   
})

const tie = ()=>{

        msg.innerText="Well Played Both, It's a Tie";
        msg.classList.remove("hide");
}


const reload =(data)=>{
    data.forEach( 

        (box)=>{
            box.disabled=false;
            box.innerText='';
        }
     )
     msg.classList.add("hide");
}

const refresh = resets.forEach((reset)=>{
        reset.addEventListener("click",()=>{
        reload(data);    
        })
    });

const printWinner=(name)=>{
    msg.innerText=`Congratulations Winner ${name}`;
    msg.classList.remove('hide');
    // reload(data);
   
    
    

}

const checkwinner = () => {
    for (const pattern of winningPattern) {
        if (data[pattern[0]].innerText !== '' && data[pattern[1]].innerText !== '' && data[pattern[2]].innerText !== '') {
            if (data[pattern[0]].innerText === data[pattern[1]].innerText && data[pattern[1]].innerText === data[pattern[2]].innerText) {
                printWinner(data[pattern[0]].innerText);
                break;  
            }
        }
    }
}