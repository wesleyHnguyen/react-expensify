import React from 'react';
import ReactDOM from 'react-dom';


const Info = () => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


// const withAdminInfo = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {(props.isAdmin) && <p>This is private Info. Please don't share</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

// // requireAuthentication

// const AdminInfo = withAdminInfo(Info);


// const withAuthInfo = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {!(props.isAuthenticated) && <p>Please login to see the details</p>}
//             {(props.isAuthenticated) && <WrappedComponent {...props} />}
//         </div>
//     )
// };

// const AuthInfo = withAuthInfo(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById("app"));
ReactDOM.render(<Info isAuthenticated={false} info="There are details" />, document.getElementById("app"));
