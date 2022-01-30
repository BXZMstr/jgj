const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    
    const channel = client.channels.cache.get("915924938702082068");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("(Successfully) BXZ IS RUNBOT!");
    }).catch(e => {

        console.error(e);
    });

    console.log('BXZ IS RUNBOT!');

    const server = client.guilds.cache.get("899714742619349122")
    client.user.setActivity(`${server.memberCount} All Members`, {type: "PLAYING"})
    
    function YousamPower() {
      let hungry = ["BoT Bxz" , "Bxz GoD" , "BxZ GoD BoT"]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "PLAYING"});
    }; setInterval(YousamPower, 10000)

    client.user.setStatus('dnd')

});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split("899714742619349122")
    const command = messageArray[0]
    if(command == '!salam'){
        message.reply('salam')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!owner'){
        message.reply('bxzmstr')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!staffs'){
        message.reply('behdadg.gbg - arya - radin - mahan.mpr - mohsen.mg - equated - acraft - alonegamer')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!emoji'){
        message.reply(':flushed: ')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!avatarserver'){
        message.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3KAXSAGrL_ImsPa7gVHdoVjIDpe2EezZ2iCgl6bkhIP9B4-2EsUAeVqsEsoB3sxKji0&usqp=CAU')
    }
});

client.login("OTMzMDk2NDMzNzUyNjI1MTcy.YecjxQ.yXhJttnKu47WA92KuOfNVRIjJOE");