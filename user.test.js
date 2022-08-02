const {User} = require('./user.js');

let user1 = new User("a@bc.com","Antoine","Mauboussin",21)
let user2 = new User("a@bc.com","Antoine","Mauboussin",12)
let user3 = new User("abc.com","Antoine","Mauboussin",12)
let user4 = new User("a@bc.com","","Mauboussin",12)

test('user1 validity', () => {
    expect(user1.isValid()).toBe(true);
});

test('user2 validity', () => {
    expect(user2.isValid()).toBe(false);
});

test('user3 validity', () => {
    expect(user3.isValid()).toBe(false);
});

test('user3 validity', () => {
    expect(user4.isValid()).toBe(false);
});