(function(){
  Common = new Function;
  Common.prototype.log = function () {
    if(console.log){
      console.log(arguments);
    }
  }

  window.common = new Common;
}())
Common = new Function();




