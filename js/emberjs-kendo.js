window.Kendo = window.Kendo || {};

// Views
Kendo.DatePicker = Ember.TextField.extend({
	format: null,
	didInsertElement: function() {
		var options = {};
		if(this.get('format'))
			options.format = this.get('format');
		var el = this.get('element');
		$(el).kendoDatePicker(options);
	}
});