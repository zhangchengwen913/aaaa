
    const Num = 50;


	function init()
		{
			var container = document.getElementById('leafContainer');
			for (var i = 0; i < Num; i++) 
			{
				container.appendChild(createALeaf());
			}
		}

		function randomInteger(low, high)
		{
			return low + Math.floor(Math.random() * (high - low));
		}



		function randomFloat(low, high)
		{
			return low + Math.random() * (high - low);
		}

		function pixelValue(value)
		{
			return value + 'px';
		}


		function Times(value)
		{
			return value + 's';
		}

		function createALeaf()
		{
			var leafDiv = document.createElement('div');
			var image = document.createElement('img');
			
			image.src = 'images/realLeaf' + randomInteger(1, 5) + '.png';
			
			leafDiv.style.top = "-100px";

			leafDiv.style.left = pixelValue(randomInteger(0, 1000));
			
			var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
			
			leafDiv.style.webkitAnimationName = 'fade, drop';
			image.style.webkitAnimationName = spinAnimationName;
			
			var fadeAndDropDuration = Times(randomFloat(5, 11));
			
			var spinDuration = Times(randomFloat(4, 8));
		 
			leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

			var leafDelay = Times(randomFloat(0, 5));
			leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

			image.style.webkitAnimationDuration = spinDuration;

			leafDiv.appendChild(image);

			return leafDiv;
		}


      window.addEventListener('load', init, false);
