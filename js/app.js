const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");



function firstCardShowText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn firstReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function secondCardShowText() {
    var dots = document.getElementById("secondDots");
    var moreText = document.getElementById("secondMore");
    var btnText = document.getElementById("btn secondReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}



function thirdCardShowText() {
    var dots = document.getElementById("thirdDots");
    var moreText = document.getElementById("thirdMore");
    var btnText = document.getElementById("btn thirdReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function forthCardShowText() {
    var dots = document.getElementById("forthDots");
    var moreText = document.getElementById("forthMore");
    var btnText = document.getElementById("btn forthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function firthCardShowText() {
    var dots = document.getElementById("firthDots");
    var moreText = document.getElementById("firthMore");
    var btnText = document.getElementById("btn firthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function sixCardShowText() {
    var dots = document.getElementById("sixDots");
    var moreText = document.getElementById("sixMore");
    var btnText = document.getElementById("btn sixReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function showSkills() {
    var dots = document.getElementById("nothing");
    var moreText = document.getElementById("moreSkills");
    var btnText = document.getElementById("btn expandSkills");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More Skills";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide skills";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function closeMenu() {
    navbar.classList.remove("open");

}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    } else {
        closeMenu();
    }
})

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    });
});

$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s',
});

window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();

});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            let maxNum = +numb.dataset.num;
            let speed = 6000;
            const increment = Math.ceil(maxNum / speed);

            if (currentNum < maxNum) {
                numb.innerText = currentNum + increment;
                setTimeout(updateCount, 1);
            } else {
                numb.innerText = maxNum + "+";
            }
        };

        setTimeout(updateCount, 400);
    });
}





let words= document.querySelectorAll(".word");
words.forEach((word)=>{


        let letters= word.textContent.split("");
        word.textContent="";
        letters.forEach((letters)=>{
        let span = document.createElement("span");
        span.textContent=letter;
        span.className= "letter";
        word.append(span);

});


});

 
let curretWordIndex=0;
let maxWordIndex=words.length -1;
words[curretWordIndex].style.opacity ="1";
let changetext = ()=>{

      let curretWord = words[curretWordIndex];
      let nextWord = curretWordIndex === maxWordIndex ? words[0] : words[curretWordIndex + 1];


       Array.from(curretWord.children).forEach((letter,i)=>{
 
        setTimeout(()=>{
            letter.className="letter out";
            

            } , i * 80);

    
            });


           nextWord.style.opacity="1";



  Array.from(nextWord.children).forEach((letter,i)=>{

letter.className="letter behind";
setTimeout(()=>{

  letter.className="letter in"

     },340 + i * 80);

    });


curretWordIndex = curretWordIndex === maxWordIndex ? 0 : curretWordIndex + 1;


}
changetext();
setInterval(changetext,3000);









document.addEventListener('DOMContentLoaded', function() {
  const wordElements = document.querySelectorAll('.change-text h3 .word');
  let currentWordIndex = 0;

  function showNextWord() {
    wordElements[currentWordIndex].classList.remove('active');
    currentWordIndex = (currentWordIndex + 1) % wordElements.length;
    wordElements[currentWordIndex].classList.add('active');
  }

  // Show the first word initially
  wordElements[currentWordIndex].classList.add('active');

  // Start changing words every 3 seconds
  setInterval(showNextWord, 3000);
});




//////////circle///////////////////////////////////////////////////

 

const circles= document.querySelectorAll('.circle');
circles.forEach(elem=>{
 var dots=elem.getAttribute("data-dots");
var marked=elem.getAttribute("data-percent"); 
var percent = Math.floor(dots*marked/100);
var points = "";
var rotate =360 / dots;

for(let i = 0 ; i < dots ; i++){

points += '<div class="points" style="--i:${i};--rot:${rotate}deg"></div>';

}
elem.innerHTML=points;

const pointsMarked = elem.querySelectorAll('.points');
for(let i = 0 ; i<percent ; i++){

  pointsMarked[i].classList.add('marked')

}


})






/*reak poits*/




