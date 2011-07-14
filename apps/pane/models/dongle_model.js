// ==========================================================================
// Project:   Pane.Dongle
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Pane */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Pane.Dongle = SC.Record.extend(
/** @scope Pane.Dongle.prototype */ {

  // TODO: Add your own code here.
	name: SC.Record.attr(String, {isRequired: YES}),
	widgets: SC.Record.toMany('Pane.Widget')

}) ;
