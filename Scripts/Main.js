var button = 0;

$('#searchBtn').click(function(){
	var str = $('#searchInput').val();
	var url = 'https://api.edamam.com/search?app_id=1b902f53&app_key=bf44b9e7ecccff3c3751aa7bb0b50096&count=10&q=' + str;

	$.getJSON(url, function(data){
		console.log(data.hits.length);
		for(var i=0; i < data.hits.length; i++){
			$('#item'+i).html('<h3>' + data.hits[i].recipe.label + '</h3>');
			$('#ingredients').append('<div class="ingredientsAdjustment hidden" id="info' + i + '"><img class="picture" src="' + data.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
			
			for(var l=0; l < data.hits[i].recipe.ingredients.length; l++){
				$('#recipe'+i).append('<li>' + data.hits[i].recipe.ingredients[l].text + '</li>');
			}
		};	
	});

	$("#searchBtn").css('display','none');
	$("#whatWasSearched").html(str);
	$("#whatWasSearched").css('display','inline-block');
	$("#backBtn").css('top','-3px');
	$("#backBtn").css('display','inline-block');
	$("#searchInput").css('display','none');
	$("#searchArea").animate({width:"100vw",height:"90vh",marginLeft:"0vw",top:'5vh',left:'0vw'},1000);
	$("#searchInput").animate({top:'15px',left:'15px'},1000);
	setTimeout(function(){
		$("#searchBtn").css('display','none');
		$("#backBtn").css('display','inline-block');
		$("#ingredients").css('height','84vh');
		$("#ingredients").animate({opacity:"1"});
		$("#ingredients").css('border','2px solid black');
	}, 1000);
});

$("#backBtn").click(function(){
	location.reload();
});

$("#item0").click(function(){
	$("#info0").removeClass("hidden");	
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'20px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item1").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").removeClass("hidden");	
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'20px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item2").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").removeClass("hidden");	
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'20px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item3").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").removeClass("hidden");	
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'20px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item4").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").removeClass("hidden");	
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'20px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item5").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").removeClass("hidden");	
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'20px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item6").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").removeClass("hidden");	
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'20px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item7").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").removeClass("hidden");	
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'20px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item8").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").removeClass("hidden");	
	$("#info9").addClass("hidden");
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'20px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item9").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").removeClass("hidden");	
	$("#info10").addClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'20px'},200);
	$("#item10").animate({left:'0px'},200);
});

$("#item10").click(function(){
	$("#info0").addClass("hidden");
	$("#info1").addClass("hidden");
	$("#info2").addClass("hidden");
	$("#info3").addClass("hidden");
	$("#info4").addClass("hidden");
	$("#info5").addClass("hidden");
	$("#info6").addClass("hidden");
	$("#info7").addClass("hidden");
	$("#info8").addClass("hidden");
	$("#info9").addClass("hidden");
	$("#info10").removeClass("hidden");

	$("#item0").animate({left:'0px'},200);
	$("#item1").animate({left:'0px'},200);
	$("#item2").animate({left:'0px'},200);
	$("#item3").animate({left:'0px'},200);
	$("#item4").animate({left:'0px'},200);
	$("#item5").animate({left:'0px'},200);
	$("#item6").animate({left:'0px'},200);
	$("#item7").animate({left:'0px'},200);
	$("#item8").animate({left:'0px'},200);
	$("#item9").animate({left:'0px'},200);
	$("#item10").animate({left:'20px'},200);
});