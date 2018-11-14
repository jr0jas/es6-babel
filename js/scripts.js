(function(){
	'use strict'

	class Product {
		constructor(id, name, price) {
			this._id = id;
			this._name = name;
			this._price = price;
		}
	
		set id (id) { this._id = id; }
		set name (name) { this._name = name; }
		set price (price) { this._price = price;}
		get id () { return this._id; }
		get name () { return this._name; }
		get price () { return this._price; }

		buy() { console.log(this._name + ' bougth!'); }

	}

	class Tire extends Product {
		constructor(id, name, price, size) {
			super(id, name, price);
			this._size = size;
		}

		set size (size) { this._size = size; }
		get size () { return this._size; }

		compare() { console.log('Compare ' + this._name + 'tire!'); }
 
	}

	let product = new Product(1, 'Product 1', 100); 
	console.log(product.name);
	product.buy();

	let tire = new Tire(2, 'Goodyear Ultra Grip® Winter', 77, '175/70R14');
	console.log(tire.name);
	tire.compare();
	tire.buy();
}());

