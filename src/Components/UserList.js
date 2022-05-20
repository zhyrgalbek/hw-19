import UserItem from "./UserItem";
import styles from './UserList.module.css';
import { Component } from "react";

class UserList extends Component{
    render(){
        return (
            <ul className={styles.block}>
                {
                    this.props.users.map((elem)=>{
                        return <UserItem 
                            key={elem.id} 
                            name={elem.name} 
                            id={elem.id} 
                            deleteUser={this.props.deleteUser.bind(this)} 
                        />
                    })
                }
            </ul>
        )
    }
}

export default UserList;