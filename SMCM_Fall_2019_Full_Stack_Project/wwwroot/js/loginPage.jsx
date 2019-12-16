/*
 * This class is the login page
 * It deals with logging in users and signing them up for an account if they wish
 */

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: null,
            LogInMessage: null
        };
    }
    //Create account function when a new user signs up
    createAccount(obj) {
        obj.setState({
            LogInMessage: null,
            errors: null
        });
        var $username = $("#Username");
        var $password = $("#Password");
        $.ajax({ type: "POST", url: "/Home/CreateAccount", data: { username: $username.val(), password: $password.val()}}).done(
            function(result) {
                if (result.a === true) {
                    window.location.href = "/Home/Index";
                }
                else {
                    obj.setState({
                        errors: result.a,
                    });
                }
            });
    }
    //Login method for exsisting users
    logIn(obj) {
        obj.setState({
            LogInMessage: null,
            errors: null
        });
        var $username = $("#Username");
        var $password = $("#Password");
        $.ajax({ type: "POST", url: "/Home/LogIn", data: { username: $username.val(), password: $password.val() } }).done(
            function(result) {
                if (result.a === true) {
                    window.location.href = "/Home/Index";
                }
                else {
                    obj.setState({
                        LogInMessage: result.a,
                    });
                } 
            });
    }
    //render the login page form
    render() {
        return (
            <div>
                <label htmlFor={"userName"} className={""}>{"Email:"}</label>
                <div />
                <input id={"Username"} className={"login-input"} type={"text"} />
                <div />
                <label htmlFor={"password"} className={""}>{"Password:"}</label>
                <div />
                <input id={"Password"} className={"login-input"} type={"password"} />
                <div />
                {this.state.errors &&
                    this.state.errors.map((e, index) => (<label key={index}>{e.description}</label>))
                }
                {this.state.LogInMessage && (<label>{this.state.LogInMessage}</label>)}
                <button className={"btn-login"} onClick={() => this.logIn(this)}> Sign in </button>
                <button className={"btn-login"} style={{ left: "1.25%" }} onClick={() => this.createAccount(this)}> Sign up </button>
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('content'));