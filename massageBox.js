;(function( global, $ ) {

  var default_option = {

        msg         : null  ,
        beforeAlert : false ,
        afterAlert  : false ,
        animation   : true  ,
        type        : null  ,
        delay       : 1500
  }

 global_option = {
        float       : 'left',
        bottom      :  35   ,
        offsets     :  20   
 }
   , 

 Throw = function( msg ){
   try {
     if (window.console && console.log) 
       console['log']( msg );
    }catch(e){}
}

 ,

  errors = {
    'msg'  : 'Missing text',
    'type' : 'Missing type',
    'body' : 'Missing container'
  }

, hasChanged = false;  

 $.support.transition = (function() {

    var el = document.createElement('msgBox')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false 

  })()

  // http://blog.alexmaccaw.com/css-transitions
 $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

function MsgBox( options ){
    this.options   =  $.extend( default_option, options );
    this.root      = '.msgbox_container';
    this.box       = $( document ).find( this.root );
    this.cssFloats =  { left: 'slideInLeft', right: 'slideInRight' }
    this.count     = 0;

    this.create();
};


MsgBox.prototype.create = function(){

  if ( this.box.length < 1 ) Throw(errors['body']);


  this.count = $( this.root + ' > div' ).length;

  var domElement = $('<div></div>')
      .addClass('msg_box_in MsgBox_' + this.options.type)
      .attr({'data': this.count})
      .html(  this.options.msg  )

    $( this.root ).append( domElement );

      $.support.transition ? domElement
        .addClass('animated ' + this.cssFloats[global_option.float])
          .one( $.support.transition.end , $.proxy(this.clear, this)).emulateTransitionEnd( 1000 )
      : this.clear();
}

MsgBox.prototype.clear = function() { 
  $( this.root + ' > div[data="' + this.count + '"]')
    .removeClass('slideInLeft')
    .delay( this.options.delay )
    .fadeOut( 1500 , function(){
    $( this ).remove();
  }); 
}




// global export 

  global['msgBox'] = function ( option ) {
   $('.msgbox_container').length === 0 &&  
     (function(){
       $.extend( global_option, option.default || {} ) ;
        $('body').append( $('<div></div>')
         .addClass('msgbox_container')
         .css( global_option.float , global_option.offsets, { bottom: global_option.bottom })
         )
     })()
      if ( !option.msg  )  Throw(errors['msg']);
      if ( !option.type )  Throw(errors['type']);
    return new MsgBox( option );
 };
 

})( window, jQuery );
