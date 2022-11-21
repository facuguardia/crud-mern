const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://facuguar12:Facundito12@cluster0.fykmsyr.mongodb.net/myapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
  username: String,
  age: Number,
})

const create = async () =>{
  const user = new User({username: 'Mili Acevedo', age: 15});
  const savedUser = await user.save();
  console.log(savedUser);
}

// create();

const searchAll = async () =>{
  const users = await User.find();
  console.log(users);
}

// searchAll();

const search = async () =>{
  const user = await User.findOne({username: 'Mili Acevedo'});
  console.log(user);
}

// search();

const update = async () =>{
  const user = await User.findOne({username: "Mili Acevedo"});
  user.age = 16;
  await user.save();
  console.log(user);
}

// update();

const remove = async () => {
  const user = await User.findOne({ username: "Mili Acevedo"});
  console.log(user);
  if (user) {
    await user.remove();
  }
}
// remove();



