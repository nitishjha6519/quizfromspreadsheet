const newQuestion= document.getElementById("question");
const optiona = document.getElementById("a_label");
const optionb = document.getElementById("b_label");
const optionc = document.getElementById("c_label");
const optiond = document.getElementById("d_label");
const answerRadio= document.querySelectorAll(".answer");

const btn=document.querySelector(".btn");
const quizResult=document.querySelector(".quizContainer");
const showResult=document.querySelector(".showResult");


const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8';
const q1 = '/gviz/tq?&sheet=sheet1&tq=SELECT B,C,D,E,F,G where A contains "17-10-2021"';
//https://docs.google.com/spreadsheets/d/1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8/edit?usp=sharing
const endPoint=`${url}${ssid}${q1}`;


fetch(endPoint)
.then(function(res)
{
    return res.text() ;
})

.then(function(data){
   const temp=data.substr(47).slice(0,-2);
   console.log(temp);
   const json=JSON.parse(temp);
   

     const rows=json.table.rows;
 console.log(rows);
 console.log(rows.length);
 const rowslength=rows.length; // 1 --> there is one row with given query
let q=0;
let i=0;
let score=0;
let mydata1;

function selectQuest(){

    mydata1=rows[q].c; //got data in that row
   console.log(mydata1);
   console.log(mydata1.length);
  

}

   
   
   function loadQuiz()
   {deselectAnswers();
      selectQuest();
      
      newQuestion.textContent=mydata1[i].v;
      optiona.textContent=mydata1[i+1].v;
        optionb.textContent=mydata1[i+2].v;
     
        optionc.textContent=mydata1[i+3].v;
     
        optiond.textContent=mydata1[i+4].v;
   }
   loadQuiz();
  
   function deselectAnswers() {
      answerRadio.forEach(eachOption => {
         eachOption.checked = false;
      })
   
   }	

   function getSelected(){
      let selectedAnswer;
      answerRadio.forEach(eachOption=>{
         if(eachOption.checked){
            selectedAnswer=eachOption.id;
         }
      })
      if(selectedAnswer==mydata1[i+5].v){
         ++score;
      }
      console.log(selectedAnswer) ;
   
   }





   btn.addEventListener("click", function(){
            const selectedAnswer=getSelected();
         
            ++q;  
            if(q<rowslength){
         
            // console.log(i);
            loadQuiz();
            }
            else
            {
            console.log(`your score is ${score} out of  ${rowslength} questions `);
         console.log("finish");
         
            }
         
         
       })
      


 })


   

      


 


//  12iGTU-GYXAX1DAMK_NWqL7GUlctnqpsLlpW1WVR0f3I
//  1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8
        //https://docs.google.com/spreadsheets/d/12iGTU-GYXAX1DAMK_NWqL7GUlctnqpsLlpW1WVR0f3I/gviz/tq?-in-script&callback=

  