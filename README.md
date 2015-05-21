js-developer-quiz
=================
Return your answer as zip-file or private gist, etc. containing all the relevant files. Your JS code should work at least in one platform (browser, node, etc.). Do not use external libs, just vanilla JS and what the platform provides. Bonus points for tests (you can use testing framework/lib if you want). DO NOT fork this repo.

### Question 1.

Given a list of games:

```js
var games = [
  {name: 'Pako', rating: 4.21},
  {name: 'Hill Climb Racing', rating: 3.88},
  {name: 'Angry Birds Space', rating: 3.88},
  {name: 'Badland', rating: 4.33}
];

```

Implement function `sortByAttribute` so that you can:

```js
// sort by name ascending
console.log(sortByAttribute(games, 'name'));
/* should output
[{name: 'Angry Birds', ...},
{name: 'Badland', ...}
... */
```

```js
// sort by rating descending and if rating is the same sort by name ascending
console.log(sortByAttribute(games, ['-rating', 'name']));
/*
[
  {name: 'Badland', ..},
  {name: 'Pako', ...},
  {name: 'Angry Birds', ...},
  {name: 'Hill Climb Racing', ...}
]
*/
```

### Question 2.

Implement a function `getAvatars` that calls GitHub API and gets the avatars of given users in order. E.g.
`getAvatars(["orktes", "nomon", "kosmikko"])` should return avatars of those users in that order. 


### Question 3.

Make the following work:
```js
var john = new Person("John", "Doe");
console.log(john.name);
// should equal "John Doe"
john.name = "John Lennon";
console.log(john.lastName);
// should equal "Lennon"
console.log(john.firstName);
// should equal "John"
```


### Question 4.

How would you implement backend storage for Facebook-messenger-like application (with similar scale), i.e. how would you store chat related data? Main point is to describe the data structures, not hardware/db details. Use pictures if you like.
Take approx. 15 minutes to answer this.
