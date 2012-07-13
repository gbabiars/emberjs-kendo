window.Demo = Ember.Application.create({
	ready: function() {
		console.log('ready');
	}
});

Demo.selectedDateController = Ember.Object.create({
	content: '7/12/2012'
});

Demo.initialize();