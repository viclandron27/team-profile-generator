function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile</title>
        </head>

        <body>
            <header>
                My Team
            <header>

            <section>
                <div>
                    <h1>${teamMembers.managerName}</h1>
                <div>
            </section>

        </body>


    </html>
    `
}

module.exports = generateHTML