var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var Add = require('../maths');

describe('Spy Test', function()
{
    it ('should log result add', function(){

       var numberOne =1;
       var numberTwo = 2;

       var logSpy = sinon.spy();

      Add(numberOne,numberTwo, logSpy);
             
       // Sinon Spy
       logSpy.called.should.be.true;

    });

   //  it ('should not log result add', function(){

   //    var numberOne =1;
   //    var numberTwo = 2;

   //    var logSpy = sinon.spy();

   //   Add(numberOne,numberTwo, logSpy);
            
   //    // Sinon Spy
   //    logSpy.called.should.not.be.true;

   // });

});