import React, { Component } from 'react'
import { UserModel } from '../model/UserModel';
import { Connection } from '../services/connection';
import ErrorComp from './only-view/shared/ErrorComp';
import LoadingAnimation from './only-view/shared/LoadingAnimation';
import SingleUserView from './only-view/UserTable/SingleUserView';
import UserTableContainer from './only-view/UserTable/UserTableContainer';

type UserTableSwitchProps = {
    dataUserArrayProp: UserModel[]
};

type UserTableSwitchState = {
    isLoading: boolean,
    isSingleUserSelected: boolean,
    singleUserId: number,
    isError: any,
    singleUser: UserModel | null,
    userArraySorted: UserModel[],
    searchTerm: string
};

export default class UserTableSwitchContainer extends Component<UserTableSwitchProps, UserTableSwitchState> {
    constructor(props: Readonly<UserTableSwitchProps>) {
        super(props)

        this.state = {
            isLoading: false,
            isSingleUserSelected: false,
            singleUserId: -1,
            isError: null,
            singleUser: null,
            userArraySorted: this.props.dataUserArrayProp,
            searchTerm: ''
        }
        this.handleSearchBoxValueChanged = this.handleSearchBoxValueChanged.bind(this)
        this.selectSingleUser = this.selectSingleUser.bind(this)
        this.backFromSingleUserView= this.backFromSingleUserView.bind(this)
    }

    selectSingleUser(id: number) {
        this.setState({
            isLoading: true,
            singleUserId: id
        })

        let conn: Connection = Connection.getConnectionInstance();
        conn.getUser(id)
            .then(
                (res) =>
                    this.setState({
                        singleUser: res,
                        isLoading: false,
                        isSingleUserSelected: true
                    })
            ).catch((error) =>
                this.setState({
                    isError: error,
                    isLoading: false
                })
            );
    }

    backFromSingleUserView(){
        this.setState({
            isSingleUserSelected: false,
            singleUser: null
        })
    }

    handleSearchBoxValueChanged(event: React.ChangeEvent<HTMLInputElement>){
        let searchTerm: string = event.target.value.toLowerCase();
        let tempUserArraySorted: UserModel[] = this.props.dataUserArrayProp.filter(
            (item) => {
                return item.firstName.toLowerCase().includes(searchTerm)
                || item.lastName.toLowerCase().includes(searchTerm)
            }
        )
        this.setState(
            {
                searchTerm: searchTerm,
                userArraySorted: tempUserArraySorted
            }
        )
    }

    render() {
        const { isLoading, isError, isSingleUserSelected, userArraySorted, singleUser} = this.state;
        if (isError !== null) {
            return (
                <ErrorComp errorData={this.state.isError}/>
            )
        }
        if (isLoading === true) {
            return (
                <LoadingAnimation />
            )
        }
        if(isSingleUserSelected){
            return(                
                <SingleUserView userData={singleUser} backFunc={this.backFromSingleUserView}/> //singleUser
            )
        }
        else {
            return (
                <UserTableContainer userArray={userArraySorted} searchFunc={this.handleSearchBoxValueChanged} detailsFunc={this.selectSingleUser}/>
            )
        }
    }
}
