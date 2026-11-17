
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city.webp"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake.webp"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "images/san-diego.webp"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/rome.webp"
    }
];
// Function to display temple cards
function displayTemples(templeList) {
    const templeContainer = document.querySelector("#temple-cards");

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName} Temple"
                 loading="lazy">
        `;

        templeContainer.appendChild(card);
    });
}

// Display all temples when the page loads
displayTemples(temples);

// Home filter
document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples(temples);
});

// Old filter: temples dedicated before 1900
document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);
});

// New filter: temples dedicated after 2000
document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);
});

// Large filter: temples larger than 90,000 square feet
document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

// Small filter: temples smaller than 10,000 square feet
document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});

// Display current year in the footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display last modified date in the footer
document.querySelector("#lastModified").textContent =
    document.lastModified;
