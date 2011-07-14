// ==========================================================================
// Project:   Pane.MainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Pane */

/** @class

  (Document Your View Here)

  @extends SC.Page
*/

Pane.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'buttonView'.w(),
    buttonView: SC.ButtonView.design({
	    layout: { top: 10, left: 10, width: 80 },
		target: 'Pane.statechart',
		action: 'showPane',
		title: 'Pane Me!'
	})
  })
});