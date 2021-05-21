var input = [];
var tailleOfNearValue = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 

function ContestResponse(){
	//implement your code here using input array
	
	for (var i = 0; i < input.length; i++) {
	    
	    if(input[i] <= 250) {
	        tailleOfNearValue.push(+input[i]);
	    }

	}
	
	var max = tailleOfNearValue.reduce(function(a,b) {
        return Math.max(a, b);
   });
   console.log(max);
}



