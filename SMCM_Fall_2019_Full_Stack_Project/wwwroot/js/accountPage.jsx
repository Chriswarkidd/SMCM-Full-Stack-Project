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
            games: []
        };
        this.ajaxTest(this);
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

    render() {
        return (
            <div>
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
                                {g.game.gameName}
                            </td>
                            <td>
                                {
                                    g.playedGame ?
                                        (<input type="checkbox" checked={g.playedGame} readOnly={true}/>) :
                                        (<input type="checkbox" defaultChecked={g.playedGame} onClick={() => this.hasPlayed(this, g.game.gameName)}/>)
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