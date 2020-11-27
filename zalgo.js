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

exports.heComes = heComes;