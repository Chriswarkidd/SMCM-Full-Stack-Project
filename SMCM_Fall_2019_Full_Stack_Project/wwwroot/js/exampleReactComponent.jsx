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
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div style={{ paddingRight: "50px" }}>
                                <h1 className={"select-homepage"}>Genre:</h1>
                                <select className={"select-homepage"} name={"Genre"} defaultValue={"Any"}>
                                <option value="Any">Any Genre</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Puzzle">Puzzle</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                            <div style={{ paddingRight: "75px", paddingLeft: "75px" }}>
                            <h2 className={"select-homepage"}>ESRB Rating:</h2>
                                <select className={"select-homepage"} name={"Rating"} defaultValue={"Any"}>
                                    <option value="Any">Any Rating</option>
                                    <option value="E">Everyone</option>
                                    <option value="E10">Everyone 10+</option>
                                    <option value="T">Teen</option>
                                    <option value="M">Mature</option>
                            </select>
                        </div>
                            <div style={{ paddingLeft: "50px" }}>
                                <h3 className={"select-homepage"}>Platform:</h3>
                                <select className={"select-homepage"} name={"Platform"} defaultValue={"Any"}>
                                <option value="Any">Any Platform</option>
                                <option value="PC">PC</option>
                                <option value="Xbox">Xbox</option>
                                <option value="Playstation">Playstation</option>
                                <option value="Switch">Switch</option>
                            </select>
                            </div>
                        <h3>{this.state.text}</h3>
                        <button className={"btn-block"} onClick={() => this.ajaxTest(this)}> Press me </button>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<TestReactComponent />, document.getElementById('content'));