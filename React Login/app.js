class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  }


// Comment to try out if git is working
  handleLoginClick() {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}));
  }

  handleLogoutClick() {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}));
  }

  render() {

    let button = null;
    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return(
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }

}

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function LoginGreeting(props) {
  return(
    <h1>Welcome Dude!</h1>
  );
}

function LogoutGreeting(props) {
  return(
    <h1>Please Sign Up.</h1>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <LoginGreeting />;
  } else {
    return <LogoutGreeting />;
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
