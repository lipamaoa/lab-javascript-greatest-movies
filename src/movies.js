// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray
        .map(item => item.director)
        .filter((item, index, arr) => arr.indexOf(item) === index);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (!moviesArray.length) {
        return 0;
    }

    const moviesSpielberg = moviesArray
        .filter(item => item.director == "Steven Spielberg" && item.genre.includes("Drama"));

    return moviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }

    const sumScores = moviesArray
        .filter(item => typeof item.score === "number")
        .reduce((acc, item) => acc + item.score, 0);

    const averageScore = sumScores / moviesArray.length;

    const average = averageScore.toFixed(2);

    return Number(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(item => item.genre.includes("Drama"));

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedByYear = moviesArray.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

    return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const AlphabeticOrder = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(item => item.title);
    return AlphabeticOrder


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const convertedMovies = moviesArray.map(item => {

        const parts = item.duration.split(" ");

        let totalMinutes = 0;

        parts.forEach(part => {
            if (part.includes("h")) {
                const hours = parseInt(part.replace("h", ""));
                totalMinutes += hours * 60;
            }
            else if (part.includes("m")) {
                const minutes = parseInt(part.replace("m", ""));
                totalMinutes += minutes;
            }
        });

        return {
            ...item,
            duration: totalMinutes
        };
    });

    return convertedMovies;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null;
    }

    let scores = {};

    moviesArray.forEach(movie => {
        if (scores[movie.year]) {
            scores[movie.year].push(movie.score);
        }
        else {
            scores[movie.year] = [movie.score];
        }
    });

    let bestScore = 0;
    let bestYear = "";

    Object.keys(scores).forEach(year => {
        const sum = scores[year].reduce((acc, score) => acc + score);
        const average = sum / scores[year].length;

        if (average > bestScore) {
            bestScore = average;
            bestYear = year;
        }
    })

    return `The best year was ${bestYear} with an average score of ${bestScore}`
}
