@observable usersObjArr = [
    {
      username: 'Ironboy',
      email: '1fakemail@lerniawuma17.nu',
      points: 300
    },
    {
      username: 'Weehorse',
      email: '2fakemail@lerniawuma17.nu',
      points: 300
    },
    {
      username: 'Andreas UL',
      email: '3fakemail@lerniawuma17.nu',
      points: 300
    },
    {
      username: 'Bill Gates',
      email: '4fakemail@lerniawuma17.nu',
      points: 0
    },
    {
      username: 'Mark Zuckerberg',
      email: '5fakemail@lerniawuma17.nu',
      points: 100
    },
    {
      username: 'Tim Berners-Lee',
      email: '6fakemail@lerniawuma17.nu',
      points: 260
    },
    {
      username: 'Elon Musk',
      email: '7fakemail@lerniawuma17.nu',
      points: 40
    },
    {
      username: 'Tänkande August',
      email: '8fakemail@lerniawuma17.nu',
      points: 240
    },
    {
      username: 'J.A.R.V.I.S.',
      email: '9fakemail@lerniawuma17.nu',
      points: 380
    },
    {
      username: 'Skynet',
      email: '10fakemail@lerniawuma17.nu',
      points: 290
    },
    {
      username: 'Cerebro',
      email: '11fakemail@lerniawuma17.nu',
      points: 170
    },
    {
      username: 'Mother Brain',
      email: '12fakemail@lerniawuma17.nu',
      points: 220
    },
    {
      username: 'Jabba the Hutt',
      email: '13fakemail@lerniawuma17.nu',
      points: 90
    },
    {
      username: 'Luke Skywalker',
      email: '14fakemail@lerniawuma17.nu',
      points: 110
    },
    {
      username: 'Yoda',
      email: '15fakemail@lerniawuma17.nu',
      points: 370
    },
    {
      username: 'C-3PO',
      email: '16fakemail@lerniawuma17.nu',
      points: 20
    },
    {
      username: 'Chewbacca',
      email: '17fakemail@lerniawuma17.nu',
      points: 160
    },
    {
      username: 'Han Solo',
      email: '18fakemail@lerniawuma17.nu',
      points: 340
    },
    {
      username: 'R2-D2',
      email: '19fakemail@lerniawuma17.nu',
      points: 400
    },
    {
      username: 'Leia Organa',
      email: '20fakemail@lerniawuma17.nu',
      points: 150
    },
    {
      username: 'admin',
      email: 'adminadmin@admin.admin',
      points: 0
    }
  ]


for(let obj of this.usersObjArr){
    fetch('/api/addAllUsers',
    {
        method: 'POST',
        body:JSON.stringify({username: obj.username, email: obj.email, points: obj.points}),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res=>res.json())
        .catch((err) => {
        console.log('error', err);
        });
    console.log('Användare inlästa');
}