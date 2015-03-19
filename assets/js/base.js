/*global window, document */
function Validator() {
    "use strict";
    var a = '';
    a = a + 'a';
}

Validator.prototype.checkName = function (name) {
    "use strict";
    return (/[a-z]/i.test(name) === false);
};

window.addEventListener('load', function () {
    "use strict";
    document.getElementById('firstname').addEventListener('blur', function () {
        var that = this,
            validator = new Validator(),
            validation = document.getElementById('namevalidation');
        if (validator.checkName(that.value) === true) {
            validation.innerHTML = 'Looks good! :)';
            validation.className = "validation yep";
            that.className = "yep";
        } else {
            validation.innerHTML = 'Looks bad! :(';
            validation.className = "validation nope";
            that.className = "ope";
        }
    });
});