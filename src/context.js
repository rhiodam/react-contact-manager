// Provider in redux
import React, {Component} from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };

        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload , ...state]
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    // <!--  -->
    state = {
        contacts: [
            {
                id: 1,
                name: "Rhioda Muthie",
                email: "rhioda.muthie@gmail.com",
                phone: "085271062544",
                age: 24
            },
            {
                id: 2,
                name: "Fitya Fikriyah",
                email: "fifislk@gmail.com",
                phone: "081266698197",
                age: 23
            },
            {
                id: 3,
                name: "Rhioda Muthie",
                email: "rhioda.muthie@gmail.com",
                phone: "085271062544",
                age: 24
            },
            {
                id: 4,
                name: "Fitya Fikriyah",
                email: "fifislk@gmail.com",
                phone: "081266698197",
                age: 23
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
