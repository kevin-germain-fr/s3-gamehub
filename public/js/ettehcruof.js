const app = {

    init: function () {
        const more = document.querySelector('#plus');
        const less = document.querySelector('#moins');
        const win = document.querySelector('#bravo');
        const replay = document.querySelector('#replay');
        if (more) {
            more.addEventListener('click', app.moreClickHandler);
        }
        if (less) {
            less.addEventListener('click', app.lessClickHandler);
        }
        if (win) {
            win.addEventListener('click', app.winClickHandler);
        }
        if (replay) {
            replay.addEventListener('click', app.replayClickHandler);
        }
    },

    moreClickHandler: function (evt) {
        location.href = '?action=plus';
    },

    lessClickHandler: function (evt) {
        location.href = '?action=moins';
    },

    winClickHandler: function (evt) {
        location.href = '?action=bravo';
    },

    replayClickHandler: function (evt) {
        location.href = '?action=replay';
    }

}

document.addEventListener('DOMContentLoaded', app.init);