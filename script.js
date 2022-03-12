function Question(text,choice,answer){
    this.text=text;
    this.choice=choice;
    this.answer=answer;


}
Question.prototype.checkanswer=function(answer){
    return this.answer===answer;
}


function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionindex=0;
}
Quiz.prototype.getquestion=function(){
    return this.questions[this.questionindex]
}
Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionindex;
}
Quiz.prototype.guess=function(ans){
    var quiz=this.getquestion();
    if(quiz.checkanswer(ans)){
        this.score++;
        

    }
    this.questionindex++;
}
var q1=new Question("2*3=?",["1","4","6","2"],"6");
var q2=new Question("20-4*5=?",["10","4","7","0"],"0");
var q3=new Question("10/2+3=",["5","8","2","13"],"8");
var questions=[q1,q2,q3]
var quiz=new Quiz(questions);



loadquestion();
function loadquestion(){
    
    if(quiz.isFinish()){
        showscore();
    }else{
        document.querySelector("#question").textContent=quiz.getquestion().text;
        for(var i=0;i<quiz.getquestion().choice.length;i++){
            var elements=document.querySelector("#choice"+i);
            elements.innerHTML=quiz.getquestion().choice[i];
            guess("btn"+i,quiz.getquestion().choice[i])
        }
        shownum();
    }
}


function guess(id,cavab){ 
        var btn=document.getElementById(id);
        btn.onclick=function(){
        quiz.guess(cavab);
        loadquestion()
        }

}
function showscore(){
    var sa=`<h1>Your Score:</h1><br><h3>${quiz.score}</h3>`;
    
    document.querySelector(".body").innerHTML=sa;
}
function shownum(){
    var total=quiz.questions.length;
    var num=quiz.questionindex+1;
    document.getElementById("progress").innerHTML="Question "+num+" of "+ total;
}