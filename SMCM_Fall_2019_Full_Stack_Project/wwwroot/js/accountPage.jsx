class Account extends React.Component {

    render() {
        return (
            <div align="center">
                <h1> My Games</h1>
                <Table/>
                <button className={"btn-delete"}> Delete Account </button>
            </div>
        );
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            listOfGames: []
        };
        this.updatedGames = [];
        this.ajaxTest(this);
        this.getAllGames(this);
    }


    hasPlayed(obj, index) {
        alert(obj.updatedGames[index][1]);
        obj.updatedGames[index][1] = !obj.updatedGames[index][1];
        alert(obj.updatedGames[index][1]);
    }

    //create a list of game names to be updated when save changes is clicked
    saveChanges(obj) {
        jQuery.ajaxSettings.traditional = true;
        $.ajax({ url: "/Home/HasPlayed", data: { gameList: obj.updatedGames } }).done(
            function (result) {
                obj.ajaxTest(obj);
              });
    }

    ajaxTest(obj) {
        obj.updatedGames = [];
        $.ajax({ url: "/Home/TestGameList" }).done(
            function (result) {
                obj.setState({ games: result.test });
                for (var g in result.test) {
                    obj.updatedGames.push([result.test[g].gameName, result.test[g].playedGame]);
                }
                alert(obj.updatedGames[0][0]);
            });
    }

    getAllGames(obj) {
        $.ajax({ url: "/Home/TestAllGames" }).done(
            function (result) {
                obj.setState({ listOfGames: result.test });
            });
    }

    render() {

        var modal = (<div id={"addModal"} className={"modal fade"}>
            <div className={"modal-dialog"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4>Add a Game!</h4>
                        <button className={"close"} data-dismiss="modal">
                            <span className={"fas fa-times"}/>
                        </button>
                    </div>
                    <div className={"modal-body"}>
                        <label htmlFor={"GameList"}>Game: </label>
                        <select id={"GameList"} defaultValue={""}>
                            <option value="">Select an existing game</option>
                            {
                                this.state.listOfGames && this.state.listOfGames.map((g, index) => (<option key={index} value={g.gameName}>{g.gameName}</option>))
                            }
                        </select>
                    </div>
                    <div className={"modal-footer"}>
                        <button className={"btn-accept"} data-dismiss="modal">Add</button>
                        <button className={"btn-accept"} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>);

        return (
            <div>
                {modal}
                <button className={"btn-primary"} data-toggle={"modal"} data-target={"#addModal"}>Add a game!</button>
                <table className={"table table-striped"}>
                    <thead>
                        <tr>
                            <th>
                                Game Title
                    </th>
                            <th>
                                Played
                    </th>
                            <th>
                                Rating
                    </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games && this.state.games.map((g, index) => (<tr key={index}>
                            <td>
                                {g.gameName}
                            </td>
                            <td>
                                {
                                    g.playedGame ?
                                        (<input type="checkbox" checked={g.playedGame} readOnly={true}/>) :
                                        (<input type="checkbox" defaultChecked={g.playedGame} onClick={() => this.hasPlayed(this, index)}/>)
                                }
                            </td>
                            <td>
                                {
                                    g.playedGame ?
                                        (<div >
                                            <select id={"Rating"} className={"select-accountpage"} name={"Rating"} defaultValue={"3"}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>) :
                                        (<div>
                                            N/A
                                        </div>)
                 
                                }
                            </td>
                        </tr>))}
                    </tbody>
                </table>
                <div style={{ paddingBottom: "5px" }}> <button className={"btn btn-primary"} onClick={() => this.saveChanges(this)}> Save Changes </button> </div>
            </div>
        );
    }
}

ReactDOM.render(<Account/>, document.getElementById('content'));