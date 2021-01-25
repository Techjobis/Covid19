import React from 'react';

interface SvgProps {
    name: string,
    color?: string,
    size?: number,
    style?: any
}

const Svg = (props: SvgProps) => {

    let Icon: any;
    switch (props.name) {
        case "menu":
            Icon = require("./Menu").default;
            break;
        case "home":
            Icon = require("./Home").default;
            break;
        case "help":
            Icon = require("./Help").default;
            break;
        case "github":
            Icon = require("./Github").default;
            break;
        case "column":
            Icon = require("./Column").default;
            break;
        case "alert":
            Icon = require("./Alert").default;
            break;
        default:
            Icon = require("./Home").default;
    }

    return <Icon {...props} />;
}

export default Svg;
