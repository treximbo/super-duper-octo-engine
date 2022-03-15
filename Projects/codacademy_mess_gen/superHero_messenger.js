function generateRandomNum(num) {
    // GETS RANDOM WHOLE NUM FROM 0 --> num - 1
    return Math.floor(Math.random() * num);
}

const randomOpt = {
    villain : ["The Joker", "Lex Luther", "Magneto", "Klaw", "Ra's al Ghul"],
    superHero : ["Superman", "Batman", "Ironman", "Thor", "Black Panther"],
    civilian : ["Paul", "Joe", "Jeffrey", "Mike", "Angus"]
}

let superLife = []

for (let prop in randomOpt) {
    let superOption = generateRandomNum(randomOpt[prop].length);

    switch (prop) {
        case 'villain' :
            superLife.push(`Oh no! It's ${randomOpt[prop][superOption]}! Run for your lives!`)
            break
        case 'superHero' :
            superLife.push(`Look! It's ${randomOpt[prop][superOption]}! Go get 'em!`)
            break
        case 'civilian' :
            superLife.push(`Just because you were'nt born with incredible powers, ${randomOpt[prop][superOption]}, does't mean you can't save the world.`)
            break
    }
}

function formatStory(arr) {
    const formatted = arr.join('\n');
    console.log(formatted);
}

formatStory(superLife);
