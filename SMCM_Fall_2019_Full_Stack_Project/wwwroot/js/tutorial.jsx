class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        text: "one"};
    }

    onClick = (obj) => {
        $.ajax({ url: "/Home/Test", data: {x: 2} }).done(
            function (result) {
                obj.setState({ text: result.test }); 
            });
    };

    render() {
        return (
            <div className="commentBox">Hello, world! I am a CommentBox.
                <p>{this.state.text}</p>
                <button onClick={() => this.onClick(this)}> Press me </button>
            </div>

        );
    }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));