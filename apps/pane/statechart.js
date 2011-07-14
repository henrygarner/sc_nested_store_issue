/*globals Pane */

Pane.statechart = SC.Statechart.create({
	initialState: 'mainState',
	mainState: SC.State.design({

		enterState: function() {
			Pane.widgetController.set('content', Pane.store.find('Pane.Widget', 1));
			Pane.getPath('mainPage.mainPane').append();
		},
		showPane: function() {
      		this.gotoState('showPane');
		},
    	exitState: function(){
    	}
	}),
	
	showPane: SC.State.design({
	  
	  nestedStore: null,
	  
	  enterState: function(){
	    this.nestedStore = Pane.store.chain();
	    var chainedWidget = this.nestedStore.find('Pane.Widget', 1);
		Pane.donglesController.set('content', chainedWidget.get('dongles'));
		Pane.sheetPane.append();
	  },
	  
	  hidePane: function(){
	    this.gotoState('mainState');
	  },
	  
	  exitState: function(){
	    Pane.donglesController.set('content',null);
	    this.nestedStore.destroy();
	    this.nestedStore = null;
		Pane.sheetPane.remove();
	  }
	})
});
