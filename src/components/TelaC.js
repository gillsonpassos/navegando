import React from "react";
import TextoCentral from "./TextoCentral";


export default props => {
    const { numero } = props.route.params || { params: { numero: 0 } }
    return (
        <TextoCentral corFundo='#a34562'>
            Tela C {JSON.stringify(numero)}
        </TextoCentral>

    )

}