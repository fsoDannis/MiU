//.............................................................DEFINE VARIABLES
var options 	= 	document.getElementById('clearDiv');
var anchorTags 	= 	resultsDiv.getElementsByTagName("a");

//..............................................................MOUSE FUNCTIONS
function mouseHover() {
	for ( var i=0, j=anchorTags.length; i < j; i++ ) {
		anchorTags[i].style.color = "#009900";
	}
} // mouseHover
function mouseOut() {
	for ( var i=0, j=anchorTags.length; i < j; i++ ) {
		anchorTags[i].style.color = "#990000";
	}
} // mouseOut

//....................................................................GET ITEM
function getItems(){
		var getresultsDiv		=	document.getElementById("resultsDiv");
		for(var i=0, len = localStorage.length; i < len; i++){
			var key = localStorage.key(i); 
			var value = localStorage.getItem(key);
			value = value.split(';');
			
			var selSup			=	value[0];
			var projectName		=	value[1]; 	
			var message			=	value[2];
			var priority		=	value[3]; 
			var date			=	value[4];	
			var requested		=	value[5];
			
			var newDiv	=	document.createElement("div");
			
			// add category image
			var newImg = document.createElement("img");
			var setSrc = newImg.setAttribute("src", "images/" + selSup + ".jpg");
			newDiv.appendChild(newImg);	
			
			
			for(var ii = 0, allLength = value.length; ii < allLength; ii++){
				var newParas = document.createElement("p");
				var itemTxt	=	document.createTextNode(value[ii]);
				newParas.appendChild(itemTxt);
				newDiv.appendChild(newParas);
				getresultsDiv.appendChild(newDiv);
				//console.log(itemTxt.data);
			}
			
	
			
			// add delete single item link
			var deleteLink = document.createElement("a");			
			var setHref = deleteLink.setAttribute("href", "#");
			//var setId = deleteLink.setAttribute("id", key);
			var setOnclearDivick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
			var deleteText = document.createTextNode("delete item");
			deleteLink.appendChild(deleteText);
			newDiv.appendChild(deleteLink);	
			
			// add edit single item link
			var editLink = document.createElement("a");			
			var setEditHref = editLink.setAttribute("href", "#");
			//var setEditId = editLink.setAttribute("id", key);
			var setEditOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
			var editText = document.createTextNode("edit item");
			editLink.appendChild(editText);
			newDiv.appendChild(editLink);	
			
			// reveal p#clearDiv (edit and clear anchors within)
			var clearDiv = document.getElementById('clearDiv');
			clearDiv.style.display = "block";
			
			var getClear = document.getElementById("clear");
			var setClearclick = getClear.setAttribute("onclick", "clearLocal();");
			
		}
	}
  	

//...................................................................STORE ITEM
document.getElementById('submit').onclick = function (id){
	var newDate			= 	new Date();  //save the current date
    var itemId			=	newDate.getTime();  // save current date with currvaluee
	var selSup			=	document.getElementById('selectSup').value;
	var projectName		= 	document.getElementById('projectName').value;
	var message			=	document.getElementById('message').value;
	var priority	   	= 	document.getElementById('priority').value;
	var date			= 	document.getElementById('date').value;
	var requested		=	document.getElementById('check').value;
	var allItems		=	[
		selSup,
		projectName,
		message,
		priority,
		date,
		requested
	];
	
	if(selSup !="" && projectName !="" && priority !="" && date !=""){
		localStorage.setItem(itemId, allItems.join(';'));
	}else{
		alert("All Fields are required");
	}
}
	
//................................................................... EDIT ITEM
function editItem(id){
	
		var value =localStorage.getItem(id);
		var itemId=id;
		//alert(itemId);
		value=value.split(';');
		var selSup			=	value[0];
		var projectName		=	value[1]; 	
		var message			=	value[2];
		var priority		=	value[3]; 
		var date			=	value[4];	
		var requested		=	value[5];	
		
		//populates form fields with current localStorage value
		document.getElementById('selectSup').value=selSup;
		document.getElementById('projectName').value=projectName;
		document.getElementById('message').value=message;
		document.getElementById('priority').value=priority;
		document.getElementById('date').value=date;
		//document.getElementById('requested').value=requested;
		
		if(check=="on"){
			document.getElementById('check').setAttribute("checked","checked");
		}
		
		
		//reveal editItem Button, hide submit button
		var editItem=document.getElementById('editItem');
		editItem.style.display="block";
		var submit=document.getElementById('submit');
		submit.style.display="none";
		
		//capture editItem button's click
		document.getElementById('editItem').onclick=function(){
			//alert(itemId);
			var selSup			=	document.getElementById('selectSup').value;
			var projectName		= 	document.getElementById('projectName').value;
			var message			=	document.getElementById('message').value;
			var priority	   	= 	document.getElementById('priority').value;
			var date			= 	document.getElementById('date').value;
			var requested		=	document.getElementById('check').value;			
			var allItems=	[
				selSup,
				projectName,
				message,
				priority,
				date,
				requested
	];
			if(selSup !="" && projectName !="" && priority !="" && date !=""){
				localStorage.setItem(itemId, allItems.join(';'));
			}else{
				alert("All Fields are required");
			}
		};
	
}//editItem

//DELETE SINGLE ITEM
function deleteItem(id){
		var ask = confirm("Are you Sure");
		if(ask){
			localStorage.removeItem(id);
			window.location.reload();
		}else{
			alert("Item not Removed");
		}
}


//......................................................... CLEAR LOCAL STORAGE

function clearLocal(){
	localStorage.clear();
	window.location.reload();
	}

