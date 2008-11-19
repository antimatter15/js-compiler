//standard library for compilier

function include(src){
  return function(callback){
    var s = document.createElement("script");
    s.src = src;
    s.type = "text/javascript";
    s.onload = callback;
    document.getElementsByTagName("HEAD")[0].appendChild(s);
  }
}

function ajaxload(url){
  return function(callback){
    var x=new(this.ActiveXObject?ActiveXObject:XMLHttpRequest)('Microsoft.XMLHTTP');
    x.open('GET', url, 1);
    x.onreadystatechange=function(){
      if(x.readyState>3){
        callback(x.responseText,x)
      }
    };
    x.send(d)
  }
}