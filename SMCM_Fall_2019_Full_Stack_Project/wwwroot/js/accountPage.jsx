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
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Account/>, document.getElementById('content'));