const users = [
  {
    index: 0,
    fullName: "Gilberto dos Santos Ribeiro",
    username: "Gilbertosr5",
    email: "gillbertosr5@gmail.com",
    password: "12345",
    photo: "img/users/gilberto.jpeg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus asperiores facere nihil sit beatae excepturi porro mollitia tempora, quas, eius odio ipsa. Illo sapiente, autem nobis sit ducimus explicabo.",
  },
  {
    index: 1,
    fullName: "Samara de Oliveira Matsuyama",
    username: "SamaraMatsuyama03",
    email: "samaramatsuyama.03@gmail.com",
    password: "54321",
    photo: "img/users/samara.jpg",
    bio: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
];

const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const btnSubmit = document.querySelector(".submit");
const btnLogout = document.getElementById("logout");
const divProfile = document.getElementById("profile");
const divForm = document.getElementById("form");

const photo = document.getElementById("photo");
const username = document.getElementById("username");
const fullName = document.getElementById("fullName");
const bio = document.getElementById("bio");

btnSubmit.addEventListener("click", loginValidation);
btnLogout.addEventListener("click", () => {
  divForm.style.display = "flex";
  divProfile.style.display = "none";
  userID = null;
  logado = false;
});

function loginValidation() {
  const email = emailInp.value;
  const password = passwordInp.value;
  if ((email == "" && password == "") || email == "" || password == "") {
    alert("vazio");
  } else {
    var logado = false;
    for (var i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
        console.log("logado");
        logado = true;
        var userID = users[i].index;
        console.log(userID);
      }
    }
    if (logado == false) {
      alert("email ou senha incorretos");
    } else {
      divForm.style.display = "none";
      divProfile.style.display = "flex";

      fullName.innerHTML = users[userID].fullName;
      username.innerHTML = users[userID].username;
      photo.src = users[userID].photo;
      bio.innerHTML = users[userID].bio;
    }
  }
}

window.onload = function () {
  Particles.init({
    // normal options
    selector: ".background",
    maxParticles: 200,
    connectParticles: true,
    color: "#333333",
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 50,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  });
};
