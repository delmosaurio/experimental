(function($, ko){

	var vm = {
		currentFlag: ko.observable(4)
	};

	//warning: delete me
	window.vm = vm;

	$('document').ready(function(){
		ko.applyBindings(vm);
	});

})(jQuery, ko)