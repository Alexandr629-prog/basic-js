module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn = 2**disksNumber - 1;
    let second = turn / (turnsSpeed/3600);
    return  {turn,  second}
}