async function start(message, quizes, state) {

    var data = quizes[state.quiz][state.chapter][state.section];
    data.length = 3;
    var score = 0;
    for await (const element of data) {
        var question = element.Q;
        var correctAnswer = element.correct;
        message.channel.send(question);
        const filter = m => m.author.id === message.author.id;
        const answer = await message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] });
        const ans = answer.first().content;
        console.log(ans);
        if (ans.toLowerCase() === correctAnswer.toLowerCase()) {
            message.channel.send("You are correct, the answer is A!");
            score++;
        } else {
            message.channel.send("You are WRONG, the answer is A!");
        }


    }
    message.channel.send("Your final score was: " + score / data.length);

}

exports.start = start;