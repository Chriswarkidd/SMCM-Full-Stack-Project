class TestReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        text: "one"};
    }


    //This isn't supposed to be how it works, but this is the way it currently has to be to work.
    //Will look into this more later.
    ajaxTest = (obj) => {
        $.ajax({ url: "/Home/Test", data: {x: 2} }).done(
            function (result) {
                obj.setState({ text: result.test }); 
            });
    };

    render() {
        return (
            <div>Hello, world! I am a react component! :)
                <p>{this.state.text}</p>
                <button className={"btn-primary"} onClick={() => this.ajaxTest(this)}> Press me </button>
            </div>

        );
    }
}

ReactDOM.render(<TestReactComponent />, document.getElementById('content'));