module.exports = function () {
	return {
		name: 'it-is-production',
		visitor: {
			DebuggerStatement(path, state) {
				if (process.env.NODE_ENV === 'production') {
					path.remove();
					return;
				}
				const {
					start: { line, column }
				} = path.node.loc;
				console.log(
					`Debugger exists in file: ${state.file.opts.filename},at line ${line}, column: ${column}`
				)
			}
		}
	}
}
