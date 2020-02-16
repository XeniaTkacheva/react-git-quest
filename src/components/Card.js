import React from "react"
import {Link} from "react-router-dom"

export const Card = ({user}) => {
    const {avatar_url, login} = user
    return (
        <div className="card">
            <img src={avatar_url} alt={login} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <h6 className="card-title">{}</h6>
                <Link to={'/profile/' + login} className="btn btn-green">Открыть</Link>
            </div>
        </div>
    )
}