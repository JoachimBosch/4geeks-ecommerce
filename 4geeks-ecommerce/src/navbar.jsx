import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">"True" Amazon</a>
            </div>
            <div>
                <form className="d-flex" role="search">
                <input className="form-control me-2 search-input" type="search" name="search-form" placeholder="Search" id="search-form" onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button className="btn btn-outline-success" onclick="">Search</button>
                </form>
            </div>
        </nav>
)};

export default Navbar;