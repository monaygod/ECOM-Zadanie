import { readJsonConfigFile } from "typescript";
import { UserModel } from "../model/UserModel";

export class Connection {
    private static instance: Connection = new Connection();
    private url: string = "https://zadaniepraktyki.azurewebsites.net/api/";

    public static getConnectionInstance(): Connection {
        return this.instance;
    }

    public getUsers(): Promise<UserModel[]> {
        return fetch(
            this.url + "Users",
            {
                "method": "GET",
                "mode": "cors",
                "cache": "no-cache",
                "credentials": "same-origin",
                "headers": {
                    "Content-Type": "application/json",
                    "x-functions-key": "2mmsazOBIbXQXSTHOiiEt3pzCMpAEK2/o/m/AmYxJptBgN2aLGpo4Q=="
                }
            })
            .then(res => res.json())
            .then(res => {
                return res as UserModel[]
            });
    }

    public getUser(userId: number): Promise<UserModel> {
        return fetch(
            this.url + "User/" + userId,
            {
                "method": "GET",
                "mode": "cors",
                "cache": "no-cache",
                "credentials": "same-origin",
                "headers": {
                    "Content-Type": "application/json",
                    "x-functions-key": "2mmsazOBIbXQXSTHOiiEt3pzCMpAEK2/o/m/AmYxJptBgN2aLGpo4Q=="
                }
            })
            .then(res => res.json())
            .then(res => {
                return res as UserModel
            });
    }
}