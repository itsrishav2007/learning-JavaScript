// FIRST PROJECT

const product = {
  name: "ct ball pen",
  rating: 4.3,
  isDeal:true,
  isNotInDeal:false,
  price:250,
  offer: "10% off"
};
console.log(product);
product["name"] = "table" +"Tennis";    //updating name
product["price"] = product["price"] +50;  //updating price
console.log(product.name);
console.log(product.price);
product["price"] = "250" +50;      //updating price=25050.  //"250" - 50 =200
console.log(product.price);


//SECOND PROJECT
const profile = {
  userName: "@rishavmajhi",
  editYourName: "rishav majhi",
  followers: 56900,
  following: 4,
  isVerified: true,
  bio: "to educate someone is the highest privilage",
  posts: 195
};
console.log(profile);
console.log(profile.userName);
console.log(profile.isVerified);
profile["followers"] = profile["followers"] +200;
profile["following"] = profile["following"] +20;
console.log(profile.followers);
console.log(profile.followings);
console.log(typeof profile["isVerified"]);  //boolean value