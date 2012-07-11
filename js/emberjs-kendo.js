window.Kendo = window.Kendo || {};

// Views
Kendo.DatePicker = Ember.TextField.extend({
	didInsertElement: function() {
		var el = this.get('element');
		$(el).kendoDatePicker();
	}
});