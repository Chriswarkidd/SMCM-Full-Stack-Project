class Account extends React.Component {

    render() {
        return (
            <div align ="center">
                <button className={"btn-delete"}> Delete Account </button>
            </div>
        );
    }
}

ReactDOM.render(<Account />, document.getElementById('content'));