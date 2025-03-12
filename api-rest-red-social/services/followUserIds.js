const Follow = require('../models/follow');

const followUserIds = async (identityUserId) => {

    let following = await Follow.find({'user': identityUserId})
                            .select({'_id': 0, '__v': 0, user: 0, createdAt: 0})
                            .exec();

    let followers = await Follow.find({'followed': identityUserId})
                            .select({'_id': 0, '__v': 0, user: 0, createdAt: 0})
                            .exec();;

    let following_clean = [];

    following.forEach((follow) => {
        following_clean.push(follow.followed);
    }); 

    let followers_clean = [];

    followers.forEach((follow) => {
        followers_clean.push(follow.user);
    }); 

    return {
        following: following_clean,
        followers: followers_clean,
    };
 
};

const followThisUser = async (identityUserId, profileUserId) => {

};

module.exports = {
  followUserIds,
  followThisUser,
};
