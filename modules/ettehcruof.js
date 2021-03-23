const determineProposition = (min, max) => Math.floor((max + min) / 2);

const config = {
    min: 1,
    max: 100
};

let minBoundary = config.min;
let maxBoundary = config.max;
let proposition = null;

const app = {

    init: () => {
        proposition = determineProposition(minBoundary, maxBoundary);
    },

    plus: () => {
        minBoundary = proposition + 1;
        proposition = determineProposition(minBoundary, maxBoundary);
    },

    moins: () => {
        maxBoundary = proposition - 1;
        proposition = determineProposition(minBoundary, maxBoundary);
    },

    reset: () => {
        minBoundary = config.min;
        maxBoundary = config.max;
    },

    getProposition: () => {
        return proposition;
    },

    isCheating: () => {
        return proposition === maxBoundary || proposition === minBoundary;
    }
}

module.exports = app;
