const {User} = require('./user.js');

afterEach(() => {
    console.log("teardown")
});

test('user1 validity', () => {
    let user1 = new User("a@bc.com","Antoine","Mauboussin",21)
    expect(user1.isValid()).toBe(true);
});

test('user2 validity', () => {
    let user2 = new User("a@bc.com","Antoine","Mauboussin",12)
    expect(user2.isValid()).toBe(false);
});

test('user3 validity', () => {
    let user3 = new User("abc.com","Antoine","Mauboussin",12)
    expect(user3.isValid()).toBe(false);
});

test('user4 validity', () => {
    let user4 = new User("a@bc.com","","Mauboussin",12)
    expect(user4.isValid()).toBe(false);
});