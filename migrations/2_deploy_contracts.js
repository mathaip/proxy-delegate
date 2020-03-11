const ProxyDelegate = artifacts.require("ProxyDelegate");
const SomeLibrary = artifacts.require("SomeLibrary");
const ProxyCall = artifacts.require("ProxyCall");
module.exports = function(deployer) {
  deployer.deploy(SomeLibrary).then(async () => {
    await deployer.deploy(ProxyDelegate, SomeLibrary.address);
    await deployer.deploy(ProxyCall, SomeLibrary.address);
  });
};
