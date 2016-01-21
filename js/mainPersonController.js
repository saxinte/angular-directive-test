(function(root, doc, undefined) {

	'use strict';

	var MainPersonController = function() {

		this.firstPerson = {
			firstName: 'Sebastien',
			lastName: 'Axinte',
			role: 'Developer',
			age: '29',
			picture: 'http://i.istockimg.com/file_thumbview_approve/10368168/3/stock-photo-10368168-tabby-cat-looks-up.jpg'
		};

		this.secondPerson = {
			firstName: 'Liem',
			lastName: 'Pham',
			role: 'Developer',
			age: '29',
			picture: 'https://leonardusa.com/sites/default/files/styles/square/public/images/category/category/cat.png?itok=600AAuqQ'
		};

	};

	angular.module('myApp').controller('MainPersonController', [MainPersonController]);

})(window, document);