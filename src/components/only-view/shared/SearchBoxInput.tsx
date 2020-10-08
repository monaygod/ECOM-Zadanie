import React, { ReactElement } from 'react'
import Icon from '../../../resources/icon_search.svg';

interface Props {
    searchFunc: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBoxInput({searchFunc}: Props): ReactElement {
    return (
        <div className="search-box-container">
            <div className="search">
                <img className="search-icon" src={Icon}/>
                <input type="text" className="searchTerm" placeholder="Search..." onChange={searchFunc}/>
            </div>
        </div>
    )
}

export default SearchBoxInput
