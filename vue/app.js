const
	Vue = require('./init/Vue');

var root = new Vue({
	el: '#app',
	template: require('./view/layout.html'),
	replace: true,
	data: {
		page: {
			title: 'Hello world',
			partialID: 'index',
			url: '#/'
		}
	}
});

module.exports = root;