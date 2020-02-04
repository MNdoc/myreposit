	$(document).ready(function() {       // ready page
		let $scrValue = $('#imgHolder img').attr('src');
		let $carImg = $('#imgHolder img');

		$carImg.on('click', function() {
			$(this).attr('src', 'img/blue.png');
		});

// function change color
		$('#colorsSelector .colorItem').on('click', function() {
			let imgPath;
			imgPath = $(this).attr('data-img-path');
			$carImg.fadeOut(500, function() {
			$carImg.attr('src', imgPath).fadeIn(500);	
			})
		});
// all variables
		let modelSpecs,
			modelPrice,
			modelSpecsHolder,
			modelPriceHolder,
			priceUsd,
			modelPriceUSD;


			modelSpecsHolder = $('#modelSpecs');
			modelPriceHolder = $('#modelPrice');
			modelPriceUSD = $('#modelPriceUSD')
			modelSpecs = '';
			modelPrice = 0;

			
// function calculate this price to input cheked

			function calculatePrice() {
			modelPrice = parseInt($('input[name=engine]:checked', '#autoForm').val());
			modelPrice += parseInt($('input[name=transmission]:checked', '#autoForm').val());
			modelPrice += parseInt($('input[name=package]:checked', '#autoForm').val());
			modelPriceHolder.text(modelPrice + ' BYN');
			};

// function calculate this specs auto to input cheked

			function camSpecs() {
			modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
			modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
			modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';
			modelSpecsHolder.text(modelSpecs);
		}

//request for current USD rate

		let cur = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
		let curUsd;

			$.ajax({
				url: cur,
				cache: false,
				success: function(html) {
					let arr = html;
					curUsd = arr[4].Cur_OfficialRate;
					calculateUsd();
					}
			});

//function transfom price BYN to USD

			function calculateUsd() {
				priceUsd = modelPrice / curUsd;
				modelPriceUSD.text(priceUsd.toFixed(0) + ' USD');
				}

			$('#autoForm input').on('change', function() {
				calculatePrice();
				camSpecs();
				calculateUsd();
			});

// hide info auto and show modal
			$('.button').on('click', function() {
				$('.model-summary').slideUp(1000);
				$('.modal').delay(1000).fadeIn(1000);
				
			})

			$('.b1').on('click', function() {
				$('.modal').slideUp(1000);
				$('.model-summary').delay(1000).fadeIn(1000);
				
			})

// start page
	calculatePrice();
	camSpecs();
	calculateUsd();
				
	});	

	
			

