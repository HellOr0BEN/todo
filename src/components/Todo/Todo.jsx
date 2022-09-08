import React,{useState} from 'react';
import './todo.scss';
import List from './List';

const Todo = () => {
const[text,setText] = useState('')
const[items,setItem] = useState([])

const changeEvent = (e) =>{
setText(e.target.value)

}
const listOfItems= () =>{
setItem((prev)=>{
return[...prev,text]
});
setText('');
}

const deleteItem = (index) =>{
let oldList = items.filter(a => true);
oldList.splice(index,1);
let newList = oldList;

setItem(newList);
}

console.log(items)
return (
<div className='todo-container'>
<h1>TODO LIST</h1>
<input value={text} type="text" placeholder='Add yor tasks.........' onChange={changeEvent}/>
<button onClick={()=>listOfItems()}>ADD</button>
<ul>
{ items.map((itemval,index) =>{
return (
<List
key={index}
text={itemval}
onSelect={()=>deleteItem(index)}
/>
);
}
)}
</ul>
</div>
)
}

export default Todo