import React from 'react'

export default function Table(props) {

    // console.log('coming from table',props.prop)

    const {prop,key} = props;
    // console.log(candidatesS)
    return (
        <tr key={key}>
            {prop.map((prop, key) => {
            return <td key={key}>{prop}</td>;
            })}
        </tr>
    )
}
