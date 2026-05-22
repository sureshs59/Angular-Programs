import { IAddress } from "./IAddress";

export interface IRole {
    id:     number,
    name:   string,
    username:string,
    email:  string,
    phone : string,
    address : IAddress
}

export interface APIResponseModel {
    message : string,
    result  : boolean,
    data :    any[] ,
    id : number,
    name : string
}
