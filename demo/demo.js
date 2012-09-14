App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
	templateName: 'application'
});
App.ApplicationController = Ember.Controller.extend();

App.HomeController = Ember.Controller.extend();
App.HomeView = Ember.View.extend({
	templateName: 'home'
});

App.dropDownListController = Ember.ArrayController.create({
	content: ['One', 'Two'],
	value: 'Two'
});
App.DropDownListView = Ember.View.extend({
	templateName: 'dropdownlist'
});

App.datePickerController = Ember.ObjectController.create({
	value: new Date(2012, 7, 1)
});
App.DatePickerView = Ember.View.extend({
	templateName: 'datepicker'
});

App.Router = Ember.Router.extend({
	root: Ember.Route.extend({
		showHome: Ember.Route.transitionTo('index'),

		showDropDownList: Ember.Route.transitionTo('dropdownlist'),

		showDatePicker: Ember.Route.transitionTo('datepicker'),

		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function(router) {
				router.get('applicationController').connectOutlet('home');
			}
		}),

		dropdownlist: Ember.Route.extend({
			route: '/dropdownlist',
			connectOutlets: function (router) {
				router.get('applicationController').connectOutlet('dropDownList');
			}
		}),

		datepicker: Ember.Route.extend({
			route: '/datepicker',
			connectOutlets: function (router) {
				router.get('applicationController').connectOutlet('datePicker');
			}
		})
	})
});

App.initialize();