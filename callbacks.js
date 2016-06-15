function makePasta(pasta, makeSauce){
  console.log("1 Boiling water");
  console.log("2 Putting " + pasta + " pasta in the water");
  var sauce = makeSauce(); // here we invoke the makeSauce parameter
                // note store makeSauce's return value in 'sauce' for later use
  console.log("3 Making sauce");
  console.log("4 Pasta is done!");
  return pasta + "  5 Pasta with " + sauce + " 6sauce! Voila!" ;
}
function makePesto() {
  console.log("*1 Making Pesto");
  return "*2 pesto";
}
function makeAlfredo() {
  console.log("**2 Making Alfredo");
  return "**1 alfredo";
}
console.log(makePasta("*Penne", makePesto));
console.log(makePasta("*Farfalle", makeAlfredo));

// 1. First: we created a function that makes pasta, passing in pasta and MakeSause
// as the parameter's. Immediately when the func is called, we want to print the
// first 2 steps. We created a variable sauce with makesauce function with an empty
// parameter so when it's automatically envoked, it will console log the makeSauce
// parameter. Next it will log steps 3 and 4. And when we return, we're asking
// it to return teh name of the pasta as "pasta" plus words plus the sauce's return
// so whatever the return for the variable of what makeSause is.
// after we must create a function for the "make sauces"; so we created make Pesto
// and make alfredo. When theyre invoked in the parameter, it will log it i the
// according step. and the return will return when we request for a return in the
// function. At the end we console log the makepasta with a parameter of "penne" as
// a type of pasta and makePesto will be our makeSause
// if we only console.log the makePasta as a param, it will only return the function
// named makePasta.
//
// note: we passed the whole makePesto recipe to makePasta
// we didnt add paren's after makeSause because we want to pass the function
// not execute it and pass a return value
// but if we wanted to, we will have to define the makePasta and makePesto's
// as a funtion
//
