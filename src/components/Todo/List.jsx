import React from 'react'
import './list.scss'

import BackspaceIcon from '@mui/icons-material/Backspace';

const List = ({onSelect,text}) => {
return (
<li>{text}<BackspaceIcon className='icon' onClick={()=>onSelect()}/> </li>
)
}

export default List