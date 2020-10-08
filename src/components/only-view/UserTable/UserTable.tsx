import React from 'react';
import { UserModel } from '../../../model/UserModel';

type UserTableProps = {
  userArray: UserModel[],
  detailsFunc: (id:number) => void
}

const UserTable: React.FC<UserTableProps> = ({ userArray, detailsFunc }): JSX.Element => {
  return (
    <React.Fragment>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">User ID</div>
          <div className="col col-2">First Name</div>
          <div className="col col-3">Last Name</div>
          <div className="col col-4">Age</div>
          <div className="col col-5">City</div>
        </li>
        {userArray.map((item) => (
          <li className="table-row" onClick={()=> detailsFunc(item.id)} key={"key-" + item.id}>
            <div className="col col-1">{item.id}</div>
            <div className="col col-2">{item.firstName}</div>
            <div className="col col-3">{item.lastName}</div>
            <div className="col col-4">{item.age}</div>
            <div className="col col-5">{item.city}</div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
};

export default UserTable;