const { AirThai } = require("../lib/index")

AirThai({ lat: 13.670809600000002, long: 100.6501888 })
  .then(result => {
    // console.log('result1:',result)
  })


async function find() {
  const result = await AirThai({ lat: 13.670809600000002, long: 100.6501888})
  // console.log(result)
}
find()