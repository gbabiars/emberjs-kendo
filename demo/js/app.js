window.App = Ember.Application.create({
	ready: function() {
		this.arraySimple.addObject("Basic 1");
		this.arraySimple.addObject("Basic 2");
		this.arrayDictionary.addObject({ id: 1, name: 'Item 1'});
		this.arrayDictionary.addObject({ id: 2, name: 'Item 2'});
	},
	arraySimple: Ember.ArrayProxy.create({
		content: []
	}),
	arrayDictionary: Ember.ArrayProxy.create({
		content: []
	})
});

App.initialize();