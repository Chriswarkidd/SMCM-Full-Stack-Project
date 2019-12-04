class GamesPage extends React.Component {

    render() {
        return (
            <div align="center">
                <h1 className="text-center">All Games</h1>
                <br />
                <input className="form-control" id="gameSearch" type="text" placeholder="Search Games..." />
                <br />
                <Table />
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

    ajaxTest(obj) {
        $.ajax({ url: "/Home/TestAllGames" }).done(
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
                            <th>Title</th>
                            <th>Publishing Studio</th>
                            <th>Date</th>
                            <th>Genre</th>
                            <th>ESRB Rating</th>
                            <th>Platforms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map((g, index) => (<tr key={index}>
                            <td>{g.gameName}</td>
                            <td>{g.publisher}</td>
                            <td>{new Date(g.datePublished).getFullYear()}</td>
                            <td>{g.genre}</td>
                            <td>{g.esrbRating}</td>
                            <td>{g.platforms}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<GamesPage />, document.getElementById('content'));