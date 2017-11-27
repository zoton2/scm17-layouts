'use strict';
$(() => {
	var hostName = nodecg.Replicant('hostName', {defaultValue: ''});
	hostName.on('change', (newVal, oldVal) => {
		$('#hostText').html('Host: '+newVal);
	});
});