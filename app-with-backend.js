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

			// If we had a back end with an events endpoint set up that responds to GET requests
			this.$http.get('api/events')
				.success(function(events) {
					this.events = events;
				})
				.error(function(error) {
					console.log(error);
				});

		},

		// Adds an event to the existing events array
		addEvent: function() {

			// If we had an endpoint set up that responds to POST requests
			this.$http.post('api/events', this.event)
				.success(function(response) {
					this.events.push(this.event);
					console.log("Event added!");
				})
				.error(function(error) {
					console.log(error);
				});

		},

		// deleting events
		deleteEvent: function(index) {

			// prompting the user to confirm that they actually want to delete the event		
			if (confirm("Are you sure you want to delete this event?")) {

				// We could also delete an event if we had the events endpoint set up to delete data
				this.$http.delete('api/events/' + event.id)
					.success(function(response) {
						this.events.splice(index, 1);
					}).error(function(error) {
						console.log(error);
					});

			}
		}

	}
});