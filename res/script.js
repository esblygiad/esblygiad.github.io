const sourceUrl = "https://github.com/esblygiad/esblygiad.github.io"

const innerhtmlContent = {
    home: `
        Welcome to my website! Here you can read about me and what I do (Bio), and view my past work and interests (Portfolio).<br>
        <br>

        I wrote this website completely on my own in Visual Studio Code. The domain is hosted by CloudFlare and the files are hosted
        on GitHub Pages. Soon I will move this website to Hetzner and I might rewrite it using Node.<br>
        <br>

        Privacy is key, and this website is sugar free! There are no cookies used across the whole <em>esblygiad.com</em> website.<br>
        Remember to reset your passwords often and use a unique password for every platform! If it supports 2FA, use it!<br>
        <br>

        <em>esblygiad, Jan 15</em>
    `,
    
    bio: `
        <em><strong>January 15, 2025</strong></em><br>
        <br>

        Hi, my name is <em>esblygiad</em>, or LTE. I'm a senior in high school ('25) with an interest in software engineering.
        I plan to get a BS in Software Engineering (SHSU '29) and a MS in Cyber Security ('31).<br>
        <br>

        I have been programming since I was 10 years old, completely self-taught. Sixth grade is when I learned to write in
        my first programming language, which I still use to this day, C#. I wanted to learn it so that I could join a friend in
        creating games in Unity, though that aspiration never took off, and I actually dislike game development now. Nowadays,
        I write primarily in C#, JavaScript, C++, Rust, and often Python, though I don't really have any finished projects to 
        show for my knowledge.<br>
        <br>

        I spend my free time doing three things...<br>
        <br>

        1) A grand majority of my free time is spent writing software, usually starting projects that I'll never finish. I toy around
        with small concepts that I have, eventually get bored of them, then start a new project. Recently I have come up with a
        topic that I chose to stick to (Dibut), and you can see it in the Portfolio tab.<br>
        <br>

        2) I use Spotify to listen to a mishmash of artists that I like: Pink Floyd, Linkin Park, Childish Gambino, Billy Joel,
        Death Grips, some others.... I have a really inconsistent taste in music. I also have a collection of vinyl records that
        I listen to from time to time.<br>
        <br>

        3) When I'm home and have nothing else better to do, I play a few different games that I sometimes get bored of and stop
        playing in favor of another game. Some of the current games I play include Balatro, ULTRAKILL, and HITMAN WoA. Some others
        that I really really enjoy include Titanfall 2, Rainbow Six Siege, Bloons Tower Defense 6, Mullet Mad Jack, and N++.<br>
        <br>

        I have a few other hobbies, but the biggest ones are collecting vinyls and taking photos with my Polaroid. You can view
        photos I've taken in the Portfolio tab.<br>
        <br>

        Finally, I aspire to be a software engineer and use my career to change the world in some significant way, most likely
        in the cyber security space. I think that the technology we have today is so underappreciated and is being strongly
        abused by bad actors from all corners of the earth.  I want to work to change that.
    `,

    music: `
        This is my music dump, where I share music I like.<br>
        <br>

        <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/track/3DI8C3OSwuXd8E947MWiSi?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe><br>

        <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/track/4SGS3okZJqz3GpEdruo9BK?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe><br>

        <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/track/5egqKwgK5r5rvGD1LrtR7J?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
    `,

    portfolio: `
        Truth be told, I don't have anything to share right now. I have a programming language I am writing in C# but it isn't finished yet.
    `,
}

function navigate(loc = "") {
    let _loc = loc

    if (_loc === "source") window.open(sourceUrl, '_blank').focus()
    //else if (_loc === "portfolio") window.location.href = './portfolio/index.html'
    //else if (_loc === "portfolio_RETURN") window.location.href = '../index.html'
    else if (_loc === "") _loc = "home"

    console.log(`(DEBUG) Loc reset to loc "${_loc}" from original loc "${loc}"`)

    if (Object.keys(innerhtmlContent).includes(_loc)) {
        try { document.getElementById('bodycontent').innerHTML = innerhtmlContent[_loc] }
        catch (e) {
            console.log(e.message)
            window.location.href = "./index.html"
        }
    }

    updateTitle(_loc)
}

function updateTitle(to) {
    if (to !== 'source') {
        console.log(`(DEBUG) Changed title to match loc`)
        document.getElementById('title').innerHTML = to.charAt(0).toUpperCase() + to.slice(1)
    }
}

window.addEventListener("load", event => navigate())