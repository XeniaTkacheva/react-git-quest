import React, {useContext, useEffect, Fragment} from "react"
import {GithubContext} from "../context/github/githubContext"
import {Link} from 'react-router-dom'

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

    const urlName = match.params.name

    useEffect(() => {
            getUser(urlName)
            getRepos(urlName)
        },
        // eslint-disable-next-line
        [])
    if (loading) {
        return <p className="text-center"> Загрузка... </p>
    }
    const {
        name, avatar_url, login, company,
        email, followers, html_url, bio,
        following, public_repos,
        public_gists, location, blog
    } = user
    return (
        <Fragment>
            <Link to={'/'} className="btn btn-small-green"> &larr; На главную </Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 text-left">
                            <img src={avatar_url} alt={name} className="profile-img"/>
                            <h1>{name ? name : login}</h1>
                            <hr/>
                            {location && <p><strong> Местоположение: </strong> {location}</p>}
                        </div>
                        <div className="col">
                            {bio &&
                            <Fragment>
                                <h3>BIO </h3>
                                <p>{bio}</p>
                            </Fragment>}
                            <a href={html_url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-green">
                                Открыть профиль
                            </a>
                            <ul className="list-unstyled mt-3">
                                {login && <li className="">
                                    <strong>Username: </strong> {login}
                                </li>}
                                {company && <li className="">
                                    <strong>Компания: </strong> {company}
                                </li>}
                                {blog && <li className="">
                                    <strong>Website: </strong>
                                    <a href={blog}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        {blog}
                                    </a>
                                </li>}
                                {email && <li className="">
                                    <strong>E-mail: </strong> {email}
                                </li>}
                            </ul>
                            <div className="badge badge-secondary m-1">Репозитории: {public_repos}</div>
                            <div className="badge badge-success m-1">Подписчики: {followers}</div>
                            <div className="badge badge-info m-1">Подписан: {following}</div>
                            <div className="badge badge-green1 m-1">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            {repos.join()}
        </Fragment>

    )
}