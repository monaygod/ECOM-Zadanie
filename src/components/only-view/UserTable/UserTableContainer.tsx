import React, { ReactElement } from 'react'
import { UserModel } from '../../../model/UserModel'
import Header from './Header'
import UserTable from './UserTable'

interface Props {
    userArray: UserModel[],
    searchFunc: (event: React.ChangeEvent<HTMLInputElement>) => void,
    detailsFunc: (id:number) => void
}

function UserTableContainer(Props: Props): ReactElement {
    return (
        <div className="table-container">
            <Header title='UserTable' searchFunc={Props.searchFunc} />
            <UserTable userArray={Props.userArray} detailsFunc={Props.detailsFunc}/>
        </div>
    )
}

export default UserTableContainer
