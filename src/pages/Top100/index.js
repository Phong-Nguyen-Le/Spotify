import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Top100() {
    return (
        <Tippy content="Hello">
            <button>My button</button>
        </Tippy>
    )
}

export default Top100;