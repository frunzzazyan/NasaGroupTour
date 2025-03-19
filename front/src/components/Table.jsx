import React from 'react'

import "./styles/Table.css"

const Table = () => {
    return (
        <>
            <table>
                <tr>
                    <th>Երևան - Թբիլիսի</th>
                    <th>Թբիլիսի - Երևան </th>
                </tr>
                <tr>
                    <td>07.30</td>
                    <td>07.30</td>
                </tr>
                <tr>
                    <td>08.30</td>
                    <td>09.00</td>
                </tr>
                <tr>
                    <td>10.30</td>
                    <td>11.00</td>
                </tr>
                <tr>
                    <td>13.00</td>
                    <td>13.00</td>
                </tr>
                <tr>
                    <td>15.00</td>
                    <td>15.00</td>
                </tr>
                <tr>
                    <td>17.00</td>
                    <td>17.00</td>
                </tr>
                <tr>
                    <td>19.00</td>
                    <td>19.00</td>
                </tr>
            </table>
        </>
    )
}

export default Table