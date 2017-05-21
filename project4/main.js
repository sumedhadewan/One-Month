$(document).ready(function(){

	//1. Ajax to download all listings from JSON link
	$.ajax({
		url:"https://api.myjson.com/bins/2sadq?pretty=1",
		dataType:"json",
		success:function(response){
			$.each(response.apartments,function(index,apartment){
				//creat new html element for each listing
				var apartmentCity=apartment.city.toLowerCase().replace(" ", "-");
				var listing="<a href='#' id="+ apartment.id + " class='list-group-item listings "+ apartmentCity +"'><h4 class='list-group-item-heading'>"+ apartment.address + " / "+  apartment.bedrooms+ " BR / "+ apartment.price +"</h4><p class='list-group-item-text'>"+apartment.description+"</p></a>";
				$(".apartments").append(listing);
			});
		},
		error:function(){
			console.log("error");
		}
	})

	// 2. filter listing citywise.
	$(".filter").click(function(){

		$(".filter").removeClass("active");
		$(this).addClass("active");
		
		//hide listing which donot have a class of city that selected
		var city=$(this).attr("id");
		$(".listings").show();
		if(city !== "all"){
			$(".listings").not("."+city).css("display","none");
		}
		
	})

	//3.trigger modal and open google map of selected address in new tab
	$(document).on("click",".listings",function(){
		//get id of selected listing
		var id=$(this).attr("id");
		$.ajax({
			url:"https://api.myjson.com/bins/2sadq?pretty=1",
			dataType:"json",
			success:function(response){
				//using var id that match with apartment id
				var selectedApartment=$.grep(response.apartments,function(apartment){
					return apartment.id == id;
				})
				//get address only
				var address=selectedApartment[0].address;
				
				//trigger modal manually
				$("#myModal").modal({show: true});
				 console.log(address);

				// $("#js-modal-body").append("<div>"+address+"</div>");

				$("#myModal").on("hidden.bs.modal",function(){
					 // console.log(address);
					 window.open("http://maps.google.com/?q="+address);
				})
			},
			error:function(error){
				console.log("error");
			}
		})
	});

});