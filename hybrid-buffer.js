//
// *** HybridBuffer lib
//

HybridBuffer = function HybridBuffer( data ) {
  if ( Meteor.isClient ) {
    this._buffer = data;
  } else {
    this._buffer = new Buffer( data );
  }
}

HybridBuffer.transform = function( hybridBuffer ) {
  var collection = this;
  
  if ( Meteor.isClient ) {
    return String.fromCharCode.apply( null, hybridBuffer._buffer );
  } else {
    return new Buffer( hybridBuffer._buffer );
  }

};
