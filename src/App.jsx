import { useState, useEffect } from "react";

// ── HSK1 CHARACTERS ──────────────────────────────────────────────────────────
const hsk1Cards = [
  { char: "爱", pinyin: "ài", meaning: "love; to love" },
  { char: "八", pinyin: "bā", meaning: "eight" },
  { char: "爸爸", pinyin: "bàba", meaning: "dad; father" },
  { char: "杯子", pinyin: "bēizi", meaning: "cup; glass" },
  { char: "北京", pinyin: "Běijīng", meaning: "Beijing" },
  { char: "本", pinyin: "běn", meaning: "measure word for books" },
  { char: "不", pinyin: "bù", meaning: "not; no" },
  { char: "不客气", pinyin: "bù kèqi", meaning: "you're welcome" },
  { char: "菜", pinyin: "cài", meaning: "dish; vegetable" },
  { char: "茶", pinyin: "chá", meaning: "tea" },
  { char: "吃", pinyin: "chī", meaning: "to eat" },
  { char: "出租车", pinyin: "chūzūchē", meaning: "taxi" },
  { char: "打电话", pinyin: "dǎ diànhuà", meaning: "to make a phone call" },
  { char: "大", pinyin: "dà", meaning: "big; large" },
  { char: "的", pinyin: "de", meaning: "possessive particle" },
  { char: "点", pinyin: "diǎn", meaning: "o'clock; point" },
  { char: "电脑", pinyin: "diànnǎo", meaning: "computer" },
  { char: "电视", pinyin: "diànshì", meaning: "television" },
  { char: "电影", pinyin: "diànyǐng", meaning: "movie; film" },
  { char: "东西", pinyin: "dōngxi", meaning: "thing; stuff" },
  { char: "都", pinyin: "dōu", meaning: "all; both" },
  { char: "读", pinyin: "dú", meaning: "to read; to study" },
  { char: "对不起", pinyin: "duìbuqǐ", meaning: "sorry; excuse me" },
  { char: "多", pinyin: "duō", meaning: "many; much; more" },
  { char: "多少", pinyin: "duōshǎo", meaning: "how many; how much" },
  { char: "儿子", pinyin: "érzi", meaning: "son" },
  { char: "二", pinyin: "èr", meaning: "two" },
  { char: "饭店", pinyin: "fàndiàn", meaning: "hotel; restaurant" },
  { char: "飞机", pinyin: "fēijī", meaning: "airplane" },
  { char: "分钟", pinyin: "fēnzhōng", meaning: "minute" },
  { char: "高兴", pinyin: "gāoxìng", meaning: "happy; glad" },
  { char: "个", pinyin: "gè", meaning: "general measure word" },
  { char: "工作", pinyin: "gōngzuò", meaning: "work; job" },
  { char: "狗", pinyin: "gǒu", meaning: "dog" },
  { char: "汉语", pinyin: "Hànyǔ", meaning: "Chinese language" },
  { char: "好", pinyin: "hǎo", meaning: "good; well" },
  { char: "号", pinyin: "hào", meaning: "number; date" },
  { char: "喝", pinyin: "hē", meaning: "to drink" },
  { char: "和", pinyin: "hé", meaning: "and; with" },
  { char: "很", pinyin: "hěn", meaning: "very; quite" },
  { char: "后面", pinyin: "hòumiàn", meaning: "behind; at the back" },
  { char: "回", pinyin: "huí", meaning: "to return; to go back" },
  { char: "会", pinyin: "huì", meaning: "can; to be able to" },
  { char: "几", pinyin: "jǐ", meaning: "how many; several" },
  { char: "家", pinyin: "jiā", meaning: "home; family" },
  { char: "叫", pinyin: "jiào", meaning: "to be called; to call" },
  { char: "今天", pinyin: "jīntiān", meaning: "today" },
  { char: "九", pinyin: "jiǔ", meaning: "nine" },
  { char: "开", pinyin: "kāi", meaning: "to open; to drive" },
  { char: "看", pinyin: "kàn", meaning: "to look; to watch; to read" },
  { char: "看见", pinyin: "kànjiàn", meaning: "to see; to catch sight of" },
  { char: "块", pinyin: "kuài", meaning: "yuan (money); piece" },
  { char: "来", pinyin: "lái", meaning: "to come" },
  { char: "老师", pinyin: "lǎoshī", meaning: "teacher" },
  { char: "了", pinyin: "le", meaning: "completed action particle" },
  { char: "冷", pinyin: "lěng", meaning: "cold" },
  { char: "里", pinyin: "lǐ", meaning: "inside; within" },
  { char: "六", pinyin: "liù", meaning: "six" },
  { char: "妈妈", pinyin: "māma", meaning: "mom; mother" },
  { char: "买", pinyin: "mǎi", meaning: "to buy" },
  { char: "猫", pinyin: "māo", meaning: "cat" },
  { char: "没关系", pinyin: "méi guānxi", meaning: "it doesn't matter; never mind" },
  { char: "没有", pinyin: "méiyǒu", meaning: "don't have; there is not" },
  { char: "米饭", pinyin: "mǐfàn", meaning: "cooked rice" },
  { char: "明天", pinyin: "míngtiān", meaning: "tomorrow" },
  { char: "名字", pinyin: "míngzi", meaning: "name" },
  { char: "哪", pinyin: "nǎ", meaning: "which" },
  { char: "哪儿", pinyin: "nǎr", meaning: "where" },
  { char: "那", pinyin: "nà", meaning: "that" },
  { char: "呢", pinyin: "ne", meaning: "question particle" },
  { char: "能", pinyin: "néng", meaning: "can; to be able to" },
  { char: "你", pinyin: "nǐ", meaning: "you" },
  { char: "你好", pinyin: "nǐ hǎo", meaning: "hello" },
  { char: "年", pinyin: "nián", meaning: "year" },
  { char: "女儿", pinyin: "nǚér", meaning: "daughter" },
  { char: "朋友", pinyin: "péngyou", meaning: "friend" },
  { char: "漂亮", pinyin: "piàoliang", meaning: "beautiful; pretty" },
  { char: "苹果", pinyin: "píngguǒ", meaning: "apple" },
  { char: "七", pinyin: "qī", meaning: "seven" },
  { char: "钱", pinyin: "qián", meaning: "money" },
  { char: "前面", pinyin: "qiánmiàn", meaning: "in front; ahead" },
  { char: "请", pinyin: "qǐng", meaning: "please; to invite" },
  { char: "去", pinyin: "qù", meaning: "to go" },
  { char: "热", pinyin: "rè", meaning: "hot" },
  { char: "人", pinyin: "rén", meaning: "person; people" },
  { char: "认识", pinyin: "rènshi", meaning: "to know; to recognize" },
  { char: "日", pinyin: "rì", meaning: "day; sun" },
  { char: "三", pinyin: "sān", meaning: "three" },
  { char: "商店", pinyin: "shāngdiàn", meaning: "shop; store" },
  { char: "上", pinyin: "shàng", meaning: "up; above; on" },
  { char: "上午", pinyin: "shàngwǔ", meaning: "morning; AM" },
  { char: "少", pinyin: "shǎo", meaning: "few; little; less" },
  { char: "谁", pinyin: "shéi", meaning: "who" },
  { char: "什么", pinyin: "shénme", meaning: "what" },
  { char: "十", pinyin: "shí", meaning: "ten" },
  { char: "时候", pinyin: "shíhou", meaning: "time; moment; when" },
  { char: "是", pinyin: "shì", meaning: "to be; is; am; are" },
  { char: "书", pinyin: "shū", meaning: "book" },
  { char: "水", pinyin: "shuǐ", meaning: "water" },
  { char: "水果", pinyin: "shuǐguǒ", meaning: "fruit" },
  { char: "睡觉", pinyin: "shuìjiào", meaning: "to sleep" },
  { char: "说", pinyin: "shuō", meaning: "to say; to speak" },
  { char: "四", pinyin: "sì", meaning: "four" },
  { char: "岁", pinyin: "suì", meaning: "years old; age" },
  { char: "他", pinyin: "tā", meaning: "he; him" },
  { char: "她", pinyin: "tā", meaning: "she; her" },
  { char: "太", pinyin: "tài", meaning: "too; extremely" },
  { char: "天气", pinyin: "tiānqì", meaning: "weather" },
  { char: "听", pinyin: "tīng", meaning: "to listen; to hear" },
  { char: "同学", pinyin: "tóngxué", meaning: "classmate" },
  { char: "喂", pinyin: "wèi", meaning: "hello (on phone); hey" },
  { char: "我", pinyin: "wǒ", meaning: "I; me" },
  { char: "我们", pinyin: "wǒmen", meaning: "we; us" },
  { char: "五", pinyin: "wǔ", meaning: "five" },
  { char: "下", pinyin: "xià", meaning: "down; below; under; next" },
  { char: "下午", pinyin: "xiàwǔ", meaning: "afternoon; PM" },
  { char: "下雨", pinyin: "xià yǔ", meaning: "to rain" },
  { char: "先生", pinyin: "xiānsheng", meaning: "Mr.; sir; husband" },
  { char: "现在", pinyin: "xiànzài", meaning: "now; currently" },
  { char: "想", pinyin: "xiǎng", meaning: "to want; to think; to miss" },
  { char: "小", pinyin: "xiǎo", meaning: "small; little" },
  { char: "小姐", pinyin: "xiǎojiě", meaning: "Miss; young lady" },
  { char: "写", pinyin: "xiě", meaning: "to write" },
  { char: "谢谢", pinyin: "xièxie", meaning: "thank you" },
  { char: "星期", pinyin: "xīngqī", meaning: "week; weekday" },
  { char: "学生", pinyin: "xuésheng", meaning: "student" },
  { char: "学习", pinyin: "xuéxí", meaning: "to study; to learn" },
  { char: "学校", pinyin: "xuéxiào", meaning: "school" },
  { char: "一", pinyin: "yī", meaning: "one" },
  { char: "一些", pinyin: "yīxiē", meaning: "some; a few" },
  { char: "衣服", pinyin: "yīfu", meaning: "clothes; clothing" },
  { char: "医生", pinyin: "yīshēng", meaning: "doctor; physician" },
  { char: "医院", pinyin: "yīyuàn", meaning: "hospital" },
  { char: "椅子", pinyin: "yǐzi", meaning: "chair" },
  { char: "有", pinyin: "yǒu", meaning: "to have; there is/are" },
  { char: "月", pinyin: "yuè", meaning: "month; moon" },
  { char: "再见", pinyin: "zàijiàn", meaning: "goodbye; see you" },
  { char: "在", pinyin: "zài", meaning: "at; in; on; to be" },
  { char: "怎么", pinyin: "zěnme", meaning: "how; why" },
  { char: "怎么样", pinyin: "zěnmeyàng", meaning: "how is it? what about?" },
  { char: "这", pinyin: "zhè", meaning: "this" },
  { char: "中国", pinyin: "Zhōngguó", meaning: "China" },
  { char: "中午", pinyin: "zhōngwǔ", meaning: "noon; midday" },
  { char: "住", pinyin: "zhù", meaning: "to live; to stay" },
  { char: "字", pinyin: "zì", meaning: "character; word" },
  { char: "走", pinyin: "zǒu", meaning: "to walk; to go; to leave" },
  { char: "坐", pinyin: "zuò", meaning: "to sit; to travel by" },
  { char: "做", pinyin: "zuò", meaning: "to do; to make" },
  { char: "左边", pinyin: "zuǒbiān", meaning: "left side" },
  { char: "右边", pinyin: "yòubiān", meaning: "right side" },
  { char: "上边", pinyin: "shàngbiān", meaning: "upper side; above" },
  { char: "下边", pinyin: "xiàbiān", meaning: "lower side; below" },
  { char: "旁边", pinyin: "pángbiān", meaning: "beside; next to" },
  { char: "百", pinyin: "bǎi", meaning: "hundred" },
  { char: "零", pinyin: "líng", meaning: "zero" },
  { char: "两", pinyin: "liǎng", meaning: "two (of something)" },
  { char: "半", pinyin: "bàn", meaning: "half" },
];

// ── CONVERSATION DATA ─────────────────────────────────────────────────────────
const CONV_TOPICS = [
  {
    id: "essentials", category: "Essentials", emoji: "⭐",
    sentences: [
      { zh: "你好！", pinyin: "Nǐ hǎo!", meaning: "Hello!" },
      { zh: "谢谢你。", pinyin: "Xièxie nǐ.", meaning: "Thank you." },
      { zh: "不客气。", pinyin: "Bù kèqi.", meaning: "You're welcome." },
      { zh: "对不起。", pinyin: "Duìbuqǐ.", meaning: "Sorry." },
      { zh: "没关系。", pinyin: "Méi guānxi.", meaning: "It's okay / No problem." },
      { zh: "请问…", pinyin: "Qǐngwèn…", meaning: "Excuse me, may I ask…" },
      { zh: "我不明白。", pinyin: "Wǒ bù míngbái.", meaning: "I don't understand." },
      { zh: "请再说一遍。", pinyin: "Qǐng zài shuō yī biàn.", meaning: "Please say it again." },
      { zh: "慢一点。", pinyin: "Màn yīdiǎn.", meaning: "Slower please." },
      { zh: "你会说英语吗？", pinyin: "Nǐ huì shuō Yīngyǔ ma?", meaning: "Can you speak English?" },
      { zh: "我的中文不好。", pinyin: "Wǒ de Zhōngwén bù hǎo.", meaning: "My Chinese is not good." },
      { zh: "好的。", pinyin: "Hǎo de.", meaning: "Okay / Alright." },
    ]
  },
  {
    id: "introductions", category: "Introductions", emoji: "👋",
    sentences: [
      { zh: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", meaning: "What is your name?" },
      { zh: "我叫…", pinyin: "Wǒ jiào…", meaning: "My name is…" },
      { zh: "你是哪里人？", pinyin: "Nǐ shì nǎlǐ rén?", meaning: "Where are you from?" },
      { zh: "我是马来西亚人。", pinyin: "Wǒ shì Mǎláixīyà rén.", meaning: "I am Malaysian." },
      { zh: "你多大了？", pinyin: "Nǐ duō dà le?", meaning: "How old are you?" },
      { zh: "我今年…岁。", pinyin: "Wǒ jīnnián… suì.", meaning: "I am … years old this year." },
      { zh: "你做什么工作？", pinyin: "Nǐ zuò shénme gōngzuò?", meaning: "What do you do for work?" },
      { zh: "我是学生。", pinyin: "Wǒ shì xuésheng.", meaning: "I am a student." },
      { zh: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", meaning: "Nice to meet you." },
      { zh: "我们加个微信吧。", pinyin: "Wǒmen jiā gè Wēixìn ba.", meaning: "Let's add each other on WeChat." },
      { zh: "你住在哪里？", pinyin: "Nǐ zhù zài nǎlǐ?", meaning: "Where do you live?" },
    ]
  },
  {
    id: "numbers", category: "Numbers / Money / Time", emoji: "🔢",
    sentences: [
      { zh: "多少钱？", pinyin: "Duōshǎo qián?", meaning: "How much does it cost?" },
      { zh: "太贵了。", pinyin: "Tài guì le.", meaning: "Too expensive." },
      { zh: "便宜一点可以吗？", pinyin: "Piányí yīdiǎn kěyǐ ma?", meaning: "Can you make it cheaper?" },
      { zh: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", meaning: "What time is it now?" },
      { zh: "我们几点见面？", pinyin: "Wǒmen jǐ diǎn jiànmiàn?", meaning: "What time shall we meet?" },
      { zh: "今天是几号？", pinyin: "Jīntiān shì jǐ hào?", meaning: "What is today's date?" },
      { zh: "请给我收据。", pinyin: "Qǐng gěi wǒ shōujù.", meaning: "Please give me a receipt." },
      { zh: "我用电子支付。", pinyin: "Wǒ yòng diànzǐ zhīfù.", meaning: "I'll pay by e-payment." },
      { zh: "可以刷卡吗？", pinyin: "Kěyǐ shuā kǎ ma?", meaning: "Can I pay by card?" },
      { zh: "找一下零钱。", pinyin: "Zhǎo yīxià língqián.", meaning: "Give me change please." },
      { zh: "打折吗？", pinyin: "Dǎzhé ma?", meaning: "Is there a discount?" },
    ]
  },
  {
    id: "smalltalk", category: "Daily Small Talk", emoji: "💬",
    sentences: [
      { zh: "最近怎么样？", pinyin: "Zuìjìn zěnmeyàng?", meaning: "How have you been lately?" },
      { zh: "还好，谢谢。", pinyin: "Hái hǎo, xièxie.", meaning: "Not bad, thanks." },
      { zh: "天气真热啊！", pinyin: "Tiānqì zhēn rè a!", meaning: "The weather is so hot!" },
      { zh: "你吃饭了吗？", pinyin: "Nǐ chī fàn le ma?", meaning: "Have you eaten?" },
      { zh: "吃了，你呢？", pinyin: "Chī le, nǐ ne?", meaning: "Yes I have, and you?" },
      { zh: "你去哪里？", pinyin: "Nǐ qù nǎlǐ?", meaning: "Where are you going?" },
      { zh: "你现在忙吗？", pinyin: "Nǐ xiànzài máng ma?", meaning: "Are you busy now?" },
      { zh: "今天好累哦。", pinyin: "Jīntiān hǎo lèi ō.", meaning: "I'm so tired today." },
      { zh: "周末有什么计划？", pinyin: "Zhōumò yǒu shénme jìhuà?", meaning: "Any plans for the weekend?" },
      { zh: "一起去吃东西吧！", pinyin: "Yīqǐ qù chī dōngxi ba!", meaning: "Let's go eat together!" },
      { zh: "下次再见！", pinyin: "Xià cì zàijiàn!", meaning: "See you next time!" },
    ]
  },
  {
    id: "food", category: "Food (General)", emoji: "🍜",
    sentences: [
      { zh: "你喜欢吃什么？", pinyin: "Nǐ xǐhuān chī shénme?", meaning: "What do you like to eat?" },
      { zh: "我不吃猪肉。", pinyin: "Wǒ bù chī zhūròu.", meaning: "I don't eat pork." },
      { zh: "我吃素。", pinyin: "Wǒ chī sù.", meaning: "I'm vegetarian." },
      { zh: "有没有辣？", pinyin: "Yǒu méiyǒu là?", meaning: "Is it spicy?" },
      { zh: "不要辣。", pinyin: "Bùyào là.", meaning: "No spice please." },
      { zh: "这个很好吃！", pinyin: "Zhège hěn hǎochī!", meaning: "This is delicious!" },
      { zh: "我对花生过敏。", pinyin: "Wǒ duì huāshēng guòmǐn.", meaning: "I'm allergic to peanuts." },
      { zh: "打包可以吗？", pinyin: "Dǎbāo kěyǐ ma?", meaning: "Can I take away?" },
      { zh: "多加一碗饭。", pinyin: "Duō jiā yī wǎn fàn.", meaning: "Add another bowl of rice." },
      { zh: "喝什么好？", pinyin: "Hē shénme hǎo?", meaning: "What's good to drink?" },
      { zh: "冰的还是热的？", pinyin: "Bīng de háishì rè de?", meaning: "Iced or hot?" },
    ]
  },
  {
    id: "restaurant", category: "Order at Restaurant", emoji: "🍽️",
    sentences: [
      { zh: "几位？", pinyin: "Jǐ wèi?", meaning: "How many people?" },
      { zh: "两个人。", pinyin: "Liǎng gè rén.", meaning: "Two people." },
      { zh: "请给我菜单。", pinyin: "Qǐng gěi wǒ càidān.", meaning: "Please give me the menu." },
      { zh: "我要点菜。", pinyin: "Wǒ yào diǎn cài.", meaning: "I'd like to order." },
      { zh: "这个怎么做？", pinyin: "Zhège zěnme zuò?", meaning: "How is this dish made?" },
      { zh: "有什么推荐？", pinyin: "Yǒu shénme tuījiàn?", meaning: "What do you recommend?" },
      { zh: "要等多久？", pinyin: "Yào děng duōjiǔ?", meaning: "How long is the wait?" },
      { zh: "可以分开付吗？", pinyin: "Kěyǐ fēnkāi fù ma?", meaning: "Can we pay separately?" },
      { zh: "买单！", pinyin: "Mǎidān!", meaning: "Bill please!" },
      { zh: "收据给我。", pinyin: "Shōujù gěi wǒ.", meaning: "Give me the receipt." },
      { zh: "这道菜还没来。", pinyin: "Zhè dào cài hái méi lái.", meaning: "This dish hasn't arrived yet." },
    ]
  },
  {
    id: "coffeeshop", category: "Coffee Shop / Mamak / Hawker", emoji: "☕",
    sentences: [
      { zh: "老板，过来一下！", pinyin: "Lǎobǎn, guòlái yīxià!", meaning: "Boss, come here a moment!" },
      { zh: "要什么？", pinyin: "Yào shénme?", meaning: "What do you want?" },
      { zh: "一杯白咖啡。", pinyin: "Yī bēi bái kāfēi.", meaning: "One white coffee." },
      { zh: "少甜，多冰。", pinyin: "Shǎo tián, duō bīng.", meaning: "Less sweet, more ice." },
      { zh: "拉茶一杯。", pinyin: "Lā chá yī bēi.", meaning: "One teh tarik." },
      { zh: "我要炒饭，少油。", pinyin: "Wǒ yào chǎofàn, shǎo yóu.", meaning: "I want fried rice, less oil." },
      { zh: "这里坐还是打包？", pinyin: "Zhèlǐ zuò háishì dǎbāo?", meaning: "Dine in or takeaway?" },
      { zh: "加辣还是不加？", pinyin: "Jiā là háishì bù jiā?", meaning: "With or without chili?" },
      { zh: "多少钱？", pinyin: "Duōshǎo qián?", meaning: "How much?" },
      { zh: "扫码付钱。", pinyin: "Sǎo mǎ fù qián.", meaning: "Scan QR to pay." },
      { zh: "好了没有？", pinyin: "Hǎo le méiyǒu?", meaning: "Is it ready?" },
      { zh: "等一下啊！", pinyin: "Děng yīxià a!", meaning: "Wait a moment!" },
    ]
  },
  {
    id: "delivery", category: "Food Delivery / Online Order", emoji: "🛵",
    sentences: [
      { zh: "我要下单。", pinyin: "Wǒ yào xià dān.", meaning: "I want to place an order." },
      { zh: "外卖要多久到？", pinyin: "Wàimài yào duōjiǔ dào?", meaning: "How long for the delivery?" },
      { zh: "在路上了吗？", pinyin: "Zài lùshang le ma?", meaning: "Are you on the way?" },
      { zh: "我在…等你。", pinyin: "Wǒ zài… děng nǐ.", meaning: "I'm waiting at…" },
      { zh: "请放在门口。", pinyin: "Qǐng fàng zài ménkǒu.", meaning: "Please leave it at the door." },
      { zh: "可以联系我吗？", pinyin: "Kěyǐ liánxì wǒ ma?", meaning: "Can you contact me?" },
      { zh: "我的订单还没到。", pinyin: "Wǒ de dìngdān hái méi dào.", meaning: "My order hasn't arrived." },
      { zh: "东西少了一样。", pinyin: "Dōngxi shǎo le yī yàng.", meaning: "One item is missing." },
      { zh: "申请退款。", pinyin: "Shēnqǐng tuìkuǎn.", meaning: "I want to request a refund." },
      { zh: "请帮我取消订单。", pinyin: "Qǐng bāng wǒ qǔxiāo dìngdān.", meaning: "Please help me cancel the order." },
      { zh: "我已经付款了。", pinyin: "Wǒ yǐjīng fù kuǎn le.", meaning: "I have already paid." },
    ]
  },
  {
    id: "complaint", category: "Complaint / Wrong Order", emoji: "😤",
    sentences: [
      { zh: "这不是我点的。", pinyin: "Zhè bù shì wǒ diǎn de.", meaning: "This is not what I ordered." },
      { zh: "我点的是…", pinyin: "Wǒ diǎn de shì…", meaning: "I ordered…" },
      { zh: "这个不新鲜。", pinyin: "Zhège bù xīnxiān.", meaning: "This is not fresh." },
      { zh: "里面有头发。", pinyin: "Lǐmiàn yǒu tóufa.", meaning: "There is a hair inside." },
      { zh: "可以换一个吗？", pinyin: "Kěyǐ huàn yī gè ma?", meaning: "Can I swap this?" },
      { zh: "我要退款。", pinyin: "Wǒ yào tuìkuǎn.", meaning: "I want a refund." },
      { zh: "请叫你的经理来。", pinyin: "Qǐng jiào nǐ de jīnglǐ lái.", meaning: "Please call your manager." },
      { zh: "我等了很久了。", pinyin: "Wǒ děng le hěn jiǔ le.", meaning: "I have been waiting for a long time." },
      { zh: "价格不对。", pinyin: "Jiàgé bù duì.", meaning: "The price is wrong." },
      { zh: "我要投诉。", pinyin: "Wǒ yào tóusù.", meaning: "I want to make a complaint." },
    ]
  },
  {
    id: "buystore", category: "Shopping (Buy in Store)", emoji: "🛍️",
    sentences: [
      { zh: "有没有…？", pinyin: "Yǒu méiyǒu…?", meaning: "Do you have…?" },
      { zh: "我可以试穿吗？", pinyin: "Wǒ kěyǐ shì chuān ma?", meaning: "Can I try it on?" },
      { zh: "有没有大一点的？", pinyin: "Yǒu méiyǒu dà yīdiǎn de?", meaning: "Do you have a bigger size?" },
      { zh: "有没有其他颜色？", pinyin: "Yǒu méiyǒu qítā yánsè?", meaning: "Do you have other colours?" },
      { zh: "这个多少钱？", pinyin: "Zhège duōshǎo qián?", meaning: "How much is this?" },
      { zh: "可以打折吗？", pinyin: "Kěyǐ dǎzhé ma?", meaning: "Can you give a discount?" },
      { zh: "我买两个。", pinyin: "Wǒ mǎi liǎng gè.", meaning: "I'll buy two." },
      { zh: "可以退换吗？", pinyin: "Kěyǐ tuìhuàn ma?", meaning: "Can I return or exchange this?" },
      { zh: "有保修吗？", pinyin: "Yǒu bǎoxiū ma?", meaning: "Is there a warranty?" },
      { zh: "帮我包装一下。", pinyin: "Bāng wǒ bāozhuāng yīxià.", meaning: "Please wrap it for me." },
    ]
  },
  {
    id: "bargain", category: "Bargain Price", emoji: "🤝",
    sentences: [
      { zh: "太贵了，便宜一点。", pinyin: "Tài guì le, piányí yīdiǎn.", meaning: "Too expensive, make it cheaper." },
      { zh: "最低多少？", pinyin: "Zuìdī duōshǎo?", meaning: "What is the lowest price?" },
      { zh: "我买多个，可以优惠吗？", pinyin: "Wǒ mǎi duō gè, kěyǐ yōuhuì ma?", meaning: "I'm buying many, can you give a discount?" },
      { zh: "别家卖更便宜。", pinyin: "Bié jiā mài gèng piányí.", meaning: "Other shops sell it cheaper." },
      { zh: "我是老顾客。", pinyin: "Wǒ shì lǎo gùkè.", meaning: "I am a regular customer." },
      { zh: "再便宜一点我就买。", pinyin: "Zài piányí yīdiǎn wǒ jiù mǎi.", meaning: "A little cheaper and I'll buy it." },
      { zh: "成交！", pinyin: "Chéngjiao!", meaning: "Deal!" },
      { zh: "这个价格不行。", pinyin: "Zhège jiàgé bù xíng.", meaning: "This price doesn't work for me." },
      { zh: "算了，不买了。", pinyin: "Suànle, bù mǎi le.", meaning: "Forget it, I won't buy." },
      { zh: "好吧，就这个价。", pinyin: "Hǎo ba, jiù zhège jià.", meaning: "Okay, this price then." },
    ]
  },
  {
    id: "onlineshopping", category: "Online Shopping Chat", emoji: "📦",
    sentences: [
      { zh: "还有货吗？", pinyin: "Hái yǒu huò ma?", meaning: "Is it still in stock?" },
      { zh: "有没有其他款式？", pinyin: "Yǒu méiyǒu qítā kuǎnshì?", meaning: "Do you have other styles?" },
      { zh: "什么时候发货？", pinyin: "Shénme shíhòu fā huò?", meaning: "When will you ship it?" },
      { zh: "可以用什么快递？", pinyin: "Kěyǐ yòng shénme kuàidì?", meaning: "What courier do you use?" },
      { zh: "可以便宜一点吗？", pinyin: "Kěyǐ piányí yīdiǎn ma?", meaning: "Can you lower the price?" },
      { zh: "我要下单了。", pinyin: "Wǒ yào xià dān le.", meaning: "I'm placing the order now." },
      { zh: "已经付款，请确认。", pinyin: "Yǐjīng fù kuǎn, qǐng quèrèn.", meaning: "I've paid, please confirm." },
      { zh: "货到了但是坏的。", pinyin: "Huò dào le dànshì huài de.", meaning: "Item arrived but it's damaged." },
      { zh: "请给我退款。", pinyin: "Qǐng gěi wǒ tuìkuǎn.", meaning: "Please refund me." },
      { zh: "好评！谢谢老板！", pinyin: "Hǎo píng! Xièxie lǎobǎn!", meaning: "5 stars! Thanks boss!" },
    ]
  },
  {
    id: "directions", category: "Ask Directions", emoji: "🗺️",
    sentences: [
      { zh: "请问，…怎么走？", pinyin: "Qǐngwèn, … zěnme zǒu?", meaning: "Excuse me, how do I get to…?" },
      { zh: "这里离…远吗？", pinyin: "Zhèlǐ lí… yuǎn ma?", meaning: "Is … far from here?" },
      { zh: "往左走。", pinyin: "Wǎng zuǒ zǒu.", meaning: "Turn left." },
      { zh: "往右走。", pinyin: "Wǎng yòu zǒu.", meaning: "Turn right." },
      { zh: "直走。", pinyin: "Zhí zǒu.", meaning: "Go straight." },
      { zh: "在那个路口转弯。", pinyin: "Zài nàge lùkǒu zhuǎnwān.", meaning: "Turn at that junction." },
      { zh: "走路要多久？", pinyin: "Zǒulù yào duōjiǔ?", meaning: "How long does it take to walk?" },
      { zh: "我迷路了。", pinyin: "Wǒ mí lù le.", meaning: "I am lost." },
      { zh: "可以帮我看地图吗？", pinyin: "Kěyǐ bāng wǒ kàn dìtú ma?", meaning: "Can you help me look at the map?" },
      { zh: "最近的地铁站在哪里？", pinyin: "Zuìjìn de dìtiě zhàn zài nǎlǐ?", meaning: "Where is the nearest MRT station?" },
    ]
  },
  {
    id: "grabtaxi", category: "Grab / Taxi", emoji: "🚗",
    sentences: [
      { zh: "我叫了一辆Grab。", pinyin: "Wǒ jiào le yī liàng Grab.", meaning: "I've booked a Grab." },
      { zh: "司机在哪里？", pinyin: "Sījī zài nǎlǐ?", meaning: "Where is the driver?" },
      { zh: "我在…等你。", pinyin: "Wǒ zài… děng nǐ.", meaning: "I'm waiting at…" },
      { zh: "请去…", pinyin: "Qǐng qù…", meaning: "Please go to…" },
      { zh: "走高速路还是普通路？", pinyin: "Zǒu gāosùlù háishì pǔtōng lù?", meaning: "Take highway or normal road?" },
      { zh: "大概多久到？", pinyin: "Dàgài duōjiǔ dào?", meaning: "About how long to arrive?" },
      { zh: "在这里停一下。", pinyin: "Zài zhèlǐ tíng yīxià.", meaning: "Stop here please." },
      { zh: "我用电子支付。", pinyin: "Wǒ yòng diànzǐ zhīfù.", meaning: "I'll pay by e-wallet." },
      { zh: "可以帮我放行李吗？", pinyin: "Kěyǐ bāng wǒ fàng xíngli ma?", meaning: "Can you help with my luggage?" },
      { zh: "谢谢！慢走。", pinyin: "Xièxie! Màn zǒu.", meaning: "Thank you! Drive safe." },
    ]
  },
  {
    id: "airport", category: "Airport / Immigration", emoji: "✈️",
    sentences: [
      { zh: "我来旅游的。", pinyin: "Wǒ lái lǚyóu de.", meaning: "I'm here for tourism." },
      { zh: "我住在…酒店。", pinyin: "Wǒ zhù zài… jiǔdiàn.", meaning: "I'm staying at … hotel." },
      { zh: "我住…天。", pinyin: "Wǒ zhù… tiān.", meaning: "I'm staying for … days." },
      { zh: "我的护照在这里。", pinyin: "Wǒ de hùzhào zài zhèlǐ.", meaning: "My passport is here." },
      { zh: "登机口在哪里？", pinyin: "Dēngjī kǒu zài nǎlǐ?", meaning: "Where is the boarding gate?" },
      { zh: "行李在哪里取？", pinyin: "Xíngli zài nǎlǐ qǔ?", meaning: "Where do I collect my luggage?" },
      { zh: "我的行李丢了。", pinyin: "Wǒ de xíngli diū le.", meaning: "My luggage is lost." },
      { zh: "有没有免税店？", pinyin: "Yǒu méiyǒu miǎnshuì diàn?", meaning: "Is there a duty-free shop?" },
      { zh: "去市区怎么走？", pinyin: "Qù shìqū zěnme zǒu?", meaning: "How do I get to the city?" },
      { zh: "航班延误了。", pinyin: "Hángbān yánwù le.", meaning: "The flight is delayed." },
    ]
  },
  {
    id: "hotel", category: "Hotel Check-in", emoji: "🏨",
    sentences: [
      { zh: "我有预订。", pinyin: "Wǒ yǒu yùdìng.", meaning: "I have a reservation." },
      { zh: "我的名字是…", pinyin: "Wǒ de míngzi shì…", meaning: "My name is…" },
      { zh: "几点可以入住？", pinyin: "Jǐ diǎn kěyǐ rùzhù?", meaning: "What time can I check in?" },
      { zh: "几点退房？", pinyin: "Jǐ diǎn tuì fáng?", meaning: "What time is check-out?" },
      { zh: "房间里没有热水。", pinyin: "Fángjiān lǐ méiyǒu rè shuǐ.", meaning: "There's no hot water in the room." },
      { zh: "可以换一个房间吗？", pinyin: "Kěyǐ huàn yī gè fángjiān ma?", meaning: "Can I change rooms?" },
      { zh: "WiFi密码是什么？", pinyin: "WiFi mìmǎ shì shénme?", meaning: "What is the WiFi password?" },
      { zh: "早餐包括在内吗？", pinyin: "Zǎocān bāokuò zài nèi ma?", meaning: "Is breakfast included?" },
      { zh: "帮我叫出租车。", pinyin: "Bāng wǒ jiào chūzūchē.", meaning: "Please call a taxi for me." },
      { zh: "请勿打扰。", pinyin: "Qǐng wù dǎrǎo.", meaning: "Do not disturb." },
    ]
  },
  {
    id: "school", category: "School Conversation", emoji: "🏫",
    sentences: [
      { zh: "今天有几节课？", pinyin: "Jīntiān yǒu jǐ jié kè?", meaning: "How many classes today?" },
      { zh: "老师，我有问题。", pinyin: "Lǎoshī, wǒ yǒu wèntí.", meaning: "Teacher, I have a question." },
      { zh: "作业是什么？", pinyin: "Zuòyè shì shénme?", meaning: "What is the homework?" },
      { zh: "考试什么时候？", pinyin: "Kǎoshì shénme shíhòu?", meaning: "When is the exam?" },
      { zh: "我今天请假。", pinyin: "Wǒ jīntiān qǐngjià.", meaning: "I'm taking leave today." },
      { zh: "可以借我你的笔吗？", pinyin: "Kěyǐ jiè wǒ nǐ de bǐ ma?", meaning: "Can I borrow your pen?" },
      { zh: "这道题怎么做？", pinyin: "Zhè dào tí zěnme zuò?", meaning: "How do you solve this question?" },
      { zh: "你懂这个吗？", pinyin: "Nǐ dǒng zhège ma?", meaning: "Do you understand this?" },
      { zh: "我们一起复习吧。", pinyin: "Wǒmen yīqǐ fùxí ba.", meaning: "Let's study together." },
      { zh: "你考得怎么样？", pinyin: "Nǐ kǎo de zěnmeyàng?", meaning: "How did your exam go?" },
    ]
  },
  {
    id: "groupwork", category: "University Group Work", emoji: "👨‍💻",
    sentences: [
      { zh: "我们的截止日期是什么时候？", pinyin: "Wǒmen de jiézhǐ rìqī shì shénme shíhòu?", meaning: "What is our deadline?" },
      { zh: "你负责哪一部分？", pinyin: "Nǐ fùzé nǎ yī bùfèn?", meaning: "Which part are you responsible for?" },
      { zh: "我来做幻灯片。", pinyin: "Wǒ lái zuò huàndēngpiàn.", meaning: "I'll do the slides." },
      { zh: "我们开个会吧。", pinyin: "Wǒmen kāi gè huì ba.", meaning: "Let's have a meeting." },
      { zh: "你什么时候有空？", pinyin: "Nǐ shénme shíhòu yǒu kòng?", meaning: "When are you free?" },
      { zh: "这个部分你写好了吗？", pinyin: "Zhège bùfèn nǐ xiě hǎo le ma?", meaning: "Have you finished this section?" },
      { zh: "可以用中文写吗？", pinyin: "Kěyǐ yòng Zhōngwén xiě ma?", meaning: "Can we write in Chinese?" },
      { zh: "我们用群组聊天联系。", pinyin: "Wǒmen yòng qúnzǔ liáotiān liánxì.", meaning: "Let's keep in touch via group chat." },
      { zh: "报告提交了吗？", pinyin: "Bàogào tíjiāo le ma?", meaning: "Has the report been submitted?" },
      { zh: "我这边做完了。", pinyin: "Wǒ zhèbiān zuò wán le.", meaning: "My part is done." },
    ]
  },
  {
    id: "asklecturer", category: "Ask Lecturer / Teacher", emoji: "🎓",
    sentences: [
      { zh: "老师，这个我不懂。", pinyin: "Lǎoshī, zhège wǒ bù dǒng.", meaning: "Teacher, I don't understand this." },
      { zh: "可以再解释一遍吗？", pinyin: "Kěyǐ zài jiěshì yī biàn ma?", meaning: "Can you explain it again?" },
      { zh: "这会考吗？", pinyin: "Zhè huì kǎo ma?", meaning: "Will this come out in the exam?" },
      { zh: "老师，我可以迟交吗？", pinyin: "Lǎoshī, wǒ kěyǐ chí jiāo ma?", meaning: "Teacher, can I submit late?" },
      { zh: "我对这个课题很感兴趣。", pinyin: "Wǒ duì zhège kètí hěn gǎn xìngqù.", meaning: "I'm very interested in this topic." },
      { zh: "有没有参考资料？", pinyin: "Yǒu méiyǒu cānkǎo zīliào?", meaning: "Are there any reference materials?" },
      { zh: "老师你有空吗？", pinyin: "Lǎoshī nǐ yǒu kòng ma?", meaning: "Teacher, are you available?" },
      { zh: "我想约时间见面。", pinyin: "Wǒ xiǎng yuē shíjiān jiànmiàn.", meaning: "I'd like to make an appointment to meet." },
      { zh: "这次的成绩出来了吗？", pinyin: "Zhè cì de chéngjì chūlái le ma?", meaning: "Have the results come out yet?" },
      { zh: "谢谢老师的帮忙。", pinyin: "Xièxie lǎoshī de bāngmáng.", meaning: "Thank you for your help, teacher." },
    ]
  },
  {
    id: "colleagues", category: "Colleague Small Talk", emoji: "🏢",
    sentences: [
      { zh: "今天来早了！", pinyin: "Jīntiān lái zǎo le!", meaning: "You're early today!" },
      { zh: "你吃午饭了吗？", pinyin: "Nǐ chī wǔfàn le ma?", meaning: "Have you had lunch?" },
      { zh: "一起去吃饭吧。", pinyin: "Yīqǐ qù chī fàn ba.", meaning: "Let's go eat together." },
      { zh: "今天好忙啊。", pinyin: "Jīntiān hǎo máng a.", meaning: "So busy today." },
      { zh: "会议几点开始？", pinyin: "Huìyì jǐ diǎn kāishǐ?", meaning: "What time does the meeting start?" },
      { zh: "你知道这个怎么做吗？", pinyin: "Nǐ zhīdào zhège zěnme zuò ma?", meaning: "Do you know how to do this?" },
      { zh: "帮我看一下这份文件。", pinyin: "Bāng wǒ kàn yīxià zhè fèn wénjiàn.", meaning: "Help me look at this document." },
      { zh: "今天下班几点？", pinyin: "Jīntiān xià bān jǐ diǎn?", meaning: "What time do you finish today?" },
      { zh: "周五有活动吗？", pinyin: "Zhōuwǔ yǒu huódòng ma?", meaning: "Any events on Friday?" },
      { zh: "老板今天心情怎样？", pinyin: "Lǎobǎn jīntiān xīnqíng zěnyàng?", meaning: "How's the boss's mood today?" },
    ]
  },
  {
    id: "meetings", category: "Meetings", emoji: "📊",
    sentences: [
      { zh: "会议现在开始。", pinyin: "Huìyì xiànzài kāishǐ.", meaning: "The meeting will start now." },
      { zh: "今天的议程是…", pinyin: "Jīntiān de yìchéng shì…", meaning: "Today's agenda is…" },
      { zh: "有没有人有意见？", pinyin: "Yǒu méiyǒu rén yǒu yìjiàn?", meaning: "Does anyone have any input?" },
      { zh: "我同意这个方案。", pinyin: "Wǒ tóngyì zhège fāng'àn.", meaning: "I agree with this proposal." },
      { zh: "我有不同的看法。", pinyin: "Wǒ yǒu bùtóng de kànfǎ.", meaning: "I have a different view." },
      { zh: "这个需要再讨论。", pinyin: "Zhège xūyào zài tǎolùn.", meaning: "This needs further discussion." },
      { zh: "下一步是什么？", pinyin: "Xià yī bù shì shénme?", meaning: "What is the next step?" },
      { zh: "谁负责这个任务？", pinyin: "Shéi fùzé zhège rènwù?", meaning: "Who is responsible for this task?" },
      { zh: "会议记录发给大家。", pinyin: "Huìyì jìlù fā gěi dàjiā.", meaning: "I'll send the meeting minutes to everyone." },
      { zh: "我们下周再开会。", pinyin: "Wǒmen xià zhōu zài kāihuì.", meaning: "Let's meet again next week." },
    ]
  },
  {
    id: "followup", category: "Follow-up Messages", emoji: "📨",
    sentences: [
      { zh: "你收到我发的文件了吗？", pinyin: "Nǐ shōudào wǒ fā de wénjiàn le ma?", meaning: "Did you receive the document I sent?" },
      { zh: "这件事你处理了吗？", pinyin: "Zhè jiàn shì nǐ chǔlǐ le ma?", meaning: "Have you handled this matter?" },
      { zh: "麻烦你确认一下。", pinyin: "Máfan nǐ quèrèn yīxià.", meaning: "Please help confirm this." },
      { zh: "进度怎么样了？", pinyin: "Jìndù zěnmeyàng le?", meaning: "How is the progress?" },
      { zh: "这个可以在今天完成吗？", pinyin: "Zhège kěyǐ zài jīntiān wánchéng ma?", meaning: "Can this be done by today?" },
      { zh: "请尽快回复。", pinyin: "Qǐng jǐnkuài huífù.", meaning: "Please reply as soon as possible." },
      { zh: "我跟进一下这个案子。", pinyin: "Wǒ gēnjìn yīxià zhège àn zi.", meaning: "I'll follow up on this case." },
      { zh: "如果有问题请告诉我。", pinyin: "Rúguǒ yǒu wèntí qǐng gàosù wǒ.", meaning: "Please let me know if there are any issues." },
      { zh: "已经发送，请查收。", pinyin: "Yǐjīng fāsòng, qǐng chá shōu.", meaning: "Sent already, please check." },
      { zh: "谢谢你的配合。", pinyin: "Xièxie nǐ de pèihé.", meaning: "Thank you for your cooperation." },
    ]
  },
  {
    id: "dating", category: "Dating / Flirting", emoji: "💕",
    sentences: [
      { zh: "你今天看起来很好看。", pinyin: "Nǐ jīntiān kàn qǐlái hěn hǎokàn.", meaning: "You look great today." },
      { zh: "你有没有男/女朋友？", pinyin: "Nǐ yǒu méiyǒu nán/nǚ péngyou?", meaning: "Do you have a boyfriend/girlfriend?" },
      { zh: "我可以请你吃饭吗？", pinyin: "Wǒ kěyǐ qǐng nǐ chī fàn ma?", meaning: "Can I treat you to a meal?" },
      { zh: "你喜欢什么类型的人？", pinyin: "Nǐ xǐhuān shénme lèixíng de rén?", meaning: "What type of person do you like?" },
      { zh: "我们可以交换联系方式吗？", pinyin: "Wǒmen kěyǐ jiāohuàn liánxì fāngshì ma?", meaning: "Can we exchange contact info?" },
      { zh: "周末你有空吗？", pinyin: "Zhōumò nǐ yǒu kòng ma?", meaning: "Are you free this weekend?" },
      { zh: "我想多了解你。", pinyin: "Wǒ xiǎng duō liǎojiě nǐ.", meaning: "I want to get to know you better." },
      { zh: "你笑起来很好看。", pinyin: "Nǐ xiào qǐlái hěn hǎokàn.", meaning: "You look beautiful when you smile." },
      { zh: "我喜欢你。", pinyin: "Wǒ xǐhuān nǐ.", meaning: "I like you." },
      { zh: "我们在一起吧。", pinyin: "Wǒmen zài yīqǐ ba.", meaning: "Let's be together." },
    ]
  },
  {
    id: "makefriends", category: "Making Friends", emoji: "🤗",
    sentences: [
      { zh: "你好，我叫…，很高兴认识你！", pinyin: "Nǐ hǎo, wǒ jiào…, hěn gāoxìng rènshi nǐ!", meaning: "Hi, I'm…, nice to meet you!" },
      { zh: "你也来这里吗？", pinyin: "Nǐ yě lái zhèlǐ ma?", meaning: "Do you come here too?" },
      { zh: "你平时喜欢做什么？", pinyin: "Nǐ píngshí xǐhuān zuò shénme?", meaning: "What do you usually like to do?" },
      { zh: "我们有共同的兴趣！", pinyin: "Wǒmen yǒu gòngtóng de xìngqù!", meaning: "We have the same interests!" },
      { zh: "下次一起出去玩吧。", pinyin: "Xià cì yīqǐ chūqù wán ba.", meaning: "Let's hang out next time." },
      { zh: "你加我的联系方式吧。", pinyin: "Nǐ jiā wǒ de liánxì fāngshì ba.", meaning: "Add my contact details." },
      { zh: "我在这个城市是新来的。", pinyin: "Wǒ zài zhège chéngshì shì xīn lái de.", meaning: "I'm new to this city." },
      { zh: "你可以帮我介绍这里吗？", pinyin: "Nǐ kěyǐ bāng wǒ jièshào zhèlǐ ma?", meaning: "Can you show me around?" },
      { zh: "你的朋友们都很好！", pinyin: "Nǐ de péngyoumen dōu hěn hǎo!", meaning: "Your friends are all very nice!" },
      { zh: "希望我们能成为好朋友。", pinyin: "Xīwàng wǒmen néng chéngwéi hǎo péngyou.", meaning: "I hope we can become good friends." },
    ]
  },
  {
    id: "family", category: "Family Gatherings", emoji: "👨‍👩‍👧",
    sentences: [
      { zh: "新年快乐！恭喜发财！", pinyin: "Xīnnián kuàilè! Gōngxǐ fācái!", meaning: "Happy New Year! Wishing you prosperity!" },
      { zh: "你最近怎么样？", pinyin: "Nǐ zuìjìn zěnmeyàng?", meaning: "How have you been lately?" },
      { zh: "孩子多大了？", pinyin: "Háizi duō dà le?", meaning: "How old is the child now?" },
      { zh: "来，快来吃东西！", pinyin: "Lái, kuài lái chī dōngxi!", meaning: "Come, come eat!" },
      { zh: "你工作顺利吗？", pinyin: "Nǐ gōngzuò shùnlì ma?", meaning: "Is work going well?" },
      { zh: "什么时候结婚？", pinyin: "Shénme shíhòu jiéhūn?", meaning: "When are you getting married?" },
      { zh: "红包收好了！", pinyin: "Hóngbāo shōu hǎo le!", meaning: "Keep the red packet safely!" },
      { zh: "以后多来玩！", pinyin: "Yǐhòu duō lái wán!", meaning: "Come visit more often!" },
      { zh: "大家一起合照！", pinyin: "Dàjiā yīqǐ hé zhào!", meaning: "Everyone take a photo together!" },
      { zh: "吃饱了吗？再来一碗！", pinyin: "Chī bǎo le ma? Zài lái yī wǎn!", meaning: "Are you full? Have another bowl!" },
    ]
  },
  {
    id: "clinic", category: "Clinic / Pharmacy", emoji: "🏥",
    sentences: [
      { zh: "我身体不舒服。", pinyin: "Wǒ shēntǐ bù shūfú.", meaning: "I'm not feeling well." },
      { zh: "我发烧了。", pinyin: "Wǒ fāshāo le.", meaning: "I have a fever." },
      { zh: "我头很痛。", pinyin: "Wǒ tóu hěn tòng.", meaning: "I have a headache." },
      { zh: "我肚子痛。", pinyin: "Wǒ dùzi tòng.", meaning: "I have a stomachache." },
      { zh: "我咳嗽了几天了。", pinyin: "Wǒ késou le jǐ tiān le.", meaning: "I've been coughing for a few days." },
      { zh: "我对这个药过敏。", pinyin: "Wǒ duì zhège yào guòmǐn.", meaning: "I'm allergic to this medicine." },
      { zh: "这个药怎么吃？", pinyin: "Zhège yào zěnme chī?", meaning: "How do I take this medicine?" },
      { zh: "一天吃几次？", pinyin: "Yī tiān chī jǐ cì?", meaning: "How many times a day?" },
      { zh: "需要写病假信吗？", pinyin: "Xūyào xiě bìngjià xìn ma?", meaning: "Do I need a medical certificate?" },
      { zh: "有没有比较便宜的药？", pinyin: "Yǒu méiyǒu bǐjiào piányí de yào?", meaning: "Is there a cheaper medicine?" },
    ]
  },
  {
    id: "police", category: "Police / Lost Item", emoji: "🚔",
    sentences: [
      { zh: "我的钱包丢了。", pinyin: "Wǒ de qiánbāo diū le.", meaning: "My wallet is lost." },
      { zh: "我的手机被偷了。", pinyin: "Wǒ de shǒujī bèi tōu le.", meaning: "My phone was stolen." },
      { zh: "请帮我报案。", pinyin: "Qǐng bāng wǒ bào àn.", meaning: "Please help me make a police report." },
      { zh: "我需要一份报案证明。", pinyin: "Wǒ xūyào yī fèn bào àn zhèngmíng.", meaning: "I need a copy of the police report." },
      { zh: "事情发生在…", pinyin: "Shìqíng fāshēng zài…", meaning: "It happened at…" },
      { zh: "大概几点发生的？", pinyin: "Dàgài jǐ diǎn fāshēng de?", meaning: "Approximately what time did it happen?" },
      { zh: "有没有监控？", pinyin: "Yǒu méiyǒu jiānkòng?", meaning: "Is there CCTV?" },
      { zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le.", meaning: "My passport is lost." },
      { zh: "大使馆在哪里？", pinyin: "Dàshǐguǎn zài nǎlǐ?", meaning: "Where is the embassy?" },
      { zh: "我需要翻译。", pinyin: "Wǒ xūyào fānyì.", meaning: "I need a translator." },
    ]
  },
  {
    id: "emergency", category: "Need Help Urgently", emoji: "🆘",
    sentences: [
      { zh: "救命！", pinyin: "Jiùmìng!", meaning: "Help! (life-threatening)" },
      { zh: "有人受伤了！", pinyin: "Yǒu rén shòushāng le!", meaning: "Someone is injured!" },
      { zh: "快叫救护车！", pinyin: "Kuài jiào jiùhùchē!", meaning: "Quickly call an ambulance!" },
      { zh: "请叫警察！", pinyin: "Qǐng jiào jǐngchá!", meaning: "Please call the police!" },
      { zh: "我迷路了，需要帮忙。", pinyin: "Wǒ mí lù le, xūyào bāngmáng.", meaning: "I'm lost and need help." },
      { zh: "这里是什么地址？", pinyin: "Zhèlǐ shì shénme dìzhǐ?", meaning: "What is the address here?" },
      { zh: "我的朋友不省人事。", pinyin: "Wǒ de péngyou bù xǐng rén shì.", meaning: "My friend is unconscious." },
      { zh: "火！快逃！", pinyin: "Huǒ! Kuài táo!", meaning: "Fire! Run!" },
      { zh: "有没有人会说英文？", pinyin: "Yǒu méiyǒu rén huì shuō Yīngwén?", meaning: "Does anyone speak English?" },
      { zh: "请不要走！帮帮我！", pinyin: "Qǐng bù yào zǒu! Bāng bāng wǒ!", meaning: "Please don't leave! Help me!" },
    ]
  },
  {
    id: "kopitiam", category: "Order at Kopitiam", emoji: "🧋",
    sentences: [
      { zh: "老板，要什么？", pinyin: "Lǎobǎn, yào shénme?", meaning: "Boss, what do you want?" },
      { zh: "我要咖啡乌，少甜。", pinyin: "Wǒ yào kāfēi wū, shǎo tián.", meaning: "I want black coffee, less sweet." },
      { zh: "要冰的还是热的？", pinyin: "Yào bīng de háishì rè de?", meaning: "Iced or hot?" },
      { zh: "一杯奶茶，去冰。", pinyin: "Yī bēi nǎichá, qù bīng.", meaning: "One milk tea, no ice." },
      { zh: "这里坐还是带走？", pinyin: "Zhèlǐ zuò háishì dài zǒu?", meaning: "Dine in or take away?" },
      { zh: "面包烤了没有？", pinyin: "Miànbāo kǎo le méiyǒu?", meaning: "Is the bread toasted?" },
      { zh: "加牛油和咖椰。", pinyin: "Jiā niúyóu hé kāyē.", meaning: "Add butter and kaya." },
      { zh: "一共多少钱？", pinyin: "Yīgòng duōshǎo qián?", meaning: "How much in total?" },
      { zh: "可以刷码吗？", pinyin: "Kěyǐ shuā mǎ ma?", meaning: "Can I scan to pay?" },
      { zh: "谢谢，老板！再来！", pinyin: "Xièxie, lǎobǎn! Zài lái!", meaning: "Thank you, boss! I'll come again!" },
    ]
  },
  {
    id: "auntieuncle", category: "Talk to Auntie / Uncle", emoji: "👴",
    sentences: [
      { zh: "阿姨/叔叔，你好！", pinyin: "Āyí/Shūshu, nǐ hǎo!", meaning: "Auntie/Uncle, hello!" },
      { zh: "今天生意好吗？", pinyin: "Jīntiān shēngyì hǎo ma?", meaning: "Business good today?" },
      { zh: "老样子，帮我来一份。", pinyin: "Lǎo yàngzi, bāng wǒ lái yī fèn.", meaning: "The usual, please." },
      { zh: "多少年了，还是你们家最好吃。", pinyin: "Duōshǎo nián le, háishì nǐmen jiā zuì hǎochī.", meaning: "All these years, your food is still the best." },
      { zh: "叔叔，便宜一点啦！", pinyin: "Shūshu, piányí yīdiǎn la!", meaning: "Uncle, cheaper please!" },
      { zh: "阿姨，今天有什么新菜？", pinyin: "Āyí, jīntiān yǒu shénme xīn cài?", meaning: "Auntie, what's new today?" },
      { zh: "等一下，我帮你拿。", pinyin: "Děng yīxià, wǒ bāng nǐ ná.", meaning: "Wait, I'll get it for you." },
      { zh: "谢谢叔叔，下次再来！", pinyin: "Xièxie shūshu, xià cì zài lái!", meaning: "Thank you uncle, see you next time!" },
      { zh: "这是我常来的地方。", pinyin: "Zhè shì wǒ cháng lái de dìfāng.", meaning: "This is my regular place." },
      { zh: "阿姨你辛苦了！", pinyin: "Āyí nǐ xīnkǔ le!", meaning: "Auntie, you've worked hard!" },
    ]
  },
  {
    id: "transport", category: "Touch 'n Go / LRT / MRT", emoji: "🚇",
    sentences: [
      { zh: "去…要坐几站？", pinyin: "Qù… yào zuò jǐ zhàn?", meaning: "How many stops to get to…?" },
      { zh: "这条线去…吗？", pinyin: "Zhè tiáo xiàn qù… ma?", meaning: "Does this line go to…?" },
      { zh: "我的Touch 'n Go余额不够。", pinyin: "Wǒ de Touch 'n Go yú'é bùgòu.", meaning: "My Touch 'n Go balance is insufficient." },
      { zh: "在哪里充值？", pinyin: "Zài nǎlǐ chōngzhí?", meaning: "Where can I top up?" },
      { zh: "下一班几点来？", pinyin: "Xià yī bān jǐ diǎn lái?", meaning: "When is the next train?" },
      { zh: "请问换乘在哪里？", pinyin: "Qǐngwèn huànchéng zài nǎlǐ?", meaning: "Excuse me, where is the transfer point?" },
      { zh: "我坐过站了！", pinyin: "Wǒ zuò guò zhàn le!", meaning: "I've missed my stop!" },
      { zh: "这里可以用TnG吗？", pinyin: "Zhèlǐ kěyǐ yòng TnG ma?", meaning: "Can I use TnG here?" },
      { zh: "请靠边站，让乘客先下。", pinyin: "Qǐng kào biān zhàn, ràng chéngkè xiān xià.", meaning: "Please stand aside, let passengers alight first." },
      { zh: "末班车几点？", pinyin: "Mò bān chē jǐ diǎn?", meaning: "What time is the last train?" },
    ]
  },
  {
    id: "manglish", category: "Mixed English-Mandarin (Manglish)", emoji: "🇲🇾",
    sentences: [
      { zh: "你有空吗？Let's makan!", pinyin: "Nǐ yǒu kòng ma? Let's makan!", meaning: "Are you free? Let's eat!" },
      { zh: "这个很好吃leh！", pinyin: "Zhège hěn hǎochī leh!", meaning: "This is delicious leh!" },
      { zh: "怎么这么贵one？", pinyin: "Zěnme zhème guì one?", meaning: "Why so expensive one?" },
      { zh: "不要这样lah，便宜一点。", pinyin: "Bùyào zhèyàng lah, piányí yīdiǎn.", meaning: "Don't be like that lah, cheaper please." },
      { zh: "你confirm来吗？", pinyin: "Nǐ confirm lái ma?", meaning: "Are you confirm coming?" },
      { zh: "Ok lor，就这样吧。", pinyin: "Ok lor, jiù zhèyàng ba.", meaning: "Ok lor, let's just do it this way." },
      { zh: "他很action的那个人。", pinyin: "Tā hěn action de nàge rén.", meaning: "He's the show-off type." },
      { zh: "哇，这里的food很atas leh。", pinyin: "Wā, zhèlǐ de food hěn atas leh.", meaning: "Wow, the food here is quite high-class." },
      { zh: "你follow我的car来吧。", pinyin: "Nǐ follow wǒ de car lái ba.", meaning: "Just follow my car." },
      { zh: "待会儿见！Jom!", pinyin: "Dāihuìr jiàn! Jom!", meaning: "See you later! Let's go!" },
    ]
  },
  {
    id: "slang", category: "Malaysian Chinese Slang", emoji: "😎",
    sentences: [
      { zh: "哇，很厉害咧！", pinyin: "Wā, hěn lìhài lei!", meaning: "Wow, so impressive!" },
      { zh: "酱咯，没办法。", pinyin: "Jiàng lo, méi bànfǎ.", meaning: "Like that lor, can't help it." },
      { zh: "你这个人啊，很坏的。", pinyin: "Nǐ zhège rén a, hěn huài de.", meaning: "You ah, very naughty one." },
      { zh: "讲真的，我真的不知道。", pinyin: "Jiǎng zhēn de, wǒ zhēn de bù zhīdào.", meaning: "Honestly, I really don't know." },
      { zh: "我要去买东西，你要order吗？", pinyin: "Wǒ yào qù mǎi dōngxi, nǐ yào order ma?", meaning: "I'm going to buy stuff, you want to order?" },
      { zh: "不行lah，太远了。", pinyin: "Bù xíng lah, tài yuǎn le.", meaning: "Cannot lah, too far." },
      { zh: "你这个人讲话很夸张哦。", pinyin: "Nǐ zhège rén jiǎng huà hěn kuāzhāng ō.", meaning: "You really like to exaggerate when you talk." },
      { zh: "厚，你又迟到了！", pinyin: "Hòu, nǐ yòu chídào le!", meaning: "Ugh, you're late again!" },
      { zh: "可以的啦，没问题。", pinyin: "Kěyǐ de la, méi wèntí.", meaning: "Can one lah, no problem." },
      { zh: "我们去lepak一下？", pinyin: "Wǒmen qù lepak yīxià?", meaning: "Shall we go chill for a bit?" },
    ]
  },
];

// ── QUIZ SETS (HSK characters) ─────────────────────────────────────────────
const QUIZ_SETS = Array.from({ length: 16 }, (_, si) =>
  Array.from({ length: 10 }, (_, qi) => hsk1Cards[(si * 10 + qi) % hsk1Cards.length])
);
const RANDOM_SET_IDX = 16;
function getRandomSet() {
  const a = [...hsk1Cards];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, 10);
}

// Conv quiz: each topic = one set; index 100+ = conv sets
const CONV_QUIZ_OFFSET = 100;
function buildConvQuestion(sentence, allSentences) {
  const wrong = shuffle(allSentences.filter(s => s.meaning !== sentence.meaning)).slice(0, 3);
  const options = shuffle([sentence.meaning, ...wrong.map(s => s.meaning)]);
  return { prompt: sentence.zh, sub: sentence.pinyin, label: "What does this mean?", answer: sentence.meaning, options: options.map(o => ({ value: o, display: o })), type: "meaning" };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function buildQuestion(card, type) {
  const field = type === "pinyin" ? "pinyin" : "meaning";
  const pool = shuffle(hsk1Cards.filter(c => c[field] !== card[field])).slice(0, 3);
  const correctOpt = { pinyin: card.pinyin, meaning: card.meaning, value: card[field] };
  const wrongOpts = pool.map(c => ({ pinyin: c.pinyin, meaning: c.meaning, value: c[field] }));
  const options = shuffle([correctOpt, ...wrongOpts]);
  return { prompt: card.char, label: type === "pinyin" ? "What is the pinyin?" : "What is the meaning?", answer: card[field], options, type };
}

// ── LOCAL STORAGE ──────────────────────────────────────────────────────────
const LS_FLASH_PROGRESS = "hsk1_flash_progress";
const LS_FLASH_DONE = "hsk1_flash_done";
const LS_QUIZ_SCORES = "hsk1_quiz_scores";
const LS_CONV_PROGRESS = "hsk1_conv_progress";
function lsGet(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
function lsSet(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }

// ── THEME ──────────────────────────────────────────────────────────────────

// ── SHARED STYLES & HELPERS ───────────────────────────────────────────────
const GOLD = "#f5c842"; const ORANGE = "#ff8c42"; const TEAL = "#2dd4bf";
const BG = { minHeight:"100vh", width:"100%", boxSizing:"border-box", background:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)", display:"flex", flexDirection:"column", alignItems:"center", fontFamily:"'Noto Serif',Georgia,serif", padding:"16px 16px 60px", position:"relative", overflowX:"hidden", overflowY:"auto" };
const BLOB1 = { position:"fixed", width:260, height:260, borderRadius:"50%", background:"rgba(255,180,50,0.06)", top:-60, right:-60, filter:"blur(50px)", pointerEvents:"none", zIndex:0 };
const BLOB2 = { position:"fixed", width:220, height:220, borderRadius:"50%", background:"rgba(100,150,255,0.08)", bottom:-50, left:-50, filter:"blur(40px)", pointerEvents:"none", zIndex:0 };
const MAX = 480;

function BackBtn({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:99, padding:"8px 16px", color:"rgba(255,255,255,0.75)", fontSize:13, fontWeight:700, cursor:"pointer", flexShrink:0 }}>
      ← {label || "Back"}
    </button>
  );
}

function TabBar({ current, onFlash, onConv, onQuiz }) {
  const tabs = [{ id:"flash", label:"CARDS", fn:onFlash }, { id:"conv", label:"CONVO", fn:onConv }, { id:"quiz", label:"QUIZ", fn:onQuiz }];
  return (
    <div style={{ display:"flex", gap:6, marginBottom:14, zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
      {tabs.map(t => (
        <button key={t.id} onClick={t.fn} style={{ flex:1, padding:"9px 4px", borderRadius:99, background:current===t.id?`linear-gradient(135deg,${GOLD},${ORANGE})`:"rgba(255,255,255,0.07)", border:current===t.id?"none":"1px solid rgba(255,255,255,0.14)", color:current===t.id?"#1a1500":"rgba(255,255,255,0.6)", fontSize:11, fontWeight:700, letterSpacing:1, cursor:"pointer" }}>{t.label}</button>
      ))}
    </div>
  );
}

function ProgressRow({ label, current, total, accent }) {
  const ac = accent || GOLD;
  return (
    <div style={{ width:"100%", zIndex:1 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
        <span style={{ color:ac, fontSize:12, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"70%" }}>{label}</span>
        <span style={{ color:"rgba(255,255,255,0.42)", fontSize:12, flexShrink:0 }}>{current}/{total}</span>
      </div>
      <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:99, height:5, overflow:"hidden" }}>
        <div style={{ width:`${(current/total)*100}%`, height:"100%", background:`linear-gradient(90deg,${ac},${ac===TEAL?"#60a5fa":ORANGE})`, borderRadius:99, transition:"width 0.4s" }} />
      </div>
    </div>
  );
}

function FlashSetSelector({ onSelect, onGoConv, onGoQuiz, flashProgress, flashDone }) {
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:GOLD, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>HSK 1 · 汉字</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>16 sets · 10 cards each</p>
      </div>
      <TabBar current="flash" onFlash={()=>{}} onConv={onGoConv} onQuiz={onGoQuiz}/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, width:"100%", maxWidth:MAX, zIndex:1 }}>
        {QUIZ_SETS.map((set,i) => {
          const done=flashDone[i]; const prog=flashProgress[i]; const inProg=!done&&prog>0;
          return (
            <button key={i} onClick={()=>onSelect(i)} style={{ borderRadius:14, padding:"12px 4px", background:done?"rgba(74,222,128,0.1)":inProg?"rgba(245,200,66,0.08)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(74,222,128,0.4)":inProg?"rgba(245,200,66,0.3)":"rgba(255,255,255,0.11)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
              <span style={{ fontSize:12, fontWeight:700, color:done?"#4ade80":inProg?GOLD:"rgba(255,255,255,0.8)" }}>Set {i+1}</span>
              <span style={{ fontSize:17, color:done?"rgba(74,222,128,0.6)":"rgba(255,255,255,0.35)" }}>{set[0].char}</span>
              {done&&<span style={{ fontSize:8, color:"#4ade80", fontWeight:700 }}>✓ Done</span>}
              {inProg&&<span style={{ fontSize:8, color:GOLD }}>{prog+1}/10</span>}
            </button>
          );
        })}
        <button onClick={()=>onSelect(RANDOM_SET_IDX)} style={{ borderRadius:14, padding:"12px 4px", background:"linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border:"1px solid rgba(150,130,255,0.4)", color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
          <span style={{ fontSize:12, fontWeight:700, color:"#c4b5fd" }}>Random</span>
          <span style={{ fontSize:20 }}>🎲</span>
        </button>
      </div>
      <p style={{ color:"rgba(255,255,255,0.18)", fontSize:11, marginTop:14, zIndex:1 }}>{Object.keys(flashDone).length}/16 completed</p>
    </div>
  );
}

function FlashcardMode({ setIdx, customCards, initialIndex, onProgress, onBack, onGoConv, onGoQuiz }) {
  const [cards] = useState(()=>customCards||(setIdx===RANDOM_SET_IDX?getRandomSet():QUIZ_SETS[setIdx]));
  const [index, setIndex] = useState(initialIndex||0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(null);
  const total=cards.length; const card=cards[index];
  const go=(d)=>{ setDir(d); setFlipped(false); setTimeout(()=>{ setIndex(p=>{ const next=d==="next"?(p+1)%total:(p-1+total)%total; onProgress&&onProgress(setIdx,next,total); return next; }); setDir(null); },200); };
  const label = setIdx===RANDOM_SET_IDX?"🎲 Random":`Set ${setIdx+1}`;
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Sets"/>
        <div style={{ flex:1 }}><ProgressRow label={label} current={index+1} total={total} accent={GOLD}/></div>
      </div>
      <TabBar current="flash" onFlash={onBack} onConv={onGoConv} onQuiz={onGoQuiz}/>
      <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginBottom:10, zIndex:1 }}>Tap card to reveal</p>
      <div onClick={()=>setFlipped(f=>!f)} style={{ width:"100%", maxWidth:MAX, height:200, perspective:"1000px", cursor:"pointer", marginBottom:22, zIndex:1, opacity:dir?0:1, transform:dir==="next"?"translateX(-22px)":dir==="prev"?"translateX(22px)":"none", transition:"opacity 0.2s,transform 0.2s" }}>
        <div style={{ position:"relative", width:"100%", height:"100%", transformStyle:"preserve-3d", transition:"transform 0.55s cubic-bezier(.4,.2,.2,1)", transform:flipped?"rotateY(180deg)":"rotateY(0)" }}>
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", background:"linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border:"1px solid rgba(245,200,66,0.25)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, boxShadow:"0 8px 40px rgba(0,0,0,0.4)" }}>
            <span style={{ fontSize:72, lineHeight:1, color:"#fff", textShadow:"0 4px 24px rgba(245,200,66,0.3)" }}>{card.char}</span>
            <span style={{ fontSize:15, color:GOLD, letterSpacing:3, fontStyle:"italic" }}>{card.pinyin}</span>
          </div>
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", transform:"rotateY(180deg)", background:"linear-gradient(145deg,rgba(245,200,66,0.12),rgba(245,200,66,0.03))", border:"1px solid rgba(245,200,66,0.5)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:20 }}>
            <span style={{ fontSize:28, color:"rgba(255,255,255,0.18)" }}>{card.char}</span>
            <span style={{ fontSize:20, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.4 }}>{card.meaning}</span>
            <span style={{ fontSize:13, color:GOLD, letterSpacing:3, fontStyle:"italic" }}>{card.pinyin}</span>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center", zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
        <button onClick={()=>go("prev")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>←</button>
        <button onClick={()=>setFlipped(f=>!f)} style={{ flex:1, maxWidth:180, padding:"12px 0", borderRadius:99, background:`linear-gradient(135deg,${GOLD},${ORANGE})`, border:"none", color:"#1a1500", fontSize:13, fontWeight:700, cursor:"pointer" }}>{flipped?"HIDE":"REVEAL"}</button>
        <button onClick={()=>go("next")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>→</button>
      </div>
    </div>
  );
}

function ConvSelector({ onSelect, onGoFlash, onGoQuiz, convProgress }) {
  const categories = [
    { group:"Essentials", color:"#f5c842", topics:["essentials","introductions","numbers","smalltalk"] },
    { group:"Food & Drink", color:"#fb923c", topics:["food","restaurant","coffeeshop","delivery","complaint"] },
    { group:"Shopping", color:"#a78bfa", topics:["buystore","bargain","onlineshopping"] },
    { group:"Movement", color:"#2dd4bf", topics:["directions","grabtaxi","airport","hotel"] },
    { group:"Education", color:"#60a5fa", topics:["school","groupwork","asklecturer"] },
    { group:"Work", color:"#4ade80", topics:["colleagues","meetings","followup"] },
    { group:"Social", color:"#f472b6", topics:["dating","makefriends","family"] },
    { group:"Emergency", color:"#f87171", topics:["clinic","police","emergency"] },
    { group:"Malaysian 🇲🇾", color:"#fbbf24", topics:["kopitiam","auntieuncle","transport","manglish","slang"] },
  ];
  const topicMap = Object.fromEntries(CONV_TOPICS.map(t=>[t.id,t]));
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:TEAL, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>Conversations · 会话</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>{CONV_TOPICS.length} topics</p>
      </div>
      <TabBar current="conv" onFlash={onGoFlash} onConv={()=>{}} onQuiz={onGoQuiz}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, display:"flex", flexDirection:"column", gap:14 }}>
        {categories.map(cat => {
          const topics = cat.topics.map(id=>topicMap[id]).filter(Boolean);
          return (
            <div key={cat.group}>
              <p style={{ color:cat.color, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:7, textTransform:"uppercase" }}>{cat.group}</p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:7 }}>
                {topics.map(topic => {
                  const prog=convProgress[topic.id]||0; const done=prog>=topic.sentences.length;
                  return (
                    <button key={topic.id} onClick={()=>onSelect(topic.id)} style={{ borderRadius:13, padding:"11px 10px", background:done?"rgba(45,212,191,0.1)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(45,212,191,0.35)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", gap:8, textAlign:"left" }}>
                      <span style={{ fontSize:20, flexShrink:0 }}>{topic.emoji}</span>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:11, fontWeight:700, color:done?TEAL:"rgba(255,255,255,0.85)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{topic.category}</div>
                        <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)", marginTop:2 }}>{topic.sentences.length} sentences{done?" · ✓":prog>0?` · ${prog}/${topic.sentences.length}`:""}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConvFlashMode({ topicId, initialIndex, onProgress, onBack, onGoFlash, onGoQuiz }) {
  const topic = CONV_TOPICS.find(t=>t.id===topicId);
  const sentences = topic.sentences;
  const [index, setIndex] = useState(initialIndex||0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(null);
  const total=sentences.length; const s=sentences[index];
  const go=(d)=>{ setDir(d); setFlipped(false); setTimeout(()=>{ setIndex(p=>{ const next=d==="next"?(p+1)%total:(p-1+total)%total; onProgress&&onProgress(topicId,next+1); return next; }); setDir(null); },200); };
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Topics"/>
        <div style={{ flex:1 }}><ProgressRow label={`${topic.emoji} ${topic.category}`} current={index+1} total={total} accent={TEAL}/></div>
      </div>
      <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginBottom:10, zIndex:1 }}>Tap card to reveal meaning</p>
      <div onClick={()=>setFlipped(f=>!f)} style={{ width:"100%", maxWidth:MAX, minHeight:185, perspective:"1000px", cursor:"pointer", marginBottom:22, zIndex:1, opacity:dir?0:1, transition:"opacity 0.2s" }}>
        <div style={{ position:"relative", width:"100%", minHeight:185, transformStyle:"preserve-3d", transition:"transform 0.55s cubic-bezier(.4,.2,.2,1)", transform:flipped?"rotateY(180deg)":"rotateY(0)" }}>
          <div style={{ position:"absolute", inset:0, minHeight:185, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", background:"linear-gradient(145deg,rgba(45,212,191,0.1),rgba(45,212,191,0.03))", border:"1px solid rgba(45,212,191,0.25)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:22, boxShadow:"0 8px 40px rgba(0,0,0,0.4)" }}>
            <span style={{ fontSize:22, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.6 }}>{s.zh}</span>
            <span style={{ fontSize:13, color:TEAL, letterSpacing:1, fontStyle:"italic", textAlign:"center" }}>{s.pinyin}</span>
          </div>
          <div style={{ position:"absolute", inset:0, minHeight:185, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", transform:"rotateY(180deg)", background:"linear-gradient(145deg,rgba(45,212,191,0.15),rgba(45,212,191,0.05))", border:"1px solid rgba(45,212,191,0.5)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:22 }}>
            <span style={{ fontSize:16, color:"rgba(255,255,255,0.2)", textAlign:"center" }}>{s.zh}</span>
            <span style={{ fontSize:18, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.5 }}>{s.meaning}</span>
            <span style={{ fontSize:12, color:TEAL, fontStyle:"italic", textAlign:"center" }}>{s.pinyin}</span>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center", zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
        <button onClick={()=>go("prev")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>←</button>
        <button onClick={()=>setFlipped(f=>!f)} style={{ flex:1, maxWidth:180, padding:"12px 0", borderRadius:99, background:`linear-gradient(135deg,${TEAL},#60a5fa)`, border:"none", color:"#0a1a1a", fontSize:13, fontWeight:700, cursor:"pointer" }}>{flipped?"HIDE":"REVEAL"}</button>
        <button onClick={()=>go("next")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>→</button>
      </div>
    </div>
  );
}

function QuizSetSelector({ onSelect, onGoFlash, onGoConv, scores }) {
  const convScores = scores.conv||{};
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:GOLD, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>HSK 1 · Quiz</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>Characters · Conversations</p>
      </div>
      <TabBar current="quiz" onFlash={onGoFlash} onConv={onGoConv} onQuiz={()=>{}}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:18 }}>
        <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:8 }}>CHARACTERS · HSK 1</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7 }}>
          {QUIZ_SETS.map((set,i)=>{ const sc=scores.char?.[i]; const done=sc!=null; const col=done?(sc===10?"#4ade80":sc>=7?GOLD:"#f87171"):null; return (
            <button key={i} onClick={()=>onSelect({type:"char",idx:i})} style={{ borderRadius:12, padding:"11px 4px", background:done?"rgba(245,200,66,0.1)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(245,200,66,0.4)":"rgba(255,255,255,0.11)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
              <span style={{ fontSize:11, fontWeight:700, color:done?GOLD:"rgba(255,255,255,0.8)" }}>Set {i+1}</span>
              {done?<span style={{ fontSize:10, color:col, fontWeight:700 }}>{sc}/10 ✓</span>:<span style={{ fontSize:15, color:"rgba(255,255,255,0.35)" }}>{set[0].char}</span>}
            </button>
          ); })}
          <button onClick={()=>onSelect({type:"char",idx:RANDOM_SET_IDX})} style={{ borderRadius:12, padding:"11px 4px", background:"linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border:"1px solid rgba(150,130,255,0.4)", color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
            <span style={{ fontSize:11, fontWeight:700, color:"#c4b5fd" }}>Random</span><span style={{ fontSize:16 }}>🎲</span>
          </button>
        </div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1 }}>
        <p style={{ color:TEAL, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:8 }}>CONVERSATIONS</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:7 }}>
          {CONV_TOPICS.map(topic=>{ const sc=convScores[topic.id]; const done=sc!=null; const total=topic.sentences.length; const col=done?(sc===total?"#4ade80":sc>=total*0.7?GOLD:"#f87171"):null; return (
            <button key={topic.id} onClick={()=>onSelect({type:"conv",id:topic.id})} style={{ borderRadius:12, padding:"10px 10px", background:done?"rgba(45,212,191,0.08)":"rgba(255,255,255,0.04)", border:`1px solid ${done?"rgba(45,212,191,0.35)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", gap:7, textAlign:"left" }}>
              <span style={{ fontSize:17, flexShrink:0 }}>{topic.emoji}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:10, fontWeight:700, color:done?TEAL:"rgba(255,255,255,0.8)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{topic.category}</div>
                {done?<div style={{ fontSize:9, color:col, fontWeight:700 }}>{sc}/{total} ✓</div>:<div style={{ fontSize:9, color:"rgba(255,255,255,0.35)" }}>{total} qs</div>}
              </div>
            </button>
          ); })}
        </div>
      </div>
    </div>
  );
}

function QuizMode({ quizSpec, customCards, onBack, onFinish }) {
  const isConv = quizSpec.type==="conv";
  const [questions] = useState(()=>{
    if(isConv){ const topic=CONV_TOPICS.find(t=>t.id===quizSpec.id); const all=CONV_TOPICS.flatMap(t=>t.sentences); return shuffle(topic.sentences).map(s=>buildConvQuestion(s,all)); }
    const cards=customCards||(quizSpec.idx===RANDOM_SET_IDX?getRandomSet():QUIZ_SETS[quizSpec.idx]);
    return shuffle(cards).map((c,i)=>buildQuestion(c,i%2===0?"pinyin":"meaning"));
  });
  const [qIdx,setQIdx]=useState(0); const [selected,setSelected]=useState(null); const [revealed,setRevealed]=useState(false); const [answers,setAnswers]=useState([]);
  const q=questions[qIdx]; const isLast=qIdx===questions.length-1;
  const LABELS=["A","B","C","D"]; const accent=isConv?TEAL:GOLD;
  const topic=isConv?CONV_TOPICS.find(t=>t.id===quizSpec.id):null;
  const headerLabel=isConv?`${topic?.emoji} ${topic?.category}`:quizSpec.idx===RANDOM_SET_IDX?"🎲 Random":`Set ${quizSpec.idx+1}`;
  const pick=(val)=>{ if(revealed)return; setSelected(val); setRevealed(true); };
  const next=()=>{ const na=[...answers,selected===q.answer]; if(isLast)onFinish(na.filter(Boolean).length,na,questions); else{ setAnswers(na);setQIdx(i=>i+1);setSelected(null);setRevealed(false); } };
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Sets"/>
        <div style={{ flex:1 }}><ProgressRow label={headerLabel} current={qIdx+1} total={questions.length} accent={accent}/></div>
      </div>
      <p style={{ color:"rgba(255,255,255,0.42)", fontSize:11, letterSpacing:1, marginBottom:8, zIndex:1 }}>{q.label}</p>
      <div style={{ width:"100%", maxWidth:MAX, background:"linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border:`1px solid ${accent}44`, borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:isConv?85:125, marginBottom:14, zIndex:1, padding:"16px 18px", boxShadow:"0 8px 40px rgba(0,0,0,0.35)" }}>
        {isConv?<><span style={{ fontSize:19, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.6 }}>{q.prompt}</span><span style={{ fontSize:12, color:accent, fontStyle:"italic", marginTop:5, textAlign:"center" }}>{q.sub}</span></>:<span style={{ fontSize:68, color:"#fff", textShadow:`0 4px 24px ${accent}44`, lineHeight:1 }}>{q.prompt}</span>}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:7, width:"100%", maxWidth:MAX, zIndex:1 }}>
        {q.options.map((opt,i)=>{ const val=opt.value??opt; const isCorrect=val===q.answer, isChosen=val===selected;
          let bg="rgba(255,255,255,0.05)",border="1px solid rgba(255,255,255,0.11)",lbg="rgba(255,255,255,0.1)",tc="#fff",tc2="rgba(255,255,255,0.45)";
          if(revealed){ if(isCorrect){bg="rgba(74,222,128,0.12)";border="1px solid rgba(74,222,128,0.5)";lbg="rgba(74,222,128,0.28)";tc="#4ade80";tc2="rgba(74,222,128,0.7)";} else if(isChosen){bg="rgba(248,113,113,0.12)";border="1px solid rgba(248,113,113,0.5)";lbg="rgba(248,113,113,0.28)";tc="#f87171";tc2="rgba(248,113,113,0.7)";} }
          return (
            <button key={i} onClick={()=>pick(val)} style={{ display:"flex", alignItems:"center", gap:9, background:bg, border, borderRadius:14, padding:"11px 12px", cursor:revealed?"default":"pointer", transition:"all 0.2s", textAlign:"left", width:"100%" }}>
              <span style={{ width:26, height:26, borderRadius:7, background:lbg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:revealed&&isCorrect?"#4ade80":revealed&&isChosen&&!isCorrect?"#f87171":accent, flexShrink:0 }}>{LABELS[i]}</span>
              <div style={{ flex:1, minWidth:0 }}>
                {isConv?<div style={{ fontSize:13, color:tc, lineHeight:1.4 }}>{opt.display??opt.value}</div>
                  :<><div style={{ fontSize:13, color:tc, fontStyle:q.type==="pinyin"?"italic":"normal" }}>{opt.pinyin}</div><div style={{ fontSize:11, color:tc2, marginTop:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{opt.meaning}</div></>}
              </div>
              {revealed&&isCorrect&&<span style={{ fontSize:14, color:"#4ade80", flexShrink:0 }}>✓</span>}
              {revealed&&isChosen&&!isCorrect&&<span style={{ fontSize:14, color:"#f87171", flexShrink:0 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {revealed&&<button onClick={next} style={{ marginTop:16, padding:"13px 0", width:"100%", maxWidth:MAX, borderRadius:99, background:`linear-gradient(135deg,${accent},${isConv?"#60a5fa":ORANGE})`, border:"none", color:isConv?"#0a1a1a":"#1a1500", fontSize:14, fontWeight:700, cursor:"pointer", zIndex:1 }}>{isLast?"SEE RESULTS":"NEXT →"}</button>}
    </div>
  );
}

function RandomPicker({ mode, onStart, onBack }) {
  const [selected,setSelected]=useState(Array(16).fill(true));
  const toggle=(i)=>setSelected(p=>{ const n=[...p]; n[i]=!n[i]; return n; });
  const allOn=selected.every(Boolean); const count=selected.filter(Boolean).length;
  function buildRandomCards(){ const pool=[]; selected.forEach((on,i)=>{ if(on)pool.push(...QUIZ_SETS[i]); }); const a=[...pool]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a.slice(0,10); }
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:16 }}>
        <BackBtn onClick={onBack} label="Back"/>
        <div style={{ textAlign:"center", marginTop:10 }}>
          <h2 style={{ color:GOLD, fontSize:20, fontWeight:700, margin:0 }}>🎲 Random Mix</h2>
          <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:3 }}>Choose which sets to draw from</p>
        </div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, marginBottom:10, zIndex:1 }}>
        <button onClick={()=>setSelected(Array(16).fill(!allOn))} style={{ padding:"7px 14px", borderRadius:99, background:allOn?"rgba(245,200,66,0.15)":"rgba(255,255,255,0.07)", border:`1px solid ${allOn?"rgba(245,200,66,0.4)":"rgba(255,255,255,0.15)"}`, color:allOn?GOLD:"rgba(255,255,255,0.6)", fontSize:11, fontWeight:700, cursor:"pointer" }}>{allOn?"Deselect All":"Select All"}</button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7, width:"100%", maxWidth:MAX, zIndex:1, marginBottom:20 }}>
        {QUIZ_SETS.map((set,i)=>{ const on=selected[i]; return (
          <button key={i} onClick={()=>toggle(i)} style={{ borderRadius:12, padding:"11px 4px", background:on?"rgba(245,200,66,0.15)":"rgba(255,255,255,0.04)", border:`1px solid ${on?"rgba(245,200,66,0.5)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3, position:"relative" }}>
            {on&&<span style={{ position:"absolute", top:4, right:6, fontSize:8, color:GOLD }}>✓</span>}
            <span style={{ fontSize:11, fontWeight:700, color:on?GOLD:"rgba(255,255,255,0.5)" }}>Set {i+1}</span>
            <span style={{ fontSize:15, color:on?"rgba(255,255,255,0.6)":"rgba(255,255,255,0.2)" }}>{set[0].char}</span>
          </button>
        ); })}
      </div>
      <button onClick={()=>{ if(count>0)onStart(buildRandomCards()); }} style={{ padding:"13px 0", width:"100%", maxWidth:MAX, borderRadius:99, background:count>0?`linear-gradient(135deg,${GOLD},${ORANGE})`:"rgba(255,255,255,0.08)", border:"none", color:count>0?"#1a1500":"rgba(255,255,255,0.3)", fontSize:13, fontWeight:700, cursor:count>0?"pointer":"default", zIndex:1 }}>
        {count===0?"Select at least 1 set":`Start · ${count*10} cards in pool`}
      </button>
    </div>
  );
}

function ResultsScreen({ quizSpec, score, answers, questions, onRetry, onHome }) {
  const isConv = quizSpec?.type==="conv";
  const total=answers.length; const pct=Math.round((score/total)*100);
  const sc=pct===100?"#4ade80":pct>=70?GOLD:"#f87171";
  const emoji=pct===100?"🏆":pct>=70?"👏":"💪";
  const msg=pct===100?"Perfect score!":pct>=70?"Great job!":"Keep practicing!";
  const accent=isConv?TEAL:GOLD;
  const topic=isConv?CONV_TOPICS.find(t=>t.id===quizSpec.id):null;
  const label=isConv?`${topic?.emoji} ${topic?.category}`:quizSpec?.idx===RANDOM_SET_IDX?"🎲 Random":`Set ${(quizSpec?.idx??0)+1}`;
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:14 }}>
        <BackBtn onClick={onHome} label="Home"/>
      </div>
      <div style={{ textAlign:"center", marginBottom:16, zIndex:1 }}>
        <div style={{ fontSize:44 }}>{emoji}</div>
        <h2 style={{ color:"#fff", fontSize:22, fontWeight:700, margin:"8px 0 4px" }}>{msg}</h2>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:13 }}>{label}</p>
        <div style={{ fontSize:46, fontWeight:800, color:sc, textShadow:`0 0 30px ${sc}55`, marginTop:6 }}>{score}<span style={{ fontSize:20, color:"rgba(255,255,255,0.28)" }}>/{total}</span></div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, display:"flex", flexDirection:"column", gap:7, zIndex:1, marginBottom:18 }}>
        {answers.map((ok,i)=>{ const q=questions[i]; return (
          <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:9, background:ok?"rgba(74,222,128,0.07)":"rgba(248,113,113,0.07)", border:`1px solid ${ok?"rgba(74,222,128,0.22)":"rgba(248,113,113,0.22)"}`, borderRadius:12, padding:"10px 11px" }}>
            <span style={{ fontSize:isConv?14:20, lineHeight:1.4, color:"#fff", flexShrink:0 }}>{q.prompt}</span>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:9, color:"rgba(255,255,255,0.35)", marginBottom:2, letterSpacing:1 }}>{isConv?"MEANING":q.type?.toUpperCase()}</div>
              <div style={{ fontSize:12, color:"#fff", lineHeight:1.4 }}>{q.answer}</div>
            </div>
            <span style={{ fontSize:15, color:ok?"#4ade80":"#f87171", flexShrink:0 }}>{ok?"✓":"✗"}</span>
          </div>
        ); })}
      </div>
      <div style={{ display:"flex", gap:10, zIndex:1, width:"100%", maxWidth:MAX }}>
        <button onClick={onHome} style={{ flex:1, padding:"13px 0", borderRadius:99, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer" }}>🏠 Home</button>
        <button onClick={onRetry} style={{ flex:1, padding:"13px 0", borderRadius:99, background:`linear-gradient(135deg,${accent},${isConv?"#60a5fa":ORANGE})`, border:"none", color:isConv?"#0a1a1a":"#fff", fontSize:13, fontWeight:700, cursor:"pointer" }}>RETRY ↺</button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen,setScreenState]=useState("flashSelect");
  const [activeSet,setActiveSet]=useState(null);
  const [activeQuizSpec,setActiveQuizSpec]=useState(null);
  const [activeConvTopic,setActiveConvTopic]=useState(null);
  const [randomCards,setRandomCards]=useState(null);
  const [randomMode,setRandomMode]=useState(null);
  const [quizResult,setQuizResult]=useState(null);
  const [quizCards,setQuizCards]=useState(null);
  const [quizQuestions,setQuizQuestions]=useState(null);
  const [scores,setScores]=useState(()=>({ char:lsGet(LS_QUIZ_SCORES,{}), conv:lsGet("hsk1_conv_scores",{}) }));
  const [flashProgress,setFlashProgress]=useState(()=>lsGet(LS_FLASH_PROGRESS,{}));
  const [flashDone,setFlashDone]=useState(()=>lsGet(LS_FLASH_DONE,{}));
  const [convProgress,setConvProgress]=useState(()=>lsGet(LS_CONV_PROGRESS,{}));

  const setScreen=(s)=>{ window.history.pushState({screen:s},"",""); setScreenState(s); };

  useEffect(()=>{
    const onPop=()=>{ const s=window.history.state?.screen; setScreenState(s||"flashSelect"); };
    window.addEventListener("popstate",onPop);
    window.history.replaceState({screen:"flashSelect"},"","");
    return ()=>window.removeEventListener("popstate",onPop);
  },[]);

  const markFlashProgress=(setIdx,cardIndex,total)=>{ if(setIdx===RANDOM_SET_IDX)return; const done=cardIndex===total-1; setFlashProgress(prev=>{ const n={...prev,[setIdx]:cardIndex}; lsSet(LS_FLASH_PROGRESS,n); return n; }); if(done)setFlashDone(prev=>{ const n={...prev,[setIdx]:true}; lsSet(LS_FLASH_DONE,n); return n; }); };
  const markConvProgress=(topicId,index)=>{ setConvProgress(prev=>{ const n={...prev,[topicId]:Math.max(prev[topicId]||0,index)}; lsSet(LS_CONV_PROGRESS,n); return n; }); };

  const finishQuiz=(score,answers,questions)=>{
    setQuizResult({score,answers}); setQuizQuestions(questions);
    const spec=activeQuizSpec;
    if(spec.type==="char"&&spec.idx!==RANDOM_SET_IDX){ setScores(prev=>{ const n={...prev,char:{...prev.char,[spec.idx]:score}}; lsSet(LS_QUIZ_SCORES,n.char); return n; }); }
    else if(spec.type==="conv"){ setScores(prev=>{ const n={...prev,conv:{...prev.conv,[spec.id]:score}}; lsSet("hsk1_conv_scores",n.conv); return n; }); }
    setScreen("results");
  };

  const goHome=()=>setScreen("flashSelect");
  const goFlash=()=>setScreen("flashSelect");
  const goConv=()=>setScreen("convSelect");
  const goQuiz=()=>setScreen("quizSelect");

  const handleFlashSelect=(i)=>{ if(i===RANDOM_SET_IDX){setRandomMode("flash");setScreen("randomPicker");} else{setActiveSet(i);setRandomCards(null);setScreen("flash");} };
  const handleQuizSelect=(spec)=>{ if(spec.type==="char"&&spec.idx===RANDOM_SET_IDX){setRandomMode("quiz");setScreen("randomPicker");} else{setActiveQuizSpec(spec);setQuizCards(null);setScreen("quiz");} };
  const handleRandomStart=(cards)=>{ if(randomMode==="flash"){setActiveSet(RANDOM_SET_IDX);setRandomCards(cards);setScreen("flash");} else{setActiveQuizSpec({type:"char",idx:RANDOM_SET_IDX});setQuizCards(cards);setScreen("quiz");} };

  if(screen==="flashSelect") return <FlashSetSelector onSelect={handleFlashSelect} onGoConv={goConv} onGoQuiz={goQuiz} flashProgress={flashProgress} flashDone={flashDone}/>;
  if(screen==="flash") return <FlashcardMode key={`flash-${activeSet}`} setIdx={activeSet} customCards={activeSet===RANDOM_SET_IDX?randomCards:null} initialIndex={flashProgress[activeSet]||0} onProgress={markFlashProgress} onBack={goFlash} onGoConv={goConv} onGoQuiz={goQuiz}/>;
  if(screen==="convSelect") return <ConvSelector onSelect={id=>{setActiveConvTopic(id);setScreen("convFlash");}} onGoFlash={goFlash} onGoQuiz={goQuiz} convProgress={convProgress}/>;
  if(screen==="convFlash") return <ConvFlashMode key={`conv-${activeConvTopic}`} topicId={activeConvTopic} initialIndex={convProgress[activeConvTopic]||0} onProgress={markConvProgress} onBack={goConv} onGoFlash={goFlash} onGoQuiz={goQuiz}/>;
  if(screen==="randomPicker") return <RandomPicker mode={randomMode} onStart={handleRandomStart} onBack={()=>setScreen(randomMode==="flash"?"flashSelect":"quizSelect")}/>;
  if(screen==="quizSelect") return <QuizSetSelector scores={scores} onSelect={handleQuizSelect} onGoFlash={goFlash} onGoConv={goConv}/>;
  if(screen==="quiz") return <QuizMode key={`quiz-${JSON.stringify(activeQuizSpec)}-${Date.now()}`} quizSpec={activeQuizSpec} customCards={quizCards} onBack={goQuiz} onFinish={finishQuiz}/>;
  if(screen==="results") return <ResultsScreen quizSpec={activeQuizSpec} score={quizResult.score} answers={quizResult.answers} questions={quizQuestions} onRetry={()=>setScreen("quiz")} onHome={goHome}/>;
}