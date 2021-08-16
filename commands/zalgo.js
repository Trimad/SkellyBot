module.exports = function (message, tokens) {

    //const up = (content[1]) ? content[1] : 10;
    //const down = (content[2]) ? content[2] : 10;
    //const mid = (content[3]) ? content[3] : 10;
    //message.channel.send("Type the arcane words that will be used to summon Zalgo");
    //const filter = m => m.author.id === message.author.id;
    // const reply = await message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] });
    //const ans = reply.first().content;
    //const z = Zalgo.heComes(ans, up, mid, down);
    if (tokens.length > 0) {
        const z = heComes(tokens.join(" "), 10, 10, 10);
        message.channel.send(z);
    }
};

var soul = {
    "up": [
        '̍', '̎', '̄', '̅',
        '̿', '̑', '̆', '̐',
        '͒', '͗', '͑', '̇',
        '̈', '̊', '͂', '̓',
        '̈', '͊', '͋', '͌',
        '̃', '̂', '̌', '͐',
        '̀', '́', '̋', '̏',
        '̒', '̓', '̔', '̽',
        '̉', 'ͣ', 'ͤ', 'ͥ',
        'ͦ', 'ͧ', 'ͨ', 'ͩ',
        'ͪ', 'ͫ', 'ͬ', 'ͭ',
        'ͮ', 'ͯ', '̾', '͛',
        '͆', '̚',
    ],
    "down": [
        '̖', '̗', '̘', '̙',
        '̜', '̝', '̞', '̟',
        '̠', '̤', '̥', '̦',
        '̩', '̪', '̫', '̬',
        '̭', '̮', '̯', '̰',
        '̱', '̲', '̳', '̹',
        '̺', '̻', '̼', 'ͅ',
        '͇', '͈', '͉', '͍',
        '͎', '͓', '͔', '͕',
        '͖', '͙', '͚', '̣',
    ],
    "mid": [
        '̕', '̛', '̀', '́',
        '͘', '̡', '̢', '̧',
        '̨', '̴', '̵', '̶',
        '͜', '͝', '͞',
        '͟', '͠', '͢', '̸',
        '̷', '͡', ' ҉',
    ]
};

var all = [].concat(soul.up, soul.down, soul.mid);

function randomNumber(range) {
    r = Math.floor(Math.random() * range);
    return r;
};

function is_char(character) {
    var bool = false;
    all.filter(function (i) {
        bool = (i == character);
    });
    return bool;
}

heComes = function (text, up, mid, down) {
    result = '';

    var counts;
    text = text.split('');
    for (let letter in text) {
        if (is_char(letter)) { continue; }
        result += text[letter];
        counts = { "up": up, "down": mid, "mid": down };
        let arr = ["up", "mid", "down"];
        for (let d in arr) {
            const direction = arr[d];
            for (let i = 0; i <= counts[direction]; i++) {
                result += soul[direction][randomNumber(soul[direction].length)];
            }
        }
    }
    return result;
};
