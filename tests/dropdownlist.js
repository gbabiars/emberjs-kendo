module('Drop Down List');

test('Create empty list', function() {
	var view = Kendo.DropDownList.create();

	appendToFixture(view);

	ok(view.$().data('kendoDropDownList'), 'The view should have the data kendoDropDownList');
});

test('Bind to simple data', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two']
	});

	appendToFixture(view);

	equal(view.$().data('kendoDropDownList').dataSource.data().length, 2, 'Should have two items in data');
});

test('Bind to controller', function() {
	var controller = Ember.ArrayController.create({
		content: ['one', 'two']
	});
	var view = Kendo.DropDownList.create({
		content: controller.content
	});

	appendToFixture(view);

	equal(view.$().data('kendoDropDownList').dataSource.data().length, 2, 'Should have two items in data');
});

test('Bind to data with text and value', function() {
	var view = Kendo.DropDownList.create({
		content: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }],
		dataValueField: 'value',
		dataTextField: 'text'
	});

	appendToFixture(view);

	equal(view.$().data('kendoDropDownList').dataSource.data().length, 2, 'Should have two items in data');
	equal(view.$().data('kendoDropDownList').text(), 'One', 'Should have the text One');
	equal(view.get('value'), 1, 'Should have the value 1');
});

test('Set default value', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		value: 'two'
	});

	appendToFixture(view);

	equal(view.get('value'), 'two', 'Two should be the default value');
});

test('Set the default value from controller', function() {
	var controller = Ember.ArrayController.create({
		content: ['one', 'two'],
		value: 'two'
	});
	var view = Kendo.DropDownList.create({
		content: controller.get('content'),
		value: controller.get('value')
	});

	appendToFixture(view);

	equal(view.get('value'), 'two', 'Two should be the default value');
});

test('Changed list value updates value binding', function() {
	var controller = Ember.ArrayController.create({
		content: ['one', 'two'],
		value: 'one'
	});
	var view = Kendo.DropDownList.create({
		content: controller.get('content'),
		valueBinding: controller.get('value')
	});

	appendToFixture(view);
	view.$().data('kendoDropDownList').value('two');
	view.$().data('kendoDropDownList').trigger('change');


	equal(view.get('value'), 'two', 'The value should change to two');
});

test('Changed view value updates the list value', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		value: 'one'
	});

	appendToFixture(view);
	Ember.run(function() {
		view.set('value', 'two');
	});
	
	equal(view.get('value'), 'two', 'The value should change to two');
});

test('Changing list triggers change event', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		changed: false,
		onChange: function() {
			this.set('changed', true);
		}
	});

	appendToFixture(view);
	view.$().data('kendoDropDownList').trigger('change');

	ok(view.get('changed'), 'Changed should be true');
});

test('Opening list triggers open event', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		opened: false,
		onOpen: function() {
			this.set('opened', true);
		}
	});

	appendToFixture(view);
	view.$().data('kendoDropDownList').trigger('open');

	ok(view.get('opened'), 'Opened should be true');
});

test('Closing list triggers close event', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		closed: false,
		onClose: function() {
			this.set('closed', true);
		}
	});

	appendToFixture(view);
	view.$().data('kendoDropDownList').trigger('close');

	ok(view.get('closed'), 'Closed should be true');
});

test('Select by value should set the value', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		value: 'one'
	});

	appendToFixture(view);
	Ember.run(function() {
		view.set('value', 'two')
	});
	
	equal(view.get('value'), 'two', 'The value should change to two');
});

test('select by index should set index', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		value: 'one'
	});

	appendToFixture(view);
	Ember.run(function() {
		view.select(1);
	});
	
	equal(view.get('value'), 'two', 'The value should change to two');
});

test('Get text and value from list', function() {
	var view = Kendo.DropDownList.create({
		content: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }],
		dataValueField: 'value',
		dataTextField: 'text'
	});

	appendToFixture(view);

	equal(view.get('text'), 'One', 'Text should be One');
	equal(view.get('value'), 1, 'Value should be 1');
});

test('Can open list', function() {
	var view = Kendo.DropDownList.create({
		content: ['One', 'Two'],
		opened: false,
		onOpen: function() {
			this.set('opened', true);
		}
	});

	appendToFixture(view);
	Ember.run(function() {
		view.open();
	});

	equal(view.get('opened'), true, 'List should be open');
});

test('Can close list', function() {
	var view = Kendo.DropDownList.create({
		content: ['One', 'Two'],
		closed: false,
		onClose: function() {
			this.set('closed', true);
		}
	});

	appendToFixture(view);
	Ember.run(function() {
		view.$().data('kendoDropDownList').open();
		view.close();
	});

	equal(view.get('closed'), true, 'List should be open');
});

test('Placeholder for object', function() {
	var view = Kendo.DropDownList.create({
		content: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }],
		dataValueField: 'value',
		dataTextField: 'text',
		optionLabelValue: '',
		optionLabelText: 'Placeholder'
	});

	appendToFixture(view);
	Ember.run(function() {
		view.$().data('kendoDropDownList').select('');
	})

	equal(view.get('text'), 'Placeholder', 'Should have placeholder text');
});

test('Placeholder for string', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		optionLabel: 'Placeholder'
	});

	appendToFixture(view);
	
	equal(view.get('text'), 'Placeholder', 'Should have placeholder text');
});

test('Default index', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		index: 1
	});

	appendToFixture(view);

	equal(view.get('value'), 'two', 'Should have two selected');
});

test('Default index', function() {
	var view = Kendo.DropDownList.create({
		content: ['one', 'two'],
		index: 1
	});

	appendToFixture(view);

	ok(view.get('value'), 'Should have two selected');
});

test('Option has used instead of individual attributes', function() {
	var view = Kendo.DropDownList.create({
		content: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }],
		options: {
			dataTextField: 'text',
			dataValueField: 'value',
			value: '2'
		}
	});

	appendToFixture(view);

	equal(view.get('value'), 2, 'Should have 2 as the value');
	equal(view.get('text'), 'Two', 'Should have Two as the text');
});