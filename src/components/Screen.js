import React, { useEffect } from 'react';

function Screen({
    value,
    evaluate,
    infix,
    operators,
    setValue,
    handleInputChange
}) {
    useEffect(() => {
        if(evaluate) {
            let temp = [];
            let postf = [];
            console.log('infix is: ' + infix);
            // infix to postfix
            infix.forEach((item) => {
                if(!(item in operators)) {
                    console.log('inf item: ' + item);
                    if(item!=')' && item!='(') {
                        postf.push(Number(item));
                    }
                    else if(item=='(') {
                        temp.push(item);
                    }
                    else if(item==')') {
                        while(temp[temp.length-1]!='(') {
                            console.log('temp[temp.length-1]: ' + temp[temp.length-1]);
                            postf.push(temp.pop());
                        }
                        temp.pop();
                    }
                }
                else {
                    if(temp.length==0 || temp[temp.length-1]=='(') {
                        temp.push(item);
                    }
                    else {
                        while(temp.length>0 && (operators[temp[temp.length-1]].precedence > operators[item].precedence)) {
                            postf.push(temp.pop());
                        }
                        temp.push(item);
                    }
                }
            });
            while(temp.length>0) {
                postf.push(temp.pop());
            }
            console.log('postf: ' + postf);

            /*evaluate postfix */
            postf.forEach((item) => {
                if(!(item in operators)) {
                    temp.push(item);
                }
                else {
                    if(item!='%') {
                        let b = temp.pop();
                        let a = temp.pop();
                        temp.push(operators[item].action(a, b));
                    }
                    else {
                        let a = temp.pop();
                        temp.push(operators[item].action(a));
                    }
                }
            });
            setValue(temp.pop());
        }
    }, [evaluate]);

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