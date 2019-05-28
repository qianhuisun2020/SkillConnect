import { CardActions } from '@material-ui/core';

const initialState = 
    {
      username: '',
      first:'',
      last: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      avatar: require('../Images/default.jpg'),
      score: '',
    }


export default function userReducer(state=initialState, action) {
    console.log('users state', state)
    switch(action.type) {
        case 'LOGIN':
            return (
                {
                    username:action.username,
                    first: action.first,
                    last: action.last,
                    age: action.age,
                    gender: action.gender,
                    email: action.email,
                    phone: action.phone,
                    avatar: action.avatar,
                    score: action.score,
                }
            )
        case 'ADD_SCORE':
            return (
                {
                    username:action.username,
                    first: action.first,
                    last: action.last,
                    age: action.age,
                    gender: action.gender,
                    email: action.email,
                    phone: action.phone,
                    avatar: action.avatar,
                    score: action.score,
                }
            )  
        case 'REMOVE_SCORE':
            return (
                {
                    username:action.username,
                    first: action.first,
                    last: action.last,
                    age: action.age,
                    gender: action.gender,
                    email: action.email,
                    phone: action.phone,
                    avatar: action.avatar,
                    score: action.score,
                }
            ) 
        default: 
            return state
    }
}
  