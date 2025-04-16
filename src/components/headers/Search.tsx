import React from 'react'

export default function Search() {
    return (
        <div className="search-popup">
            <button className="close-search" aria-label="close search box" title="close search box">
                <i className="fa-solid fa-xmark" />
            </button>
            <form action="#" method="post">
                <div className="search-popup__group">
                    <input type="text" name="search-field" id="searchField" placeholder="Search...." required />
                    <button type="submit" aria-label="search products" title="search products">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
            </form>
        </div>
    )
}
