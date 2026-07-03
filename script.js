// script.js

// ============================================================
// BOOTCAMP DATE ENGINE
// Week 1 publishes Sunday, March 1, 2026
// New entry every Sunday thereafter through Week 41
// ============================================================

const BOOTCAMP_START = new Date('2026-03-01T00:00:00');

function getCurrentWeekNumber() {
    const now = new Date();
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksPassed = Math.floor((now - BOOTCAMP_START) / msPerWeek);
    return Math.min(Math.max(weeksPassed + 1, 1), 41);
}

function getWeekStartDate(weekNumber) {
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    return new Date(BOOTCAMP_START.getTime() + (weekNumber - 1) * msPerWeek);
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function zeroPad(n) {
    return String(n).padStart(2, '0');
}

// ============================================================
// ALL 41 WEEK TITLES & SYNOPSES
// ============================================================

const WEEKS = {
    1:  {
        title: "We Were Somewhere Around the Terminal, on the Edge of the Internet, When the Code Began to Take Hold",
        synopsis: "The ride begins — first contact with HTML, the skeleton of the web, and the terrifying realization that this is real. No turning back now; the ticket is bought.",
        emoji: "✨"
    },
    2:  {
        title: "More HTML & the First Taste of CSS — The Drug Is Starting to Kick In",
        synopsis: "Deeper into HTML while CSS enters the picture like a strange new substance — beautiful, unpredictable, and already making things complicated.",
        emoji: "🔧"
    },
    3:  {
        title: "CSS Layout & the Art of Not Breaking Everything (Yet)",
        synopsis: "CSS layout rules get dissected and reviewed, and the chaos of making things actually sit where you want them becomes the week's white whale.",
        emoji: "📱"
    },
    4:  {
        title: "Responsive Design & the Beautiful Disaster of Bad CSS",
        synopsis: "Responsive design means the page has to look good everywhere — and writing intentionally bad CSS turns out to be one of the most educational things imaginable.",
        emoji: "💻"
    },
    5:  {
        title: "Networking Nights & Rant Sessions — The Humans Are Part of the Journey Too",
        synopsis: "A networking event and a full-on review rant week; turns out the people in this bootcamp are just as chaotic and determined as the code itself.",
        emoji: "🤝"
    },
    6:  {
        title: "Flexbox Enters the Chat & JavaScript Knocks on the Door",
        synopsis: "Flexbox finally makes layout make sense, and JavaScript shows up at the end of the week like a shadowy figure with a briefcase full of possibilities.",
        emoji: "📊"
    },
    7:  {
        title: "JavaScript Is Funny Until It Isn't — Functions, Fear, and the First Real Logic",
        synopsis: "Fun JS examples give way to functions, and the brain starts rewiring itself to think in logic, loops, and return values.",
        emoji: "🔮"
    },
    8:  {
        title: "Freelancing, Loops, and the First Taste of Getting Paid to Code",
        synopsis: "The business side of development crashes the party alongside JavaScript loops — suddenly this isn't just about learning, it's about building a career.",
        emoji: "💰"
    },
    9:  {
        title: "Project Night in the Desert — The Crash Course Cometh",
        synopsis: "No streams, just raw project work and the Front End Crash Course — a full-on review gauntlet to cement everything before JavaScript takes over completely.",
        emoji: "🌐"
    },
    10: {
        title: "Arrays: The Gonzo Guide to Organizing Chaos",
        synopsis: "JavaScript arrays arrive and suddenly data has structure — learning to store, access, and manipulate lists of things like a developer actually thinks.",
        emoji: "🛠️"
    },
    11: {
        title: "Objects — When Your Data Grows Up and Gets a Personality",
        synopsis: "JavaScript objects transform flat data into something with shape and meaning; by the end of the week, the code is starting to feel alive.",
        emoji: "☁️"
    },
    12: {
        title: "APIs & Git — Talking to the Outside World and Saving Your Own Soul",
        synopsis: "APIs open the door to real external data, and Git/GitHub means no more losing work to the void — version control is the safety net we didn't know we needed.",
        emoji: "⚛️"
    },
    13: {
        title: "Fix Your Resume, Build the App — The Hunt Is Already Beginning",
        synopsis: "Resume work collides with building a real API-powered app; the theoretical is collapsing into the professional at alarming speed.",
        emoji: "📄"
    },
    14: {
        title: "NASA Data and API Madness — We're Pulling From Space Now",
        synopsis: "Pulling live data from NASA's API makes it viscerally real — this is what developers do, and it's as wild and exciting as it sounds.",
        emoji: "🚀"
    },
    15: {
        title: "Back to Basics, Then OOP Hits Like a Freight Train",
        synopsis: "A JS review grounds the fundamentals before Object-Oriented Programming arrives and reframes everything learned so far into a new, more powerful paradigm.",
        emoji: "💾"
    },
    16: {
        title: "Inheritance, Polymorphism & the Week My Brain Officially Split in Two",
        synopsis: "OOP deepens with inheritance and polymorphism — abstract concepts that, once they click, make you see code structure in an entirely new dimension.",
        emoji: "🔐"
    },
    17: {
        title: "Why You're Not Getting Interviews — And the JavaScript Crash Course That Will Change That",
        synopsis: "A brutally honest career reality check pairs with the JavaScript Crash Course weekend, a condensed crucible meant to forge real competency under pressure.",
        emoji: "🗝️"
    },
    18: {
        title: "Node, Promises & Async — Welcome to the Back End, It's Dark Here",
        synopsis: "The shift to server-side begins with Node.js and the mind-bending concept of asynchronous code — nothing runs in the order you expect and that's the whole point.",
        emoji: "🌑"
    },
    19: {
        title: "The Event Loop, Node Apps & the Beautiful Weirdness of the Server",
        synopsis: "The JavaScript event loop gets demystified and a real Node app gets built without Express — learning to walk before running in the back end wilderness.",
        emoji: "🔄"
    },
    20: {
        title: "Build Your Own API & CRUD — From Consumer to Creator",
        synopsis: "The roles reverse: instead of calling APIs, we're building them and hosting them live, plus CRUD operations that make data truly dynamic.",
        emoji: "🎣"
    },
    21: {
        title: "MongoDB, Express, EJS & the First Full Stack Frankenstein",
        synopsis: "All the pieces come together in a real CRUD app — MongoDB, Express, and EJS stitched into something that actually works, even if it's still a little monstrous.",
        emoji: "🧭"
    },
    22: {
        title: "The Summer of Silence — Regrouping in the Wilderness (Part I)",
        synopsis: "No scheduled classes; a stretch of deliberate rest, review, and quiet practice in the heat of the summer before the back half assault begins.",
        emoji: "🏖️"
    },
    23: {
        title: "The Summer of Silence — Regrouping in the Wilderness (Part II)",
        synopsis: "Continuing the intentional pause — consolidating everything learned, shoring up weak spots, and mentally preparing for the full-stack storm ahead.",
        emoji: "🌅"
    },
    24: {
        title: "The Summer of Silence — Regrouping in the Wilderness (Part III)",
        synopsis: "The final week of the gap — quiet practice and reflection before September signals the return to full intensity.",
        emoji: "🌿"
    },
    25: {
        title: "One Class, No Stream, Full Send on the Project",
        synopsis: "A lone no-stream class week — deep in project work, holding the line on skills while the calendar holds its breath for September.",
        emoji: "📋"
    },
    26: {
        title: "Still in the Desert — The Lull Before the Full Stack Storm (Part I)",
        synopsis: "Another gap in the schedule, but the work continues; this is the calm before the curriculum roars back to life with full-stack intensity.",
        emoji: "🔨"
    },
    27: {
        title: "Still in the Desert — The Lull Before the Full Stack Storm (Part II)",
        synopsis: "Holding steady through the schedule gap — reviewing, building, and staying sharp for the assault that's coming.",
        emoji: "🏃"
    },
    28: {
        title: "Full Stack JS — The Five-Hour Dive Into the Deep End",
        synopsis: "A marathon full-stack JavaScript session across two classes that reframes everything — front end, back end, and the full picture finally coming into focus.",
        emoji: "🌊"
    },
    29: {
        title: "MVC Architecture — When Your App Finally Gets Its Act Together",
        synopsis: "The Model-View-Controller pattern brings order to the chaos of full-stack apps, and Node.js MVC builds give the codebase real professional structure.",
        emoji: "🗂️"
    },
    30: {
        title: "Prepare for the Hunt — Sharpening the Blade Before the Job Search",
        synopsis: "Hunt preparation week signals the shift from student to candidate; the code is nearly there, and now the strategy has to match the skills.",
        emoji: "🎯"
    },
    31: {
        title: "Passport.js & the Art of Knowing Who's at the Door",
        synopsis: "Authentication arrives via Passport.js — email logins, session management, and the fundamental skill of knowing which users belong in your app.",
        emoji: "🔑"
    },
    32: {
        title: "Social Networks & the Stack That Powers Human Connection",
        synopsis: "Building a social network with Node, Express, MongoDB, and Cloudinary — the kind of project that makes you realize just how far the journey has come.",
        emoji: "🕸️"
    },
    33: {
        title: "The Social Network Continues — Features, Fixes & the Reality of Real Apps",
        synopsis: "Deeper into the social network build, confronting the complexity, edge cases, and grinding detail work that separates real apps from tutorial projects.",
        emoji: "⚙️"
    },
    34: {
        title: "Back End Crash Course — A Full Week in the Engine Room",
        synopsis: "The Back End Crash Course is a full week immersion to cement every server-side concept before the final push — exhausting, essential, and transformative.",
        emoji: "🔩"
    },
    35: {
        title: "The 100-Hour Project & React — The Last Mountain Appears on the Horizon",
        synopsis: "The legendary 100-hour project kicks off alongside a React introduction — this is the capstone gauntlet and the framework that modern front ends are built on.",
        emoji: "⛰️"
    },
    36: {
        title: "Huntober — No Streams, All Hustle",
        synopsis: "Huntober means job applications, networking, and relentless outreach alongside the project — the hunt is fully live and the pressure is real.",
        emoji: "🦅"
    },
    37: {
        title: "How to Pass ANY Technical Interview — The Five-Hour Crucible",
        synopsis: "A deep, brutal, comprehensive technical interview prep session; this is the moment to confront every algorithmic fear and come out the other side ready.",
        emoji: "⚔️"
    },
    38: {
        title: "Speed Runs & Interview Gauntlets — The Final Approach",
        synopsis: "Finishing the technical interview marathon and hitting the speed run to employment — every class now is a direct investment in the job that's coming.",
        emoji: "🏎️"
    },
    39: {
        title: "Networked Into 30 Engineering Jobs — The Blueprint Revealed",
        synopsis: "A masterclass in networking strategy from someone who's lived it — the hitlist building begins and the job search becomes a full-time operation.",
        emoji: "🗺️"
    },
    40: {
        title: "Hitlists, Hustle & How to Get a Job — The Last Lessons",
        synopsis: "The final curriculum classes focus entirely on landing the role: building the target list, perfecting the pitch, and understanding exactly how this industry hires.",
        emoji: "🎪"
    },
    41: {
        title: "Buy the Ticket, Take the Ride — Graduation Day 🎓",
        synopsis: "Class 69. The last class. The 41-week campaign ends not with a finish line but with a launchpad — the developer is ready, and the real adventure is just beginning.",
        emoji: "🔥"
    }
};

// ============================================================
// POPULATE LATEST DISPATCHES (top 3 most recent weeks)
// ============================================================

function populateLatestDispatches() {
    const currentWeek = getCurrentWeekNumber();
    const dispatches = [];
    for (let i = 0; i < 3; i++) {
        const weekNum = currentWeek - i;
        if (weekNum < 1) break;
        dispatches.push({
            weekNum,
            ...WEEKS[weekNum],
            date: getWeekStartDate(weekNum),
            isLatest: i === 0
        });
    }

    const cards = document.querySelectorAll('#latest .spell-card');
    dispatches.forEach((dispatch, idx) => {
        const card = cards[idx];
        if (!card) return;
        const h3 = card.querySelector('h3');
        const dateEl = card.querySelector('.card-date');
        const previewEl = card.querySelector('p:not(.card-date)');
        const link = card.querySelector('.card-link');
        const badge = card.querySelector('.card-badge');

        if (h3) h3.textContent = `Week ${dispatch.weekNum}: ${dispatch.title}`;
        if (dateEl) {
            const label = dispatch.isLatest ? 'Current Week: ' : 'Week of ';
            dateEl.textContent = label + formatDate(dispatch.date);
        }
        if (previewEl) previewEl.textContent = dispatch.synopsis;
        if (link) {
            link.href = `diary/week-${zeroPad(dispatch.weekNum)}.html`;
            link.textContent = dispatch.isLatest ? "Read This Week's Saga" : 'Read Entry';
        }
        if (badge && dispatch.isLatest) badge.textContent = `Week ${dispatch.weekNum} — Live`;
    });
}

// ============================================================
// HIGHLIGHT CURRENT / FUTURE WEEKS IN DIARY ARCHIVE
// ============================================================

function highlightCurrentWeekInDiary() {
    const currentWeek = getCurrentWeekNumber();
    document.querySelectorAll('#diary .spell-card').forEach(card => {
        const heading = card.querySelector('h4');
        if (!heading) return;
        const match = heading.textContent.match(/Week (\d+)/);
        if (!match) return;
        const weekNum = parseInt(match[1]);
        if (weekNum === currentWeek) {
            card.classList.add('current-week');
        } else if (weekNum > currentWeek) {
            card.classList.add('future-week');
        }
    });
}

// ============================================================
// INTERSECTION OBSERVER for scroll animations
// ============================================================

const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    populateLatestDispatches();
    highlightCurrentWeekInDiary();
});