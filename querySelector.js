 
 // Returns the first element that matches the specified group of selectors
 // @param  {String} - any valid selector
 // @param  {Element}
 // @return {Element||Null}
 
 // Use 'node' param to make your code faster
 // http://jsperf.com/context-versus-document
 // 90% slower without using 'node'
 
 function query( selector, node ) {
  // if is used not a valid selector 
  // it throws error "Failed to execute ...  is not a valid selector." 
   try {
    return ( node 
              || document ).querySelector( selector );
   }catch(e){
     return null;
   };
  }
