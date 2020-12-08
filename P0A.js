var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   console.log(cat);

   cat.height='1';
   cat.weight='4';
   cat.name='Fluffyy';

   console.log(cat.catFriends[0].activities,cat.catFriends[1].activities);
   console.log(cat.catFriends[0].name,cat.catFriends[1].name);
   console.log('total weight =',cat.catFriends[0].weight+cat.catFriends[1].weight);
   console.log('total length of activities =',cat.activities.length+cat.catFriends[0].activities.length+cat.catFriends[1].activities.length);

   cat.catFriends[0].activities.push('fight');
   cat.catFriends[1].activities.push('fly');
   cat.catFriends[0].furcolor='black';

   console.log(cat);
   
