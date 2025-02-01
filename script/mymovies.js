// // document.getElementById('Pinokio').addEventListener('click',popupf);
// //     function popupf(){
// // let popup = document.createElement('div');
// //     popup.innerHTML="<p><strong>pinokio :</strong><br> year:2022 <br> type: fantasy,dramatic,family,comedy <br> quality:1080p EB-DL <br> story: The boy Pinocchio, <br>who was created by the carpenter Geppetto and brought to life,<br> dreams of becoming a real boy. However, this time, <br>events take a much darker turn.</p>";
    
// //     popup.style.position = "fixed";
// //     popup.style.top = "50%";
// //     popup.style.left = "50%";
// //     popup.style.transform = "translate(-50%, -50%)";
// //     popup.style.background = "grey";
// //     popup.style.padding = "20px";
// //     popup.style.borderRadius = "10px";
// //     popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
// //     popup.style.color="darkred"
// //     popup.style.fontStyle="italic"
    
// //     document.body.appendChild(popup);
// //     setTimeout(()=>popup.remove(),5000)
// //     }

//     let movies=JSON.parse(localStorage.getItem("movies"))||[];
//     let movieId=movies.length;
//      const submitbtn = document.getElementById('addbtn');
//      const modifybtn= document.getElementById('modifybtn');
//      const deletebtn =document.getElementById('dltbtn')
//      const Name= document.getElementById('moviename');
//      const year =document.getElementById('movieyear');
//      const type =document.getElementById('movietype');
//      const story =document.getElementById('moviestory');
//      const searchedmovie=document.getElementById('inputsearch');
//      const movieimg =document.getElementById('movieimg');  
//      const movieList=document.querySelectorAll('movies');
//      document.addEventListener('DOMContentLoaded',()=>{

  
//      submitbtn.addEventListener('click',addmovie);
//      function addmovie(){
//         if (Name.value == ""|| year.value == ""|| type.value == "" || story.value== "") {
//             alert('Please fill out all required fields!');
//             return;
            
//         } 
//            movieId++;
//            const movie={
//             movieId,
//             Name: Name.value,
//             type : type.value,
//             story : story.value,
//             year : year.value,
//             movieimg : movieimg.value,

//          };
//          movies.push(movie);
//          Name.value='';
//          type.value='';
//          story.value='';
//          year.value='';
//          movieimg.value='';
//          alert('movie added successfully');
//          displayMovies();
//         }
     
//    //   modifybtn.addEventListener('click',updatemovie);
//    //   function updatemovie(){
    
   
     
      
//    //   }

//    //   deletebtn.addEventListener('click',deletemovie);
//    //   function deletemovie(){
//    //       movies=movies.filter((movie)=>movie.Name!=Name.value);
//    //       alert('movie deleted successfully');

         
//    //   }
//    let movies = JSON.parse(localStorage.getItem("movies")) || [];

// document.addEventListener('DOMContentLoaded', () => {
//     displayMovies(); // Display movies when the page loads
// });

// // Function to display movies
// function displayMovies() {
//     const movieList = document.getElementById('moviesList'); // Target the section
//     movieList.innerHTML = ''; // Clear existing movies

//     if (movies.length === 0) {
//         movieList.innerHTML = '<p>No movies available.</p>';
//         return;
//     }

//     movies.forEach((movie, index) => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movies');

//         movieDiv.innerHTML = `
//             <img src="${movie.movieimg}" alt="${movie.Name}" onerror="this.src='assets/images/default.png'">
//             <p>${movie.Name} (${movie.year})</p>
//             <button onclick="deleteMovie(${index})">Delete</button>
//             <a href="tools.html"><button>Modify</button></a>
//         `;

//         movieList.appendChild(movieDiv);
//     });
// }

// // Function to delete a movie
// function deleteMovie(index) {
//     movies.splice(index, 1); // Remove from array
//     localStorage.setItem('movies', JSON.stringify(movies)); // Update storage
//     displayMovies(); // Refresh display
// }


//      localStorage.setItem('movies',JSON.stringify(movies));
     
//      console.log(movies);

// });
let movies = JSON.parse(localStorage.getItem("movies")) || [];
let movieId = movies.length;
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('addbtn');
    const modifyBtn = document.getElementById('modifybtn');

    submitBtn.addEventListener('click', addMovie);
    modifyBtn.addEventListener('click', updateMovie);
});
// document.addEventListener('DOMContentLoaded', () => {
//    const searchedmovie=document.getElementById('inputsearch');
//    const search=document.querySelector('searchbar-icon');
//    search.addEventListener('click',()=>{
//     if (searchedmovie.value=="") {
//         alert('please enter a valid movie name');
//          return;
        
//     }
//     let found=false;
//     movies=movies.map((movie)=>{
//         if (movie.Name.toLowerCase().includes(searchedmovie.value.toLowerCase())) {
//             found=true;
//             return movie;
//         }
//         return movie;

//     })
      
//    })
// })

function addMovie() {
    const Name = document.getElementById('moviename').value.trim();
    const year = document.getElementById('movieyear').value.trim();
    const type = document.getElementById('movietype').value.trim();
    const story = document.getElementById('moviestory').value.trim();
    const movieimg = document.getElementById('movieimg');
    
    if (Name === "" || year === "" || type === "" || story === "") {
        alert('Please fill out all required fields!');
        return;
    }

    movieId++;
    
    const movie = {
        movieId,
        Name: Name.value,
        type: type.value,
        story: story.value,
        year: year.value,
        movieimg: movieimg,
    };

    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));

    alert('Movie added successfully!');
    
   Name.value = '';
   year.value = '';
   type.value = '';
   story.value = '';
    movieImgInput.value = '';

  
}


function updateMovie() {
    const Name = document.getElementById('updatename').value.trim();
    const year = document.getElementById('updateyear').value.trim();
    const type = document.getElementById('updatetype').value.trim();
    const story = document.getElementById('updatestory').value.trim();

    if (Name === "" || year === "" || type === "" || story === "") {
        alert('Please fill out all required fields!');
        return;
    }

    let found = false;
    movies = movies.map(movie => {
        if (movie.Name.toLowerCase() === Name.toLowerCase()) {
            found = true;
            return { ...movie, year, type, story };
        }
        return movie;
    });

    if (found) {
        localStorage.setItem('movies', JSON.stringify(movies));
        alert('Movie updated successfully!');
    } else {
        alert('Movie not found!');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    displayMovies();
});

function displayMovies() {
    const movieList = document.getElementById('moviesList');
    movieList.innerHTML = '';

    if (movies.length === 0) {
        movieList.innerHTML = '<p>No movies available yet!</p>';
        return;
    }

    movies.forEach((movie, index) => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movies');

        movieDiv.innerHTML = `
            <img src="${movie.movieimg}" alt="${movie.Name}">
            <p>${movie.Name} (${movie.year}) (${movie.type})(${movie.story})</p>
            <button onclick="deleteMovie(${index}) " >Delete</button>
            <a href="tools.html"><button>Modify</button></a>
        `;

        movieList.appendChild(movieDiv);
    });
}

function deleteMovie(index) {
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}
