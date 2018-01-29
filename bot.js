const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const Client = require('discord.js').Client;

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT ${client.user.username} Discord Uygulamasına Giriş Yaptı!`);
  client.user.setActivity('s!Yardım');
});

client.on('message', msg => {
  console.log(`LOG: Kanal: ${msg.channel.name} MSG: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

'Yasaklı Cümle-Kelime'
if (msg.content.toLowerCase().includes('https')) {
	msg.channel.send('LİNK ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('link Paylaşmak Yasak')
}//yapımcı:🔥Tufan Şahin🔥#7771
if (msg.content.toLowerCase().includes('orospu')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('piç')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('göt')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('amcık')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('yarrak')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('orospu çocuğu')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('siktir')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('amin')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('amın')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('amcık')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('pezevenk')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('sex')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('sexy')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('s3xy')) {
msg.channel.send('KÜFÜR ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Küfür Yasak')
}
if (msg.content.toLowerCase().includes('mal')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}
if (msg.content.toLowerCase().includes('salak')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}
if (msg.content.toLowerCase().includes('gerizekalı')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}
if (msg.content.toLowerCase().includes('özürlü')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}
if (msg.content.toLowerCase().includes('beyinsiz')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}
if (msg.content.toLowerCase().includes('sipastik')) {
msg.channel.send('ARGO ALGILANDI')
msg.channel.bulkDelete(2)
msg.reply('Argo Sözler Yasak')
}

'EVENTS'
  if (msg.content.toLowerCase().includes('selamun aleyküm')) {
  msg.reply('Aleyküm Selam,HoşGeldin')
  }
if (msg.content.toLowerCase() === 'sa') {
  msg.reply('Aleyküm Selam,HoşGeldin')
  }
  if (msg.content.toLowerCase().includes('sea')) {
  msg.reply('Aleyküm Selam,HoşGeldin')
  }
'Bot Sohbet'
if (msg.content.toLowerCase().includes( prefix + 'ben kimim')) {
msg.channel.send('___**Senin Adın**___\n'  + msg.author.username + '\n\n___**Kullanıcı Resmin**___\n'  + msg.author.displayAvatarURL + '')
msg.channel.send('\n\n___**Kullanıcı İD**___\n' + msg.author.id + '')
}
'Ana Kodlama'
if (msg.content.toLowerCase() === prefix + 'bilgi') {
msg.channel.send('**___Bot Yapımcısı___**\n<@406115661790707719> \n**___Bot Özellikleri___**\n**1**-Küfür Engelleme Sistemi\n**2**-Link Engelleme Sistemi')
}
if (msg.content.toLowerCase() === prefix + 'ping') {
msg.channel.send('___**pingim**___\n **' + client.ping + '** ms');
}
if (msg.content.toLowerCase() === prefix + 'rank') {
msg.channel.send('**Mega Vip** : 30 LVL \n\n**Normal Vip** : 20 LVL \n\n**8-BİT** : 15 LVL \n\n**LVL Sövüşçü** : 10 LVL \n\n**Premium Üye** : 5 LVL');
}
  if(msg.content.toLowerCase() === prefix + 'sv') {
  msg.channel.send('___**Gamers AND YouTubers**___ \nhttps://discord.gg/pVbzNUh\n\n___**SPONSOR SERVER(ZGDiscord)**___\nhttps://discord.gg/35zrnnW');
  }
if (msg.content.toLowerCase() === prefix + 'komutlar') {
msg.channel.send('__Komutları Bilmiyormusun Buyur Bak__ \n1-**ping** \n2-**kurallar** \n3-**bilgi** \n4-**sv**\n5-**sunucu** \n6-**ben kimim** \n7-**yardım** \n8-**rank**\n\n\n**___ÖNEMLİ___** \n BÜTÜN KOMUTLARI KÜÇÜK HARFLERLE YAZMANIZ GEREKLİ!!!')
}
 if (msg.content.toLowerCase() === prefix + 'sunucu') {
   msg.channel.send('**___SERVER ADI___**\n' + msg.guild.name + '\n\n**___SERVER ID___**\n ' + msg.guild.id + '\n\n**___SERVER ANA KANALI___**\n' + msg.guild.defaultChannel + '\n\n**___SERVER BÖLGESİ___**\n' + msg.guild.region + '\n\n**___SERVER TOPLAM KANAL SAYISI___**\n' + msg.guild.channels.size + ''),
   msg.channel.send('\n\n**___SERVER KURUCUSU___**\n' + msg.guild.owner + '\n\n**___SERVER KURUCU ID___**\n' + msg.guild.ownerID + '\n\n**___SERVER ÜYE SAYISI___**\n' + msg.guild.memberCount + '\n\n**___SERVER OLUŞTURULMA TARİHİ___**\n' + msg.guild.createdAt +'')
}
if (msg.content.toLowerCase() === prefix + 'kurallar') {
msg.channel.send('**___KURALLAR___**')
msg.channel.send(':pushpin: Küfür Yasak\n:pushpin: Reklam Kesinlikle Yasak (ÖZELDEN DE DAHİL YASAK!!!)\n:pushpin: Flood Yasak\n:pushpin: Spam Yasak\n:pushpin: Harf Uzatmak (KİRLİLİK GÖRÜNÜMÜNE GİRERSE) Yasak\n:pushpin: Argo Aşırı Derecede Kullanmak Yasak\n:pushpin: Kanal Reklamı Yapmak Yasak\n:pushpin: Her Türlü Dini , Siyasi , Irkçı Davranışlarda Bulunmak ve Tartışmak Yasaktır\n:pushpin: Cinsel İçerikli Şeyler Yazmak ve Paylaşmak Yasak\n:pushpin: Yetkili Kişileri Gereksiz Meşgul Etmek Yasak\n:pushpin: yetki istemek yasak\n:pushpin: tehtid yasak\n:pushpin: 3 uyarida');
}
if (msg.content.toLowerCase() === prefix + 'yardım') {
msg.channel.send('Ne Hakkında Yardım İstersin? \n1-**Discord Komutları**\n2-**Bot Komutları** \n\n **___Seçenekler___**\n1-perfix + dckomutları (hala yapılıyor)\n2-prefix + komutlar')
 }
});
client.login(ayarlar.token);
