class TestReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "What Game Should I Play?",
            recommended: false
        };
    }


    //This isn't supposed to be how it works, but this is the way it currently has to be to work.
    //Will look into this more later.
    ajaxTest(obj, genre) {
        obj.setState({ text: "loading..." });
        $.ajax({ url: "/Home/Test", data: { genre: genre === "Any" ? "" : genre } }).done(
            function (result) {
                obj.setState({
                    text: result.test,
                    recommended : true
                }); 
            });
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-3"}/>
                    <div className={"col-md-6"}>
                        <div className={"row"}>
                            <div style={{ paddingRight: "50px" }}>
                                <h1 className={"select-homepage"}>Genre:</h1>
                                <select id={"Genre"} className={"select-homepage"} name={"Genre"} defaultValue={"Any"}>
                                <option value="Any">Any Genre</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Puzzle">Puzzle</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                            <div style={{ paddingRight: "50px", paddingLeft: "50px" }}>
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
                            <h3 style={this.state.recommended ? { paddingLeft: "40%", font: 'bold 30 Arial' } : {}}>{this.state.text}</h3>
                            {this.state.recommended ?
                                (<div>
                                    <button className={"btn-accept"}> Sounds Great </button>
                                    <button className={"btn-accept"} onClick={() => this.ajaxTest(this, $("#Genre").val())}> Roll Again </button>
                                </div>) :
                                (<div> <button style={{ width: "500px" }} className={"btn-accept"} onClick={() => this.ajaxTest(this, $("#Genre").val())}> Recommend a Game </button> </div>)}
                            <img style={{ paddingLeft: "22.5%", paddingTop: "2.5%"}} src={"/Files/game_cart_bounce.gif"} />
                        </div>
                    </div>
                    <div className={"col-md-3"}/>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<TestReactComponent />, document.getElementById('content'));