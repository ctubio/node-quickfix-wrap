// javascript shim that lets our object inherit from EventEmitter
var quickfix = require(__dirname + '/build/Release/node_quickfix.node');

var FIXInitiator = quickfix.FixInitiator;
var FIXAcceptor = quickfix.FixAcceptor;
var events = require('events');

inherits(FIXInitiator, events.EventEmitter);
inherits(FIXAcceptor, events.EventEmitter);

exports.initiator = function(propertiesFile) {
	var initiator = new FIXInitiator(propertiesFile, {
		onCreate: function(sessionID) {
			initiator.emit('onCreate', { sessionID: sessionID });
		},
		onLogon: function(sessionID) {
			initiator.emit('onLogon', { sessionID: sessionID });
		},
		onLogout: function(sessionID) {
			initiator.emit('onLogout', { sessionID: sessionID });
		},
		toAdmin: function(sessionID) {
			initiator.emit('toAdmin', { message: message, sessionID: sessionID });
		},
		fromAdmin: function(message, sessionID) {
			initiator.emit('fromAdmin', { message: message, sessionID: sessionID });
		},
		toApp: function(message, sessionID) {
			initiator.emit('toApp', { message: message, sessionID: sessionID });
		},
		fromApp: function(message, sessionID) {
			initiator.emit('fromApp', { message: message, sessionID: sessionID });
		}
    });

	return initiator;
};

exports.acceptor = function(propertiesFile) {
	var acceptor = new FIXAcceptor(propertiesFile, {
		onCreate: function(sessionID) {
			initiator.emit('onCreate', { sessionID: sessionID });
		},
		onLogon: function(sessionID) {
			initiator.emit('onLogon', { sessionID: sessionID });
		},
		onLogout: function(sessionID) {
			initiator.emit('onLogout', { sessionID: sessionID });
		},
		toAdmin: function(sessionID) {
			initiator.emit('toAdmin', { message: message, sessionID: sessionID });
		},
		fromAdmin: function(message, sessionID) {
			initiator.emit('fromAdmin', { message: message, sessionID: sessionID });
		},
		toApp: function(message, sessionID) {
			initiator.emit('toApp', { message: message, sessionID: sessionID });
		},
		fromApp: function(message, sessionID) {
			initiator.emit('fromApp', { message: message, sessionID: sessionID });
		}
    });

	return acceptor;
};

// extend prototype
function inherits(target, source) {
  for (var k in source.prototype)
    target.prototype[k] = source.prototype[k];
}