
var quotesList = [
    {
        "author": "—Henry Ford",
        "quote": "Coming together is a beginning, keeping together is progress, working together is success."
    }, {
        "author": "—Winston Churchill",
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts."
    }, {
        "author": "—Arnold H. Glasow",
        "quote": "Success is simple. Do what's right, the right way, at the right time."
    }, {
        "author": "—David Allen",
        "quote": "You can do anything, but not everything."
    }, {
        "author": "—Wayne Gretzky",
        "quote": "You miss 100 percent of the shots you never take."
    }, {
        "author": "—Ambrose Redmoon",
        "quote": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear."
    }
];
var colors = [
    {"color": "#1abc9c"},
    {"color": "#2ecc71"},
    {"color": "#3498db"},
    {"color": "#9b59b6"},
    {"color": "#34495e"},
    {"color": "#16a085"},
    {"color": "#27ae60"},
    {"color": "#2980b9"},
    {"color": "#8e44ad"},
    {"color": "#f1c40f"},
    {"color": "#e67e22"},
    {"color": "#e74c3c"},
    {"color": "#c0392b"},
    {"color": "#2ecc71"}
];
var bgColor = "";
var bgColorDarken = "";
var i = 0;
var j = 0;
var n = i;
var m = j;
var amountQuotes = quotesList.length;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function() {
    bgColor = colors[0].color;
    $(".quote, .author").css('color', bgColor);
    $(".quote").html(quotesList[i].quote);
    $(".author").html(quotesList[j].author);

    $("#button").click( function() {
        i = getRandomInt(0, amountQuotes - 1);

        // for not repeating quotes
        if (i == n) {
            i = getRandomInt(0, amountQuotes - 1);
        }
        n = i;

        j = getRandomInt(0, 13);

        // for not repeating colors
        if (j == m) {
            j = getRandomInt(0, 13);
        }
        m = j;

        bgColor = colors[j].color;
        $(".quote").html(quotesList[i].quote);
        $(".author").html(quotesList[i].author);
        $("body").css('background', bgColor);
        $("#button").css('background', bgColor);
        $(".quote, .author").css('color', bgColor);
    });
    $("#twitter").on("click", function() {
        $(this).attr('href', 'https://twitter.com/intent/tweet?&related=freecodecamp&text=' + $(".quote").html() + $(".author").html());
    });
});


