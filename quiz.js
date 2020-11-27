async function quizSelector(msg, json, state, quizBank) {

    const menuEmbed = {
        color: 0x0099ff,
        title: 'Select Quiz',
        description: 'Type the index of the quiz you would like to study!',
        thumbnail: {
            url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
        },
        fields: [],
    };
    //Push all of the fields to the field array
    json.forEach(element => {
        menuEmbed.fields.push(element.fields);
    });
    //Then send the menu embed to the user
    msg.channel.send({ embed: menuEmbed }).then(() => {

        const filter = response => response.author.id === msg.author.id;

        msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                const content = collected.first()['content'];
                state.quiz = content;
                msg.channel.send(`${collected.first().author} selected quiz ` + content);
            })
            .then(async () => {
                await chapterSelector(msg, json, state);
            })

    });
}

async function chapterSelector(msg, json, state, quizBank) {
    const menuEmbed = {
        color: 0x0099ff,
        title: 'Select Chapter',
        description: 'Type the index of the chapter you would like to study!',
        thumbnail: {
            url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
        },
        fields: [],
    };
    //Push all of the fields to the field array
    json[state.quiz].chapters.forEach(element => {
        menuEmbed.fields.push(element.fields);
    });
    //Then send the menu embed to the user
    msg.channel.send({ embed: menuEmbed }).then(() => {
        const filter = response => response.author.id === msg.author.id;
        msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                const content = collected.first()['content'];
                state.chapter = content;
                msg.channel.send(`${collected.first().author} selected chapter ` + content);
            }).then(async () => {
                await sectionSelector(msg, json, state);
            })
    });

}


async function sectionSelector(msg, json, state, quizBank) {
    const menuEmbed = {
        color: 0x0099ff,
        title: 'Select Chapter',
        description: 'Type the index of the section you would like to study!',
        thumbnail: {
            url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
        },
        fields: [],
    };
    //Push all of the fields to the field array
    json[state.quiz].chapters[state.chapter].sections.forEach(element => {
        menuEmbed.fields.push(element.fields);
    });
    //Then send the menu embed to the user
    msg.channel.send({ embed: menuEmbed }).then(() => {
        const filter = response => response.author.id === msg.author.id;
        msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                const content = collected.first()['content'];
                state.chapter = content;
                msg.channel.send(`${collected.first().author} selected section ` + content);
            }).then(async () => {
                await start(msg, json, state);
            })
    });

}

async function start(msg, json, state, quizBank) {

    var data = quizBank[state.quiz][state.chapter][state.section];

    data.length = 3;
    var score = 0;
    for await (const element of data) {
        var question = element.Q;
        var correctAnswer = element.correct;
        msg.channel.send(question);
        const filter = m => m.author.id === msg.author.id;
        const answer = await msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] });
        const ans = answer.first().content;

        if (ans.toLowerCase() === correctAnswer.toLowerCase()) {
            msg.channel.send("You are correct, the answer is A!");
            score++;
        } else {
            msg.channel.send("You are WRONG, the answer is A!");
        }


    }
    msg.channel.send("Your final score was: " + score / data.length);

}

exports.quizSelector = quizSelector;
exports.chapterSelector = chapterSelector;
exports.sectionSelector = sectionSelector;
exports.start = start;