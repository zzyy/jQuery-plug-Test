function readTableData(table,row){
	var $table = $(table);
	var tableData;
//	var $tr = $table.children();
	var $tr = $table.find('tr');
	
	for(var i=0; i<$tr.length; i++){
		var $td=$tr.eq(0).children();
		var rowData=[];
		for(var index=2; index<arguments.length-2; index++){
			rowData[rowData.length]=$td.eq(arguments[index]).text();
		}
		tableData[$td.eq(row).text()]=rowData;
	}
	
	return tableData;
}
