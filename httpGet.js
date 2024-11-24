const handleGetRequest = (req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'GET request received' }));
  };
  