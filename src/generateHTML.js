function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
            <title>Team Profile</title>
        </head>

        <body>
            <header>
                <h1 class="team">My Team</h1>
            </header>

            <section class="container">
                <div class="card">
                    <div class="title">
                        <h1 class="card-title">${teamMembers[0].name}</h1>
                        <h2>role</h2>
                    </div>

                    <div class="card-body" >
                        <div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>ID: ${teamMembers[0].id}</td>
                                    </tr>
                                    <tr>
                                        <td>Email: <a href="mailto:${teamMembers[0].email}">${teamMembers[0].email}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Office Number: ${teamMembers[0].office}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div>
                <div>

                <div class="card">
                    <div class="title">
                        <h1 class="card-title">${teamMembers[1].name}</h1>
                        <h2>role</h2>
                    </div>

                    <div class="card-body" >
                        <div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>ID: ${teamMembers[1].id}</td>
                                    </tr>
                                    <tr>
                                        <td>Email: <a href="mailto:${teamMembers[1].email}">${teamMembers[1].email}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Github:  <a href="www.github.com/${teamMembers[1].github}">${teamMembers[1].github}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div>
                <div>

                <div class="card">
                    <div class="title">
                        <h1 class="card-title">${teamMembers[2].name}</h1>
                        <h2>role</h2>
                    </div>

                    <div class="card-body" >
                        <div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>ID: ${teamMembers[2].id}</td>
                                    </tr>
                                    <tr>
                                        <td>Email: <a href="mailto:${teamMembers[2].email}">${teamMembers[2].email}</a></td>
                                    </tr>
                                    <tr>
                                        <td>School: ${teamMembers[2].school}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div>
                <div>
            </section>

        </body>


    </html>
    `
}

module.exports = generateHTML