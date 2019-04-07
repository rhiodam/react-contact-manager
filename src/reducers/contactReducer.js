import {GET_CONTACTS} from '../actions/types';

const initialState = {
    contacts: [
        {
            id: 1,
            name: "Rhioda Muthie",
            email: "rhioda.muthie@gmail.com",
            phone: "085271062544",
            age: 24,
            address: "Tebet barat dalam"
        },
        {
            id: 2,
            name: "test",
            email: "test@gmail.com",
            phone: "143423",
            age: 23,
            address: "test xxx"
        },
        {
            id: 3,
            name: "Rhioda Muthie",
            email: "rhioda.muthie@gmail.com",
            phone: "085271062544",
            age: 24,
            address: "Tebet barat dalam"
        },
        {
            id: 4,
            name: "test",
            email: "test@gmail.com",
            phone: "143423",
            age: 23,
            address: "test xxx"
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_CONTACTS :
            return {
                ...state
            };

        default:
            return state;

    }
}