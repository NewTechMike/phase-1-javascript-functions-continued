// Your code here
function saturdayFun(act = "roller-skate"){
    return "This Saturday, I want to " + act + "!";

}

const mondayWork = function(act = "go to the office"){ 
    return "This Monday, I will " + act + ".";
}

function wrapAdjective(parm1 = "*"){

    return function(parm2 = "special"){
        return `You are ${parm1}${parm2}${parm1}!`; 

    }
}