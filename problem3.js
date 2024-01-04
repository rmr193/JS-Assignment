function isBestFriend(person1, person2) {
    return (
        person1.name === person2.friend &&
        person1.friend === person2.name
    );
}

const friend1 = { name: "abul", friend: "babul" };
const friend2 = { name: "babul", friend: "abul" };

console.log(isBestFriend(friend1, friend2)); 
