let userScore = 0;
let CompScore = 0;
const userScore_Span = document.getElementById("user-score");
const compScore_Span = document.getElementById("comp-score");
const scoreBoard_Div = document.querySelector(".skor");
const hasil = document.querySelector(".hasil p");
const batu_Div = document.getElementById("b");
const gunting_Div = document.getElementById("g");
const kertas_Div = document.getElementById("k");

function getCompChoice() {
  const choices = ["b", "g", "k"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === "b") return "Batu";
  if (letter === "g") return "Gunting";
  if (letter === "k") return "Kertas";
}

function win(user, computer) {
  console.log("Kamu Menang");
  hasil.innerHTML = "Tunggu...";
  setTimeout(function () {
    userScore++;
    userScore_Span.innerHTML = userScore;
    hasil.innerHTML = convertToWord(user) + " melawan " + convertToWord(computer) + "! Kamu menang!";
    document.getElementById(user).classList.add("greenglow");
    document.getElementById(computer).classList.add("yellowglow");
    setTimeout(function () {
      document.getElementById(user).classList.remove("greenglow");
      document.getElementById(computer).classList.remove("yellowglow");
      if (userScore === 5) {
        document.body.classList.add("win");
      }
    }, 1000);
  }, 1000);
}

function lose(user, computer) {
  console.log("Komputer Menang");
  hasil.innerHTML = "Tunggu...";
  setTimeout(function () {
    CompScore++;
    hasil.innerHTML = convertToWord(user) + " melawan " + convertToWord(computer) + "! Kamu kalah!";
    compScore_Span.innerHTML = CompScore;
    document.getElementById(user).classList.add("redglow");
    document.getElementById(computer).classList.add("yellowglow");
    setTimeout(function () {
      document.getElementById(user).classList.remove("redglow");
      document.getElementById(computer).classList.remove("yellowglow");
      if (CompScore === 5) {
        document.body.classList.add("lose");
      }
    }, 1000);
  }, 1000);
}

function draw(user, computer) {
  console.log("Kalian Seri");
  hasil.innerHTML = "Tunggu...";
  setTimeout(function () {
    hasil.innerHTML = convertToWord(user) + " melawan " + convertToWord(computer) + "! Kalian seri!";
    document.getElementById(user).classList.add("grayglow");
    setTimeout(function () {
      document.getElementById(user).classList.remove("grayglow");
    }, 1000);
  }, 1000);
}

function game(pilihanPemain) {
  if (userScore < 3) {
    const pilihanComp = getCompChoice();
    switch (pilihanPemain + pilihanComp) {
      case "bg":
      case "gk":
      case "kb":
        win(pilihanPemain, pilihanComp);
        break;
      case "gb":
      case "kg":
      case "bk":
        lose(pilihanPemain, pilihanComp);
        break;
      case "bb":
      case "gg":
      case "kk":
        draw(pilihanPemain, pilihanComp);
        break;
    }
  } else if (userScore > 2) {
    console.log("Hayoloh kalah");
    switch (pilihanPemain) {
      case "b":
        lose(pilihanPemain, "k");
        break;
      case "g":
        lose(pilihanPemain, "b");
        break;
      case "k":
        lose(pilihanPemain, "g");
        break;
    }
  }
}

function main() {
  batu_Div.addEventListener("click", function () {
    game("b");
  });
  gunting_Div.addEventListener("click", function () {
    game("g");
  });
  kertas_Div.addEventListener("click", function () {
    game("k");
  });
}

main();

function resetGame() {
  userScore = 0;
  CompScore = 0;
  userScore_Span.innerHTML = userScore;
  compScore_Span.innerHTML = CompScore;
  hasil.innerHTML = "Ayo pilih gerakanmu!";
  document.body.classList.remove("win", "lose"); // Hapus kelas 'win' dan 'lose' dari body
}

window.onload = setTimeout(function () {
  document.body.classList.add("loaded");
}, 1000);
