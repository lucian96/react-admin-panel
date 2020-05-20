import React from 'react';
import './UserItem.css'

class UserItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    handleDeleteUser(event){
        const id = event.target.name
        this.props.deleteUserItem(event, id)

    }

    render() {
        const {id, name, email, isGoldClient, salary, image} = this.props;
        return(
            <div className="users">
                <h4> { name }</h4>
                <p>E-mail: { email }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
                <p>Salary: {salary} $</p>
                <img src={image} alt="imagine"/>
                <button className="btn btn-primary" name={id} onClick={(event) => this.handleDeleteUser(event)}>Delete</button>
            </div>
        );
    }
        
}

export default UserItem;