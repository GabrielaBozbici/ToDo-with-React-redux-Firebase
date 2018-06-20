// import { createStore } from "redux";
// import { connect } from "tls";

// // Component -> creator -> action -> reducer
// // Redux

// // creators.js
// export function login(credentials) {
//     dispatch(actions.loginStart());
//     // firebase login 
//     firebaseAuth.login(credentials).then((result) => {
//         dispatch(actions.loginSuccess(result));
//     }).catch((err) => {
//         dispatch(actions.loginFailed(err));
//     })
// }

// // actions.js
// export function loginStart(user) {
//     return {
//         type: 'LOGIN_START'
//     }
// }
// export function loginSuccess(user) {
//     return {
//         type: 'LOGIN_SUCCESS',
//         payload: user
//     }
// }
// export function login(err) {
//     return {
//         type: 'LOGIN_ERROR',
//         payload: err
//     }
// }

// // reducer
// // update redux state
// switch(action.type) {
//     case 'LOGIN_START': {
//         return {
//             ...state,
//             loginInProgress: true
//         }
//     }
// }
// switch(action.type) {
//     case 'LOGIN_SUCCESS': {
//         return {
//             ...state,
//             user: action.paylod,
//             loginInProgress: false
//         }
//     }
// }

// // Redux state/store
// {
//     auth: {
//         user: {
//             email: 'my@email.com'
//         },
//         loginInProgress: false,
//     }, // reducer
//     todos: {},// reducer
//     ui: {},// reducer
//     notes: {}// reducer
// }


// function mapStateToProps (state) {
//     return {
//         a: state.auth.user,
//         shouldShowLoader: state.auth.loginInProgress
//     }
// }

// this.props.a
// this.props.shouldShowLoader 

// import { loginUser } from './creators';
// // _login.ts
// function mapDispatchToProps (dispatch) {
//     // loginStart: dispatch(actions.loginStart()),
//     loginStart: dispatch({
//         type: 'LOGIN_START'
//     }),

//     loginUser
// }
// // login.tsx
// this.props.loginStart



// // Component container (_)
// connect(mapStateToProps, mapDispatchToProps)(Component);

// const func = (a, b) => {

// }



// // Component
// handleClick = () => {
//     const credentials = {
//         email: this.state.email,
//         pass: this.state.pass,
//     }
//     this.props.login(credentials);
// }

// <button onclick={this.handleClick()} >login<button>