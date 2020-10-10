import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';
import './index.css';

class DarkModeToggle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Dark mode
                <Switch defaultChecked />
            </div>
        )
    }
}

ReactDOM.render(<DarkModeToggle />, document.querySelector('#darkmodetoggle'));