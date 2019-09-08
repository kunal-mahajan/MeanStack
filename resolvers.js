export default {

  Query: {
    
    dimensions: (parent, args, { db }, info) => db.conf_dim.findAll(),
    contracts: (parent, args, { db }, info) => db.contracts.findAll(),
    contract: (parent, args, { db }, info) => db.contracts.findByPk(id),
    
    teamScore: (parent, args, { db }, info) => db.scores_of_team.findByPk(id),
    
    userScores: (parent, args, { db }, info) => db.scores_of_user.findAll(),
    userScore: (parent, args, { db }, info) => db.scores_of_user.findByPk(id),
    user: (parent, args, { db }, info) => db.users.findByPk(id),
  }
};
