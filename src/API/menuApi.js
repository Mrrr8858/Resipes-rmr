import * as axios from 'axios';

const baseURL = 'https://test.kode-t.ru/';

const instance = axios.create({
    baseURL: baseURL
});

function getMenu() {
    return instance.get("list.json")
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log(error.respose.data.error);
        });
}

function getDetails(id) {
    return instance.get("detail_" + id + ".json")
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log(error.respose.data.error);
        });
}


export const menuApi = {
    getMenu: getMenu,
    getDetails: getDetails
}