const question = document.querySelector('.questionNum');
const ingredient1 = document.querySelector('.ingredient1')
const ingredient2 = document.querySelector('.ingredient2')
const ingredient3 = document.querySelector('.ingredient3')
const ingredient4 = document.querySelector('.ingredient4')
const quizPicture = document.getElementById('quizPicture');
const scoreCounter = document.getElementById('score');
const playBtn = document.querySelector('.playButton')
let selectedDish = null;
let score = 0;
let questionNum = 1;
let choice1 = 1;
let choice2 = 2;
let choice3 = 3;
let choice4 = 4;

playBtn.addEventListener('click', playAgain);

function playAgain(){
    selectedDish = null;
    score = 0;
    scoreCounter.innerText = 0;
    questionNum = 1;
    question.innerText = 1;
    addListeners();
    setMultipleChoiceOptions();
    pickRandomDish();
    playBtn.classList.add('hidden');
}

function addListeners(){
    ingredient1.addEventListener('click', checkAnswer);
    ingredient2.addEventListener('click', checkAnswer);
    ingredient3.addEventListener('click', checkAnswer);
    ingredient4.addEventListener('click', checkAnswer);
}

function removeListeners(){
    ingredient1.removeEventListener('click', checkAnswer);
    ingredient2.removeEventListener('click', checkAnswer);
    ingredient3.removeEventListener('click', checkAnswer);
    ingredient4.removeEventListener('click', checkAnswer);
}

function checkAnswer(){
    questionNum++;
    if(this.innerText == selectedDish.name){
        removeListeners();
        this.style.backgroundColor = 'green';
        score++;
        scoreCounter.innerText = score;
        setTimeout(() => {
            if(questionNum > 25){
                removeListeners();
                playBtn.classList.remove('hidden');
                ingredient1.innerText = 'you got ' + score + ' questions correct';
                ingredient2.innerText = '';
                ingredient3.innerText = '';
                ingredient4.innerText = '';
                this.style.backgroundColor = 'white';
                return;
            }
            question.innerText = questionNum;
            this.style.backgroundColor = 'white';
            setMultipleChoiceOptions();
            pickRandomDish();
            addListeners()
        }, 1000)
    } else if(this.innerText !== selectedDish.name){
        removeListeners();
        this.style.backgroundColor = 'red';
        setTimeout(() => {
            if(questionNum > 25){
                removeListeners();
                playBtn.classList.remove('hidden');
                ingredient1.innerText = 'you got ' + score + ' questions correct';
                ingredient2.innerText = '';
                ingredient3.innerText = '';
                ingredient4.innerText = '';
                this.style.backgroundColor = 'white';
                return;
            }
            question.innerText = questionNum;
            this.style.backgroundColor = 'white';
            setMultipleChoiceOptions();
            pickRandomDish();
            addListeners()
        }, 1000)
    }
}

window.onload = (event) => {
    scoreCounter.innerText = score;
    ingredient1.innerText = null;
    ingredient2.innerText = null;
    ingredient3.innerText = null;
    ingredient4.innerText = null;
    addListeners();
    setMultipleChoiceOptions();
    pickRandomDish();
};

function setMultipleChoiceOptions(){
    setChoiceOne();
    setChoiceTwo();
    setChoiceThree();
    setChoiceFour();
}

function setChoiceOne(){
    choice1 = menu[generateRandomMenuNumber()].name
    ingredient1.innerText = choice1
}

function setChoiceTwo(){
    choice2 = menu[generateRandomMenuNumber()].name;
    if(choice2 == choice1){
        setChoiceTwo()
        return;
    } else {
        ingredient2.innerText = choice2
    }
}

function setChoiceThree() {
    choice3 = menu[generateRandomMenuNumber()].name;
    if(choice3 == choice1 || choice3 == choice2){
        setChoiceThree()
        return;
    } else {
        ingredient3.innerText = choice3
    }
}

function setChoiceFour() {
    choice4 = menu[generateRandomMenuNumber()].name;
    if(choice4 == choice1 || choice4 == choice2 || choice4 == choice3){
        setChoiceFour()
        return;
    } else {
        ingredient4.innerText = choice4
    }
}

function generateRandomMenuNumber(){
    let number = Math.floor(Math.random() * menu.length);
    return number;    
}

function pickRandomDish(){
    pick = generateRandomMenuNumber()
    console.log('pick was ' + menu[pick].name)
    console.log('choice1 was ' + choice1)
    console.log('choice2 was ' + choice2)
    console.log('choice3 was ' + choice3)
    console.log('choice4 was ' + choice4)
    if(menu[pick].name == choice1 || menu[pick].name == choice2 || menu[pick].name == choice3 || menu[pick].name == choice4){
        pickRandomDish()
        return
    }
    selectedDish = menu[pick];
    let spaceSelection = Math.ceil(Math.random() * 3);
    randomSelectionArray[spaceSelection].innerText = selectedDish.name
    quizPicture.src = selectedDish.picture
}

const randomSelectionArray = [ingredient1, ingredient2, ingredient3, ingredient4]


//MENU
const menu = [
    {
        name: 'crab rangoons',
        picture: 'images/crabRangoons.jpg'
    },
    {
        name: 'pork spring rolls',
        picture: 'images/porkSpringRoll.jpg'
    },
    {
        name: 'fried tofu',
        picture: 'images/friedTofu.jpg'
    },
    {
        name: 'fish cakes',
        picture: 'images/fishCakes.jpg'
    },
    {
        name: 'papaya salad salted crab',
        picture: 'images/papayaSaladSaltedCrab.jpg'
    },
    {
        name: 'kao mun gai',
        picture: 'images/kaoMunGai.jpg'
    },
    {
        name: 'braised pork leg',
        picture: 'images/braisedPorkLeg.jpg'
    },
    {
        name: 'roasted red pork',
        picture: 'images/roastedRedPork.jpg'
    },
    {
        name: 'panang curry',
        picture: 'images/panangCurry.jpg'
    },
    {
        name: 'yellow curry',
        picture: 'images/yellowCurry.jpg'
    },
    {
        name: 'holy basil',
        picture: 'images/holyBasil.jpg'
    },
    {
        name: 'garlic',
        picture: 'images/garlicStirfry.jpg'
    },
    {
        name: 'grilled chicken',
        picture: 'images/grilledChicken.jpg'
    },
    {
        name: 'pineapple fried rice',
        picture: 'images/pineappleFriedRice.jpg'
    },
    {
        name: 'pop pop fried rice',
        picture: 'images/popPopFriedRice.jpg'
    },
    {
        name: 'crispy chicken',
        picture: 'images/crispyChicken.jpg'
    },
    {
        name: 'pad thai',
        picture: 'images/padThai.jpg'
    },
    {
        name: 'woonsen pad thai',
        picture: 'images/woonsenPadThai.jpg'
    },
    {
        name: 'pad see ew',
        picture: 'images/padSeeEw.jpg'
    },
    {
        name: 'pad kee mao',
        picture: 'images/padKeeMao.jpg'
    },
    {
        name: 'roasted red pork eggnoodle',
        picture: 'images/roastedRedPorkEggnoodleDry.jpg'
    },
    {
        name: 'spicy chicken noodle soup',
        picture: 'images/spicyChickenNoodleSoup.jpg'
    },
    {
        name: 'garlic chicken noodle',
        picture: 'images/garlicChickenNoodle.jpg'
    },
    {
        name: 'khao soi',
        picture: 'images/khaoSoi.jpg'
    }
]
//MENU END