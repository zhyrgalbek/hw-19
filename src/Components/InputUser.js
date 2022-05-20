import { Component } from 'react';
import styles from './InputUser.module.css';

class InputUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleText(e){
        this.setState((prev)=>{
            return {
                text: e.target.value
            }
        })
    }

    handleSend(e){
        e.preventDefault();
        this.props.accepted(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSend.bind(this)}>
                <h2>enter text</h2>
                <input type="text" value={this.state.text} onChange={this.handleText.bind(this)} />
                <input type="submit" />
            </form>
        )
    }
}

export default InputUser;