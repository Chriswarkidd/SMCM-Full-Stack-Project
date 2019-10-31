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

        };
        this.games = [{ title: "Ark: Survival Evolved", played: true }, { title: "Astroneer", played: true }, { title: "Destiny 2", played: true }, { title: "Divinity 2", played: false }, { title: "Fable", played: false }, { title: "Zuma's Revenge", played: true }];
    }
    render() {
        return (
            <table className={"table"}>
                <tr>
                    <th>
                        Game Title
                    </th>
                    <th>
                        Played
                    </th>
                </tr>
                {this.games.map((g, index) => (<tr>
                    <td>
                        {g.title}
                    </td>
                    <td>
                        {g.played ? "Yes":"No"}
                    </td>
                </tr>))}
            </table>
        );
    }
}

ReactDOM.render(<Account/>, document.getElementById('content'));