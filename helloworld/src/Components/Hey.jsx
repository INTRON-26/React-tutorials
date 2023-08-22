import React from "react";

const Hey = ()=> {
    return React.createElement('div',
        {id:'hey',className:'dummyClass'},
        React.createElement('h1',null,'hey intron')
    )
}

export default Hey;