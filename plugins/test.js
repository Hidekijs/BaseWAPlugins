export default {
	name: "Testing",
	command: ["test", "testing"],
	prefix: true,
	models: "%prefix%command",
	desactive: false,
	runCode: async(m, { sock }) => {
		await m.reply(`Hola como estas ${m.pushName} como estas? :D`);
	}
}