(function($, ko){

	var NAME
	  , SRC
	  , HREF
	  , TYPE
	  , SIZE
	  , STYLE;

	var attr = [
		{ id: 1, attr: 'name'  },
		{ id: 2, attr: 'src'  },
		{ id: 4, attr: 'href'  },
		{ id: 8, attr: 'type'  },
		{ id: 16, attr: 'size'  },
		{ id: 32, attr: 'style' }
	];

	var tags = [
		{ name: 'a', attrs: ( STYLE | HREF ) },
		{ name: 'input', attrs: ( STYLE | NAME | TYPE ) },
		{ name: 'select', attrs: ( STYLE | NAME | SIZE ) },
		{ name: 'font', attrs: ( STYLE | SIZE ) },
		{ name: 'img', attrs: ( STYLE | SRC ) }
	];

	var vm = {
		currentFlag: ko.observable(4),
		col1: ko.observable(false),
		col2: ko.observable(false),
		col3: ko.observable(false),
		col4: ko.observable(false)
	};

	vm.tableFlag = ko.computed(function(){
		var res = 0;

		res =   (this.col1() ? 1 : 0)
			  | (this.col2() ? 2 : 0)
			  | (this.col3() ? 4 : 0)
			  | (this.col4() ? 8 : 0);

		return res;
	}, vm);

	//warning: delete me
	window.vm = vm;

	$('document').ready(function(){
		ko.applyBindings(vm);
	});

})(jQuery, ko)