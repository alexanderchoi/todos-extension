var spendAmount = document.getElementById('spendAmount');
var amount = document.getElementById('amount');
var total = document.getElementById('total');

spendAmount.addEventListener('click', function() {
	chrome.storage.sync.get('total', function(budget) {
		var newTotal = 0;
		if (budget.total) {
			newTotal += parseInt(budget.total);
		}
		var spent = amount.value;
		if (spent) {
			newTotal += parseInt(spent);
		}
		chrome.storage.sync.set({'total': newTotal});

		total.text = newTotal;
		amount.value = '';
	})
});
