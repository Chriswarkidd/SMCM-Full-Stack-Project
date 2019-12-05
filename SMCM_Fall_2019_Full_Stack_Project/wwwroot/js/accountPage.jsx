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
            listOfGames: [],
            addGameRequest : false
        };
        this.ajaxTest(this);
        this.getAllGames(this);
    }

    hasPlayed(obj, gameName) {
        $.ajax({ url: "/Home/HasPlayed", data: { game: gameName} }).done(
            function (result) {
                obj.ajaxTest(obj);
            });
    }

    ajaxTest(obj) {
        $.ajax({ url: "/Home/TestGameList" }).done(
            function (result) {
                obj.setState({ games: result.test });
            });
    }

    getAllGames(obj) {
        $.ajax({ url: "/Home/TestAllGames" }).done(
            function (result) {
                obj.setState({ listOfGames: result.test });
            });
    }

    addNewGameForm(obj) {
        $.ajax({ url: "/Home/AddNewGame" }).done(
            function (result) {
                obj.setState({ addGameRequest: true });
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
                        <div class={"row"}>
                            <div class={"col-sm-12"}>
                        <label htmlFor={"GameList"}>Game: </label>
                        <select id={"GameList"} defaultValue={""}>
                            <option value="">Select an existing game</option>
                            {
                                this.state.listOfGames && this.state.listOfGames.map((g, index) => (<option key={index} value={g.gameName}>{g.gameName}</option>))
                            }
                                </select>
                                </div>
                        </div>
                        {this.state.addGameRequest ?
                            (<div class={"row"}><p>test paragraph</p></div>) :
                            (<div class={"row"}>
                                <div class={"col-sm-12"}>
                                    <button className={"btn btn-link"} role={"link"} onClick={() => this.addNewGameForm(this)}>Can't Find Your Game?</button>
                                </div>
                            </div>)}
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
                                        (<input type="checkbox" defaultChecked={g.playedGame} onClick={() => this.hasPlayed(this, g.gameName)}/>)
                                }
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Account/>, document.getElementById('content'));