var Chirper=artifacts.require ("./Chirper.sol");
module.exports = function(deployer) {
      deployer.deploy(Chirper);
}