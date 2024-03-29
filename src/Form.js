import React from "react";
export default class Form extends React.Component {
  state = {
    company: "",
    firstName: "",
    lastName: "",
    url: "",
    email: "",
    choice: "Advertise",
    status: "",
    style: "yes"
  };
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          company: this.state.company,
          name: this.state.firstName,
          last: this.state.lastName,
          email: this.state.email,
          url: this.state.url,
          choice: this.state.choice
        }
      })
    }).then(function() {
      console.log("Success");
    });
    this.setState({
      company: "",
      firstName: "",
      lastName: "",
      url: "",
      email: "",
      choice: "",
      status: "",
      style: ""
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        {this.state.style ? (
          <div className="contact-container">
            <div id="contact">
              <h1 className="title-demand">Let's talk :)</h1>

              <p className="contact-description">
                Want to know more about Swifter and what we could do for you?
                Let’s get a conversation going. Complete the form below and
                we’ll be in touch as soon as possible.
              </p>
            </div>

            <form onSubmit={this.onSubmit}>
              <label htmlFor="app">Company or App Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your app name.."
                onChange={e => this.change(e)}
                required
                value={this.state.company}
              ></input>
              <label htmlFor="url">App Store URL*</label>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Your app store URL.."
                onChange={e => this.change(e)}
                required
                value={this.state.url}
              ></input>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstName"
                placeholder="Your first name.."
                onChange={e => this.change(e)}
                required
                value={this.state.firstName}
              ></input>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastName"
                placeholder="Your last name.."
                onChange={e => this.change(e)}
                required
                value={this.state.lastName}
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
                onChange={e => this.change(e)}
                required
                value={this.state.email}
              ></input>

              <label htmlFor="choice">
                {" "}
                Are You Looking to Advertise or Monetize with Swifter?*
              </label>
              <br></br>

              <div className="options">
                <div className="radio-container">
                  <input
                    type="radio"
                    onClick={e => this.change(e)}
                    name="choice"
                    value="Advertise"
                  ></input>
                  Advertise
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    onClick={e => this.change(e)}
                    name="choice"
                    value="Monetize"
                    defaultChecked
                  ></input>
                  Monetize
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    onClick={e => this.change(e)}
                    name="choice"
                    value="Both"
                  ></input>
                  Both
                </div>
              </div>

              <br></br>
              <button type="submit" value="Submit">
                Send
              </button>
            </form>
          </div>
        ) : (
          <h1 className="text-contact">
            Thank you!<br></br>
            We will be in touch shortly.
          </h1>
        )}
      </div>
    );
  }
}
