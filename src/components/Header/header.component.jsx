import React from 'react'
import { Link } from 'react-router-dom'

import "./header.scss"

export default function Header() {
  return (
    <section className="header">
      <nav className="header__navbar">
        <div className="header__navbar--logo">
          <Link to="/">Movie<span>UP</span></Link>
        </div>
        <div className="header__navbar--links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link className="active" to="/favorites">Favorites</Link></li>
          </ul>
        </div>
        <div className="header__navbar--searchbox">
          <table className="search">
            <tbody>
              <tr>
                <td>
                  <input className="search__input" type="text" placeholder="Enter movie name here" />
                </td>
                <td>
                  <Link to="/"><i className="fas fa-search"></i></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </nav>    
    </section>
  )
}
