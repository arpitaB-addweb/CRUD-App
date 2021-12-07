import React from 'react'


function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/home">Books Component</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addbook">Add-User</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addpost">Add-Book</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
