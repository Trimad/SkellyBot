function start(msg, quizes, state) {

    let section = quizes[state.quiz][state.chapter][state.section];
    //console.log(section);


    section.forEach(element => {
        msg.reply(JSON.stringify(element));

    });
}

exports.start = start;