function Screen({
    value,
    handleInputChange
}) {
    return (
        <div className="screen">
            <form>
                <input id='test-number' value={value} onChange={(event) => {
                handleInputChange(event.target.value);
                }}></input>
            </form>
        </div>
    );
}

export default Screen;