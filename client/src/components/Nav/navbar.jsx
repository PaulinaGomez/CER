import React from "react";
import "../../styles/navbar.css";
import bar from "../../img/navbar.png";
import logo from "../../img/logo.png";
import avatar from "../../img/img_avatar2.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.modalLogIn = React.createRef();
    this.modalSignIn = React.createRef();
    this.toggleModalLogIn = this.toggleModalLogIn.bind(this);
    this.toggleModalSignIn = this.toggleModalSignIn.bind(this);
  }
  toggleModalLogIn() {
    var style = this.modalLogIn.current.style.display;
    console.log(this.modalLogIn);
    if (style === "" || style === "none") {
      this.modalLogIn.current.style.display = "block";
    } else {
      this.modalLogIn.current.style.display = "none";
    }
    console.log(this.modalLogIn.current.style.display);
  }

  toggleModalSignIn() {
    var style = this.modalSignIn.current.style.display;
    console.log(this.modalSignIn);
    if (style === "" || style === "none") {
      this.modalSignIn.current.style.display = "block";
    } else {
      this.modalSignIn.current.style.display = "none";
    }
    console.log(this.modalSignIn.current.style.display);
  }

  render() {
    return (
      <nav className="navbar">
        <img src={bar} alt="navbar" className="bar" />
        <img href="/" className="logo" img src={logo} alt="navbar" />

        <div className="nav-btns">
          <button className="login-btn" onClick={this.toggleModalLogIn}>
            Log in
          </button>
          <button className="signin-btn" onClick={this.toggleModalSignIn}>
            Sign in
          </button>
        </div>

        <div className="login-modal">
          {/*<!-- The Modal -->*/}
          <div id="id01" className="modal" ref={this.modalLogIn}>
            {/*<!-- Modal Content -->*/}
            <form className="modal-content animate" action="/action_page.php">
              <span
                onClick={this.toggleModalLogIn}
                className="close"
                title="Close Modal"
              >
                &times;
              </span>
              <div className="imgcontainer">
                <img src={avatar} alt="Avatar" className="avatar" />
              </div>

              <div className="container">
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button type="submit">Login</button>
              </div>

              <div className="cancel-container">
                <button
                  type="button"
                  onClick={this.toggleModalLogIn}
                  className="cancelbtn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="signin-modal">
          {/*<!-- The Modal -->*/}
          <div id="id01" className="modal" ref={this.modalSignIn}>
            {/*<!-- Modal Content -->*/}
            <form className="modal-content animate" action="/action_page.php">
              <div className="container">
                <span
                  onClick={this.toggleModalSignIn}
                  className="close"
                  title="Close Modal"
                >
                  &times;
                </span>
                <label htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />

                <label htmlFor="uname">
                  <b>User Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your User Name"
                  name="uname"
                  required
                />

                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Mail"
                  name="email"
                  required
                />

                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button type="submit">Register</button>
              </div>

              <div className="cancel-container">
                <button
                  type="button"
                  onClick={this.toggleModalSignIn}
                  className="cancelbtn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
