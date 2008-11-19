//js++
//a compiler for javascript that makes asynchronousity easy
//100% awesome

function compile(str){ //does not work
  var i = 0;
  var fn = "include";
  while(i != -1){
    i = str.indexOf("include(", i);
    str = str.substr(0,i)+compilefn(str.substr(i), fn);
  }
  return str;
  
}

function compilefn(str, fn){  

  str = ";" + str;
  
  var fdex = str.indexOf(fn+"(")
  
  var edex = find(str.substr(fdex)) + 1;
  
  var startend = str.substr(fdex, edex);
  
  var outvar = fn + "_" + Math.floor(Math.random()*999999+99999);
  
  
  var ldex = str.substr(0, fdex).length - str.substr(0,fdex).split("").reverse().join("").indexOf(";")
  
  var start = str.substr(0, fdex).substr(0, ldex);
  
  var code = str.substr(0,fdex).substr(ldex);
  
  
  var newstr = start+startend+"(function("+outvar+"){\n"+code+outvar+str.substr(fdex+edex)+"\n})"
  
  //console.log(newstr)
  return newstr;
  
}