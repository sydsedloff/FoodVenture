export default class User {
  constructor(
    fullName,
    email,
    username,
    password,
    profilePicture,
    dietaryRestrictions,
    id
  ) {
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.profilePicture = profilePicture || "";
    this.dietaryRestrictions = dietaryRestrictions || new DietaryRestrictions();
    this.id = id || 0;
  }
}

export class DietaryRestrictions {
  constructor(
    glutenFree = false,
    kosher = false,
    pescatarian = false,
    vegan = false,
    vegetarian = false
  ) {
    this.glutenFree = glutenFree;
    this.kosher = kosher;
    this.pescatarian = pescatarian;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
  }
}
