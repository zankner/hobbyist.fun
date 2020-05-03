const status = require('http-status');
const check = require('check-types');
const fs = require('fs');

// Importing courses
const hobbiesRaw = fs.readFileSync('../resources/hobbies.json');
const hobbies = JSON.parse(hobbiesRaw);

module.exports = async (req, res) => {
  const { goal, inclination, artsy, tech, business, active, mathematical,
    liveStream, classical, foodType, outdoors, exercise, games, contentCreation, food, artType } = req.body;

  try {
    check.assert.nonEmptyString(goal);
    check.assert.maybe.nonEmptyString(inclination);
    check.assert.maybe.boolean(artsy);
    check.assert.maybe.boolean(musical);
    check.assert.maybe.boolean(tech);
    check.assert.maybe.boolean(business);
    check.assert.maybe.boolean(active);
    check.assert.maybe.boolean(outdoors);
    check.assert.maymbe.boolean(exercise);
    check.assert.maybe.boolean(games);
    check.assert.maymbe.boolean(contentCreation);
    check.assert.maybe.boolean(food);
    check.assert.maybe.nonEmptyString(artType);
    check.assert.maybe.boolean(mathematical);
    check.assert.maybe.boolean(liveStream);
    check.assert.maybe.boolean(classical);
    check.assert.maybe.nonEmptyString(foodType);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const hobby = {};

    if (goal === 'career') {
      if (inclination === 'creative') {
        if (artsy) {
          if (artType === 'musical') {
            hobby.name = 'Music Production';
            hobby.courses = hobbies.musicProduction;
          } else if (artType === 'physical') {
            hobby.name = 'Graphic Design';
            hobby.courses = hobbies.graphicDesign;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else {
          if (tech) {
            hobby.name = 'App/Web Development';
            hobby.courses = hobbies.appDevelopment.concat(hobbies.webDevelopment);
          } else {
            hobby.name = 'Writer';
            hobby.courses = hobbies.writer;
          }
        }
      } else if (inclination === 'analytical') {
        if (tech) {
          if (mathematical) {
            hobby.name = 'Artificial Intelligence';
            hobby.courses = hobbies.artificialIntelligence;
          } else {
            hobby.name = 'Backend Development';
            hobby.courses = hobbies.backendDevelopment;
          }
        } else {
          if (business) {
            hobby.name = 'Management Skills';
            hobby.couress = hobbies.management;
          } else {
            hobby.name = 'Marketing Skills';
            hobby.courses = hobbies.marketing;
          }
        }
      } else {
        return res.sendStatus(status.UNAUTHORIZED);
      }
    } else if (goal === 'hobby') {
      if (active) {
        if (outdoors) {
          if (exercise) {
            hobby.name = 'Tai Chi';
            hobby.courses = hobbies.taiChi;
          } else {
            hobby.name = 'Gardening';
            hobby.courses = hobbies.gardening;
          }
        } else {
          if (exercise) {
            hobby.name = 'Yoga';
            hobby.courses = hobbies.yoga;
          } else {
            hobby.name = 'Juggling';
            hobby.courses = hobbies.juggling;
          }
        }
      } else {
        if (games) {
          if (contentCreation) {
            if (liveStream) {
              hobby.name = 'Streaming';
              hobby.courses = hobbies.streaming;
            } else {
              hobby.name = 'Youtube';
              hobby.courses = hobbies.youtube;
            }
          } else {
            if (classical) {
              hobby.name = 'Chess';
              hobby.courses = hobbies.chess;
            } else {
              hobby.name = 'Fortnite';
              hobby.courses = hobbies.fortnite;
            }
          }
        } else {
          if (food) {
            if (foodType === 'meal') {
              hobby.name = 'Cooking';
              hobby.courses = hobbies.cooking;
            } else if (foodType === 'dessert') {
              hobby.name = 'Dessert Making';
              hobby.courses = hobbies.desserts;
            } else {
              return res.sendStatus(status.UNAUTHORIZED);
            }
          } else {
            if (artType === 'fineArts'){
              hobby.name = 'Photography';
              hobby.courses = hobbies.photography;
            } else if (artType === 'crafts') {
              hobby.name = 'Knitting';
              hobby.courses = hobbies.knitting;
            } else {
              return res.sendStatus(status.UNAUTHORIZED);
            }
          }
        }
      }
    } else {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    return res.send(hobby);
  } catch (err) {
    console.log(err.message);

    switch (err.code) {
      case 'auth/argument-error':
        return res.sendStatus(status.UNAUTHORIZED);
      default:
        return res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
  }
};