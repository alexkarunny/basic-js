module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    let hanoiO = {turns: 0 , seconds : 0};

    hanoiO.turns = Math.pow(2, disksNumber) - 1;
    hanoiO.seconds = hanoiO.turns / (turnsSpeed / 3600);

    return hanoiO;
}