// ==UserScript==
// @name         farmersworld tools(multi object)
// @name:zh-TW   farmersworld tools(multi object)
// @name:zh-CN   farmersworld tools(multi object)
// @namespace    https://play.farmersworld.io/
// @version      0.1
// @description  farmersworld tools(multi object)
// @description:zh-TW  farmersworld tools(multi object)
// @description:zh-CN  farmersworld tools(multi object)
// @author       maple3142
// @match        https://*.play.farmersworld.io/*
// @match        https://*wallet.wax.io/*
// @require      https://unpkg.com/vue@2.6.10/dist/vue.js
// @require      https://unpkg.com/xfetch-js@0.3.4/xfetch.min.js
// @compatible   firefox >=52
// @compatible   chrome >=55
// @license      MIT
// ==/UserScript==
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const Storage = {};
Storage.set = function (name, val) {
    localStorage.setItem(name, val);
}
Storage.get = function (name) {
    return localStorage.getItem(name);
}
;(async function () {
    'use strict'

    let notWorksRpcList = Storage.get("notWorksRpcList") || []
    let currentRpc = Number(Storage.get("currentRpc")) || 1

    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    });

    setTimeout(async function () {
        await start()
    }, 1000 * 5)

    async function start() {
        await sleep(1000)
        await login();
        await sleep(1000)
        await loop()
    }

    async function loop() {
        await refreshPage()
        await sleep(1000);
        await closeFullDialog();
        await sleep(1000);

        // check the energy
        let els = document.getElementsByClassName("resource-number");
        if (els.length == 4) {
            let energy = els[3].textContent.split(' /')[0];
            if (Number(energy) < 133) {
                // charge energy first
                await testEnergy();
                await sleep(1000);
            } else {
                // check the mine
                let timers = document.getElementsByClassName('satellite__card-time')
                let mining = false
                for (let i = 0;i < timers.length;i++) {
                    if (timers[i].innerText == '00:00:00') {
                        mining = true
                    }
                }
                if (mining) {
                    await testCountDown();
                    await sleep(1000);
                } else {
                    await testEnergy();
                    await sleep(1000);
                    await testRepair();
                    await sleep(1000);
                }
            }
        }
        await sleep(1000)
        await loop()

    }

    async function testRpc() {
        //estimated CPU time (0 us) is not less than the maximum billable CPU time for the transaction (0 us)
        let cupIndex = document.body.innerText.indexOf("estimated CPU time (0 us)")
        let todayIndex = document.body.innerText.indexOf("Today is a hard day!")
        let showIndex = document.body.innerText.indexOf("Slow down!")
        if (cupIndex != -1 || todayIndex != -1 || showIndex != -1) {
            Storage.set("currentRpc", currentRpc + 1)
            window.location.reload();
        } else {
            await testCup()
        }
    }

    async function refreshPage() {
        console.log('refreshPage...')
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7) {
            els[1].click();
            await sleep(2000)
            els[0].click();
            await sleep(3000)
        }
    }

    async function testCup() {
        console.log('testCup...')
        let els = document.getElementsByClassName('modal-stake-header')
        if (els.length == 1 && els[0].textContent == 'You dont have enough CPU to create transaction. Please stake WAX on CPU to continue.') {
            let rate = getCpuRate()
            if (rate > 95) {
                // wait until down to 95%
                while (rate > 95) {
                    await sleep(2000)
                    rate = getCpuRate()
                }
                // test the energy
                let els1 = document.getElementsByClassName("resource-number");
                if (els1.length == 4) {
                    let energy = els1[3].textContent.split(' /')[0];
                    if (Number(energy) < 133) {
                        // charge the energy first
                        await testEnergy()
                    }
                }
                // mine now
                await testCountDown()
            }
        }
    }

    function getCpuRate() {
        let circular = document.getElementsByClassName('circular-progress')
        if (circular.length == 3) {
            return Number(circular[0].getElementsByTagName('strong')[0].innerText.replace('%', ''))
        } else {
            return 0
        }
    }

    function testHomePage() {
        console.log('testHomePage...')
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7 && els[0].className.indexOf('active') == -1) {
            els[0].click();
        }
    }

    async function testRepair() {
        console.log('testRepair...')
        let tools = document.getElementsByClassName('carousel__img--item')
        for (let i = 0; i < tools.length; i++) {
            // check every tool
            tools[i].click();
            await sleep(500)
            let reloadList = document.getElementsByClassName('plain-button semi-short ');
            if (reloadList.length == 2 && reloadList[1].textContent == 'Repair' && reloadList[1].className.indexOf('disabled') == -1) {
                reloadList[1].click();
                await sleep(5000)
                await testRpc()
            }
        }
        await loop()
    }

    async function testEnergy() {
        console.log('testEnergy...')
        let els1 = document.getElementsByClassName("resource-number");
        if (els1.length == 4) {
            let energyMap = els1[3].textContent.split(' /');
            if (Number(energyMap[0]) < Number(energyMap[1])) {
                // add more energy
                let els2 = document.getElementsByClassName("resource-energy--plus");

                if (els2.length) {
                    els2[0].click()
                    await sleep(2000)
                    let els3 = document.getElementsByClassName('image-button')
                    if (els3.length == 3) {
                        for (let i = 0; i < ((Number(energyMap[1]) - Number(energyMap[0]))/5 + 5); i++) {
                            if (els3[2] == undefined) {
                                els3 = document.getElementsByClassName('image-button')
                            }
                            if (els3) {
                                els3[2].click();
                                await sleep(100)
                            }
                        }
                        await sleep(1000)
                    }
                    let els4 = document.getElementsByClassName('plain-button long ')
                    if (els4.length == 1) {
                        els4[0].click();
                        await sleep(4000)
                        await testRpc()
                    }
                }
            }
        }
    }

    async function login() {
        console.log('login...')
        // let currentRpcUrl = ''
        // // get the rpc endpoint
        // let rpcElement = document.getElementById("RPC-Endpoint")
        // while (rpcElement == null || rpcElement == undefined) {
        //     await sleep(3000)
        //     rpcElement = document.getElementById("RPC-Endpoint").children
        // }
        // let rpcList = rpcElement.children
        // if (currentRpc >= rpcList.length - 1) {
        //     currentRpc = 1
        // }
        // for(let i = currentRpc;i < rpcList.length;i ++) {
        //     if (notWorksRpcList.length > 0 && notWorksRpcList.indexOf(rpcList[i].textContent) != -1) {
        //         continue
        //     }
        //     rpcList[i].selected = true
        //     Storage.set('currentRpc', i)
        //     currentRpc = i
        //     currentRpcUrl = rpcList[i].textContent
        //     await sleep(1000)
        //     break;
        // }


        let els1 = document.getElementsByClassName("login-button");
        if (els1.length > 0 && els1[0].textContent == 'Login') {
            els1[0].click();
            await sleep(2000)
            let els2 = document.getElementsByClassName("login-modal-button");
            if (els2.length) {
                els2[0].click();
                // waiting for home page
                while (true) {
                    await sleep(1000 * 5)
                    let tools = document.getElementsByClassName('carousel__img--item')
                    if (tools.length == 0) {
                        let undefinedList = document.getElementsByClassName("plain-button semi-long  undefined")
                        if (undefinedList.length == 0) {
                            continue
                        }
                    } else {
                        break;
                    }
                }

            }
        }

    }

    async function closeFullDialog() {
        console.log('closeFullDialog...')
        let els = document.getElementsByClassName("plain-button short undefined");
        if (els.length > 0 && els[0].textContent == 'OK') {
            els[0].click();
            sleep(1000)
        }
    }

    async function testCountDown() {
        console.log('testCountDown...')

        let tools = document.getElementsByClassName('carousel__img--item')
        if (tools.length > 0) {
            for (let i = 0; i < tools.length; i++) {
                // check every tool
                tools[i].click();
                await sleep(500)
                let els = document.getElementsByClassName("card-container--time");
                if (els.length > 0 && els[0].textContent == '00:00:00') {
                    let type = document.getElementsByClassName('info-title-name')
                    if (type && type.length == 1) {
                        if (type[0].innerText.indexOf('Member') != -1) {
                            // Member
                            let btnList = document.getElementsByClassName("plain-button semi-short");
                            if (btnList.length > 0) {
                                for (let i = 0;i < btnList.length;i++) {
                                    btnList[0].click();
                                    await sleep(3000)
                                    await testRpc()
                                }
                            }

                        } else {
                            // mine now
                            let btnList = document.getElementsByClassName("plain-button semi-short");
                            if (btnList.length > 0) {
                                // find the mine btn
                                for (let i = 0; i < btnList.length; i++) {
                                    if (btnList[i].textContent == "Mine") {
                                        btnList[i].click();
                                        await sleep(3000)
                                        await testRpc()
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
})()

