

const handler = (diff, num) => {
    const fs = require('fs');
    let file = `./exercises/${diff}.json`;
    let data = fs.readFileSync(file);
    let exercises = JSON.parse(data);
    let shuffled = exercises.sort(() => 0.5 - Math.random());
    const final = [];
    for (let i = 0; i < num; ++i)
    {
        final.push(shuffled[i]);
    }
    return final;
}

module.exports = handler;