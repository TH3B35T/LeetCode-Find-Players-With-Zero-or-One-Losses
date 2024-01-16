/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {

    const answer = [[],[]];
    let winners = new Map();
    let losers = new Map();

    for(let [winner, loser] of matches){
        winners.set(winner, (winners.get(winner) || 0) + 1)
        losers.set(loser, (losers.get(loser) || 0) + 1)
    }
    
    winners.forEach (function(_, key) {
        if(!losers.has(key)){
            answer[0].push(key)
        }
    })

    losers.forEach (function(value, key) {
        if(value === 1){
            answer[1].push(key)
        }
    })

    answer.forEach(arr => arr.sort((a, b) => a - b));
    return answer;
};
