const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


function findCard(value, suit) {

    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        if (card.suit === suit && card.value === value) {
            return true;
        }
    }

    return false;
}

 console.log(findCard(10, "club"))   // true
 console.log(findCard(5, "heart"))   // false

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) { 
    // write your code here
    let res = [];
    for(i=0; i<6; i=i+2) {
        res.push(cardData[i].suit);
    }
    console.log(res); 
}
output: [ 'heart', 'club', 'diamond' ]

getSuits(cardData);
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount(cardData) {
    // write your code here
    let a=0; b=0; c=0;
    for(i=0; i<6; i++) {
        if(cardData[i].suit == "heart") {
            a++;
        } else if(cardData[i].suit == "club") {
            b++;
        } else {
            c++
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

getSuitCount(cardData);

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    // write your code here
    const res = {};
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        const {suit, value} = card;

        if (res[suit]) {
            const valList = res[suit];
            res[suit] = [...valList, value];
        } else {
            res[suit] = [value];
        }
    }
    console.log(res);
}
getSuitValues(cardData);

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/




