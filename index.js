var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
if(katzDeliLine.length ===0) {
return "There is nobody waiting to be served!"
}
else{
return `Currently serving ${katzDeliLine.shift()}.`
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var customer = [];
   for (var i=0; i<katzDeliLine.length; i++) {
   customer.push(i+1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customer.join(", ");
}

//and returns the current line as a string; for example,
// if 'katzDeliLine' is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return
//"The line is currently: 1. Ada, 2. Grace"
