import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';

document.body.classList.toggle('light-theme');

// observer for navbar links
window.addEventListener('DOMContentLoaded', () => {

    let options = {
        threshold: 0.5
    }
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0.5) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	}, options);

	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

// make project links visible on tab focus
let links = document.querySelectorAll('.project-link > a');

for(let i = 0; i < links.length; i++) {
    links[i].onfocus = () => {links[i].parentElement.classList.toggle('focused')};
    links[i].onblur = () => {links[i].parentElement.classList.toggle('focused')};   
}

class DarkModeToggle extends React.Component {
    render() {
        return (
            <div>
                <i class="fa fa-moon"></i>
                <Switch  onChange={() => {
                    document.body.classList.toggle('light-theme');
                    }} defaultChecked />
            </div>
        )
    }
}
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        };
        this.submitForm = this.submitForm.bind(this);
    }
    render() {
        const { status } = this.state;
        return (
            <form onSubmit={this.submitForm} action="https://formspree.io/f/xleogqql" method="POST">
                <h2>Interested in working together?<br/><span><b>Send me a message!</b></span></h2>
                <input type="text" name="name" id="name" placeholder="Name"/>
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message" placeholder="Message" />
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }
}

ReactDOM.render(<DarkModeToggle />, document.querySelector('#darkmodetoggle'));
ReactDOM.render(<ContactForm />, document.querySelector('#contact-form'));