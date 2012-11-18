	//Custom Placeholders

	var email = $("#email");
	var password = $("#password");
	var search = $("#search");
	
	email.focus(function(){
		email.attr('Placeholder', '');
	});

	email.focusout(function(){
		email.attr('Placeholder', 'Your Email');
	});
	
	password.focus(function(){
		password.attr('Placeholder', '');
	});

	password.focusout(function(){
		password.attr('Placeholder', 'Your Password');
	});
	
	search.focus(function(){
		search.attr('Placeholder', '');
	});

	search.focusout(function(){
		search.attr('Placeholder', 'Search by tag/by genre');
	});