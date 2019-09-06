export default {

  Query: {
    teams: (parent, args, { db }, info) => db.teams.findAll(),
    team: (parent, args, { db }, info) => db.teams.findByPk(id),
    
    dimensions: (parent, args, { db }, info) => db.conf_dim.findAll(),
    dimension: (parent, args, { db }, info) => db.conf_dim.findByPk(id),
    
    contracts: (parent, args, { db }, info) => db.contracts.findAll(),
    contract: (parent, args, { db }, info) => db.contracts.findByPk(id),
    
    teamScores: (parent, args, { db }, info) => db.scores_of_team.findAll(),
    teamScore: (parent, args, { db }, info) => db.scores_of_team.findByPk(id),
    
    userScores: (parent, args, { db }, info) => db.scores_of_user.findAll(),
    userScore: (parent, args, { db }, info) => db.scores_of_user.findByPk(id),
    
    users: (parent, args, { db }, info) => db.users.findAll(),
    user: (parent, args, { db }, info) => db.users.findByPk(id),
  }
};
