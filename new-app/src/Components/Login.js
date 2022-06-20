import React from "react";


class Login extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <label>User Name</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password"></input>
                <br></br><br></br>
                <input type="button" value="Login"></input>
            </div>
        )
    }
}
// function Login(props){
//     return(
//         <div>
//             <h1>{props.title}</h1>
//             <label>User Name:</label>
//             <input type="text"></input>
//             <label>Password</label>
//             <input type="password"></input>
//             <input type="button" value="Submit"></input>
//         </div>
//     )
    
// }
export default Login;