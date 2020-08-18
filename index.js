function testDebugger() {
	debugger
	const c = '1'
	const a = ()=>{
		if(c == 1){
			debugger
		}
		console.log(111)
	}
}
