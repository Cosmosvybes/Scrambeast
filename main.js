
var words = ['abuse', 'elixir', 'table', 'dormitory', 'triangle', 'astronomer', 'creature', 'software', 'dictionary', 'mathematics'];

var scores = 0;


var split_out = (x) => {
    var scrambled_word = [];
    var splited_words = x.split('')
    splited_words.reverse().forEach(word => {
        scrambled_word.push(word);
    });
    scrambled_word.forEach(x => {
        words_screen.innerHTML += "<h1 style='color:darkblue'>" + x + "</h1>"

    })

}
//i created array of objects for all the answers
var answers =
    [
        { answer: ['abuse', 'use', 'sue'] },
        { answer: ['betal', 'table', 'tab', 'able'] },
        { answer: ['dirt', 'dormitory', 'room', 'door'] },
        { answer: ['sow', 'war', 'fare', 'software', 'ware', 'oat'] },
        { answer: ['moon', 'astronomer', 'stare', 'starer'] },
        { answer: ['cheats', 'mathematics', 'mate', 'math', 'team', 'cast'] },
        { answer: ['resident', 'president', 'stipends', 'dent'] },
        { answer: ['create', 'creature', 'eat', 'tea'] },
        { answer: ['lexi', 'elixir'] },
        { answer: ['dictionary', 'indicatory'] },
        { answer: ['triangle', 'lean', 'gin', 'glean', 'tri', 'angle'] }
    ]


//getting the values of the users 
var word1 = document.getElementById('guess1_');



// function to check for the answers , if what the suer supplies match wit the arrays of object regarding the level the user is playing
// and to ensure that the user supply values fot both input
check_.addEventListener('click', () => {

    if (!(word1.value)) {
        outcome_.style.display = "block"
        outcome_.innerHTML = "enter your words "

    }

    else if (word1.value) {
        var correct_answer = answers.find(x => x.answer.includes(word1.value.toLowerCase()));
        if (correct_answer) {
            scores += 10;
            score_.innerHTML = 'Scores :' + scores;
            outcome_.innerHTML = "yay!!! you guess right! goodluck fam 😋";
            level_1.disabled = true;
            words_screen.innerHTML = ""
            word1.value = ""

        }
        else {
            outcome_.innerHTML = "This is wrong ! Try more!! 🤣🤣";
        }

    }

    // button enable and disable base on the user current score

    switch (scores) {
        case 10:
            level_1.style.backgroundColor = "green";
            start_message.innerHTML = "Press 2 to begin the next level"
            break;
        case 20:
            level_2.style.backgroundColor = "green";
            start_message.innerHTML = "Press 3 to begin the next level"
            break;
        case 30:
            level_3.style.backgroundColor = "green";
            start_message.innerHTML = "Press 4 to begin the next level"
            break;
        case 40:
            level_4.style.backgroundColor = "green";
            start_message.innerHTML = "Press 5 to begin the next level"
            break;
        case 50:
            level_5.style.backgroundColor = "green";
            start_message.innerHTML = "Press 6 to begin the next level"
            break;

        case 60:
            level_6.style.backgroundColor = "green";
            start_message.innerHTML = "Press 7 to begin the next level"
            break;

        case 70:
            level_7.style.backgroundColor = "green";
            start_message.innerHTML = "Press 8 to begin the next level"
            break;
        case 80:
            level_8.style.backgroundColor = "green";
            start_message.innerHTML = "Press 9 to begin the next level"
            break;
        case 90:

            level_9.style.backgroundColor = "green";
            start_message.innerHTML = "Press 10 to begin the next level"
            break;

        case 100:
            level_10.disabled = true;
            level_10.style.backgroundColor = "green";
            outcome_.innerHTML = "Congratulations all mission accomplished, words beast! 😋🦾🧠";
            break;

    }


});




level_1.addEventListener('click', () => {
    hint_.disabled = false;
    split_out(words[0])
    level_1.disabled = true
    level_1.style.backgroundColor = "yellow"
    start_message.innerHTML = "";



});

level_2.addEventListener('click', () => {
    if (scores == 10) {
        split_out(words[1]);
        level_2.disabled = true
        level_2.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""

    }

});

level_3.addEventListener('click', () => {
    if (scores == 20) {
        split_out(words[2]);
        level_3.disabled = true
        level_3.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }


});
level_4.addEventListener('click', () => {
    if (scores == 30) {
        split_out(words[3]);
        level_4.disabled = true
        level_4.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }


});
level_5.addEventListener('click', () => {
    if (scores == 40) {
        split_out(words[4]);
        level_5.disabled = true
        level_5.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }

});
level_6.addEventListener('click', () => {
    if (scores == 50) {
        split_out(words[5]);
        level_6.disabled = true
        level_6.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }

});
level_7.addEventListener('click', () => {
    if (scores == 60) {
        split_out(words[6]);
        level_7.disabled = true
        level_7.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }


});
level_8.addEventListener('click', () => {
    if (scores == 70) {
        split_out(words[7]);
        level_8.disabled = true
        level_8.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }

});
level_9.addEventListener('click', () => {
    if (scores == 80) {
        split_out(words[8]);
        level_9.disabled = true
        level_9.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""

    }
});
level_10.addEventListener('click', () => {
    if (scores == 90) {
        split_out(words[9]);
        level_10.disabled = true
        level_10.style.backgroundColor = "yellow"
        start_message.innerHTML = "";
        outcome_.innerHTML = ""
    }

});



hint_.addEventListener('click', () => {

    switch (scores) {
        case 0:
            outcome_.innerHTML = "have you tried 'abuse' ?"
            break;
        case 10:
            outcome_.innerHTML = "have you tried 'lexi' ?"
            break;
        case 20:
            outcome_.innerHTML = "have you tried 'betal' ?"
            break;
        case 30:
            outcome_.innerHTML = "have you tried 'dirt' ?"
            break;
        case 40:
            outcome_.innerHTML = "have you tried 'glean' ?"
            break;
        case 50:
            outcome_.innerHTML = "have you tried 'starer' ?"
            break;
        case 50:
            outcome_.innerHTML = "have you tried 'creature' ?"
            break;
        case 70:
            outcome_.innerHTML = "have you tried 'oat' ?"
            break;
        case 80:
            outcome_.innerHTML = "have you tried 'indicatory' ?"
            break;
        case 90:
            outcome_.innerHTML = "have you tried 'cast' ?"
            break;


    }
});
var time = new Date();
var year = time.getFullYear()
year_.innerHTML = 'cosmos &copy ' + year;




