var todolist=[];
var list= document.querySelector('#todolist');
var tmpl=document.querySelector('#item-tmpl');
var input=document.querySelector('#notetxt');
var addBtn=document.querySelector('#addnote');
var form = document.querySelector('#add-form');
function additem(){
    var newnote=input.value;
    input.value='';
    if(newnote!=''){
        todolist.push(newnote);
        render(todolist);
    }
}
function render(collection){
    list.innerHTML='';
    if(collection.length>0){
        collection.forEach(function(e,i){
            list.innerHTML += tmpl.innerHTML.replace('{{id}}',i).replace('{{txt}}',e);
        });
    }else{
        list.innerHTML += '<span>Lista vuota</span>';
    }
}
function deleteItem(event){
    var id = event.target.parentElement.parentElement.getAttribute('data-id');
    todolist.splice(id,1);
    render(todolist);
}
render(todolist);
form.addEventListener('submit',function(e){
    e.preventDefault();
    additem();
});