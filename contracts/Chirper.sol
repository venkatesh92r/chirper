pragma solidity >0.4.99 <0.6.0;
pragma experimental ABIEncoderV2;

contract Chirper {
  struct Chirp {
    string chirpText;
      string[] comments;
      address poster;
  }
  Chirp[] chirps;
  function getAllChirps() public view returns(Chirp[] memory chirpArr) {
    chirpArr = chirps;
    return chirpArr;
  }   
  
  function getChirp(uint index) view public returns(Chirp memory chirp) {
    chirp = chirps[index];
    return chirp;
  }
  
  function postChirp(string memory chirpText) public returns(bool success) {
    Chirp memory chirp;
    chirp.poster = msg.sender;
    chirp.chirpText = chirpText;
    chirps.push(chirp);
    return true;
  }
 
  function addComment(string memory comment, uint index) public returns(Chirp memory chirp) {
    chirps[index].comments.push(comment); 
    chirp = chirps[index];
    return chirp;
  }
}