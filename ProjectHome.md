A compiler for javascript that makes asynchronousity easy. Yes, I probably made that word up.

Simple code such as
```
include("moo.js");
alert(ajaxload("moo.txt"))
```
gets automatically compiled into
```
include("moo.js")(function(include_0948394){
  include_0948394;
  ajaxload("moo.txt")(function(ajaxload_024845){
    alert(ajaxload_024845)
  })
})
```