/*globals Pane */

Pane.yourView = SC.SheetPane.create({
	layout: { width: 500, height: 200, centerX: 0, centerY: 0 },
	defaultResponder: 'Pane.statechart',
	contentView: SC.View.design({
		childViews: 'labelView buttonView'.w(),
		labelView: SC.ListView.design({
			contentBinding: 'Pane.donglesController', 
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


Pane.statechart = SC.Statechart.create({
	initialState: 'MAINSTATE',
	MAINSTATE: SC.State.design({

		enterState: function() {
			Pane.widgetController.set('content', Pane.store.find('Pane.Widget', 1));
			Pane.mainPane = SC.TemplatePane.append({layerId: 'pane', templateName: 'pane'});
		},
		
		showPane: function() {
      this.gotoState('SHOWINGPOPUP');
		},
    
    exitState: function(){
    
    }
	}),
	
	SHOWINGPOPUP: SC.State.design({
	  
	  nestedStore: null,
	  
	  enterState: function(){
	    this.nestedStore = Pane.store.chain();
	    var chainedWidget = this.nestedStore.find('Pane.Widget', 1);
			Pane.donglesController.set('content', chainedWidget.get('dongles'));
			Pane.yourView.append();
	  },
	  
	  hidePane: function(){
	    this.gotoState('MAINSTATE');
	  },
	  
	  exitState: function(){
	    Pane.donglesController.set('content',null);
	    this.nestedStore.destroy();
	    this.nestedStore = null;
			Pane.yourView.remove();
	  }
	})
});