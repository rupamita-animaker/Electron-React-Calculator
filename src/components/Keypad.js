function Keypad () {
    const digits = [];
    for(let i=9; i>0; i=i-3) {
        for(let j=(i-3+1); j<=i; j++) {
            digits.push(
            <div style={{display: 'inline-block'}} className='digit' key={j}>
                {j}
            </div>
            )
        }
        digits.push(<br/>);
    }

    return (
        <div className="keypad">
            <div className="operands">
                <div className="digits">
                    {digits}
                </div>
                <div className="bottom-row">
                    <div className="zero">
                        0
                    </div>
                    <div className="decimal">
                        .
                    </div>
                </div>
            </div>
            <div className="operators"></div>
        </div>
    );
}

export default Keypad;