export default class User {
  constructor(
    fullName,
    email,
    username,
    password,
    profilePicture,
    dietaryRestrictions,
    notifications,
    settings,
    id
  ) {
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.profilePicture = profilePicture || "";
    this.dietaryRestrictions = dietaryRestrictions || new DietaryRestrictions();
    this.notifications = notifications || new Notifications();
    this.settings = settings || new Settings();
    this.id = id || 0;
  }
  // currentUser = new User();
  getCurrentUser() {
    return currentUser;
  }
  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
  }
}

export class DietaryRestrictions {
  constructor(glutenFree, kosher, pescatarian, vegan, vegetarian) {
    this.glutenFree = glutenFree;
    this.kosher = kosher;
    this.pescatarian = pescatarian;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
  }
}

export class Notifications {
  constructor(
    pauseAll,
    loginAlerts,
    promotionsDeals,
    reservationReminders,
    reservationCreated,
    reservationCanceledPush,
    completeReservation,
    reservationAlerts,
    reservationMade,
    reservationCanceledEmail,
    foodVentureUpdates
  ) {
    (this.pauseAll = pauseAll),
      (this.loginAlerts = loginAlerts),
      (this.promotionsDeals = promotionsDeals),
      (this.reservationReminders = reservationReminders),
      (this.reservationCreated = reservationCreated),
      (this.reservationCanceledPush = reservationCanceledPush),
      (this.completeReservation = completeReservation),
      (this.reservationAlerts = reservationAlerts),
      (this.reservationMade = reservationMade),
      (this.reservationCanceledEmail = reservationCanceledEmail),
      (this.foodVentureUpdates = foodVentureUpdates);
  }
}

export class Settings {
  constructor(
    location,
    loginAlerts,
    darkMode,
    highConstrastMode,
    captions,
    savePastFoodTours,
    saveSearchHistory
  ) {
    (this.location = location),
      (this.loginAlerts = loginAlerts),
      (this.darkMode = darkMode),
      (this.highConstrastMode = highConstrastMode),
      (this.captions = captions),
      (this.savePastFoodTours = savePastFoodTours),
      (this.saveSearchHistory = saveSearchHistory);
  }
}
