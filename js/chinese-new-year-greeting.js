const pinyins = [
    document.getElementById("pinyin1"),
    document.getElementById("pinyin2"),
    document.getElementById("pinyin3"),
    document.getElementById("pinyin4")
];

const chineses = [
    document.getElementById("phraseChinese1"),
    document.getElementById("phraseChinese2"),
    document.getElementById("phraseChinese3"),
    document.getElementById("phraseChinese4")
];

const phraseEnglish = document.getElementById("phraseEnglish");
const button = document.getElementById("button");

const ZODIACS = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

function getCurrentZodiac() {
    const year = new Date().getFullYear();
    return ZODIACS[(year - 1900) % 12];
}

const CURRENT_ZODIAC = getCurrentZodiac();

const phrases = [{
        c: ["新", "年", "快", "樂"],
        p: ["xīn", "nián", "kuài", "lè"],
        e: "(Happy New Year)"
    },
    {
        c: ["恭", "喜", "發", "財"],
        p: ["gōng", "xǐ", "fā", "cái"],
        e: "(Wishing you prosperity)"
    },
    {
        c: ["歲", "歲", "平", "安"],
        p: ["suì", "suì", "píng", "ān"],
        e: "(Peace year after year)"
    },
    {
        c: ["萬", "事", "如", "意"],
        p: ["wàn", "shì", "rú", "yì"],
        e: "(May everything go your way)"
    },
    {
        c: ["身", "心", "健", "康"],
        p: ["shēn", "xīn", "jiàn", "kāng"],
        e: "(Wishing you good health)"
    },
    {
        c: ["心", "想", "事", "成"],
        p: ["xīn", "xiǎng", "shì", "chéng"],
        e: "(May all wishes come true)"
    },
    {
        c: ["年", "年", "有", "餘"],
        p: ["nián", "nián", "yǒu", "yú"],
        e: "(Abundance year after year)"
    },
    {
        c: ["財", "源", "廣", "進"],
        p: ["cái", "yuán", "guǎng", "jìn"],
        e: "(Wealth flows in)"
    },
    {
        c: ["步", "步", "高", "升"],
        p: ["bù", "bù", "gāo", "shēng"],
        e: "(Career advancement)"
    },
    {
        c: ["平", "安", "喜", "樂"],
        p: ["píng", "ān", "xǐ", "lè"],
        e: "(Peace and joy)"
    },
    {
        c: ["大", "展", "鴻", "圖"],
        p: ["dà", "zhǎn", "hóng", "tú"],
        e: "(Great success ahead)"
    },
    {
        c: ["富", "貴", "滿", "堂"],
        p: ["fù", "guì", "mǎn", "táng"],
        e: "(Wealth fills your home)"
    },
    {
        c: ["吉", "星", "高", "照"],
        p: ["jí", "xīng", "gāo", "zhào"],
        e: "(Good fortune shines upon you)"
    },
    {
        c: ["福", "氣", "滿", "滿"],
        p: ["fú", "qì", "mǎn", "mǎn"],
        e: "(Blessings all around)"
    },
    {
        c: ["喜", "樂", "常", "在"],
        p: ["xǐ", "lè", "cháng", "zài"],
        e: "(Happiness always with you)"
    },
    {
        c: ["前", "程", "似", "錦"],
        p: ["qián", "chéng", "sì", "jǐn"],
        e: "(A bright future ahead)"
    },
    {
        c: ["一", "路", "順", "風"],
        p: ["yí", "lù", "shùn", "fēng"],
        e: "(Smooth sailing all the way)"
    },
    {
        c: ["福", "運", "連", "連"],
        p: ["fú", "yùn", "lián", "lián"],
        e: "(Continuous good luck)"
    },
    {
        c: ["人", "生", "順", "遂"],
        p: ["rén", "shēng", "shùn", "suì"],
        e: "(Life goes smoothly)"
    },
    {
        c: ["笑", "口", "常", "開"],
        p: ["xiào", "kǒu", "cháng", "kāi"],
        e: "(Always smiling)"
    },
    {
        c: ["諸", "事", "順", "心"],
        p: ["zhū", "shì", "shùn", "xīn"],
        e: "(Everything goes your way)"
    },
    {
        c: ["福", "壽", "雙", "全"],
        p: ["fú", "shòu", "shuāng", "quán"],
        e: "(Blessings and longevity)"
    },
    {
        c: ["萬", "象", "更", "新"],
        p: ["wàn", "xiàng", "gēng", "xīn"],
        e: "(Everything renewed)"
    },
    {
        c: ["好", "運", "降", "臨"],
        p: ["hǎo", "yùn", "jiàng", "lín"],
        e: "(Good luck arrives)"
    },
    {
        c: ["心", "安", "事", "順"],
        p: ["xīn", "ān", "shì", "shùn"],
        e: "(Peace of mind, smooth affairs)"
    },
    {
        c: ["日", "子", "紅", "火"],
        p: ["rì", "zi", "hóng", "huǒ"],
        e: "(Life thriving and prosperous)"
    },
    {
        c: ["福", "至", "運", "來"],
        p: ["fú", "zhì", "yùn", "lái"],
        e: "(Blessings and fortune arrive)"
    },
    {
        c: ["樂", "享", "人", "生"],
        p: ["lè", "xiǎng", "rén", "shēng"],
        e: "(Enjoy life fully)"
    },
    {
        c: ["春", "滿", "人", "間"],
        p: ["chūn", "mǎn", "rén", "jiān"],
        e: "(Spring fills the world)"
    },
    {
        c: ["喜", "迎", "新", "歲"],
        p: ["xǐ", "yíng", "xīn", "suì"],
        e: "(Joyfully welcoming the New Year)"
    },
    {
        c: ["鼠", "年", "大", "吉"],
        p: ["shǔ", "nián", "dà", "jí"],
        e: "(Good luck in the Year of the Rat)",
        zodiac: "鼠"
    },
    {
        c: ["鼠", "來", "運", "轉"],
        p: ["shǔ", "lái", "yùn", "zhuǎn"],
        e: "(Fortune turns in the Year of the Rat)",
        zodiac: "鼠"
    },
    {
        c: ["金", "鼠", "報", "喜"],
        p: ["jīn", "shǔ", "bào", "xǐ"],
        e: "(Golden Rat brings joy)",
        zodiac: "鼠"
    },
    {
        c: ["鼠", "年", "豐", "收"],
        p: ["shǔ", "nián", "fēng", "shōu"],
        e: "(Abundant Year of the Rat)",
        zodiac: "鼠"
    },
    {
        c: ["瑞", "鼠", "呈", "祥"],
        p: ["ruì", "shǔ", "chéng", "xiáng"],
        e: "(Auspicious Rat brings blessings)",
        zodiac: "鼠"
    },
    {
        c: ["牛", "年", "亨", "通"],
        p: ["niú", "nián", "hēng", "tōng"],
        e: "(Smooth success in the Year of the Ox)",
        zodiac: "牛"
    },
    {
        c: ["金", "牛", "迎", "春"],
        p: ["jīn", "niú", "yíng", "chūn"],
        e: "(Golden Ox welcomes spring)",
        zodiac: "牛"
    },
    {
        c: ["牛", "氣", "沖", "天"],
        p: ["niú", "qì", "chōng", "tiān"],
        e: "(Strong momentum in the Year of the Ox)",
        zodiac: "牛"
    },
    {
        c: ["牛", "轉", "乾", "坤"],
        p: ["niú", "zhuǎn", "qián", "kūn"],
        e: "(Turning fortunes with the Ox)",
        zodiac: "牛"
    },
    {
        c: ["瑞", "牛", "獻", "福"],
        p: ["ruì", "niú", "xiàn", "fú"],
        e: "(Auspicious Ox offers blessings)",
        zodiac: "牛"
    },
    {
        c: ["虎", "虎", "生", "威"],
        p: ["hǔ", "hǔ", "shēng", "wēi"],
        e: "(Power in the Year of the Tiger)",
        zodiac: "虎"
    },
    {
        c: ["猛", "虎", "下", "山"],
        p: ["měng", "hǔ", "xià", "shān"],
        e: "(Tiger descends the mountain)",
        zodiac: "虎"
    },
    {
        c: ["虎", "年", "大", "展"],
        p: ["hǔ", "nián", "dà", "zhǎn"],
        e: "(Great expansion in the Year of the Tiger)",
        zodiac: "虎"
    },
    {
        c: ["如", "虎", "添", "翼"],
        p: ["rú", "hǔ", "tiān", "yì"],
        e: "(Like a tiger with wings)",
        zodiac: "虎"
    },
    {
        c: ["虎", "嘯", "生", "風"],
        p: ["hǔ", "xiào", "shēng", "fēng"],
        e: "(Tiger roar brings momentum)",
        zodiac: "虎"
    },
    {
        c: ["兔", "年", "吉", "祥"],
        p: ["tù", "nián", "jí", "xiáng"],
        e: "(Peaceful Year of the Rabbit)",
        zodiac: "兔"
    },
    {
        c: ["玉", "兔", "迎", "春"],
        p: ["yù", "tù", "yíng", "chūn"],
        e: "(Jade Rabbit welcomes spring)",
        zodiac: "兔"
    },
    {
        c: ["兔", "躍", "新", "程"],
        p: ["tù", "yuè", "xīn", "chéng"],
        e: "(Rabbit leaps into a new journey)",
        zodiac: "兔"
    },
    {
        c: ["兔", "年", "安", "康"],
        p: ["tù", "nián", "ān", "kāng"],
        e: "(Healthy Year of the Rabbit)",
        zodiac: "兔"
    },
    {
        c: ["瑞", "兔", "呈", "祥"],
        p: ["ruì", "tù", "chéng", "xiáng"],
        e: "(Auspicious Rabbit brings blessings)",
        zodiac: "兔"
    },
    {
        c: ["龍", "年", "大", "發"],
        p: ["lóng", "nián", "dà", "fā"],
        e: "(Great fortune in the Year of the Dragon)",
        zodiac: "龍"
    },
    {
        c: ["飛", "龍", "在", "天"],
        p: ["fēi", "lóng", "zài", "tiān"],
        e: "(Soaring dragon in the sky)",
        zodiac: "龍"
    },
    {
        c: ["龍", "騰", "虎", "躍"],
        p: ["lóng", "téng", "hǔ", "yuè"],
        e: "(Dragon rises, tiger leaps)",
        zodiac: "龍"
    },
    {
        c: ["祥", "龍", "獻", "瑞"],
        p: ["xiáng", "lóng", "xiàn", "ruì"],
        e: "(Auspicious dragon offers blessings)",
        zodiac: "龍"
    },
    {
        c: ["龍", "年", "順", "心"],
        p: ["lóng", "nián", "shùn", "xīn"],
        e: "(A smooth Year of the Dragon)",
        zodiac: "龍"
    },
    {
        c: ["蛇", "年", "順", "利"],
        p: ["shé", "nián", "shùn", "lì"],
        e: "(Smooth Year of the Snake)",
        zodiac: "蛇"
    },
    {
        c: ["靈", "蛇", "獻", "瑞"],
        p: ["líng", "shé", "xiàn", "ruì"],
        e: "(Wise snake brings blessings)",
        zodiac: "蛇"
    },
    {
        c: ["蛇", "舞", "新", "春"],
        p: ["shé", "wǔ", "xīn", "chūn"],
        e: "(Snake dances into spring)",
        zodiac: "蛇"
    },
    {
        c: ["蛇", "來", "運", "旺"],
        p: ["shé", "lái", "yùn", "wàng"],
        e: "(Fortune rises in the Year of the Snake)",
        zodiac: "蛇"
    },
    {
        c: ["蛇", "年", "安", "泰"],
        p: ["shé", "nián", "ān", "tài"],
        e: "(Peaceful Year of the Snake)",
        zodiac: "蛇"
    },

    {
        c: ["馬", "到", "成", "功"],
        p: ["mǎ", "dào", "chéng", "gōng"],
        e: "(Instant success)",
        zodiac: "馬"
    },
    {
        c: ["萬", "馬", "奔", "騰"],
        p: ["wàn", "mǎ", "bēn", "téng"],
        e: "(Ten thousand horses galloping)",
        zodiac: "馬"
    },
    {
        c: ["駿", "馬", "迎", "春"],
        p: ["jùn", "mǎ", "yíng", "chūn"],
        e: "(Fine horse welcomes spring)",
        zodiac: "馬"
    },
    {
        c: ["馬", "年", "大", "吉"],
        p: ["mǎ", "nián", "dà", "jí"],
        e: "(Great luck in the Year of the Horse)",
        zodiac: "馬"
    },
    {
        c: ["馬", "運", "亨", "通"],
        p: ["mǎ", "yùn", "hēng", "tōng"],
        e: "(Smooth fortune in the Year of the Horse)",
        zodiac: "馬"
    },
    {
        c: ["羊", "年", "如", "意"],
        p: ["yáng", "nián", "rú", "yì"],
        e: "(Harmonious Year of the Goat)",
        zodiac: "羊"
    },
    {
        c: ["三", "羊", "開", "泰"],
        p: ["sān", "yáng", "kāi", "tài"],
        e: "(Three goats bring prosperity)",
        zodiac: "羊"
    },
    {
        c: ["祥", "羊", "獻", "瑞"],
        p: ["xiáng", "yáng", "xiàn", "ruì"],
        e: "(Auspicious goat brings blessings)",
        zodiac: "羊"
    },
    {
        c: ["羊", "年", "大", "喜"],
        p: ["yáng", "nián", "dà", "xǐ"],
        e: "(Joyful Year of the Goat)",
        zodiac: "羊"
    },
    {
        c: ["羊", "年", "安", "康"],
        p: ["yáng", "nián", "ān", "kāng"],
        e: "(Healthy Year of the Goat)",
        zodiac: "羊"
    },
    {
        c: ["猴", "年", "大", "吉"],
        p: ["hóu", "nián", "dà", "jí"],
        e: "(Lucky Year of the Monkey)",
        zodiac: "猴"
    },
    {
        c: ["靈", "猴", "獻", "瑞"],
        p: ["líng", "hóu", "xiàn", "ruì"],
        e: "(Smart monkey brings blessings)",
        zodiac: "猴"
    },
    {
        c: ["猴", "來", "運", "轉"],
        p: ["hóu", "lái", "yùn", "zhuǎn"],
        e: "(Fortune turns in the Year of the Monkey)",
        zodiac: "猴"
    },
    {
        c: ["金", "猴", "迎", "春"],
        p: ["jīn", "hóu", "yíng", "chūn"],
        e: "(Golden monkey welcomes spring)",
        zodiac: "猴"
    },
    {
        c: ["猴", "年", "順", "心"],
        p: ["hóu", "nián", "shùn", "xīn"],
        e: "(Smooth Year of the Monkey)",
        zodiac: "猴"
    },
    {
        c: ["雞", "祥", "如", "意"],
        p: ["jī", "xiáng", "rú", "yì"],
        e: "(Auspicious Year of the Rooster)",
        zodiac: "雞"
    },
    {
        c: ["金", "雞", "報", "曉"],
        p: ["jīn", "jī", "bào", "xiǎo"],
        e: "(Golden rooster heralds dawn)",
        zodiac: "雞"
    },
    {
        c: ["雞", "年", "大", "吉"],
        p: ["jī", "nián", "dà", "jí"],
        e: "(Great luck in the Year of the Rooster)",
        zodiac: "雞"
    },
    {
        c: ["瑞", "雞", "迎", "春"],
        p: ["ruì", "jī", "yíng", "chūn"],
        e: "(Auspicious rooster welcomes spring)",
        zodiac: "雞"
    },
    {
        c: ["雞", "年", "興", "旺"],
        p: ["jī", "nián", "xīng", "wàng"],
        e: "(Prosperous Year of the Rooster)",
        zodiac: "雞"
    },
    {
        c: ["狗", "年", "安", "康"],
        p: ["gǒu", "nián", "ān", "kāng"],
        e: "(Peaceful Year of the Dog)",
        zodiac: "狗"
    },
    {
        c: ["忠", "狗", "獻", "瑞"],
        p: ["zhōng", "gǒu", "xiàn", "ruì"],
        e: "(Loyal dog brings blessings)",
        zodiac: "狗"
    },
    {
        c: ["狗", "來", "富", "至"],
        p: ["gǒu", "lái", "fù", "zhì"],
        e: "(Wealth arrives in the Year of the Dog)",
        zodiac: "狗"
    },
    {
        c: ["瑞", "狗", "迎", "春"],
        p: ["ruì", "gǒu", "yíng", "chūn"],
        e: "(Auspicious dog welcomes spring)",
        zodiac: "狗"
    },
    {
        c: ["狗", "年", "大", "吉"],
        p: ["gǒu", "nián", "dà", "jí"],
        e: "(Great luck in the Year of the Dog)",
        zodiac: "狗"
    },
    {
        c: ["豬", "年", "發", "財"],
        p: ["zhū", "nián", "fā", "cái"],
        e: "(Prosperity in the Year of the Pig)",
        zodiac: "豬"
    },
    {
        c: ["金", "豬", "報", "喜"],
        p: ["jīn", "zhū", "bào", "xǐ"],
        e: "(Golden pig brings joy)",
        zodiac: "豬"
    },
    {
        c: ["豬", "年", "大", "旺"],
        p: ["zhū", "nián", "dà", "wàng"],
        e: "(Booming Year of the Pig)",
        zodiac: "豬"
    },
    {
        c: ["瑞", "豬", "迎", "春"],
        p: ["ruì", "zhū", "yíng", "chūn"],
        e: "(Auspicious pig welcomes spring)",
        zodiac: "豬"
    },
    {
        c: ["豬", "事", "順", "利"],
        p: ["zhū", "shì", "shùn", "lì"],
        e: "(Everything goes smoothly)",
        zodiac: "豬"
    }
];

const availablePhrases = phrases.filter(item => {
    if (!item.zodiac) return true;
    return item.zodiac === CURRENT_ZODIAC;
});

function renderPhrase() {
    const item = availablePhrases[
        Math.floor(Math.random() * availablePhrases.length)
    ];

    item.c.forEach((char, i) => chineses[i].textContent = char);
    item.p.forEach((py, i) => pinyins[i].textContent = py);
    phraseEnglish.textContent = item.e;
}

renderPhrase();
button.addEventListener("click", renderPhrase);