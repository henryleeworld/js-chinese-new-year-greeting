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
        c: ["鼠", "年", "大", "吉"],
        p: ["shǔ", "nián", "dà", "jí"],
        e: "(Good luck in the Year of the Rat)",
        zodiac: "鼠"
    },
    {
        c: ["牛", "年", "亨", "通"],
        p: ["niú", "nián", "hēng", "tōng"],
        e: "(Smooth success in the Year of the Ox)",
        zodiac: "牛"
    },
    {
        c: ["虎", "虎", "生", "威"],
        p: ["hǔ", "hǔ", "shēng", "wēi"],
        e: "(Power in the Year of the Tiger)",
        zodiac: "虎"
    },
    {
        c: ["兔", "年", "吉", "祥"],
        p: ["tù", "nián", "jí", "xiáng"],
        e: "(Peaceful Year of the Rabbit)",
        zodiac: "兔"
    },
    {
        c: ["龍", "年", "大", "發"],
        p: ["lóng", "nián", "dà", "fā"],
        e: "(Great fortune in the Year of the Dragon)",
        zodiac: "龍"
    },
    {
        c: ["蛇", "年", "順", "利"],
        p: ["shé", "nián", "shùn", "lì"],
        e: "(Smooth Year of the Snake)",
        zodiac: "蛇"
    },
    {
        c: ["馬", "到", "成", "功"],
        p: ["mǎ", "dào", "chéng", "gōng"],
        e: "(Instant success)",
        zodiac: "馬"
    },
    {
        c: ["羊", "年", "如", "意"],
        p: ["yáng", "nián", "rú", "yì"],
        e: "(Harmonious Year of the Goat)",
        zodiac: "羊"
    },
    {
        c: ["猴", "年", "大", "吉"],
        p: ["hóu", "nián", "dà", "jí"],
        e: "(Lucky Year of the Monkey)",
        zodiac: "猴"
    },
    {
        c: ["雞", "祥", "如", "意"],
        p: ["jī", "xiáng", "rú", "yì"],
        e: "(Auspicious Year of the Rooster)",
        zodiac: "雞"
    },
    {
        c: ["狗", "年", "安", "康"],
        p: ["gǒu", "nián", "ān", "kāng"],
        e: "(Peaceful Year of the Dog)",
        zodiac: "狗"
    },
    {
        c: ["豬", "年", "發", "財"],
        p: ["zhū", "nián", "fā", "cái"],
        e: "(Prosperity in the Year of the Pig)",
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