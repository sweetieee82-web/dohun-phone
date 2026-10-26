/* Fictional fan comments: each post owns its own distinct conversation. */
const fanComment=(name,text,likes=0,translation='')=>({name,text,likes,translation,avatar:null});
const fanRepliesByPost={
 birthday:[
  fanComment('한입만42','한진아 생일 축하해!! 오늘 맛있는 거 많이 먹어 🎂',128,'韩振生日快乐！！今天多吃点好吃的🎂'),
  fanComment('桃子汽水42','韩振生日快乐！！相机拍的照片也想看🥹',96),
  fanComment('miso.days','The last photo 😭😭 please give us more',63,'最后一张😭😭请再多发一点'),
  fanComment('겨울밤산책','도훈이 글 읽다가 나도 울컥함ㅠㅠ',47,'看道勋写的话，我也有点想哭ㅠㅠ'),
  fanComment('今天吃面了吗','火焰表情好多ㅋㅋㅋ生日快乐呀韩振尼',35),
  fanComment('bluehour_42','Happiest birthday Hanjin! Hope you get lots of cake today 💙',74,'韩振生日快乐！希望你今天吃到好多蛋糕💙'),
  fanComment('작은귤','둘 다 표정 너무 편해 보여서 좋다',52,'两个人的表情看着都很放松，真好'),
  fanComment('芝士小狗','第三张存好了 别撤回啊啊啊',81),
  fanComment('cloudy42','Dohoon really chose the cutest pictures',28,'道勋挑的照片真的好可爱'),
  fanComment('뭉게뭉게','한진이 웃는 거 봐ㅠ 생일 축하해 우리 한진이',67,'看看韩振笑的样子ㅠ 我们韩振生日快乐'),
  fanComment('凌晨一点还没睡','刚准备睡觉就刷到了😭今天一定要开心',42),
  fanComment('littleorbit','Wait is that a film camera? 👀',19,'等等，那是胶卷相机吗？👀'),
  fanComment('오늘도한진','선물 자랑도 해주세요ㅎㅎ',33,'也给我们看看收到的礼物吧ㅎㅎ'),
  fanComment('明天也要见面','以后也一起走吧 生日快乐我们韩振',56),
  fanComment('sundaypeach','Saving all three. Thank you Dohoon 🫶',24,'三张全存了。谢谢道勋🫶'),
  fanComment('밤빵','생일 축하해 한진아!! 태어나줘서 고마워',91,'韩振生日快乐！！谢谢你来到这个世界'),
  fanComment('小面包烤焦了','怎么有人过生日还更可爱了',31),
  fanComment('moonlit42','That smile in the first pic 🥺 happy birthday!',45,'第一张照片里的笑容🥺生日快乐！')
 ],
 'hanjin-night':[
  fanComment('따뜻한우유','한진이도 푹 자요 오늘 고생했어💙',41,'韩振也好好睡，今天辛苦了💙'),
  fanComment('荔枝冰','收到！你也早点睡，别又偷偷熬夜',22),
  fanComment('tinyplanet','Good night! I still have homework 😭',17,'晚安！我还有作业没写完😭'),
  fanComment('토끼풀집','사진 색감 좋다 어디서 찍었어요?',26,'照片颜色真好看，在哪里拍的？'),
  fanComment('薄荷不加糖','这张好适合当壁纸，已经换上了',36),
  fanComment('saturnletters','Sleep well Hanjin, see you tomorrow 💤',14,'睡个好觉韩振，明天见💤'),
  fanComment('빵굽는밤','나도 이제 자러 갈게ㅎㅎ 잘 자',32,'我也准备去睡了ㅎㅎ晚安'),
  fanComment('普通小猫一只','晚安晚安！明天也会来看的',11),
  fanComment('jasmine42','Your post was the best part of my evening',20,'看到你的帖子是今晚最开心的事')
 ],
 'dohun-photos':[
  fanComment('카메라롤','첫 번째 사진 누가 찍어줬어요ㅋㅋ',58,'第一张照片是谁拍的ㅋㅋ'),
  fanComment('热牛奶加蜂蜜','两张完全不一样的感觉，都存！',34),
  fanComment('violetwaves','The lighting in the second one is so pretty',27,'第二张的光线好漂亮'),
  fanComment('구름한조각','오늘도 셀카 감사합니다🙇‍♀️',49,'今天也谢谢你发自拍🙇‍♀️'),
  fanComment('一颗咸蛋黄','哥这件外套真的好看',18),
  fanComment('toastandjam','New wallpaper found ✔️',30,'找到新壁纸了✔️'),
  fanComment('도토리서랍','사진 더 없어? 있으면 더 줘ㅎㅎ',44,'没有别的照片了吗？有的话再多发点ㅎㅎ'),
  fanComment('不想早起42','刚下课就有照片看，幸福了',13),
  fanComment('nora.m','Dohoon photo drop!! My day is made',23,'道勋发照片了！！今天圆满了')
 ],
 'hanjin-day':[
  fanComment('모닝귤','오늘 친구랑 밥 먹고 왔어! 한진이는?',24,'今天跟朋友去吃饭了！韩振呢？'),
  fanComment('今天没迟到','今天考试终于结束啦！！',39),
  fanComment('starrywindow','I went for a walk. It was freezing 😂',16,'我出去散步了，冷死了😂'),
  fanComment('42번버스','알바 끝나고 집 가는 중이에요',29,'兼职结束，正在回家的路上'),
  fanComment('草莓饭团','在整理房间，翻到了上次的票根',12),
  fanComment('ellie.blue','Made pancakes and burnt the first one lol',21,'做了煎饼，第一张煎糊了哈哈'),
  fanComment('조용한오후','하루 종일 누워 있었어ㅋㅋ 내일은 나갈게',31,'躺了一整天ㅋㅋ明天再出门'),
  fanComment('冰美式不要冰','练了一下午舞，腿已经不是自己的了',17),
  fanComment('mintcondition','Much better now that you are here 🥰',28,'你来了之后心情好多了🥰')
 ]
};
fanReplies.splice(0,fanReplies.length,
 fanComment('딸기모찌','생일 카페 다녀왔어요 컵홀더 너무 예뻐🥹'),
 fanComment('布丁要多加焦糖','给韩振画的小生日贺图终于画完了！！'),
 fanComment('luna.42','Baked a tiny birthday cake today 🎂'),
 fanComment('겨울산책러','밖에 진짜 추워요 생카 가는 42들 따뜻하게 입어요'),
 fanComment('今天也喝热水','蹲一个今天的生日直播🧎‍♀️'),
 fanComment('daisyletters','Does anyone know where to find the full fancam?'),
 fanComment('빵또생각','오늘 플레이리스트 투어스로 꽉 채웠다ㅎㅎ'),
 fanComment('橘子味的星期一','周一上班前先来看看韩振'),
 fanComment('planetblue','The birthday projects look so lovely this year 💙')
);
