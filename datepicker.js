Kendo.DatePicker = Ember.TextField.extend({
	fields: ['culture', 'depth', 'start', 'format'],
	dateFields: ['min', 'max', 'value'],

	willInsertElement: function() {
		var i, f,
		options = {
			change: $.proxy(this._change, this)
		};

		if(this.get('options')) {
			options = this.get('options');
		} 
		else {

			for(i = 0; i < this.dateFields.length; i++) {
				f = this.dateFields[i];
				if(this.get(f))
					options[f] = kendo.parseDate(this.get(f));
			}
			
			
			for(i = 0; i < this.fields.length; i++) {
				f = this.fields[i];
				if(this.get(f)) {
					options[f] = this.get(f);
				}
			}
		}
		this.$().kendoDatePicker(options);
		this.set('value', this._data().value());
		this.set('min', this._data().min());
		this.set('max', this._data().max());
	},

	_data: function() {
		return this.$().data('kendoDatePicker');
	},

	_change: function() {
		this.set('value', this._data().value());
	},

	_fixupStringToDateOrSetKendoValue:	 function() {
		if(typeof this.get('value') === 'string')
			this.set('value', kendo.parseDate(this.get('value')));
		else
			this._data().value(this.get('value'));
	}.observes('value')
});