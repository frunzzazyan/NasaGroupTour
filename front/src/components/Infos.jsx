import React from 'react'

import Table from './Table'

import "./styles/Infos.css"


const Infos = ({data}) => {
    return (
        <>
            <div className="items">

                <div className="tables">
                    <h2>Երևան - Թբիլիսի և Թբիլիսի - Երևան միկրոավտոբուսի ժամացուցակը</h2>
                    <Table/>
                </div>

                <div className="text">
                    {data.text3 ? data.text3 : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus dolores harum sequi nulla molestias dignissimos illum repudiandae labore laborum nostrum eum ea repellat, magni natus aperiam maxime? Dolor, ratione repellat."}
                </div>
            </div></>
    )
}

export default Infos