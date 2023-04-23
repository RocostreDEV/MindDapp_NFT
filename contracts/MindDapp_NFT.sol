// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MindDappNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // The platform's commission rate (60%)
    uint256 private constant COMMISSION_RATE = 60;

    // Minting price in WEI (0.01 ETH)
    uint256 private constant MINTING_PRICE = 0.01 ether;

    constructor() ERC721("MindDapp NFT", "MDNFT") {}

    function mintNFT(string memory tokenURI) public payable {
        require(msg.value >= MINTING_PRICE, "Insufficient payment.");

        // Calculate the commission and return the change to the user
        uint256 commission = (msg.value * COMMISSION_RATE) / 100;
        uint256 change = msg.value - commission;
        if (change > 0) {
            payable(msg.sender).transfer(change);
        }

        // Transfer the commission to the contract owner
        payable(owner()).transfer(commission);

        _tokenIdCounter.increment();
        uint256 newItemId = _tokenIdCounter.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
    }

    // Withdraw funds for contract owner
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
