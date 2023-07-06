export default function handler(req, res) {
   
    const body = req.body;
  
    console.log('body: ', body);
  
    if (!body.first || !body.last) {

      return res.status(400).json({ data: 'First or last name not found' });
    }

    res.status(200).json({ data: `${body.first} ${body.last}` });
    if (req.method === 'POST') {
        const { first, last } = req.body;
        
        res.status(200).json({ first, last });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
    return (
        <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  );
}
  
  