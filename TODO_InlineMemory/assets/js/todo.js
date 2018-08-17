$("input[type='text']").fadeOut();

//strike off or on specific todo when you click
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//clicking x removes that corresponding li
$("ul").on("click","span",function(event){
	console.log("clicked on x");
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){$(this).remove();});
})

//keypress on input element
$("input[type='text']").keypress(function(event){
	console.log("key press");
	if(event.which == 13)
	{
		var todoText = $(this).val();
		var todoElement = "<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>";
		$("ul").append(todoElement);
		$(this).val("");
	}
})

$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle();
});