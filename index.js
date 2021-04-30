// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string="*") { // 2
    let innerFunction =  function(lang="special") { // 3
        return `You are ${string}${lang}${string}!` // 4
    }
    return innerFunction
}
  
  wrapAdjective()
  mondayWork()
  saturdayFun()