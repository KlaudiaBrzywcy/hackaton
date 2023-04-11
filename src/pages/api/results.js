export default function handler(req, res) {
  // check method & payload
  if (req.method === 'POST') {
    // check auth

    // save to database

    // confirm
    res.status(200).send()
  }

  // or throw - 401 unauthorized, 404 - wrong call, 500 - misc
  res.status(500).json({error: 'Oops'})
}
