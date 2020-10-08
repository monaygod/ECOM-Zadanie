import React, { Component } from 'react';
import { Connection } from '../services/connection';
import { UserModel } from '../model/UserModel';
import UserTableContainer from './UserTableSwitchContainer';

import '../css/styles.scss';
import ErrorComp from './only-view/shared/ErrorComp';
import LoadingAnimation from './only-view/shared/LoadingAnimation';

type MainSwitchProps = {};

type MainSwitchState = {
    isLoading: boolean,
    isError: any,
    dataUserArray: UserModel[]
};

export default class MainSwitchContainer extends Component<MainSwitchProps, MainSwitchState> {
    constructor(props: Readonly<MainSwitchProps>) {
        super(props)

        this.state = {
            isLoading: true,
            isError: null,
            dataUserArray: []
        }
    }


    componentDidMount() {
        let conn: Connection = Connection.getConnectionInstance();

        conn.getUsers()
            .then(
                (res) =>
                    this.setState({
                        dataUserArray: res,
                        isLoading: false
                    })
            ).catch((error) =>
                this.setState({
                    isError: error,
                    isLoading: false
                })
            );
    }

    render() {
        const { isLoading, isError, dataUserArray } = this.state;
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
        else {
            return (
                <UserTableContainer dataUserArrayProp={dataUserArray}/>
            )
        }
    }
}
