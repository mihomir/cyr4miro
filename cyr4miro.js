(function () {

if (window.cyr4miro) {
    return;
}

window.cyr4miro = 'loaded';

var s = document.createElement('script');

s.onload = function () {
    set_up_cyr();
};

s.setAttribute('src', 'http://jquery.com/src/jquery-latest.js');
document.getElementsByTagName('body')[0].appendChild(s);

var mappings = {
    'A' : 'А',
    'B' : 'Б',
    'C' : 'Ц',
    'D' : 'Д',
    'E' : 'Е',
    'F' : 'Ф',
    'G' : 'Г',
    'H' : 'Х',
    'I' : 'И',
    'J' : 'Й',
    'K' : 'К',
    'L' : 'Л',
    'M' : 'М',
    'N' : 'Н',
    'O' : 'О',
    'P' : 'П',
    'Q' : 'Я',
    'R' : 'Р',
    'S' : 'С',
    'T' : 'Т',
    'U' : 'У',
    'V' : 'Ж',
    'W' : 'В',
    'X' : 'ѝ',
    'Y' : 'Ъ',
    'Z' : 'З',
    '~' : 'Ч',
    '{' : 'Ш',
    '}' : 'Щ',
    '`' : 'ч',
    '[' : 'ш',
    ']' : 'щ',
    'a' : 'а',
    'b' : 'б',
    'c' : 'ц',
    'd' : 'д',
    'e' : 'е',
    'f' : 'ф',
    'g' : 'г',
    'h' : 'х',
    'i' : 'и',
    'j' : 'й',
    'k' : 'к',
    'l' : 'л',
    'm' : 'м',
    'n' : 'н',
    'o' : 'о',
    'p' : 'п',
    'q' : 'я',
    'r' : 'р',
    's' : 'с',
    't' : 'т',
    'u' : 'у',
    'v' : 'ж',
    'w' : 'в',
    'x' : 'ь',
    'y' : 'ъ',
    'z' : 'з'
};

var selectors = [
    'input',
    'textarea',
    '.vcZxK',
    '.twitter-anywhere-tweet-box-editor'
];


var set_up_cyr = function () {
    var indicator = $('<div>BG</div>');
    indicator.attr('id', 'lang_indicator');
    indicator.css({
        'font-family' : 'sans-serif',
        'font-size' : '3em',
        'position' : 'fixed',
        'left' : document.body.clientWidth / 2,
        'top' : document.body.clientHeight / 2,
        'z-index' : 0
    });

    $('body').append(indicator);
    
    var toggle = true;

    setTimeout(function () {
        $('#lang_indicator').fadeOut();
    }, 1000);

    $(document).keydown(function (e) {
        if (e.which === 19) {
            if (toggle) {
                $('#lang_indicator').text('EN').fadeIn(function() {
                    setTimeout(function () { $('#lang_indicator').fadeOut(); }, 1000);
                });
                toggle = false;
            } else {
                $('#lang_indicator').text('BG').fadeIn(function() {
                    setTimeout(function () { $('#lang_indicator').fadeOut(); }, 1000);
                });
                toggle = true;
            }
        }
    });

    $(selectors.join(', ')).live('keypress', function () {
        if (!toggle) {
            return;
        }

        var that = $(this);

        setTimeout(function () {
            var text = that.val();

            var cursor_position = that[0].selectionStart - 1;

            var symbol = text[cursor_position];
            
            var replacement = mappings[symbol];

            if (replacement) {
                text = text.slice(0, cursor_position) + replacement + text.slice(cursor_position + 1);

                that.val(text);

                that[0].selectionStart = cursor_position + 1;
                that[0].selectionEnd = cursor_position + 1;
            }

        }, 10);
    });
};

})();
