var User = function(name) {
    this.name = name;
    this.say = function() {
        log.add('User: ' + this.name);
    };
}

var DecorateUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function() {
        log.add('Decorate User: ' + this.name + ', ' + this.street + ', ' + this.city);
    };
}

var log = (function() {
    var log = '';

    return {
        add: function(msg) { log += msg + '\n';},
        show: function() { alert(log); log = '';}
    }
})();

function run() {
    var user = new User('Kelly');
    user.say();

    var decorated = new DecorateUser(user, 'Broadway', 'New York');
    decorated.say();

    log.show();
}

run();

console.log('hi');
