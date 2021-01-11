import axios from 'axios';
import { URI } from '../utils';

const Profile = (username) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(`${URI}/users/${username}`,headers)
            .then((result) =>{
                resolve(result.data);
            })
            .catch(err => {
                reject(err.message)
             })

     });
     return promise;
}

const ListRepository = (username) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(`${URI}/users/${username}/repos`,headers)
            .then((result) =>{
                resolve(result.data);
            })
            .catch(err => {
                reject(err.message)
             })

     });
     return promise;
}

export {Profile,ListRepository};