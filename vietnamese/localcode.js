var _showMesherTrans =  ''
var _showISOTrans = ''


function localInitialise () {
	}
	

var _h = {
'1021': ['1012', '1001'],
'1023': ['1000', '100F'],
'1024': ['1000'],
'1025': ['1026', '1009', '100D', '104C'],
'1026': ['1025', '1009', '100D', '104C'],
'1027': ['104F'],
'1029': ['103C', '101E', '102A'],
'102A': ['1029', '103C', '101E', '1031', '103A'],
'1000': ['1023', '100F'],
'1001': ['1006'],
'1002': ['1000'],
'1003': ['100E', '101A'],
'1004': ['103A', '1004103A1039'],
'1005': ['102E', '1008'],
'1006': ['1001', '101D'],
'1008': ['1005', '103B'],
'100A': ['1009'],
'1009': ['100A', '1025'],
'100B': ['100C', '1044','1020'],
'100C': ['100B', '1044'],
'100D': ['1025', '104C'],
'100E': ['1003', '1015'],
'100F': ['1000'],
'1010': ['101D', '1011', '102C'],
'1011': ['1010', '101D'],
'1012': ['1021'],
'1015': ['101A', '101F', '100E'],
'1018': ['1041', '102C', '101E'],
'1019': ['1013'],
'1013': ['1019'],
'101A': ['1003', '1015', '102C', '101F', '101A103A'],
'101D': ['1040', '102D', '103D', '1010', '1013'],
'101E': ['103F', '102C', '1018', '100A', '1029', '102A'],
'103F': ['101E', '1018', '102C', '102A'],
'101F': ['101A', '1015', '102C', '101A103A'],
'103A': ['1031102C103A','101A103A','104C'],
'103B': ['1008'],
'103C': ['1029', '102A'],
'103D': ['1037', '101D'],
'103E': ['102F'],
'1039101C': ['101C'],
'101C': ['1039101C'],
'1031': ['102A', '1031102C', '1031102B', '1031102C103A', '1031102B103A'],
'102D': ['1036', '102D102F'],
'1031102C': ['1031', '102C', '1031102C103A'],
'1031102B': ['1031', '102B', '1031102B103A'],
'1031102C103A': ['1031', '102C', '1031102C','103A'],
'1031102B103A': ['1031', '102B', '1031102B'],
'102D102F': ['102D', '102F'],
'101A103A': ['101A', '103A'],
'102F': ['103E', '1030', '104E'],
'1030': ['102F'],
'102C': ['102A', '1018', '1031102C'],
'102B': ['1031102B'],
'1036': ['102D', '102E'],
'1037': ['103D'],
'104C': ['100D', '103A'],
'101B': ['104D'],
'104D': ['101B'],
'104E': ['1044'],
'104F': ['1027'],
'1044': ['104E'],
'1041': ['101E'],
'1043': ['1025'],
'1051': ['1050', '1040'],
'1050': ['1051', '1040'],
'1040': ['101D', '1050', '1051'],
'1020': ['100B', '100C'],

end: {}
}




function findShape (shapelist, extrashapes, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')
	var extrashapesarray = extrashapes.split(',')

	clearHighlights()

	if (show) {
		for (var i=0;i<shapelistarray.length;i++) { //alert(document.getElementById(shapelistarray[i]).textContent)
			document.getElementById(shapelistarray[i]).style.backgroundColor = '#FFE6B2'
			}
		}
	else {
		for (var i=0;i<shapelistarray.length;i++) {
			document.getElementById(shapelistarray[i]).style.backgroundColor = 'transparent'
			}
		}
	
	var extras = ''
	for (i=0;i<extrashapesarray.length;i++) {
		extras += '<span class=c onclick="add(\''+extrashapesarray[i]+'\')">'+extrashapesarray[i]+'</span> '
		document.getElementById('extrashapes').style.fontFamily = document.getElementById('uiFont').value
		document.getElementById('extrashapes').style.fontSize = defaults.uisize+'px'
		}
	document.getElementById('extrashapes').innerHTML = extras
	}




function toggleShift (node, LC, UC) {
	if (node.className =='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'table'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'table'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}
