(function quine(){
    console.log('(' + quine.toString() + ')();');
})();
(function o(f) { console.log( f(o) + f(f) )}) (f => '(' + f + ')')
!function $(){console.log('!'+$+'()')}()