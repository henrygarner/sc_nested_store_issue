/*globals Pane */

Pane.statechart = SC.Statechart.create({
	initialState: 'mainState',
	mainState: SC.State.extend({
		enterState: function() {
			Pane.widgetController.set('content', Pane.store.find('Pane.Widget', 1));
			Pane.mainPane = SC.TemplatePane.append({layerId: 'pane', templateName: 'pane'});
		},
		showPane: function() {
			this.set('store', Pane.store.chain());
			var chainedWidget = this.get('store').find('Pane.Widget', 1);
			Pane.donglesController.set('content', chainedWidget.get('dongles'));
			
			this.set('pane', SC.SheetPane.create({
				layout: { width: 500, height: 200, centerX: 0, centerY: 0 },
				contentView: SC.View.design({
					childViews: 'labelView buttonView'.w(),
					labelView: SC.ListView.design({
						contentBinding: 'Pane.donglesController',
						contentValueKey: 'name',
						layout: {top : 10, left: 10, width: 150, height: 180 }
					}),
					buttonView: SC.ButtonView.design({
						target: 'parentView',
						action: 'hidePane',
						title: 'Cancel',
						isCancel: YES,
						layout: { top: 165, right: 15, width: 80 }
					}),
					hidePane: function() {
						Pane.statechart.sendEvent('hidePane');
					}
				})
			}).append());
		},
		hidePane: function() {
			this.get('store').discardChanges();
			this.get('pane').remove();
		}
	})
});