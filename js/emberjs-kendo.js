window.Kendo = window.Kendo || {};

// Views
Kendo.DatePicker = Ember.TextField.extend({
	options: {},
	format: null,
	value: null,
	didInsertElement: function() {
		var options = this.get('options');
		if(this.get('format'))
			options.format = this.get('format');
		if(this.get('value'))
			var dateValue = new Date(this.get('value'));
			options.value = dateValue;
		if(this.get('start'))
			options.start = this.get('start');
		var el = this.get('element');
		$(el).kendoDatePicker(options);
	}
});