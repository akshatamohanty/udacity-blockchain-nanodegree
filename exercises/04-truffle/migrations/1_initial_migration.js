const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  console.log("Deploying migration")
  deployer.deploy(Migrations);
};
