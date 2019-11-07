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
        //this.games = [{ title: "Ark: Survival Evolved", played: true },
        //    { title: "Astroneer", played: true },
        //    { title: "Destiny 2", played: true },
        //    { title: "Divinity 2", played: false },
        //    { title: "Fable", played: false },
        //    { title: "Zuma's Revenge", played: true }];
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
                        {this.state.games.map((g, index) => (<tr key={index}>
                            <td>
                                {g.gameName}
                            </td>
                            <td>
                                <input type="checkbox" defaultChecked={g.playedGame} />
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Account/>, document.getElementById('content'));