const Follow = require('../models/follow');

const followUserIds = async (identityUserId) => {
    try{
        let following = await Follow.find({'user': identityUserId})
                                .select({'_id': 0, '__v': 0, user: 0, createdAt: 0})
                                .exec();
        

        let followers = await Follow.find({'followed': identityUserId})
                                .select({ '_id': 0, '__v': 0, followed: 0, createdAt: 0 })
                                .exec();;
        

        let following_clean = [];

        following.forEach((follow) => {
            following_clean.push(follow.followed);
        }); 

        let followers_clean = [];

        followers.forEach((follow) => {
          followers_clean.push(follow.user); // aquí es el cambio
        });

       

        return {
            following: following_clean,
            followers: followers_clean,
        };
   }
    catch (error) {
      console.error(`Error: ${error.message}`);
      throw new Error("Error al obtener la información de seguimiento");
    }
};

const followThisUser = async (identityUserId, profileUserId) => {
    try {
      console.log(`identityUserId: ${identityUserId}, profileUserId: ${profileUserId}`); // nuevos cambios

      let following = await Follow.findOne({
        user: identityUserId,
        followed: profileUserId,
      })
        .select({ _id: 0, __v: 0, user: 0, createdAt: 0 })
        .exec();

      console.log(`Following result: ${following}`); 

      let followers = await Follow.findOne({
        user: profileUserId,
        followed: identityUserId,
      })
        .select({ _id: 0, __v: 0, user: 0, createdAt: 0 })
        .exec();

      console.log(`Followers result: ${followers}`);
      return {
        following: following ? following : 0, 
        followers: followers ? followers : 0, 
      };
    } catch (error) {
      console.error(`Error: ${error.message}`); 
      throw new Error("Error al obtener la información de seguimiento");
    }
};


module.exports = {
  followUserIds,
  followThisUser,
};
