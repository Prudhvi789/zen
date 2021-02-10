var securityQuestions = [
    {
    question: 'What was your first pets name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,gquestion,answer) {
    var c=0;   
    for(i in securityQuestions){
           if(securityQuestions[i].question===gquestion && securityQuestions[i].expectedAnswer==answer){
            c=1;       
            break;
           }                      
       }
       console.log(c===1 ? true : false);
   }

chksecurityQuestions(securityQuestions,'What was your first pets name?','FlufferNutter');   