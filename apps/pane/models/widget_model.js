// ==========================================================================
// Project:   Pane.Widget
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Pane */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Pane.Widget = SC.Record.extend(
/** @scope Pane.Widget.prototype */ {

  // TODO: Add your own code here.
	name: SC.Record.attr(String, {isRequired: YES}),
	dongles: SC.Record.toMany('Pane.Dongle')

}) ;
