async function quizSelector(msg, json, state) {

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
  json["quiz"].forEach(element => {
    menuEmbed.fields.push(element.menu);
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

async function chapterSelector(msg, json, state) {
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
  json["quiz"][state.quiz].chapters.forEach(element => {
    menuEmbed.fields.push(element.menu);
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


async function sectionSelector(msg, json, state) {
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
  json["quiz"][state.quiz].chapters[state.chapter].sections.forEach(element => {
    menuEmbed.fields.push(element.menu);
  });
  //Then send the menu embed to the user
  msg.channel.send({ embed: menuEmbed }).then(() => {
    const filter = response => response.author.id === msg.author.id;
    msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
      .then(collected => {
        const content = collected.first()['content'];
        state.chapter = content;
        msg.channel.send(`${collected.first().author} selected section ` + content);
      })
  });

}

exports.quizSelector = quizSelector;
exports.chapterSelector = chapterSelector;
exports.sectionSelector = sectionSelector;