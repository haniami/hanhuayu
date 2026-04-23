export const CONV_TOPICS = [
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
      { zh: "多少钱？", pinyin: "Duōshǎo qián?", meaning: "How much does it cost?", words: [{w:"多少",p:"duōshǎo",m:"how much/many"},{w:"钱",p:"qián",m:"money"}] },
      { zh: "太贵了。", pinyin: "Tài guì le.", meaning: "Too expensive.", words: [{w:"太",p:"tài",m:"too/very"},{w:"贵",p:"guì",m:"expensive"},{w:"了",p:"le",m:"particle (change of state)"}] },
      { zh: "便宜一点可以吗？", pinyin: "Piányí yīdiǎn kěyǐ ma?", meaning: "Can you make it cheaper?", words: [{w:"便宜",p:"piányí",m:"cheap"},{w:"一点",p:"yīdiǎn",m:"a little"},{w:"可以",p:"kěyǐ",m:"can/okay"},{w:"吗",p:"ma",m:"question particle"}] },
      { zh: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", meaning: "What time is it now?", words: [{w:"现在",p:"xiànzài",m:"now"},{w:"几",p:"jǐ",m:"how many"},{w:"点",p:"diǎn",m:"o'clock"}] },
      { zh: "我们几点见面？", pinyin: "Wǒmen jǐ diǎn jiànmiàn?", meaning: "What time shall we meet?", words: [{w:"我们",p:"wǒmen",m:"we/us"},{w:"几点",p:"jǐ diǎn",m:"what time"},{w:"见面",p:"jiànmiàn",m:"to meet"}] },
      { zh: "今天是几号？", pinyin: "Jīntiān shì jǐ hào?", meaning: "What is today's date?", words: [{w:"今天",p:"jīntiān",m:"today"},{w:"是",p:"shì",m:"is/am/are"},{w:"几号",p:"jǐ hào",m:"which date"}] },
      { zh: "请给我收据。", pinyin: "Qǐng gěi wǒ shōujù.", meaning: "Please give me a receipt.", words: [{w:"请",p:"qǐng",m:"please"},{w:"给",p:"gěi",m:"give"},{w:"我",p:"wǒ",m:"me/I"},{w:"收据",p:"shōujù",m:"receipt"}] },
      { zh: "我用电子支付。", pinyin: "Wǒ yòng diànzǐ zhīfù.", meaning: "I'll pay by e-payment.", words: [{w:"我",p:"wǒ",m:"I"},{w:"用",p:"yòng",m:"use"},{w:"电子",p:"diànzǐ",m:"electronic"},{w:"支付",p:"zhīfù",m:"payment"}] },
      { zh: "可以刷卡吗？", pinyin: "Kěyǐ shuā kǎ ma?", meaning: "Can I pay by card?", words: [{w:"可以",p:"kěyǐ",m:"can"},{w:"刷卡",p:"shuā kǎ",m:"swipe card"},{w:"吗",p:"ma",m:"question particle"}] },
      { zh: "找一下零钱。", pinyin: "Zhǎo yīxià língqián.", meaning: "Give me change please.", words: [{w:"找",p:"zhǎo",m:"give change"},{w:"一下",p:"yīxià",m:"a moment/please"},{w:"零钱",p:"língqián",m:"loose change"}] },
      { zh: "打折吗？", pinyin: "Dǎzhé ma?", meaning: "Is there a discount?", words: [{w:"打折",p:"dǎzhé",m:"discount"},{w:"吗",p:"ma",m:"question particle"}] },
    ]
  },
  {
    id: "datetime", category: "Numbers, Days & Time", emoji: "📅",
    sentences: [
      { zh: "一、二、三、四、五", pinyin: "Yī, èr, sān, sì, wǔ", meaning: "One, two, three, four, five", words: [{w:"一",p:"yī",m:"1"},{w:"二",p:"èr",m:"2"},{w:"三",p:"sān",m:"3"},{w:"四",p:"sì",m:"4"},{w:"五",p:"wǔ",m:"5"}] },
      { zh: "六、七、八、九、十", pinyin: "Liù, qī, bā, jiǔ, shí", meaning: "Six, seven, eight, nine, ten", words: [{w:"六",p:"liù",m:"6"},{w:"七",p:"qī",m:"7"},{w:"八",p:"bā",m:"8"},{w:"九",p:"jiǔ",m:"9"},{w:"十",p:"shí",m:"10"}] },
      { zh: "今天是星期几？", pinyin: "Jīntiān shì xīngqī jǐ?", meaning: "What day is today?", words: [{w:"今天",p:"jīntiān",m:"today"},{w:"是",p:"shì",m:"is"},{w:"星期",p:"xīngqī",m:"week/weekday"},{w:"几",p:"jǐ",m:"which/how many"}] },
      { zh: "星期一到星期五是工作日。", pinyin: "Xīngqīyī dào xīngqīwǔ shì gōngzuòrì.", meaning: "Monday to Friday are working days.", words: [{w:"星期一",p:"xīngqīyī",m:"Monday"},{w:"到",p:"dào",m:"to/until"},{w:"星期五",p:"xīngqīwǔ",m:"Friday"},{w:"是",p:"shì",m:"are"},{w:"工作日",p:"gōngzuòrì",m:"working day"}] },
      { zh: "周末是星期六和星期日。", pinyin: "Zhōumò shì xīngqīliù hé xīngqīrì.", meaning: "The weekend is Saturday and Sunday.", words: [{w:"周末",p:"zhōumò",m:"weekend"},{w:"星期六",p:"xīngqīliù",m:"Saturday"},{w:"和",p:"hé",m:"and"},{w:"星期日",p:"xīngqīrì",m:"Sunday"}] },
      { zh: "现在是几月？", pinyin: "Xiànzài shì jǐ yuè?", meaning: "What month is it now?", words: [{w:"现在",p:"xiànzài",m:"now"},{w:"是",p:"shì",m:"is"},{w:"几月",p:"jǐ yuè",m:"which month"}] },
      { zh: "一月、二月、三月", pinyin: "Yīyuè, Èryuè, Sānyuè", meaning: "January, February, March", words: [{w:"一月",p:"yīyuè",m:"January"},{w:"二月",p:"èryuè",m:"February"},{w:"三月",p:"sānyuè",m:"March"}] },
      { zh: "我的生日是三月十五日。", pinyin: "Wǒ de shēngrì shì sānyuè shíwǔ rì.", meaning: "My birthday is March 15th.", words: [{w:"我的",p:"wǒ de",m:"my"},{w:"生日",p:"shēngrì",m:"birthday"},{w:"是",p:"shì",m:"is"},{w:"三月",p:"sānyuè",m:"March"},{w:"十五",p:"shíwǔ",m:"15th"},{w:"日",p:"rì",m:"day/date"}] },
      { zh: "现在是早上八点半。", pinyin: "Xiànzài shì zǎoshang bā diǎn bàn.", meaning: "It is now 8:30 in the morning.", words: [{w:"现在",p:"xiànzài",m:"now"},{w:"是",p:"shì",m:"is"},{w:"早上",p:"zǎoshang",m:"morning"},{w:"八点",p:"bā diǎn",m:"eight o'clock"},{w:"半",p:"bàn",m:"half"}] },
      { zh: "我们三点十五分见面。", pinyin: "Wǒmen sān diǎn shíwǔ fēn jiànmiàn.", meaning: "We meet at 3:15.", words: [{w:"我们",p:"wǒmen",m:"we"},{w:"三点",p:"sān diǎn",m:"three o'clock"},{w:"十五分",p:"shíwǔ fēn",m:"fifteen minutes"},{w:"见面",p:"jiànmiàn",m:"to meet"}] },
      { zh: "下午、晚上、深夜", pinyin: "Xiàwǔ, wǎnshang, shēnyè", meaning: "Afternoon, evening, late night", words: [{w:"下午",p:"xiàwǔ",m:"afternoon"},{w:"晚上",p:"wǎnshang",m:"evening/night"},{w:"深夜",p:"shēnyè",m:"late night/midnight"}] },
      { zh: "明年我二十岁。", pinyin: "Míngnián wǒ èrshí suì.", meaning: "Next year I will be 20 years old.", words: [{w:"明年",p:"míngnián",m:"next year"},{w:"我",p:"wǒ",m:"I"},{w:"二十",p:"èrshí",m:"twenty"},{w:"岁",p:"suì",m:"years old"}] },
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
