﻿
class Account extends React.Component {

    deleteAccount(obj) {
        $.ajax({ url: "/Home/DeleteAccount" }).done(
            function (result) {
                if (result.success) {
                    alert("Account Deleted");
                    window.location.href = "/Home/Index";
                }
            });
    }

    render() {
        var modal = (<div id={"deleteModal"} className={"modal fade"}>
            <div className={"modal-dialog"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4>Delete Account</h4>
                        <button className={"close"} data-dismiss="modal">
                            <span className={"fas fa-times"} />
                        </button>
                    </div>
                    <div className={"modal-body"}>
                        <h6>Waring: </h6>
                        <p>Your account and any information associated with it will be permanently deleted</p>
                        <p>Are you sure you wish to continue?</p>
                    </div>
                    <div className={"modal-footer"}>
                        <button className={"btn-delete"} data-dismiss="modal" onClick={() => this.deleteAccount(this)}>Delete</button>
                        <button className={"btn-accept"} data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>);
        return (
            <div align="center">
                <h1> My Games</h1>
                {modal}
                <Table />
                <button className={"btn-delete"} data-toggle={"modal"} data-target={"#deleteModal"}> Delete Account </button>
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
            addGameRequest: false
        };
        this.updatedGames = [];
        this.ajaxTest(this);
        this.getAllGames(this);
    }


    hasPlayed(obj, index) {
        obj.updatedGames[index][1] = !obj.updatedGames[index][1];
    }

    //create a list of game names to be updated when save changes is clicked
    saveChanges(obj) {
        jQuery.ajaxSettings.traditional = true;
        $.ajax({ url: "/Home/HasPlayed", data: { gameList: obj.updatedGames } }).done(
            function (result) {
                obj.ajaxTest(obj);
                alert("Your changes have been saved!");
            });
    }

    changeRating(obj, gName, index) {
        $rating = $("#Rating" + index)
        jQuery.ajaxSettings.traditional = true;
        $.ajax({ url: "/Home/Rate", data: { gameName: gName, rating: $rating.val() } }).done(
            function (result) {

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
            });
    }

    getAllGames(obj) {
        $.ajax({ url: "/Home/TestAllGames" }).done(
            function (result) {
                obj.setState({ listOfGames: result.test });
            });
    }

    addNewGameForm(obj) {
        obj.setState({ addGameRequest: true });
    }

    resetNewGameForm(obj) {
        obj.setState({ addGameRequest: false });
    }

    addGame(obj) {
        let $gameName = $("#GameList");
        $.ajax({url: "/Home/AddGameToPlayed", data: {
                gameName: $gameName.val()
            }
        }).done(
            function (result) {
                alert(result.message);
            }
        )
    }

    addNewGame(obj) {
        let $gameName = $("#gameName");
        let $gameYear = $("#gameYear");
        let $publisher = $("#publisher");
        let $gameRating = $("#gameRating");
        let $genre = $("#genre");
        let $platforms = $("#PlatformCheck");
        $.ajax({
            type: "POST", url: "/Home/AddGame", data: {
                gameName: $gameName.val(), publisher: $publisher.val(), genre: $genre.val(),
                rating: $gameRating.val(), year: $gameYear.val(), platforms: $platforms.val()}
        }).done(
            function (result) {
                alert(result.message);
            }
        )
    }

    render() {

        var modal = (<div id={"addModal"} className={"modal fade"}>
            <div className={"modal-dialog"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4>Add a Game!</h4>
                        <button className={"close"} data-dismiss="modal">
                            <span className={"fas fa-times"} />
                        </button>
                    </div>
                    <div className={"modal-body"}>
                        {this.state.addGameRequest ?
                            (<div className={"container"}>
                                <div className={"formGroup"}>
                                    <form>
                                        <label for={"gameName"}>Name:</label>
                                        <input id={"gameName"} className={"form-control"} type={"text"} placeholder={"Game Name"}></input>
                                    </form>
                                    <div className={"formGroup"}>
                                        <form>
                                            <label for={"publisher"}>Publisher:</label>
                                            <input id={"publisher"} className={"form-control"} type={"text"} placeholder={"Publisher Name"}></input>
                                        </form>
                                    </div>
                                    <div className={"formGroup"}>
                                        <form>
                                            <label for={"gameYear"}>Publishing Year:</label>
                                            <input id={"gameYear"} className={"form-control"} type={"text"} placeholder={"Publishing Year"}></input>
                                        </form>
                                    </div>
                                    <div className={"formGroup"}>
                                                <form>
                                                    <label for={"gameRating"}>Age Rating:</label>
                                                    <select id={"gameRating"}>
                                                        <option selected>Select a Rating</option>
                                                        <option value={"E"}>E</option>
                                                        <option value={"E10+"}>E10+</option>
                                                        <option value={"T"}>T</option>
                                                        <option value={"M"}>M</option>
                                                    </select>
                                                </form>
                                    </div>
                                            <div className={"formGroup"}>
                                                <form>
                                                    <label for={"genre"}>Genre:</label>
                                                    <select id={"genre"}>
                                                        <option selected>Select a Genre</option>
                                                        <option value={"Adventure"}>Adventure</option>
                                                        <option value={"Puzzle"}>Puzzle</option>
                                                        <option value={"Action"}>Action</option>
                                                        <option value={"Simulation"}>Simuation</option>
                                                        <option value={"Sports"}>Sports</option>
                                                    </select>
                                                </form>
                                    </div>
                                    <div className={"formGroup"}>
                                        <form>
                                            <label for={"PlatformCheck"}>Platforms:</label>
                                            <input id={"PlatformCheck"} className={"form-control"} type={"text"} placeholder={"Platforms"}></input>
                                        </form>
                                    </div>
                                    </div>
                            </div>) :
                            (<div>
                                <div className={"row"}>
                                    <div className={"col-sm-12"}>
                                        <label htmlFor={"GameList"}>Game: </label>
                                        <select id={"GameList"} defaultValue={""}>
                                            <option value="">Select an existing game</option>
                                            {
                                                this.state.listOfGames && this.state.listOfGames.map((g, index) => (<option key={index} value={g.gameName}>{g.gameName}</option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-sm-12"}>
                                        <button className={"btn btn-link"} role={"link"} onClick={() => this.addNewGameForm(this)}>Can't Find Your Game?</button>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <div className={"modal-footer"}>
                        {this.state.addGameRequest ? (<button className={"btn-accept"} data-dismiss="modal" onClick={() => this.addNewGame(this)}>Add</button>) :
                            (<button className={"btn-accept"} data-dismiss="modal" onClick={() => this.addGame(this)}>Add</button>)}
                        <button className={"btn-accept"} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>);

        return (
            <div>
                {modal}
                <button className={"btn-primary"} data-toggle={"modal"} data-target={"#addModal"} onClick={() => this.resetNewGameForm(this)}>Add a game!</button>
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
                                        (<input type="checkbox" checked={g.playedGame} readOnly={true} />) :
                                        (<input type="checkbox" defaultChecked={g.playedGame} onClick={() => this.hasPlayed(this, index)} />)
                                }
                            </td>
                            <td>
                                {
                                    g.playedGame ?
                                        (<div >
                                            <select id={"Rating" + index} className={"select-accountpage"}
                                                name={"Rating"} defaultValue={g.rating ? g.rating : "3"} onChange={() => this.changeRating(this, g.gameName, index)}>
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

ReactDOM.render(<Account />, document.getElementById('content'));