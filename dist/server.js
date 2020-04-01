"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = require("./auth");

var _user = _interopRequireDefault(require("./users/user.router"));

var _post = _interopRequireDefault(require("./posts/post.router"));

var _thread = _interopRequireDefault(require("./threads/thread.router"));

var _path = _interopRequireDefault(require("path"));

var _db = require("./db/db");

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var app = (0, _express["default"])();
exports.app = app;
app.use((0, _cors["default"])());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan["default"])("dev"));
app.post("/login", _auth.login);
app.post("/signup", _auth.signup); // app.use('/api', protect);

app.use("/api/posts", [_auth.protect, _post["default"]]);
app.use("/api/users", _user["default"]);
app.use("/api/threads", [_auth.protect, _thread["default"]]);
app.use((0, _serveFavicon["default"])(_path["default"].join(__dirname, "../client", "dist", "favicon", "favicon.ico")));
app.use("/bundle", _express["default"]["static"](_path["default"].join(__dirname, "../client/dist/bundle.js")));
app.use("/*", _express["default"]["static"](_path["default"].join(__dirname, "../client/dist")));

var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _db.connect)();

          case 3:
            app.listen(process.env.PORT || _config["default"].port, function () {
              console.log("Server listening on port ".concat(_config["default"].port));
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}(); // post = {content: 'hi', createdBy: user_id, thread: thread_id }
// thread = {name: 'hiking is funnn', description: 'lets talk bout outdoorsie', createdBy: user_id}
// user = {email: 'hehe@hehe.com', password: 'astring', username: 'coolio'}
// 5e6cadbc5497f9ae12108a2a thread id
// 5e6cab7f3bd21baca222cca8 user id
// { "content": "hi this is a message", "createdBy": "5e6cab7f3bd21baca222cca8", "thread": "5e6cadbc5497f9ae12108a2a"}


exports.start = start;