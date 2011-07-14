// ==========================================================================
// Project:   Pane.SheetPane
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Pane */

/** @class

  (Document Your View Here)

  @extends SC.SheetPane
*/

Pane.sheetPane = SC.SheetPane.create({
	layout: { width: 500, height: 200, centerX: 0, centerY: 0 },
	defaultResponder: 'Pane.statechart',
	contentView: SC.View.design({
		childViews: 'labelView buttonView'.w(),
		labelView: SC.ListView.design({
			contentBinding: 'Pane.donglesController.arrangedObjects', 
			contentValueKey: 'name',
			layout: {top : 10, left: 10, width: 150, height: 180 }
		}),
		buttonView: SC.ButtonView.design({
			action: 'hidePane',
			title: 'Cancel',
			isCancel: YES,
			layout: { top: 165, right: 15, width: 80 }
		})
	})
});
