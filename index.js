const bedrock = require('bedrock-protocol');

function startBot() {
    console.log('جارٍ الاتصال بسيرفر البيدروك الخاص بك...');
    
    const client = bedrock.createClient({
        host: 'gold.magmanode.com',   // الـ IP الخاص بسيرفرك
        port: 33077,                  // البورت الخاص بسيرفرك
        username: 'Bot24Online',      // اسم البوت داخل اللعبة
        offline: true                 // لتخطي الحماية لأن السيرفر مكرك
    });

    client.on('spawn', () => {
        console.log('البوت دخل سيرفر البيدروك بنجاح وهو الآن نشط لتثبيت السيرفر!');
    });

    client.on('close', () => {
        console.log('انفصل البوت عن السيرفر. جارٍ إعادة المحاولة بعد 10 ثوانٍ...');
        setTimeout(startBot, 10000);
    });

    client.on('error', (err) => {
        console.error('حدث خطأ في البوت:', err.message);
    });
}

startBot();

