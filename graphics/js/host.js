'use strict';
$(() => {
	var sceneID = $('html').attr('data-sceneid');
	var fontSizeMax = 29;
	if (sceneID === '2-player') fontSizeMax = 26;
	if (sceneID === '4-player') fontSizeMax = 20;
	
	var hostName = nodecg.Replicant('hostName', {defaultValue: ''});
	hostName.on('change', (newVal, oldVal) => {
		$('#hostText').html(newVal);
		var hostBoxWidth = $('#hostBox').width();
		var fontSize = get_size(newVal, hostBoxWidth-30);
		if (fontSize > fontSizeMax) fontSize = fontSizeMax;
		$('#hostBox span').css('fontSize', fontSize);
	});
	
	// Canvas and function to help fit host text inside box.
	const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
	ctx.font = '25px OptimusPrinceps';
	function get_size(text, width) {
		return 25 * width / ctx.measureText(text).width;
	}
});