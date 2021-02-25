function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	

 var name=document.getElementById("name_row"+no);
 var price=document.getElementById("price_row"+no);
 var category=document.getElementById("category_row"+no);
	
 var name_data=name.innerHTML;
 var price_data=price.innerHTML;
 var category_data=category.innerHTML; 

	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
 category.innerHTML="<input type='text' id='country_text"+no+"' value='"+category_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
 var category_val=document.getElementById("category_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("price_row"+no).innerHTML=price_val;
 document.getElementById("category_row"+no).innerHTML=category_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_No=document.getElementById("new_No").value;
 var new_name=document.getElementById("new_name").value;
 var new_price=document.getElementById("new_price").value;
 var new_category=document.getElementById("new_category").value;
	
 var table=document.getElementById("form");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='No_row"+table_len+"'>"+new_No+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='price_row"+table_len+"'>"+new_price+"</td><td id='category_row"+table_len+"'>"+new_category+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_No").value="";
 document.getElementById("new_name").value="";
 document.getElementById("new_price").value="";
 document.getElementBy("new_category").value="";
}