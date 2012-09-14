module('Date Picker');

test('Create empty date picker', function() {
	var view = Kendo.DatePicker.create();

	appendToFixture(view);

	ok(view.$().data('kendoDatePicker'), 'Date Picker should exist on view');
});

test('Pass options hash', function() {
	var view = Kendo.DatePicker.create({
		options: {
			value: new Date(2012, 7, 1)
		}
	});

	appendToFixture(view);

	equal(view.get('value').toDateString(), 'Wed Aug 01 2012', 'Date should be 8/1/2012');
});

test('Pass in initial date value as string', function() {
	var view = Kendo.DatePicker.create({
		value: '8/1/2012'
	});

	appendToFixture(view);

	equal(view.get('value').toDateString(), 'Wed Aug 01 2012', 'Date should be 8/1/2012');
});

test('Date format should display correctly', function() {
	var view = Kendo.DatePicker.create({
		format: 'yyyy/MM/dd',
		value: '8/1/2012'
	});

	appendToFixture(view);

	equal($(view.$().data('kendoDatePicker').element).val(), '2012/08/01', 'Should format date to year/month/day');
});

test('Pass in date object as value', function() {
	var view = Kendo.DatePicker.create({
		value: new Date(2012, 7, 1)
	});

	appendToFixture(view);

	equal(view.get('value').toDateString(), 'Wed Aug 01 2012', 'Date should be 8/1/2012');
})

test('Set min and max value when creating the date picker', function() {
	var view = Kendo.DatePicker.create({
		min: '8/1/2012',
		max: '9/1/2012'
	});

	appendToFixture(view);

	equal(view.get('min').toDateString(), 'Wed Aug 01 2012', 'Min date should be 8/1/2012');
	equal(view.get('max').toDateString(), 'Sat Sep 01 2012', 'Max date should be 9/1/2012');
});

test('Pass in other options', function() {
	var view = Kendo.DatePicker.create({
		culture: 'de-DE',
		depth: 'year',
		start: 'century'
	});

	appendToFixture(view);

	var datePickerOptions = view.$().data('kendoDatePicker').options;
	equal(datePickerOptions.culture, 'de-DE', 'Culture should be de-DE');
	equal(datePickerOptions.depth, 'year', 'Depth should be decade');
	equal(datePickerOptions.start, 'century', 'Start should be year');
});

test('Date is updated then the value should be as well', function() {
	var view = Kendo.DatePicker.create({
		value: '8/1/2012'
	});

	appendToFixture(view);
	view.$().data('kendoDatePicker').value(new Date(2012, 8, 1));
	view.$().data('kendoDatePicker').trigger('change');

	equal(view.get('value').toDateString(), 'Sat Sep 01 2012', 'Value should have changed to 9/1/2012');
});

test('Date is changed from code, should update the display value', function() {
	var view = Kendo.DatePicker.create({
		value: '8/1/2012'
	});

	appendToFixture(view);
	Ember.run(function() {
		view.set('value', '9/1/2012');
	});

	equal(view.get('value').toDateString(), 'Sat Sep 01 2012', 'Value should have changed to 9/1/2012');
	equal(view.$().data('kendoDatePicker').value().toDateString(), 'Sat Sep 01 2012', 'Value should have changed to 9/1/2012');
});