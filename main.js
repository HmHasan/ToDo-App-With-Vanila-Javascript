const addForm = document.getElementById("addNew");
const items = document.getElementById("items");
const filter = document.getElementById('filter');
items.addEventListener('click',removeElement)
addForm.addEventListener('submit',addNew);
filter.addEventListener('keyup',filterItem)
function addNew(event)
{
    event.preventDefault();
    const newTodo = document.getElementById("newTodo").value;
    const newLi = document.createElement("li");
    newLi.className = "list-group-item";
    newLi.appendChild(document.createTextNode(newTodo));
    items.appendChild(newLi);
    items.addEventListener('click',removeElement)
   

    // Add New Button

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger float-right btn-sm delete';
    


    const buttonText  = deleteButton.appendChild(document.createTextNode('X'));

    newLi.appendChild(deleteButton);

    // Delete an Spacific Item




}


function removeElement(e)
{
  (e.target.classList.contains('delete'));
  if(confirm("are you sure ?"))
  {
      var li = e.target.parentElement;
      items.removeChild(li);
  }
}


function filterItem(e)
{
    const text = e.target.value.toLowerCase();
    const item = document.getElementsByTagName("li");

    Array.from(item).forEach((anything)=>{
        var itemname = anything.firstChild.textContent
       if(itemname.toLocaleLowerCase().indexOf(text) != -1)
       {
        anything.style.display = 'block'
       }
       else
       {
        anything.style.display = 'none';
       }
    })
}
