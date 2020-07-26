var list=document.getElementById("list")
function AddItem(){
    var inp= document.getElementById("ToDo");
    var li= document.createElement('li');
    var liText=document.createTextNode(inp.value);
    li.appendChild(liText);

    var delBtn= document.createElement('button');
    var DelText=document.createTextNode("Delete");
    delBtn.setAttribute("Class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
   delBtn.appendChild(DelText);


var editBtn= document.createElement('button');
var editText= document.createTextNode("Edit");
editBtn.appendChild(editText);
editBtn.setAttribute("onclick","editItem(this)")

   li.appendChild(delBtn)
   li.appendChild(editBtn)
  
    list.appendChild(li);
    ToDo.value = ""

}


function deleteItem(e){
   e.parentNode.remove();
}

function editItem(e){

  var val=prompt("Enter value",e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue= val;
    }
function deleteAll(){
  list.innerHTML=" "
}

