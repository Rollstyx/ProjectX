module.exports = {
    name: 'hack',
    description: 'bla bla',
    async execute(client, message, args) {
        if(!args[0]) return message.channel('U did not mention who should i hack')
        const hack = args.slice(0).join(" ") && args.shift().toLowerCase()

        let msg = await message.channel.send(`Hacking ${hack}...`)
            msg.edit(`Email: ${hack}@gmail.com
            Password: ${hack}lovescookies`);
    }
}