const fs = require('fs');

module.exports = (client) => {
    client.handleSelectMenu = async () => {
        const selectMenuFolders = fs.readdirSync('./src/selectmenu');
        for (const folder of selectMenuFolders) {
            const selectMenuFiles = fs.readdirSync(`./src/selectmenu/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of selectMenuFiles) {
                const selectmenu = require(`../selectmenu/${folder}/${file}`);
                client.selectmenu.set(button.data.name, button);
            }
        }
    }
}