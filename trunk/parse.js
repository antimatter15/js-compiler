
//finds end to a group of brackets, quotes, etc.

//(function(){})(la la la)
//             ^ This is where it ends! yay!

function find(str){
  var chrs = str.split("");
  
  var levels = {
    bracket: 0,
    curlybracket: 0,
    parenthesis: 0
  }
  
  var is_tainted = false;
  var is_string = false;
  var is_escape = false;
  
    var open = ({
      "[": "bracket",
      "{": "curlybracket",
      "(": "parenthesis"
    });
    var close = ({
      "]": "bracket",
      "}": "curlybracket",
      ")": "parenthesis"
    });
    var string = '"' + "'"; //single quote or double quote
    var escape = "\\"; //little slashy thing
  
  for(var i = 0; i < chrs.length; i++){
    var chr = chrs[i];
    
    if(!is_string & string.indexOf(chr) != -1){
      is_string = chr;
    }else if(is_string === chr && !is_escape){
      is_string = false;
    }
    
    if(chr == escape){
      is_escape = true;
    }else{
      is_escape = false;
    }
    
    
    if(is_string){
      //do nothing;
    }else if(open[chr]){
      //open
      levels[open[chr]]++;
      is_tainted = true;
    }else if(close[chr]){
      //close
      levels[close[chr]]--;
      is_tainted = true;
    }
    
    if(is_tainted &&
      levels.bracket == 0 &&
      levels.curlybracket == 0 &&
      levels.parenthesis == 0){
      return i;
    }
    
  }
  
  return false;
}