const time = document.getElementById("time"),
greeting =document.getElementById("greeting"),
name =document.getElementById("name"),
focus=document.getElementById("focus")

function showTime(){
    let today = new Date()
    hour = today.getHours();
    min= today.getMinutes();
    sec= today.getSeconds()
    console.log(hour,min,sec)

    const session = hour>=!2?"PM":"AM"
    hour=hour % 12 || 12 
    time.innerHTML =`${addZero(hour)} :${addZero(min)} : ${addZero(sec)} ${session} `
    setTimeout(showTime, 1000)
}

function addZero(n){
    return n < 10 ? "0" +n : n
}
function setGreet(){
    let today= new Date()
    hour =today.getHours()
    
    if(hour<12){
        document.body.style.backgroundImage = "url(http://yesofcorsa.com/wp-content/uploads/2019/06/4K-Swamp-Image-Download.jpg )"
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundRepeat="no-repeat";
       
        document.body.style.color="white"
        greeting.innerText ="Good Morning ,"
    }
    
else if(hour<18){
    document.body.style.backgroundImage="url(https://tse1.mm.bing.net/th?id=OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc&pid=Api&P=0&h=220)"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundRepeat="no-repeat"
    greeting.innerText ="Good Afternoon ,"
}

else{
    document.body.style.backgroundImage = "url(https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundRepeat="no-repeat"
    greeting.innerText ="Good Evening ,"
    document.body.style.color="white"
   
}
}

// // sessionStorage.setItem("date","test-value")
//   localStorage.removeItem("ldate","test-value")



  function setName(e){
    if(e.type === "keypress"){
     if(e.keyCode === 13){
        localStorage.setItem("name", e.target.innerText)
        name.blur()
     }
    } else{
        localStorage.setItem("name", e.target.innerText)
    }
}

function setFocus(e){
    if(e.type === "keypress"){
        if(e.keyCode === 13){
           localStorage.setItem("focus", e.target.innerText)
           focus.blur()
        }
       } else{
           localStorage.setItem("focus", e.target.innerText)
       }

}

function getName(){
    if (localStorage.getItem("name")=== null) {
        name.innerText="[Enter Your Name]"
        
    } else{
        name.innerText=localStorage.getItem("name")
    }
}


function getFocus(){
    if (localStorage.getItem("focus")=== null) {
        focus.innerText="[Enter Focus]"
        
    } else{
        focus.innerText=localStorage.getItem("focus")
    }
}
name.addEventListener("keypress",setName)
name.addEventListener("blur", setName)
focus.addEventListener("keypress",setFocus)
focus.addEventListener("blur",setFocus)

getFocus()
getName()
 showTime()
 setGreet()


