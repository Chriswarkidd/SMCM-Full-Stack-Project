class GamesPage extends React.Component {

    render() {
        return (
            <div align="center">
                <h1 className="text-center">All Games</h1>
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

    search(obj) {
        var $searchTerm = $("#gameSearch");
        $.ajax({ url: "/Home/SearchGames", data: { searchTerm: $searchTerm.val() } }).done(
            function (result) {
                if (result.success) {
                    obj.setState({ games: result.gamesList });
                }
            });
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td className={"col-8 searchPage-div"}>
                                <input className={"form-control"} id={"gameSearch"} type={"text"} placeholder={"Search Games..."} />
                            </td>
                            <td className={"searchPage-div"}>
                                <button className={"btn-primary form-control"} onClick={() => this.search(this)}>
                                    <span className={"fas fa-search"} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {this.state.games && this.state.games.length > 0 ? (<table className={"table table-striped"}>
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
                    </table>) : (<p>No Games were found! 😢</p>)}
            </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<GamesPage />, document.getElementById('content'));