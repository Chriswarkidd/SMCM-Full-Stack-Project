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
                                        (<input type="checkbox" defaultChecked={g.playedGame} onClick={() => this.hasPlayed(this, g.gameName)}/>)
                                }
                            </td>
                            <td>
                                {
                                    g.playedGame ?
                                        (<div >
                                            <select id={"Rating"} className={"select-accountpage"} name={"Rating"} defaultValue={"3"}>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>) :
                                        (<div></div>)
                 
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