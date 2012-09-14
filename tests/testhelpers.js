var appendToFixture = function(view) {
	Ember.run(function() {
		view.appendTo('#qunit-fixture');
	});
}