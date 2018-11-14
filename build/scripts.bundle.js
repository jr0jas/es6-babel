'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	'use strict';

	var Product = function () {
		function Product(id, name, price) {
			_classCallCheck(this, Product);

			this._id = id;
			this._name = name;
			this._price = price;
		}

		_createClass(Product, [{
			key: 'buy',
			value: function buy() {
				console.log(this._name + ' bougth!');
			}
		}, {
			key: 'id',
			set: function set(id) {
				this._id = id;
			},
			get: function get() {
				return this._id;
			}
		}, {
			key: 'name',
			set: function set(name) {
				this._name = name;
			},
			get: function get() {
				return this._name;
			}
		}, {
			key: 'price',
			set: function set(price) {
				this._price = price;
			},
			get: function get() {
				return this._price;
			}
		}]);

		return Product;
	}();

	var Tire = function (_Product) {
		_inherits(Tire, _Product);

		function Tire(id, name, price, size) {
			_classCallCheck(this, Tire);

			var _this = _possibleConstructorReturn(this, (Tire.__proto__ || Object.getPrototypeOf(Tire)).call(this, id, name, price));

			_this._size = size;
			return _this;
		}

		_createClass(Tire, [{
			key: 'compare',
			value: function compare() {
				console.log('Compare ' + this._name + 'tire!');
			}
		}, {
			key: 'size',
			set: function set(size) {
				this._size = size;
			},
			get: function get() {
				return this._size;
			}
		}]);

		return Tire;
	}(Product);

	var product = new Product(1, 'Product 1', 100);
	console.log(product.name);
	product.buy();

	var tire = new Tire(2, 'Goodyear Ultra Grip® Winter', 77, '175/70R14');
	console.log(tire.name);
	tire.compare();
	tire.buy();
})();
