window.Demo = Ember.Application.create({
	ready: function() {
		console.log('ready');
	}
});

Demo.selectedDateController = Ember.Object.create({
	content: '7/12/2012'
});

Demo.sportsController = Ember.ArrayController.create({
	content: [{id: 1, name: 'Basketball'}, {id: 2, name: 'Football'}, { id: 3, name: 'Baseball'}],
	selected: '2'
});

Demo.initialize();