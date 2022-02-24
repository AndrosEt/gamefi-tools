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
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
;(async function() {
    'use strict'
    setInterval(async function () {
        console.log('finding...')
        login();
        await sleep(1000);
        closeFullDialog();
        await sleep(1000);
        await testCountDown();
        await sleep(1000);
        await testEnergy();
        // await sleep(3000);
        // testRepair();
        // await sleep(3000);
        // testHomePage();
        await sleep(1000);
        testCup();
        await sleep(1000);
    }, 1000* 20);
    setInterval(async function() {
        console.log('update page...')
        await refreshPage();
    }, 1000* 60);

    async function refreshPage() {
        console.log('refreshPage...')
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7) {
            els[1].click();
            // setTimeout(function () {
            await sleep(3000)
            els[0].click();
            // }, 2000)
        }
    }

    function testCup() {
        console.log('testCup...')
        let els = document.getElementsByClassName('modal-stake-header')
        if (els.length == 1 && els[0].textContent == 'You dont have enough CPU to create transaction. Please stake WAX on CPU to continue.') {
            let els = document.getElementsByClassName('image-button close-modal')
            if (els.length == 1) {
                els[0].click();
            }
        }

    }

    function testHomePage() {
        console.log('testHomePage...')
        // let els = document.getElementsByClassName('navbar-group active')
        // if (els.length == 1 && els[0].textContent != 'Home') {
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7 && els[0].className.indexOf('active') == -1) {
            els[0].click();
        }
        // }
    }

    function testRepair() {
        console.log('testRepair...')
        let els = document.getElementsByClassName('plain-button semi-short ');
        if (els.length == 2 && els[1].textContent == 'Repair' && els[1].className.indexOf('disabled') == -1) {
            els[1].click();
        }
    }

    async function testEnergy() {
        console.log('testEnergy...')
        let els1 = document.getElementsByClassName("resource-number");
        if (els1.length == 4) {
            let energy = els1[3].textContent.split(' /')[0];
            if (Number(energy) < 400) {
                // add more energy
                let els2 = document.getElementsByClassName("resource-energy--plus");

                if (els2.length) {
                    els2[0].click()
                    await sleep(2000)
                    // setTimeout(function () {
                    let els3 = document.getElementsByClassName('image-button')
                    if (els3.length == 3) {
                        for (let i = 0;i < 50;i ++) {
                            els3[2].click();
                            await sleep(100)
                        }
                        await sleep(1000)
                    }
                    let els4 = document.getElementsByClassName('plain-button long ')
                    if (els4.length == 1) {
                        els4[0].click();
                        await sleep(500)
                    }

                    // }, 1000)
                }
            }
        }
    }

    function login() {
        console.log('login...')
        let retry_count = 0;
        let RETRY_LIMIT = 100;
        let els = document.getElementsByClassName("login-button");
        if (els.length > 0 && els[0].textContent == 'Login') {
            els[0].click();
            let material_checkExist = setInterval(function () {
                let els = document.getElementsByClassName("login-modal-button");
                if (els.length) {
                    els[0].click();
                    clearInterval(material_checkExist);
                }
                retry_count = retry_count + 1;
                if (retry_count > RETRY_LIMIT) {
                    clearInterval(material_checkExist);
                }
            }, 330);
        }

    }

    function closeFullDialog() {
        console.log('closeFullDialog...')
        let els = document.getElementsByClassName("plain-button short undefined");
        if (els.length > 0 && els[0].textContent == 'OK') {
            els[0].click();
        }
    }
    async function testCountDown() {
        console.log('testCountDown...')

        let tools = document.getElementsByClassName('carousel__img--item')
        if (tools.length > 0) {
            for (let i = 0; i < tools.length; i++) {
                // check every tool
                tools[i].click();
                await sleep(2000)
                let reloadList = document.getElementsByClassName('plain-button semi-short ');
                if (reloadList.length == 2 && reloadList[1].textContent == 'Repair' && reloadList[1].className.indexOf('disabled') == -1) {
                    reloadList[1].click();
                    await sleep(5000)
                }
                let els = document.getElementsByClassName("card-container--time");
                if (els.length > 0 && els[0].textContent == '00:00:00') {
                    // mine now
                    let btnList = document.getElementsByClassName("plain-button semi-short");
                    if (btnList.length > 0) {
                        // find the mine btn
                        for (let i = 0; i < btnList.length; i++) {
                            if (btnList[i].textContent == "Mine") {
                                btnList[i].click();
                                await sleep(5000)
                            }
                        }
                    }
                }
            }
        }
    }
})()

