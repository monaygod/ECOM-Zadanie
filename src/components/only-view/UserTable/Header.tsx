import React, { ReactElement } from 'react'
import SearchBoxInput from '../shared/SearchBoxInput'

interface Props {
    title: string,
    searchFunc: (event: React.ChangeEvent<HTMLInputElement>) => void   
}

function Header({title,searchFunc}: Props): ReactElement {
    return (
        <div className="header-container">
            <h2 className="table-title">{title}</h2>
            <SearchBoxInput searchFunc={searchFunc}/>
        </div>
    )
}

export default Header
