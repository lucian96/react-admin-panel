import React from 'react';
import UserItem from './UserItem';
import '../components/UserList.css'

function UserList(props) {
    const { users, deleteUserItem } = props;
    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
                <div className="container-users">
                    
                        {
                        users !== null
                            ? users.map((user, index) => {
                                return <UserItem
                                    id={ user.id }
                                    name={ user.name }
                                    email={ user.email }
                                    isGoldClient={ user.isGoldClient }
                                    salary={user.salary}
                                    image={user.image}
                                    key={ index }
                                    deleteUserItem={deleteUserItem}
                                />
                            })
                            : null
                        }
                   
                </div>
                 
        </div>
    );
}

export default UserList;