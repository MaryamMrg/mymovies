// document.getElementById('Pinokio').addEventListener('click',popupf);
//     function popupf(){
// let popup = document.createElement('div');
//     popup.innerHTML="<p><strong>pinokio :</strong><br> year:2022 <br> type: fantasy,dramatic,family,comedy <br> quality:1080p EB-DL <br> story: The boy Pinocchio, <br>who was created by the carpenter Geppetto and brought to life,<br> dreams of becoming a real boy. However, this time, <br>events take a much darker turn.</p>";
    
//     popup.style.position = "fixed";
//     popup.style.top = "50%";
//     popup.style.left = "50%";
//     popup.style.transform = "translate(-50%, -50%)";
//     popup.style.background = "grey";
//     popup.style.padding = "20px";
//     popup.style.borderRadius = "10px";
//     popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
//     popup.style.color="darkred"
//     popup.style.fontStyle="italic"
    
//     document.body.appendChild(popup);
//     setTimeout(()=>popup.remove(),5000)
//     }

    let movies=JSON.parse(localStorage.getItem("movies"))||[];
    let movieId=movies.length;
     const submitbtn = document.getElementById('addbtn');
     const modifybtn= document.getElementById('modifybtn');
     const Name= document.getElementById('moviename');
     const year =document.getElementById('movieyear');
     const type =document.getElementById('movietype');
     const story =document.getElementById('moviestory');
     document.addEventListener('DOMContentLoaded',()=>{

  
     submitbtn.addEventListener('click',addmovie);
     function addmovie(){
        if (Name.value == ""|| year.value == ""|| type.value == "" || story.value== "") {
            alert('Please fill out all required fields!');
            return;
            
        } 
           movieId++;
           const movie={
            movieId,
            Name: Name.value,
            type : type.value,
            story : story.value,
            year : year.value,
         };
         movies.push(movie);
         Name.value='';
         type.value='';
         story.value='';
         year.value='';
         alert('movie added successfully');
        }
     
     modifybtn.addEventListener('click',updatemovie);
     function updatemovie(){
     

     }
     localStorage.setItem('movies',JSON.stringify(movies));
     
     console.log(movies);

});
