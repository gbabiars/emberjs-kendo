module('Datepicker');

var appendViewToFixture = function(view) {
	Ember.run(function() {
		view.appendTo($('#qunit-fixture'));
	});
};

test('default datepicker view should have kendoDatePicker data', function() {
	var view = Kendo.DatePicker.create({
		elementId: 'datepicker'
	});

	appendViewToFixture(view);

	ok($('#datepicker').data('kendoDatePicker'), 'kendoDatePicker should be in jquery data');
});

test('underlying kendo object should be accessible through kendoData field', function() {
	var view = Kendo.DatePicker.create();

	appendViewToFixture(view);

	equal(view.kendoData(), $('#datepicker').data('kendoDatePicker'));
});

test('should set to default value if supplied', function() {
	var view = Kendo.DatePicker.create({
		value: '7/1/2011'
	});

	appendViewToFixture(view);

	equal(view.$().val(), '7/1/2011');
});