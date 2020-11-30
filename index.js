const chalk = require('chalk');

var readlineSync=require("readline-sync");
var userName=readlineSync.question(chalk.magentaBright.bold
("What is your Name ?  "));

console.log(chalk.cyanBright("Welcome "+userName.toUpperCase()+" , to CRICKET QUIZ :)"));
console.log()
console.log(chalk.italic(userName.toUpperCase()+", Answer the below questions carefully:)"));
score=0
console.log(chalk.bold(" Type 'a' or 'b' as the answer for below questions"));

function play(q,ans){
  console.log()
  var userAns=readlineSync.question(q);

  if (userAns.toLowerCase()===ans.toLowerCase()){
    console.log(chalk.green("You are Right :)"));
    score+=1
  }else{
    console.log(chalk.red("You are Wrong :("));
    score-=1
  }
  console.log(chalk.bold.magentaBright("Your SCORE :"+score));
  console.log(chalk.greenBright("-------------------"));
}

var highScores=[
  {
    name:"Satweek",
    score:6,
  },
   {
    name:"Nikeel",
    score:5,
  }
]

q1={
  q:`
   which country won 1983 world cup ?
  a : India
  b : England  
  `,
  ans:"a"
}
q2={
  q:`
  Where is “Chepauk Ground” situated ? ?
  a : Chennoi
  b : Bangalore  
  `,
  ans:"a"
}
q3={
  q:`
  Which Ipl team won 5 ipl titles ?
  a : Mi
  b : Csk  
  `,
  ans:"a"
}
q4={
  q:`
   “Straight from the Heart” is a book written by ?
  a : Kapil Dev
  b : Sachin Tendulkar 
  `,
  ans:"a"
}
var myQuestionsAre=[q1,q2,q3,q4];

for (var i=0;i<myQuestionsAre.length;i++){
  var currentQ=myQuestionsAre[i];
  play(currentQ.q,currentQ.ans)
}
console.log("HURRAY !, You Passed Level 1")
console.log(userName.toUpperCase()+", You Scored :"+score)
console.log("Welcome to Final Level ,Best of Luck!!")

q5={
  q:`
  Where did the 1st ODI match was played in India? ?
  a : Ahmedabad
  b : Mumbai
  `,
  ans:"a"
}
q6={
  q:`
  Who is known as king of spin ?
  a : Anil Kumble
  b : Shane Warne 
  `,
  ans:"b"
}

var level2queare=[q5,q6]
for (var i=0;i<level2queare.length;i++){
  var currentQ=level2queare[i];
  play(currentQ.q,currentQ.ans)
}

console.log(chalk.bold("HURRAY !, You Finished Quiz"));

console.log(chalk.bold.underline(userName.toUpperCase()+", You Scored :"+score));
console.log("----------");

console.log(chalk.italic("Check out the High scores :"));
console.log();

for(var i=0;i<highScores.length;i++){
  var currentPerson=highScores[i];
  console.log(currentPerson.name+" has scored "+currentPerson.score);
}

console.log(chalk.yellowBright.bold("Ty for Playing ,Bye :)")
    );