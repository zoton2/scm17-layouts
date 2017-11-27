'use strict';
$(() => {
	// The bundle name where all the run information is pulled from.
	var speedcontrolBundle = 'nodecg-speedcontrol';
	
	var sceneID = $('html').attr('data-sceneid');
	
	if (sceneID === 'intermission') {
		nodecg.listenFor('forceRefreshIntermission', speedcontrolBundle, () => {
			
		});
	}
	
	else {
		var runDataActiveRun = nodecg.Replicant('runDataActiveRun', speedcontrolBundle);
		runDataActiveRun.on('change', (newVal, oldVal) => {
			changeLayoutStyle(newVal);
		});
	}
	
	function changeLayoutStyle(runData) {
		var flatName = flattenGameName(runData.game);
		
		if (flatName === 'darksouls') {
			switch(sceneID) {
				case '1-player':
					setBackground('bloodborne_1');
					setColourScheme('orange');
					return;
			}
		}
	}
	
	// Removes all whitespace, punctuation and makes everything lowercase.
	function flattenGameName(name) {
		return name.toLowerCase().replace(/\s/g,'').replace(/(_|\W)/g,'');
	}
	
	function setBackground(bgname) {
		$('#background').css('background-image', 'url(\'images/backgrounds/'+bgname+'.jpg\')');
	}
	
	function setColourScheme(colour) {
		$('#colourScheme').attr('href', 'css/'+colour+'.css');
	}
});