import styles from './UserItem.module.css';
import {Component} from 'react';

class UserItem extends Component{
    
    onDelete(){
        this.props.deleteUser(this.props.id);
    }

    render(){
        return (
            <li className={styles.item}>
                <span>{this.props.name}</span>
                <button onClick={this.onDelete.bind(this)}>delete</button>
            </li>
        )
    }
}

export default UserItem;