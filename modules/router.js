const express = require('express');

const router = express.Router();

const fourchette = require('./ettehcruof');

router.use(express.urlencoded({ extended: true }));

router.get('/', (request, response) => {
    response.render('index');
});

router.get('/game/ettehcruof', (request, response, next) => {
    let message;
    let actionButtons = [
        'moins',
        'bravo',
        'plus',
    ];

    switch (request.query.action) {
        case 'plus':
            fourchette.plus();
            if (fourchette.isCheating()) {
                message = `J'aime pas les tricheurs, chao !`;

                actionButtons = [];
            } else {
                message = `ok c'est plus, donc je propose ${fourchette.getProposition()}`;
            }
            break;
        case 'moins':
            fourchette.moins();
            if (fourchette.isCheating()) {
                message = `J'aime pas les tricheurs, chao !`;

                actionButtons = [];
            } else {
                message = `ok c'est moins, donc je propose ${fourchette.getProposition()}`;
            }
            break;
        case 'bravo':
            fourchette.reset();
            message = `Super je suis trop fort !!`;
            actionButtons = ['replay'];
            break;
        default:
            fourchette.init();
            message = `Je propose ${fourchette.getProposition()}`;
            break;
    }

    response.locals.message = message;
    response.locals.actionButtons = actionButtons;

    next();
});

router.get('/game/:gameName', (request, response, next) => {
    const gameName = request.params.gameName;
    const games = request.app.locals.games;
    const game = games.find(currentGame => currentGame.name === gameName);

    if (game) {
        return response.render(gameName, game);
    } else {
        next();
    }

});

router.use((_, response) => {
    response.status(404).render('error404', { title: 'Error 404 Page not found' });
});


module.exports = router;