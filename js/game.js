function randomizeArray(arr) {
    var newArr = [].concat(arr);
    var shuffledArray = [];
    while(newArr.length !== 0) {
        var randomIndex = Math.floor(Math.random() * newArr.length);
        shuffledArray.push(newArr[randomIndex]);
        newArr.splice(randomIndex, 1);
    }

    return shuffledArray;
}

$( document ).ready(function() {
    var randomNumber;
    var jewelsValues;
    var wins = 0;
    var looses = 0;
    var score;

    function init() {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        jewelsValues = randomizeArray([2, 6, 9, 3]);
        score = 0;
        $('#random-number').text(randomNumber);
        $('#wins').text(wins);
        $('#looses').text(looses);
        $('#score').text(score);
    }

    init();

    $('.jewels button').click( function (obj) {
        switch($(obj.target).attr('class')) {
            case 'emerald': 
                score = score + jewelsValues[0];
                $('#score').text(score);
                console.log('es esmeralda');
                break;
            case 'rubi': 
                score = score + jewelsValues[1];
                $('#score').text(score);
                console.log('es rubi');
                break;
            case 'saphire': 
                score = score + jewelsValues[2];
                $('#score').text(score);
                console.log('es safi');
                break;
            case 'jade': 
                score = score + jewelsValues[3];
                $('#score').text(score);
                console.log('es jade');
                break;
        }
        if(randomNumber == score) {
            console.log('wins');
            wins = wins + 1;
            $('#wins').text(wins);
            init();
        } else if(randomNumber < score) {
            console.log('loose');
            looses = looses + 1;
            $('#looses').text(looses);
            init();
        }
    });


});

