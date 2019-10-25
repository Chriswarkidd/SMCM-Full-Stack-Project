class TestReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        text: "What Game Should I Play?"};
    }


    //This isn't supposed to be how it works, but this is the way it currently has to be to work.
    //Will look into this more later.
    ajaxTest = (obj) => {
        $.ajax({ url: "/Home/Test2", data: {x: 2} }).done(
            function (result) {
                obj.setState({ text: result.test }); 
            });
    };

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <h3>{this.state.text}</h3>
                        <button className={"btn-block"} onClick={() => this.ajaxTest(this)}> Press me </button>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<TestReactComponent />, document.getElementById('content'));