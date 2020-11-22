async function start(message, quizMenu, state) {

  var data = [
    "Type the integer that corresponds to the chapter you would like to study!",
    "Type the integer that corresponds to the section you would like to study!"
  ];

  for await (const element of data) {

    const menuEmbed = {
      color: 0x0099ff,
      title: 'SkellyBot Quiz',
      description: element,
      thumbnail: {
        url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
      },
      fields: [],

    };

    const quizFields = quizMenu.fields;
    quizFields.forEach(function (field) {
      menuEmbed.fields.push(field);
    });

    message.channel.send({ embed: menuEmbed });

    const filter = m => m.author.id === message.author.id;
    const answer = await message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] });
    const ans = answer.first().content;
    console.log(ans);
    if (ans) {

      message.channel.send("You selected: " + ans);
    }

  }

}


// function start(message, quizMenu, state) {
//   quizSelector(message, quizMenu, state).then(() => {
//     chapterSelector(message, quizMenu, state).then(() => {
//       sectionSelector(message, quizMenu, state);
//     });
//   });
// }
exports.start = start;






async function quizSelector(msg, quizMenu, state) {
  const menuEmbed = {
    color: 0x0099ff,
    title: 'SkellyBot Quiz',
    description: 'Type the integer that corresponds to the quiz you would like to take!',
    thumbnail: {
      url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
    },
    fields: [],

  };

  const quizFields = quizMenu.fields;
  quizFields.forEach(function (element) {
    menuEmbed.fields.push(element);
  });

  msg.channel.send({ embed: menuEmbed }).then(() => {

    const filter = response => response.author.id === msg.author.id;

    msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
      .then(collected => {
        const content = collected.first()['content'];
        state.quiz = content;
        msg.channel.send(`${collected.first().author} selected quiz ` + state.quiz);
        chapterSelector(msg, quizMenu, state);
      })
      .catch(collected => {
        msg.channel.send('Exiting quiz selector due to timeout.');
      });
  });
}

async function chapterSelector(msg, quizMenu, state) {
  const menuEmbed = {
    color: 0x0099ff,
    title: 'SkellyBot Quiz',
    description: 'Type the integer that corresponds to the chapter you would like to study!',
    thumbnail: {
      url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
    },
    fields: [],
  };

  const chapterFields = quizMenu["quiz"][state.quiz].fields;
  chapterFields.forEach(function (element) {
    menuEmbed.fields.push(element);
  });

  msg.channel.send({ embed: menuEmbed }).then(() => {

    const filter = response => response.author.id === msg.author.id;

    msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
      .then(collected => {
        const content = collected.first()['content'];
        state.chapter = content;
        msg.channel.send(`${collected.first().author} selected chapter ` + state.chapter);
        sectionSelector(msg, quizMenu, state);
      })
      .catch(collected => {
        msg.channel.send('Exiting chapter selector to timeout.');
      });
  });
}

async function sectionSelector(msg, quizMenu, state) {

  const menuEmbed = {
    color: 0x0099ff,
    title: 'SkellyBot Quiz',
    description: 'Type the integer that corresponds to the section you would like to study!',
    thumbnail: {
      url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
    },
    fields: [],
  };

  const sectionFields = quizMenu["quiz"][state.quiz].chapter[state.chapter].fields;
  sectionFields.forEach(function (element) {
    menuEmbed.fields.push(element);
  });

  msg.channel.send({ embed: menuEmbed }).then(() => {

    const filter = response => response.author.id === msg.author.id;

    msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
      .then(collected => {
        const content = collected.first()['content'];
        state.section = content;
        msg.channel.send(`${collected.first().author} selected section ` + state.section);

      })
      .catch(collected => {
        msg.channel.send('Exiting section selector to timeout.');
      });
  });
}


exports.quizSelector = quizSelector;
exports.chapterSelector = chapterSelector;
exports.sectionSelector = sectionSelector;