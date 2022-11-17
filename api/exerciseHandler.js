class exerciseHandler {
    getWorkout() {
        const fs = require('fs');
        let data = fs.readFileSync('./exercises/easy.json');
        let exercises = JSON.parse(data);
        exercises.forEach((exercise) => {
            console.log(exercise);
        });
    }
}

test = new exerciseHandler();
test.getWorkout();