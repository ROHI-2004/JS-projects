var input = document.getElementById('it')
const button = document.getElementById('button')
function add()
{
    var task = input.value;
    if(task.trim()!=="")
    {
        var ul = document.getElementById('taskList')
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(task))
        ul.appendChild(li)
        input.value=""
    }
    else{
        alert("please enter the task")
    }
}
button.addEventListener('click',add)