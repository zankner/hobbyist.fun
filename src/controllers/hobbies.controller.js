const status = require('http-status');
const check = require('check-types');
const hobbies = require('../data/hobbies');

module.exports.get = async (req, res) => {
  const { goal, inclination, interest, specifics } = req.body;

  try {
    check.assert.nonEmptyString(goal);
    check.assert.nonEmptyString(inclination);
    check.assert.nonEmptyString(interest);
    check.assert.nonEmptyString(specifics);
  } catch {
    return res.sendStatus(status.BAD_REQUEST);
  }

  try {
    const hobby = {};

    if (goal === 'career') {
      if (inclination === 'creative') {
        if (interest === 'artsy') {
          if (specifics === 'musical') {
            hobby.name = 'Music Production';
            hobby.courses = hobbies.musicProduction;
          } else if (specifics === 'physical') {
            hobby.name = 'Graphic Design';
            hobby.courses = hobbies.graphicDesign;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else if (interest === 'notArtsy') {
          if (specifics === 'techy') {
            hobby.name = 'App/Web Development';
            hobby.courses = hobbies.appDevelopment.concat(hobbies.webDevelopment);
          } else if (specifics === 'notTechy') {
            hobby.name = 'Writer';
            hobby.courses = hobbies.writer;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else {
          return res.sendStatus(status.UNAUTHORIZED);
        }
      } else if (inclination === 'analytical') {
        if (interest === 'techy') {
          if (specifics === 'mathematical') {
            hobby.name = 'Artificial Intelligence';
            hobby.courses = hobbies.artificialIntelligence;
          } else if (specifics === 'programming') {
            hobby.name = 'Backend Development';
            hobby.courses = hobbies.backendDevelopment;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else if (interest === 'notTechy') {
          if (specifics === 'business') {
            hobby.name = 'Management Skills';
            hobby.couress = hobbies.management;
          } else if (specifics === 'notBusiness') {
            hobby.name = 'Marketing Skills';
            hobby.courses = hobbies.marketing;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else {
          return res.sendStatus(status.UNAUTHORIZED);
        }
      } else {
        return res.sendStatus(status.UNAUTHORIZED);
      }
    } else if (goal === 'hobby') {
      if (inclination === 'active') {
        if (interest === 'outdoors') {
          if (specifics === 'exercise') {
            hobby.name = 'Tai Chi';
            hobby.courses = hobbies.taiChi;
          } else if (specifics === 'notExercise') {
            hobby.name = 'Gardening';
            hobby.courses = hobbies.gardening;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else if (interest === 'notOutdoors') {
          if (specifics === 'exercise') {
            hobby.name = 'Yoga';
            hobby.courses = hobbies.yoga;
          } else if (specifics === 'notExercise') {
            hobby.name = 'Juggling';
            hobby.courses = hobbies.juggling;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        }
      } else if (inclination === 'notActive') {
        if (interest === 'games') {
          if (specifics === 'contentCreation') {
            hobby.name = 'Streaming';
            hobby.courses = hobbies.streaming;
          } else if (specifics === 'playing') {
            hobby.name = 'Chess';
            hobby.courses = hobbies.chess;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else if (interest === 'notGame') {
          if (specifics === 'food') {
            hobby.name = 'Cooking';
            hobby.courses = hobbies.cooking;
          } else if (specifics === 'arts') {
            hobby.name = 'Photography';
            hobby.courses = hobbies.photography;
          } else {
            return res.sendStatus(status.UNAUTHORIZED);
          }
        } else {
          return res.sendStatus(status.UNAUTHORIZED);
        }
      } else {
        return res.sendStatus(status.UNAUTHORIZED);
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
