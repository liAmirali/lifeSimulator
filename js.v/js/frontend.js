let rawCard = '<div class="person-info"><div class="idCard"><div class="index"><p></p></div><div class="name"><p></p></div><div class="alive-dead"><p>Alive</p></div></div><div class="personality"></div><div class="supply"></div></div>'
function createFrontend(cardCount) {
    for (var i = 0; i < cardCount; i++) {
        $('#world-statistics').append(rawCard);
        $(`.person-info:nth-child(${i+1}) .index p`).text(i);
        $(`.person-info:nth-child(${i+1}) .name p`).text('John Doe');
        for (var j = 0; j < personality.length; j++) {
            $(`.person-info:nth-child(${i+1}) .personality`).append('<p><span></span>: <span></span>;</p>');
            $(`.person-info:nth-child(${i+1}) .personality p:nth-child(${j+1}) span:nth-child(1)`).text(personality[j]);
            $(`.person-info:nth-child(${i+1}) .personality p:nth-child(${j+1}) span:nth-child(2)`).text(world[i][personality[j]]);
        }
        for (var j = 0; j < supply.length; j++) {
            $(`.person-info:nth-child(${i+1}) .supply`).append('<p><span></span>: <span></span>;</p>');
            $(`.person-info:nth-child(${i+1}) .supply p:nth-child(${j+1}) span:nth-child(1)`).text(supply[j]);
        }
        let a = $(`.person-info:nth-child(${i+1}) .personality`);
        a.children('p').css('top', (a.height() - a.children('p').length * a.children('p').height())/2);

        a = $(`.person-info:nth-child(${i+1}) .supply`);
        a.children('p').css('top', (a.height() - a.children('p').length * a.children('p').height())/2);
    }
}

function refreshStat() {
    $('#navbar .aliveCount p span:nth-child(1)').text(countAlive());
    $('#navbar .aliveCount p span:nth-child(2)').text(peopleC);
    $('#navbar .passedDays p span:nth-child(1)').text(day);
    for (var i = 0; i < peopleC; i++) {
        if (world[i].alive) {
            $(`.person-info:nth-child(${i+1}) .alive-dead p`).text('Alive');
        }
        else{
            $(`.person-info:nth-child(${i+1}) .alive-dead p`).text('Dead');
        }
        for (var j = 0; j < supply.length; j++) {
            $(`.person-info:nth-child(${i+1}) .supply p:nth-child(${j+1}) span:nth-child(2)`).text(Math.round(world[i][supply[j]]));
        }
    }
}
