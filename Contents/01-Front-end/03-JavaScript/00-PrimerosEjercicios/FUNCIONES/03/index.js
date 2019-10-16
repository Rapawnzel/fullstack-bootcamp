
function tellFortune(numChildren, partName, geoLocation, jobTitle){
    if (numChildren > 1){
        document.write(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${numChildren} kids. <br><br>`);
    }
    else if (numChildren == 1){
        document.write(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${numChildren} kid. <br><br>`);
    }
    else{
        document.write(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with no kids. <br><br>`);
    }
    return 0;
}

tellFortune(4, "Jose", "Madrid", "lawyer");
tellFortune(2, "Yurimar", "Caracas", "teacher");
tellFortune(1, "Lee Sang Hyeok", "Seoul", "designer");

/*

3.- Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.


*/