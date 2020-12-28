const { name, phone, address, image, lorem } = require('faker');
const TOTAL_USERS_COUNT = 15;

module.exports = new Map(
  new Array(TOTAL_USERS_COUNT)
    .fill(null)
    .map((_, i) => {
      const userId = i + 1;
      return [
        userId,
        {
          id: userId,
          firstName: name.firstName(),
          lastName: name.lastName(),
          phone: phone.phoneNumber(undefined),
          street: address.streetAddress(true),
          avatarUrl: image.people(),
          about: lorem.text()
        }
      ]
    })
);
