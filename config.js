const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'H4sIAAAAAAAAA5VV25KiSBD9l3rVXrkjRnTEchHFG9qitG7sQ0EVUMrNolBxwn/foJ3e7tidme3lqaIgT57MPCf5BvKCVHiKGzD4BkpKzpDh9siaEoMBMOoowhR0AYIMggHQrY29VErX0zuL/VBSSmO3WspJjuy8o/qLYIvw6HK8zc7H4TO4d0FZBykJfwG4mFjSNuglxYt7eU3H9nArOfbGl87eUeuYy0tzlS+r7fkqxOEzuLeIkFCSx8MywRmmMJ3iZgkJ/Rp9blq9nE+hOy6DTLk0taqdsmlP30m315OWKddoJnuKKKeQ+yL93nS5KXsiN3+97NJDGdT81ulVcUm2r0hnUdGPWCXjiyAaqwf9isQ5Rg7COSOs+XLfp7MiCizdkL3DVVle0EpNfGHOL0yMmFBMlVqSO0lwdpTR8WvEJ2ko7LS9iU+WJiBcbcnSOEqCMrRtK51mS7TUlh251u18/pn4kr5r5fh/+g7Ng41egpXupTiXhKSB2/XFGopmp881dtnpUDIvojCy+NXX6OPccr11Km/36rhT9BfatU89mm7S4jgPyetKzYO9LxkF78Uf9CGr6a9Yxjfrquexj3r58OpH9KCJZJ/2N8o+LGf7Qlm/KKZnNX3XCty678D+TboKU6nyZg4cprZrb0YGdH1/s8i1l2VfmZ+Im1ye3yo64sZBYMDfu4DimFSMQkaK/O1OUroAovMahxSzt/YCZs8PF9GKySLO7PJw4g/7Q7mzjViicjydrxb6wRHVmtrK6hl0QUmLEFcVRmNSsYI2c1xVMMYVGPzxNqm2aIqzguEJQWAABFlSJU7jVVXkfq9+uySQVbAsf8sxA10Q0SKbYzBgtMZd8BZgirYw1Pq2bduSxEmcoeoGLxuiYZm6popSW2L2SOqRDFcMZiUY8KrECQIvCPL9zy7I8ZU99NNWLfJdEBFasU1el2kB0bu43l/CMCzqnK2bPDTbA6ZgwH1cY8ZIHldtZXUOaZiQMzbbOsAggmmF712A8JmEuMUDI2dfpztXXOd4z9eLq3Pw107cdi4p8scnkBNkVRTFpyCEwZOEA/jUl0P0JGtYklRREFUBgrYdD+u2MT9VUpoMYT+OtWtxs+c3RLd2sEnHMzepH3vlIQFMMXrvcgDDY116xRHnv8D11xXSkbIujvMqVGe6dpDN1LW85lJ9wn1ICwy+faxLs0At3kr0VrphaqCdVpvnX2oYCMI/BXH/u+ltBMIMkrRqNTFzC3JyhsNJ4MuUG430YaybsQ4+hvRuuoeoubzQXxtHYad4I2wm3IyrWb2m49GoX3M48nprobR2YjSJuecfgIABOKD5hF/UUzPayVxnG1/6s/XZWe9OvOV4m+igFCtHoCaSxv7wqG2w3hPJ69wQrsem52/84TF5oegWYM/wJ9tx8qLrW9HQn9tsD7F8Tlbsxkb/lozOlOOzfZbg2qAYLTW3cnk1NjbBaZ+9NnAmZ8tRR/byWxobaU3UgruO07rh8W203uqjXVL7593hgOXEOr2vg7d1lH7/DZDvRn1IKyL4bavmsB3Rfw3ns8q5e/cTxvc9/RMlGWii6HafuBQW9iI1kanNaHA8Xa/JecbGOdfj2GklLMRmtwD31r5lCllU0Ky1So5oQRDoghRWTP8w6o+8z3VB1uhluWaQvfsb6O3j1Ba4/wWP2pVCgggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

