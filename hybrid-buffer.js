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
