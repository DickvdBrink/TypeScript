//// [implicitAnyDeclareVariablesWithoutTypeAndInit.ts]
// this should be an error
var x;                 // error at "x"
declare var foo;       // error at "foo"
function func(k) { };  //error at "k"
func(x);

// this shouldn't be an error
var bar = 3;            
var bar1: any;          
declare var bar2: any; 
var x1: any; var y1 = new x1;

//// [implicitAnyDeclareVariablesWithoutTypeAndInit.js]
var x;
function func(k) {
}
;
func(x);
var bar = 3;
var bar1;
var x1;
var y1 = new x1;
