import React from 'react'

export default function Navbarcomponent({ searchtitle, searchvalue }) {
    return (
        <div>
            <header className="o-header" data-o-component="o-header" data-o-header--no-js>
                <div className="o-header__row o-header__anon">
                    <ul className="o-header__anon-list">
                        <li className="o-header__anon-item">
                            <a className="o-header__anon-link" href="#">Subscribe</a>
                        </li>
                        <li className="o-header__anon-item">
                            <a className="o-header__anon-link" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>

                <div className="o-header__row o-header__top">
                    <div className="o-header__container">
                        <div className="o-header__top-wrapper">
                            <div className="o-header__top-column o-header__top-column--left">
                                <a href="#o-header-drawer" className="o-header__top-link o-header__top-link--menu" aria-controls="o-header-drawer" title="Open side navigation menu">
                                    <span className="o-header__top-link-label">Open side navigation menu</span>
                                </a>
                            </div>
                            <div className="o-header__top-column o-header__top-column--center">
                                <a className="o-header__top-logo" title="Go to Financial Times homepage">
                                    <span className="o-header__visually-hidden">Financial Times</span>
                                </a>
                            </div>
                            <div className="o-header__top-column o-header__top-column--right">
                                <a className="o-header__top-link o-header__top-link--myft" href="/myft" aria-label="My F T">
                                    <span className="o-header__visually-hidden">myFT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="o-header-search" className="o-header__row o-header__search o--if-no-js" role="search">
                    <div className="o-header__container">
                        <form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
                            <label className="o-header__visually-hidden" htmlFor="o-header-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
                            <input className="o-header__search-term"
                                id="o-header-search-term"
                                name="q"
                                type="text"
                                placeholder="Search the FT"
                                value={searchvalue}
                                onChange={searchtitle} />
                            <button className="o-header__search-submit"
                                onClick={searchtitle}
                                type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div id="o-header-search-js" className="o-header__row o-header__search" role="search" data-o-header-search>
                    <div className="o-header__container">
                        <form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
                            <label className="o-header__visually-hidden" htmlFor="o-header-search-term-js">Search the <abbr title="Financial Times">FT</abbr></label>
                            <input className="o-header__search-term" id="o-header-search-term-js" name="q" type="text" placeholder="Search the FT" />
                            <button className="o-header__search-submit" type="submit">
                                Search
                            </button>
                            <button className="o-header__search-close o--if-js" type="button" aria-controls="o-header-search-js" title="Close search bar">
                                <span className="o-header__visually-hidden">Close search bar</span>
                            </button>
                        </form>
                    </div>
                </div>



                <nav id="o-header-nav-desktop" className="o-header__row o-header__nav o-header__nav--desktop" role="navigation" aria-label="Main navigation">
                    <div className="o-header__container">
                        <ul className="o-header__nav-list o-header__nav-list--right">
                            <li className="o-header__nav-item">
                                <a className="o-header__nav-link o-header__nav-link--utility" href="https://markets.ft.com/data/portfolio/dashboard">Portfolio</a>
                            </li>
                            <li className="o-header__nav-item">
                                <a className="o-header__nav-link o-header__nav-link--utility" href="https://myaccount.ft.com/details/core/view">My Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </div>

    )
}
