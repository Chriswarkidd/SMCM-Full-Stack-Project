class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <label htmlFor={"userName"} className={""}>{"User Name:"}</label>
                <div />
                <input id={"userName"} className={"login-input"} type={"text"} />
                <div />
                <label htmlFor={"password"} className={""}>{"Password:"}</label>
                <div />
                <input id={"password"} className={"login-input"} type={"password"} />
                <div />
                <button className={"btn-login"}> Sign in </button>
                <button className={"btn-login"} style={{left: "1.25%"}}> Sign up </button>
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('content'));