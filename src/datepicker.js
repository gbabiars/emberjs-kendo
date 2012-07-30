(function() {
	Kendo.DatePicker = Ember.TextField.extend({
		didInsertElement: function() {
			this.$().kendoDatePicker();
		},
		kendoData: function() {
			this.$().data('kendoDatePicker');
		}
	});
})();