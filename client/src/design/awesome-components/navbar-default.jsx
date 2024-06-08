import React from 'react';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ReportWriter</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a data-testid="home-link" class="nav-link active" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a data-testid="home-link" class="nav-link active" href="/profile">profile</a>
                            </li>
                            <li class="nav-item">
                                <a data-testid="home-link" class="nav-link active" href="/report">report</a>
                            </li>
                        </ul>
                            <a data-testid="home-link" class="nav-link" href="/login">Войти</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;