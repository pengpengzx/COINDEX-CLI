/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
const KeyManager = require('../lib/KeyManager')
const CryptoAPI = require('../lib/CryptoAPI')

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()
            const api = new CryptoAPI(key)
            
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur)
            console.log(priceOutputData);
        } catch (error) {
            console.log(error)
        }
        console.log(cmd.coin, cmd.cur)
        console.log('hello from price')
    },
}

module.exports = check