
$(document).ready(function(){
	console.log("loaded");
	$(document).on("submit","#sign_up_form",function (e) {
		// body...
		e.preventDefault();
		var form=$('#sign_up_form').serialize();
		$.ajax({
			url:'/post-sign-up',
			type:'POST',
			data:form,
			success:function(res){
				if(res=="PError"){
					alert("Password dosn't matches");
				}else if( res=="EUError"){
					 alert("username already taken");
				}else if( res!=""){
					 alert("Added Successfully");
					 window.location.href="/";
				}
			}
		});
	});
	$(document).on("submit","#log_in_form",function (e) {
		// body...
		e.preventDefault();
		var form=$('#log_in_form').serialize();
		$.ajax({
			url:'/post-log-in',
			type:'POST',
			data:form,
			success:function(res){
				if(res=="PError"){
					alert("Password dosn't matches");
				}else if( res=="UError"){
					 alert("user dosn't exists");
				}else if( res!=""){
					 alert("logged in");
					  window.location.href="/";
				}
			}
		});

	});
	$(document).on("click","#logoutB",function (e) {
		e.preventDefault();
		$.ajax({
			url: '/profile/log_out',
			type: 'GET',
			success:function(res){
				if( res=="success"){
					 alert(res);
					 window.location.href="/profile";
				}
			}
		});
		
	});
});