Kendo.DropDownList = Ember.View.extend({

	fields: ['value', 'index', 'autoBind', 'delay', 'enable', 'height'],

	willInsertElement: function() {
		var options = this.get('options') || {};

		if(this.get('dataValueField') && this.get('dataTextField')) {
			options.dataValueField = this.get('dataValueField');
			options.dataTextField = this.get('dataTextField');
			if(this.get('optionLabelText') && this.get('optionLabelValue') !== undefined) {
				var optionLabel = {};
				optionLabel[options.dataValueField] = this.get('optionLabelValue');
				optionLabel[options.dataTextField] = this.get('optionLabelText');
				options.optionLabel = optionLabel;
			}
		} else if(this.get('optionLabel'))
			options.optionLabel = this.get('optionLabel');

		for(var i = 0; i < this.fields.length; i++) {
			field = this.fields[i];
			if(this.get(field)) {
				options[field] = this.get(field);
			}
		}
		if(this.get('content'))
			options.dataSource = this.get('content');

		options.change = $.proxy(this._change, this);
		options.open = $.proxy(this._open, this);
		options.close = $.proxy(this._close, this);


		this.$().kendoDropDownList(options);
		this.set('value', this._data().value());
		this.set('text', this._data().text());
	},
	_data: function() {
		return this.$().data('kendoDropDownList');
	},
	_change: function() {
		this.set('value', this._data().value());
		if(this.onChange)
			this.onChange();
	},
	_valueChanged: function() {
		this._data().value(this.get('value'));
	}.observes('value'),
	_open: function() {
		if(this.onOpen)
			this.onOpen();
	},
	_close: function() {
		if(this.onClose)
			this.onClose();
	},
	select: function(value) {
		this._data().select(value);
		this._change();
	},
	open: function() {
		this._data().open();
	},
	close: function() {
		this._data().close();
	}
});