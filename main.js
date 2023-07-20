// add item function

const add_item = () =>{
    let item = document.getElementById("box");
    let listitem = document.getElementById("list_item");
    if(item.value != ""){
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        listitem.appendChild(make_li);
        item.value = ""

         make_li.onclick = function(){
            this.parentNode.removeChild(this);
         }
    }
    else{
        alert("Please add a value to item")
    }

}