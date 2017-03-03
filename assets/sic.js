//JavaScript For Calculation

var App = {
	launch : function() {
		App.getPrinciple();
		App.getRate();
		App.getTime();
		App.getSimpleInterest();
	},
	getPrinciple:function() {
		var price = $('#p')[0];

	},
	getRate:function() {
		var rate = $('#r')[0];

	},
	getTime:function() {
		var years = $('#t')[0];
	},
	getSimpleInterest:function() {
		var inr=price*rate*years;
			var intrst=inr/100;
			doucment.getElementById("SimpleInterest").innerHTML="Simple Interest is = " +intrst;


	}


};