window.Kendo = window.Kendo || {};

// Views
(function() {
	var get = Ember.get, set = Ember.set;
	Kendo.DatePicker = Ember.TextField.extend({
		format: null,
		value: null,
		start: null,
		depth: null,
		didInsertElement: function() {
			var fields = ['format', 'value', 'start', 'depth'],
				options = {},
				el = this.get('element'),
				field;
			for(var i = 0; i < fields.length; i++) {
				field = fields[i];
				if(field === 'value' && this.get('value')) {
					options.value = new Date(this.get('value'));
				}
				else if(this.get(field)) {
					options[field] = this.get(field);
				}
			}
			$(el).kendoDatePicker(options);
		}
	});
})();