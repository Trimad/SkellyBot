const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zalgo')
        .setDescription('H̵̯̐E̸̖̿ ̵͇͛C̸̡͑O̸̙̐M̴͉̔E̵̤̓S̷̨͑')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Enter a String to corrupt.')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('up')
                .setDescription('Enter an Integer upward corruption value.')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('down')
            .setDescription('Enter an Integer downward corruption value.')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('mid')
            .setDescription('Enter an Integer midward corruption value.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const a = interaction.options.getString('input');
        const up = interaction.options.getInteger('up');
        const down = interaction.options.getInteger('down');
        const mid = interaction.options.getInteger('mid');
        const z = HeComes(a, up, down, mid);
        await interaction.reply({ content: z, ephemeral: false });

    },
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

HeComes = function (text, up, mid, down) {
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