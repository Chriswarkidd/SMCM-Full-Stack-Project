class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "What Game Should I Play?"
        };
    }


    //This isn't supposed to be how it works, but this is the way it currently has to be to work.
    //Will look into this more later.
    ajaxTest = (obj) => {
        $.ajax({ url: "/Home/Test2", data: { x: 2 } }).done(
            function (result) {
                obj.setState({ text: result.test });
            });
    };

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