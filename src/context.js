// Provider in redux
import React, {Component} from "react";
import axios from 'axios';

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
                contacts: [action.payload , ...state.contacts]
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    // <!--  -->
    state = {
        res :{},
        contacts : [],
        contacts2: [
            // {
            //     id: 1,
            //     name: "Rhioda Muthie",
            //     email: "rhioda.muthie@gmail.com",
            //     phone: "085271062544",
            //     age: 24,
            //     address : "Tebet barat dalam"
            // },
            // {
            // {
                //     id: 2,
                //     name: "Fitya Fikriyah",
                //     email: "fifislk@gmail.com",
                //     phone: "081266698197",
                //     age: 23,
                //     address : "Pinang xxx"
                // },
            //     id: 3,
            //     name: "Rhioda Muthie",
            //     email: "rhioda.muthie@gmail.com",
            //     phone: "085271062544",
            //     age: 24,
            //     address : "Tebet barat dalam"
            // }
            // ,
            // {
            //     id: 4,
            //     name: "Fitya Fikriyah",
            //     email: "fifislk@gmail.com",
            //     phone: "081266698197",
            //     age: 23,
            //     address : "Pinang xxx"
            // }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    async componentDidMount() {
        const res = await axios
            .get('https://jsonplaceholder.typicode.com/users');
            // .then(res => console.log(res))
            // // .then(res => console.log(res.data))
            // .then(res => this.setState({contacts : res.data} ))
            // // .then(json => console.log(json)))
            // .then(res=>this.setState({res:res}))
        // console.log(this.state.contacts)
        // console.log(res)
        this.setState({contacts : res.data} );
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
