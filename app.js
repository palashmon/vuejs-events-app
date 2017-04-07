// app.js
// Creating a Vue Instance    
new Vue({

	// We want to target the div with an id of 'events'
	el: '#events',

	// Here we can register any values or collections that hold data
	// for the application
	data: {

		event: {
			name: '',
			description: '',
			date: ''
		},
		events: []

	},

	// Anything within the created function will run when the application loads
	created: function() {

		// When the application loads, we want to call the method that initializes
		// some data
		this.fetchEvents();

	},

	// Methods we want to use in our application are registered here
	methods: {

		// We dedicate a method to retrieving and setting some data
		fetchEvents: function() {
			var events = [{
				id: 1,
				name: 'NodeConf Budapest',
				description: 'A one-day, single-track conference with a laser focus on what people need to know about Node.js. ',
				date: '2017-01-19'
			}, {
				id: 2,
				name: 'Script’17',
				description: 'A one-day event focused on JavaScript.',
				date: '2017-01-27'
			}, {
				id: 3,
				name: 'Front-Trends',
				description: 'Front-Trends focuses on front-end development.',
				date: '2017-05-24'
			}];

			// $set is a convenience method provided by Vue that is similar to pushing
			// data onto an array
			this.events = events;
			//this.$set('events', events);
		},

		// Adds an event to the existing events array
		addEvent: function() {
			if (this.event.name) {
				this.events.push(this.event);
				this.event = {
					name: '',
					description: '',
					date: ''
				};
			}
		},

		// deleting events
		deleteEvent: function(index) {			
			if (confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index, 1);
			}
		}

	}
});