export default function handler(req, res) {
  // check method & payload
  if (req.method === 'POST') {
    console.log(req.body)

    // check auth

    // save to database

    // confirm
    res.status(200).json({status: 'ok'})
  }

  // or throw - 401 unauthorized, 404 - wrong call, 500 - misc
  res.status(500).json({error: 'Oops'})
}
