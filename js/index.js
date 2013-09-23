
$(function() {
  $("img", "ul").fadeOut("slow");
});

$("li").hover(
	function() {
		console.log("in");
		$(".project", this).fadeOut( "slow" );
		$("img", this).fadeIn("slow");
	}, function(){
		$(".project", this).fadeIn( "slow" );
		$("img", this).fadeOut("slow");
	}
);
