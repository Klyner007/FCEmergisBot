require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const pickup_lines = [
  "There is something wrong with my phone. It doesn’t have your number in it.",
  "I’m new in town. Could you give me directions to your apartment?",
  "Is your name Google? Because you’ve got everything I’m searching for.",
  "Have you been to the doctors lately? Cause I think you’re lacking some vitamin me.",
  "Kiss me if I’m wrong, but dinosaurs still exist, right?",
  "Are you Australian? Because you meet all of my koala-fications.",
  "Do you believe in love at first sight or should I walk past again?",
  "Hey, my name’s Microsoft. Can I crash at your place tonight?",
  "Did it hurt when you fell from the vending machine? Cause you look like a snack!",
  "You are hotter than the bottom of my laptop.",
  "I’m not actually this tall. I’m sitting on my wallet.",
  "Are you my phone charger? Because without you, I’d die.",
  "Hi, I’m Mr Right, somebody said you were looking for me?",
  "Excuse me, do you know how much a polar bear weighs? No? Me neither but it breaks the ice.",
  "Do you like raisins? How do you feel about a date?",
  "Sorry, but you owe me a drink. [Why?] Because when I looked at you, I dropped mine.",
  "Hey, tie your shoes! I don’t want you falling for anyone else.",
  "Wouldn’t we look cute on a wedding cake together?",
  "There’s only one thing I want to change about you, and that’s your last name.",
  "Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.",
  "My buddies bet me that I wouldn’t be able to start a conversation with the hottest person in the bar. Wanna buy some drinks with their money?",
  "(hold out hand) Would you hold this for me while I go for a walk?",
  "Remember me? Oh, that’s right, I’ve met you only in my dreams.",
  "If I told you that you had a great body, would you hold it against me?",
  "I’m going to have to ask you to leave. You’re making the other girls look bad.",
  "Is there an airport nearby or is it my heart taking off?",
  "Are you sure you’re not tired? You’ve been running through my mind all day.",
  "Would you grab my arm, so I can tell my friends I’ve been touched by an angel?",
  "Hello. Cupid called. He wants to tell you that he needs my heart back.",
  "I’m not a photographer, but I can picture me and you together.",
  "Is it hot in here or is it just you?",
  "Did it hurt when you fell out of heaven",
  "[Pick up some cutlery] I’ve got all these knives and forks, all I need is a little spoon.",
  "Hey, is that guy bothering you? No? Would you mind if I bothered you then?",
];

const jokes = [
  "I accidentally handed my wife a glue stick instead of chapstick. She still isn’t talking to me.",
  "I’m reading a book about anti-gravity. It’s impossible to put down.",
  "I wasn’t originally going to get a brain transplant, but then I changed my mind.",
  "R.I.P boiled water. You will be mist.",
  "Alcohol is a perfect solvent: It dissolves marriages, families, and careers.",
  "I got a new pair of gloves today, but they’re both ‘lefts’ which, on the one hand, is great, but on the other, it’s just not right.",
  "My wife just found out I replaced our bed with a trampoline; she hit the roof.",
  "What is the best thing about living in Switzerland? Well, the flag is a big plus.",
  "Atheism is a non-prophet organization.",
  "Did you hear about the guy who got hit in the head with a can of soda? He didn’t get hurt because it was a soft drink.",
  "The future, the present, and the past walked into a bar. Things got a little tense.",
  "At what age is it appropriate to tell my dog that he’s adopted?",
  "I just found out I’m colorblind. The diagnosis came completely out of the purple.",
  "I bought some shoes from a drug dealer. I don’t know what he laced them with, but I’ve been tripping all day.",
  "My boss is going to fire the employee with the worst posture. I have a hunch, it might be me.",
  "I started out with nothing, and I still have most of it.",
  "Smoking will kill you… Bacon will kill you… And yet, smoking bacon will cure it.",
  "I was addicted to the hokey pokey… but thankfully, I turned myself around.",
  "Did Noah include termites on the ark?",
  "The Man Who Created Autocorrect Has Died. Restaurant In Peace.",
  "I used to think I was indecisive, but now I’m not too sure.",
  "My wife likes it when I blow air on her when she’s hot, but honestly… I’m not a fan.",
  "I really hate Russian dolls, they’re so full of themselves.",
  "The first time I got a universal remote control I thought to myself, “This changes everything”.",
  "I refused to believe father, the road worker, was stealing from his job, but when I got home all the signs were there.",
  "I recently decided to sell my vacuum cleaner — all it was doing was gathering dust.",
  "PMS jokes are not funny — period!",
  "Where there’s a will, there’s a relative.",
  "It’s hard to explain puns to kleptomaniacs — they’re always taking things literally.",
  "I like to hold hands at the movies… which always seems to startle strangers.",
  "Women should not have children after 35 — 35 children are enough!",
  "There are three kinds of people: those who can count and those who can’t",
  "Whenever I lose my TV controller, I always find it at a remote location.",
  "My first job was working in an orange juice factory, but I got canned: I just couldn’t concentrate.",
  "My math teacher called me average — it’s so mean!",
  "“The easiest time to add insult to injury is when you’re signing somebody’s cast.” – Demetri Martin",
  "I don’t have an attitude problem. You have a perception problem.",
  "I’m skeptical of anyone who tells me they do yoga every day — that’s a bit of a stretch.",
  "Light travels faster than sound, which is why some people appear bright before they open their mouth.",
  "“It’s sad that a family can be torn apart by something as simple as wild dogs.” – Jack Handey",
  "I don’t have a boyfriend, but I do know a guy who would be really mad to hear that.",
  "“The worst time to have a heart attack is during a game of charades.” – Demetri Martin",
  "When life gives you melons, you might be dyslexic.",
  "“I don’t want to be part of a club that would have me as a member.” – Groucho Marx",
  "“Does my wife think I’m a control freak? I haven’t decided yet.” – Stewart Francis",
  "“The New England Journal of Medicine reports that 9 out of 10 doctors agree that 1 out of 10 doctors is an idiot.” – Jay Leno",
  "“I have a lot of growing up to do. I realized that the other day inside my fort.” – Zach Galifianakis",
  "“Honesty may be the best policy, but it’s important to remember that apparently, by elimination, dishonesty is the second-best policy.” – George Carlin",
  "“I looked up my family tree and found out I was the sap.” – Rodney Dangerfield",
  "Keep the dream alive — hit your snooze button.",
  "It sure takes a lot of balls to golf the way I do.",
  "“My therapist says I have a preoccupation with vengeance. We’ll see about that.” – Stewart Francis",
  "I was wondering why the ball kept getting bigger and bigger, and then it hit me.",
  "The person who invented knock-knock jokes should get a no bell prize.",
  "The other day I asked the banker to check my balance, so she pushed me.",
  "For a while, Houdini would use a trap door in every single one of his shows – I guess you could say it was a stage he was going through.",
  "I hope there’s no pop quiz at the class trip to the Coca-Cola factory.",
  "If money doesn’t grow on trees, how come banks have branches?",
  "I didn’t like my beard at first, but it grew on me.",
  "Give me the calculator, friends don’t let friends derive drunk.",
  "A baseball walks into a bar —  the bartender throws it out.",
  "I doubt, therefore I might be.",
  "I used to have a handle on life, but then it broke.",
  "I had an “hourglass” figure, but then the sand shifted.",
  "When everything is coming your way — you’re in the wrong lane.",
  "  Animal testing is a terrible idea — they get all nervous and give the wrong answers",
  "“I was playing chess with my friend and he said, ‘Let’s make this interesting’. So we stopped playing chess.” — Matt Kirshen",
  "“Crime in multi-story car parks. That is wrong on so many different levels.” — Tim Vine",
  "“I was raised as an only child, which really annoyed my sister.” —Will Marsh",
  "“People who use selfie sticks really need to have a good, long look at themselves.” — Abi Roberts",
  "“A thesaurus is great. There’s no other word for it” —Ross Smith",
  "“I failed math so many times at school I can’t even count.” — Stewart Francis",
  "“Two fish in a tank. One says: ‘How do you drive this thing?'” — Peter Kay",
  "“I saw a documentary on how ships are kept together. Riveting!” — Stewart Francis",
  "“People who like trance music are very persistent. They don’t techno for an answer.” — Joel Dommett",
  "“Do Transformers get car or life insurance?” – Russell Howard",
  "“My father drank so heavily, when he blew on the birthday cake he lit the candles.” – Les Dawson",
  "I once saw two people wrapped in a barcode and had to ask — “are you an item?”",
  "I went to buy camouflage trousers but I couldn’t find any.",
  "“Alright lads, a giant fly is attacking the police station. I’ve called the SWAT team!” — Greg Davies",
  "“I usually meet my girlfriend at 12:59 because I like that one-to-one time.” — Tom Ward",
  "“I like a woman with a head on her shoulders. I hate necks.” — Steve Martin",
  "My husband and I were happy for 20 years. And then we met.",
  "I, for one, like Roman numerals.",
  "When my boss asked me who was stupid, me or him, I told him he doesn’t hire stupid people.",
  "Any married person should forget their mistakes. No use two people remembering the same thing.",
  "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
  "I, for one, like Roman numerals.",
  "I have an inferiority complex, but it’s not a very good one.",
  "“People tell me I’m condescending…” (Leans in real close) “That means I talk down to people. “",
  "“By the time a man is wise enough to watch his step he is too old to go anywhere.” — Billy Crystal",
  "“Proof that we don’t understand death is that we give dead people a pillow.” — Jerry Seinfeld",
  "“Don’t talk to me about Valentine’s Day. At my age, an affair of the heart is a bypass.” — Joan Rivers",
  "“Learning to dislike children at an early age saves a lot of expense and aggravation later in life.” — Ed Byrne",
  "“I failed math so many times in school I lost count.” — Stewart Francis",
  "“Oh, when I was a kid in show business I was poor. I used to go to orgies to eat the grapes.” — Rodney Dangerfield",
  "“In the school I went to, they asked a kid to prove the law of gravity and he threw the teacher out of the window.”— Rodney Dangerfield",
  "“I looked up my family tree and found three dogs using it.”— Rodney Dangerfield",
  "“One time my whole family played hide and seek. They found my mother in Pittsburgh!” — Rodney Dangerfield",
  "“I met the surgeon general – he offered me a cigarette.”— Rodney Dangerfield",
  "I at a clock yesterday… it was very time-consuming.",
  "A perfectionist walked into a bar — apparently, the bar wasn’t set high enough.",
  "A termite walks into the bar and asks, “Is the bar tender here?”",
  "Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
  "Always borrow money from a pessimist; they’ll never expect it back.",
];

const fun_facts = [
  "Sex is not the answer. Sex is the question. “Yes” is the answer.",
  "Love is a temporary insanity curable by marriage.",
  "We live in a society where pizza gets to your house before the police.",
  "I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.",
  "We never really grow up, we only learn how to act in public.",
  "Men have two emotions: Hungry and Horny. If you see him without an erection, make him a sandwich.",
  "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
  "War does not determine who is right – only who is left.",
  "If I agreed with you we’d both be wrong.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "Politicians and diapers have one thing in common. They should both be changed regularly, and for the same reason.",
  "Children: You spend the first 2 years of their life teaching them to walk and talk. Then you spend the next 16 years telling them to sit down and shut-up.",
  "I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.",
  "Knowledge is knowing a tomato is a fruit; Wisdom is not putting it in a fruit salad.",
  "Evening news is where they begin with ‘Good evening’, and then proceed to tell you why it isn’t.",
  "The future will soon be a thing of the past.",
  "My mother never saw the irony in calling me a son-of-a-bitch.",
  "I didn’t fight my way to the top of the food chain to be a vegetarian",
  "If you think nobody cares if you’re alive, try missing a couple of payments.",
  "I thought I wanted a career, turns out I just wanted paychecks.",
  "If God is watching us, the least we can do is be entertaining.",
  "Better to remain silent and be thought a fool, than to speak and remove all doubt.",
  "Accept that some days you're the pigeon, and some days you're the statue.",
  "Some people are like Slinkies … not really good for anything, but you can’t help smiling when you see one tumble down the stairs.",
  "How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?",
  "Did you know that dolphins are so smart that within a few weeks of captivity, they can train people to stand on the very edge of the pool and throw them fish?",
  "A bank is a place that will lend you money, if you can prove that you don’t need it.",
  "Why do they lock gas station bathrooms? Are they afraid someone will clean them?",
  "Never, under any circumstances, take a sleeping pill and a laxative on the same night.",
  "To steal ideas from one person is plagiarism. To steal from many is research.",
  "A computer once beat me at chess, but it was no match for me at kick boxing.",
  "I saw a woman wearing a sweat shirt with “Guess” on it…so I said “Implants?”",
  "Why does someone believe you when you say there are four billion stars, but check when you say the paint is wet?",
  "A clear conscience is usually the sign of a bad memory.",
  "The voices in my head may not be real, but they have some good ideas!",
  "Good girls are bad girls that never get caught.",
  "Women will never be equal to men until they can walk down the street with a bald head and a beer gut, and still think they are sexy.",
  "Laugh at your problems, everybody else does.",
  "The shinbone is a device for finding furniture in a dark room.",
  "Whenever I fill out an application, in the part that says “If an emergency, notify:” I put “DOCTOR”. What’s my mother going to do?",
  "He who smiles in a crisis has found someone to blame.",
  "The main reason Santa is so jolly is because he knows where all the bad girls live.",
  "I didn’t say it was your fault, I said I was blaming you.",
  "Artificial intelligence is no match for natural stupidity.",
  "God must love stupid people. He made SO many.",
  "Behind every successful man is his woman. Behind the fall of a successful man is usually another woman.",
  "The sole purpose of a child’s middle name, is so he can tell when he’s really in trouble.",
  "Never get into fights with ugly people, they have nothing to lose.",
  "Always borrow money from a pessimist. He won’t expect it back.",
  "Never hit a man with glasses. Hit him with a baseball bat.",
  "My opinions may have changed, but not the fact that I am right.",
  "Some people say “If you can’t beat them, join them”. I say “If you can’t beat them, beat them”, because they will be expecting you to join them, so you will have the element of surprise.",
  "Some cause happiness wherever they go. Others whenever they go.",
  "It’s not the fall that kills you; it’s the sudden stop at the end.",
  "Crowded elevators smell different to midgets.",
  "Hospitality: making your guests feel like they’re at home, even if you wish they were.",
  "You do not need a parachute to skydive. You only need a parachute to skydive twice.",
  "Nostalgia isn’t what it used to be.",
  "I discovered I scream the same way whether I’m about to be devoured by a great white shark or if a piece of seaweed touches my foot.",
  "A bargain is something you don’t need at a price you can’t resist.",
  "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you’re ugly too.",
  "I intend to live forever. So far, so good.",
  "Money can’t buy happiness, but it sure makes misery easier to live with.",
  "A diplomat is someone who can tell you to go to hell in such a way that you will look forward to the trip.",
  "We have enough gun control. What we need is idiot control.",
  "You’re never too old to learn something stupid.",
  "I should’ve known it wasn’t going to work out between my ex-wife and me. After all, I’m a Libra and she’s a bitch.",
  "A little boy asked his father, “Daddy, how much does it cost to get married?” Father replied, “I don’t know son, I’m still paying.”",
  "With sufficient thrust, pigs fly just fine.",
  "Women may not hit harder, but they hit lower.",
  "Knowledge is power, and power corrupts. So study hard and be evil.",
  "There’s a fine line between cuddling and holding someone down so they can’t get away.",
  "I don’t trust anything that bleeds for five days and doesn’t die.",
  "Worrying works! 90% of the things I worry about never happen.",
  "Why do Americans choose from just two people to run for president and 50 for Miss America?",
  "I always take life with a grain of salt, …plus a slice of lemon, …and a shot of tequila.",
  "If at first you don’t succeed, skydiving is not for you!",
  "I used to be indecisive. Now I’m not sure.",
  "When in doubt, mumble.",
  "I like work. It fascinates me. I sit and look at it for hours.",
  "To be sure of hitting the target, shoot first and call whatever you hit the target.",
  "Jesus loves you, but everyone else thinks you’re an asshole.",
  "A bus is a vehicle that runs twice as fast when you are after it as when you are in it.",
  "A TV can insult your intelligence, but nothing rubs it in like a computer.",
  "Circular Definition: see Definition, Circular.",
  "I got in a fight one time with a really big guy, and he said, “I’m going to mop the floor with your face.” I said, “You’ll be sorry.” He said, “Oh, yeah? Why?” I said, “Well, you won’t be able to get into the corners very well.”",
  "Some people hear voices.. Some see invisible people.. Others have no imagination whatsoever.",
  "You are such a good friend that if we were on a sinking ship together and there was only one life jacket… I’d miss you heaps and think of you often.",
  "When tempted to fight fire with fire, remember that the Fire Department usually uses water.",
  "Hallmark Card: “I’m so miserable without you, it’s almost like you’re still here.”",
  "Virginity is like a soap bubble, one prick and it is gone.",
  "Change is inevitable, except from a vending machine.",
  "If winning isn’t everything why do they keep score?",
  "If you keep your feet firmly on the ground, you’ll have trouble putting on your pants.",
  "If you are supposed to learn from your mistakes, why do some people have more than one child.",
  "Eagles may soar, but weasels don't get sucked into jet engines.",
];
const PREFIX = "!";

client.on("messageDelete", (msg) => {
  msg.reply("Stop deleting messages!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  const content = msg.content;
  if (content === "Merry") {
    msg.reply("Christmas!");
  } else if (content.indexOf("love") > -1 || content.indexOf("Love") > -1) {
    msg.react("❤️");
  }

  if (content.indexOf("${PREFIX}" === 0)) {
    switch (content.substr(1, content.length)) {
      case "help":
        break;
      case "avatar_url":
        const avatarUrl = msg.author.avatarURL();
        if (avatarUrl) {
          msg.reply("You can find your own avatar at '${avatarUrl}'.");
        } else {
          msg.reply("You don't have an avatar...");
        }
        break;
      case "activity":
        console.log(msg);
        break;
      case "pickup_line":
        msg.reply(
          pickup_lines[Math.floor(Math.random() * pickup_lines.length)]
        );
        break;
      case "joke":
        msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
        break;
      case "fact":
        msg.reply(fun_facts[Math.floor(Math.random() * fun_facts.length)]);
        break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
