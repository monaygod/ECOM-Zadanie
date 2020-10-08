import React, { ReactElement } from 'react'
import { UserModel } from '../../../model/UserModel'

interface Props {
    userData: UserModel | null,
    backFunc: () => void
}

function SingleUserView({ userData, backFunc}: Props): ReactElement {
    if(userData === null){
        //backFunc();
    }
    if(userData !== null)
    return (
        <div className="card-container" onClick={backFunc}>
            <div className="card-text">
                <div className="portada">

                </div>
                <div className="title-total">
                    <div className="title">UserID: {userData.id}</div>
                    <h2>{userData.firstName} {userData.lastName}</h2>

                    <div className="desc">Age: {userData.age}</div>
                    <div className="desc">City: {userData.city}</div>
            </div>
        </div>
        </div>
    )
    else{
        //backFunc()
        return(<div></div>);
    }
}

export default SingleUserView
