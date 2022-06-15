function Keypad ({
    value,
    handleInputChange
}) {
    const digits = [];
    for(let i=9; i>0; i=i-3) {
        for(let j=(i-3+1); j<=i; j++) {
            digits.push(
            <div 
            style={{
                display: 'inline-block',
                width: '50px',
                height: '30px',
                backgroundColor: 'beige',
                cursor: 'pointer'
            }} 
            className='digit' 
            key={j} 
            onClick={() => {
                handleInputChange(value + j.toString());
            }}
            >
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
                    <div className="zero"
                    onClick={() => {
                        handleInputChange(value + '0');
                    }}
                    >
                        0
                    </div>
                    <div className="decimal"
                    onClick={() => {
                        handleInputChange(value + '.');
                    }}
                    >
                        .
                    </div>
                </div>
            </div>
            <div className="operators">
                <div className="operators-col-1">
                    <div className="operator plus"
                    onClick={() => {
                        handleInputChange(value + '+');
                    }}
                    >
                        &#43;
                    </div>
                    <div className="operator minus"
                    onClick={() => {
                        handleInputChange(value + '-');
                    }}
                    >
                        &minus;
                    </div>
                    <div className="operator prod"
                    onClick={() => {
                        handleInputChange(value + '*');
                    }}
                    >
                        &times;
                    </div>
                    <div className="operator div"
                    onClick={() => {
                        handleInputChange(value + '/');
                    }}
                    >
                        &divide;
                    </div>
                </div>
                <div className="operators-col-2">
                    <div className="operator percentage"
                    onClick={() => {
                        handleInputChange(value + '%');
                    }}
                    >
                        &#37;
                    </div>
                    <div className="operator clear-screen">
                        AC
                    </div>
                    <div className="operator equals"
                    onClick={() => {
                        handleInputChange(value + '=');
                    }}
                    >
                        &#61;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keypad;