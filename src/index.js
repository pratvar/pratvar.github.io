import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/Switch';

class DarkModeToggle extends React.Component {
    render() {
        return (
            <div>
                Dark mode
                <Switch defaultChecked />
            </div>
        )
    }
}
class ContactForm extends React.Component {
    render() {
        return (
            <form action="asdf">
                <TextField id="outlined-basic" label="Name" />
            </form>
        )
    }
}

ReactDOM.render(<DarkModeToggle />, document.querySelector('#darkmodetoggle'));
ReactDOM.render(<ContactForm />, document.querySelector('#contact-form'));