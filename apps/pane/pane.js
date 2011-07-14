// ==========================================================================
// Project:   Pane
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Pane */

Pane = SC.Application.create({
	store: SC.Store.create().from('SC.Record.fixtures')
});

SC.ready(function() {
	Pane.statechart.initStatechart();
});
