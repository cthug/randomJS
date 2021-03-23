//user object with array searching equality

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

if (!user.notifications.length) {
    console.log('No new notifications!');
}
//both objects and arrays behave the same when checking for equality
//once value is stored, the (!user.notifications.length) will not console.log
//because the value must (!) not contain length.