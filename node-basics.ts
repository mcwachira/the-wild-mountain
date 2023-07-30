//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


//New Timers , tasks, operations   are recorded from myFile running
myFile.runContents()


function shouldContinue() {

    //checkOne:Any pending setTimout, setInterval, setImmediate?
    //checkTwo: Any pending Os tasks? (Like server listening to port)
    //check Three:Any pending long-running operations? (Like fs module)

 return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

//Entire body executes in one 'tick'

while(shouldContinue()){

    //1) Node looks at pendingTimers and sees if any functions are ready to be called . SetTimeout, setInterval

    //2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    //3) Pause execution Continue when
    // -a pendingOSTask is done
    // -a pendingOperation is done
    // -a timer is about to complete


    //4) Look at pendingTimers . call any setImmediate

    //5) Handle any close events



}



//exit back to terminal


