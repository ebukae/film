//Use an array to hold the value of the films
const arrayOfFilms = [
    {'film': 'Kill Bill (both vols)',
     'review': 'I\'ve never actually seen it but heard great things about it.'
    },
    {'film': 'Ferris Bueller\'s Day Off',
     'review': 'My all time favourite.'
    },
    {'film': 'The Perks of Being a Wallflower',
     'review': 'A recent heartwarming watch.'
    },
    {'film': 'Scream',
     'review': 'Can\'t go wrong with a classic.'
    },
    {'film': '12 years a slave',
     'review': 'Very topical, yet timeless piece.'
    },
    {'film': 'Queen and Slim',
     'review': 'Good luck trying not to shed a tear!'
    },
];

function generateFilm(){
    const random = Number.parseInt(Math.random()*arrayOfFilms.length + 1);
    document.querySelector('#filmOutput').textContent = `${arrayOfFilms[random].film}`;
    document.querySelector('#reviewOutput').textContent = `- ${arrayOfFilms[random].review}`;

}
