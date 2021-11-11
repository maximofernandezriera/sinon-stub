var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
const IsAlive = require("../function");

describe('IsAlive Test', function()
{
    it ('should return true when ping callback returns true', function(){

      // Sinon stub
       var pinger =sinon.stub();
       pinger.returns(true);

       var websiteIsAlive = IsAlive(pinger);

       websiteIsAlive.should.be.true;

    });

});