$(document).ready(function () {
    // YOUR CODE HERE!

    $(".add-items").submit(function(event){

    	event.preventDefault();

    	var value=$("#todo-list-item").val();
    	//Easter Egg
		if(value == "grocery shopping"){
			$("#list-items").append("<li><input type='checkbox' class='checkbox'> <img src='assets/grocery.gif' style='width:80px;height:45px'> <a class='remove'>x</a></li>");
		}
		else
			if(value){
				$("#list-items").append("<li><input type='checkbox' class='checkbox'> "+ value + "<a class='remove'>x</a></li>");	
				localStorage.setItem("listItems",$("#list-items").html());
				$('#todo-list-item').val("");
			}
    });

	$(document).on("change",".checkbox",function(){
		$(this).parent().addClass('completed');
	})

	$(document).on("click",".remove",function(){
		$(this).parent().slideUp("slow",function(){
				$(this).remove();	
		})
	})

});

