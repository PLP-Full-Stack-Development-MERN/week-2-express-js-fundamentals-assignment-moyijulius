// Simulated database
let users = [];

exports.getAllUsers = (req, res) => {
  res.json({
    status: 'success',
    data: users
  });
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  res.json({
    status: 'success',
    data: user
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      status: 'error',
      message: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date()
  };
  
  users.push(newUser);
  res.status(201).json({
    status: 'success',
    data: newUser
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    updatedAt: new Date()
  };
  
  res.json({
    status: 'success',
    data: users[userIndex]
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  
  users = users.filter(u => u.id !== parseInt(id));
  res.status(204).send();
};