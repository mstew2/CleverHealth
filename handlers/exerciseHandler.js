

const handler = (diff, num) => {
    const fs = require('fs');
    let file = '';
    if (diff == 'Easy') {
        file = `./exercises/Easy.json`;
    }
    else if (diff == 'Medium') {
        file = `./exercises/Medium.json`;
    }
    else if (diff == 'Easy') {
        file = `./exercises/Hard.json`;
    }
    else {
        return null;
    }
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