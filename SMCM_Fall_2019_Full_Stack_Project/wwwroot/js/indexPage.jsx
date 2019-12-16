/*
 * This class is the main page of the website
 * From here users can login, sign up, view their account, view our games database and get a game recommended
 */

class TestReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "What Game Should I Play?",
            recommended: false
        };
    }
    //method for Sounds Great button click to add game to account
    soundGood(obj) {
        $.ajax({
            url: "/Home/SoundsGood", data: {
                game: obj.state.text
            }
        }).done(
            function (result) {
                 alert(result.message);
            });
    }



    //This isn't supposed to be how it works, but this is the way it currently has to be to work.
    //Will look into this more later.
    ajaxTest(obj) {
        var $genre = $("#Genre");
        var $rating = $("#Rating");
        var $platform = $("#Platform");
        obj.setState({ text: "loading..." });
        $.ajax({
            url: "/Home/Test", data: {
                genre: $genre.val() === "Any" ? "" : $genre.val(),
                rating: $rating.val() === "Any" ? "" : $rating.val(),
                platform: $platform.val() === "Any" ? "" : $platform.val()
            }
        }).done(
            function (result) {
                obj.setState({
                    text: result.test,
                    recommended : true
                }); 
            });
    }
    //render main page
    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-3"}/>
                    <div className={"col-md-6"}>
                        <div className={"row"}>
                            <img style={{ paddingLeft: "22.5%", paddingTop: "2.5%", paddingRight: "22.5%" }} src={"/Files/game_cart_bounce.gif"} />
                            <h3 style={{ width: "500px", textAlign: "center", paddingBottom: "10px", font: "bold 30 Arial" }}>{this.state.text}</h3>
                            {this.state.recommended ?
                                (<div style={{paddingBottom: "5%"}}>
                                    <button style={{ width: "250px"}} className={"btn btn-accept"} onClick={() => this.soundGood(this)}> Sounds Great </button>
                                    <button style={{ width: "250px"}} className={"btn btn-accept"} onClick={() => this.ajaxTest(this)}> Roll Again </button>
                                </div>) :
                                (<div style={{ paddingBottom: "5%" }}> <button style={{ width: "500px" }} className={"btn btn-primary"} onClick={() => this.ajaxTest(this)}> Recommend a Game </button> </div>)}
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
                                <select id={"Rating"} className={"select-homepage"} name={"Rating"} defaultValue={"Any"}>
                                    <option value="Any">Any Rating</option>
                                    <option value="E">Everyone</option>
                                    <option value="E10">Everyone 10+</option>
                                    <option value="T">Teen</option>
                                    <option value="M">Mature</option>
                            </select>
                        </div>
                            <div style={{ paddingLeft: "50px" }}>
                                <h3 className={"select-homepage"}>Platform:</h3>
                                <select id={"Platform"} className={"select-homepage"} name={"Platform"} defaultValue={"Any"}>
                                <option value="Any">Any Platform</option>
                                <option value="PC">PC</option>
                                <option value="Xbox">Xbox</option>
                                <option value="Playstation">Playstation</option>
                                <option value="Switch">Switch</option>
                            </select>
                            </div>
                            
                        </div>
                    </div>
                    <div className={"col-md-3"}/>
                </div>
            </div>

        );
    }//end render
}//end class

ReactDOM.render(<TestReactComponent />, document.getElementById('content'));