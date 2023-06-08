
	let orderItems = [];

	function addItem(itemName) {
		let item = {
			name: itemName,
			price: 0
		};

		switch(itemName) {
			case 'Burger':
				item.price = 10;
				break;
			case 'Pizza':
				item.price = 12;
				break;
			case 'Salad':
				item.price = 8;
				break;
		}

		orderItems.push(item);
		renderOrder();
	}

	function renderOrder() {
		let orderTableBody = $('#orderTable tbody');
		orderTableBody.empty();

		orderItems.forEach(function(item, index) {
			let row = `
				<tr>
					<td>${item.name}</td>
					<td>$${item.price.toFixed(2)}</td>
					<td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
				</tr>
			`;
			orderTableBody.append(row);
		});
	}

	function removeItem(index) {
		orderItems.splice(index, 1);
		renderOrder();
	}

	$('#tableForm').submit(function(event) {
		event.preventDefault();

		let tableNumber = $('#tableNumber').val();
		if (tableNumber.trim() === '') {
			alert('Please enter a table number');
			return;
		}

		if (orderItems.length === 0) {
			alert('Please add items to your order');
			return;
		}

		let emailBody = 'Table number: ' + tableNumber + '\n\n';
		emailBody += 'Order:\n';

		orderItems.forEach(function(item) {
			emailBody += '- ' + item.name + ' - $' + item.price.toFixed(2) + '\n';
		});

		window.location.href = 'mailto:abdalhamed9698@gmail.com?subject=New Order&body=' + encodeURIComponent(emailBody);
	});

