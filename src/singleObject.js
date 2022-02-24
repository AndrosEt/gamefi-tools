// ==UserScript==
// @name         farmersworld tools(single object)
// @name:zh-TW   farmersworld tools(single object)
// @name:zh-CN   farmersworld tools(single object)
// @namespace    https://play.farmersworld.io/
// @version      0.1
// @description  farmersworld tools(single object)
// @description:zh-TW  不需要透過第三方的服務就能下載 YouTube 影片。
// @description:zh-CN  不需要透过第三方的服务就能下载 YouTube 影片。
// @author       maple3142
// @match        https://*.play.farmersworld.io/*
// @match        https://*wallet.wax.io/*
// @require      https://unpkg.com/vue@2.6.10/dist/vue.js
// @require      https://unpkg.com/xfetch-js@0.3.4/xfetch.min.js
// @compatible   firefox >=52
// @compatible   chrome >=55
// @license      MIT
// ==/UserScript==

;(function() {
    'use strict'
    setInterval(function() {
        console.log('finding...')
        login();
        closeFullDialog();
        testCountDown();
        testEnergy();
        testRepair();
        testHomePage();
        testCup();
    }, 5000);
    setInterval(function() {
        console.log('update page...')
        refreshPage();
    }, 1000* 60);

    function refreshPage() {
        console.log('refreshPage...')
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7) {
            els[1].click();
            setTimeout(function () {
                els[0].click();
            }, 2000)
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
        let els = document.getElementsByClassName('navbar-group active')
        if (els.length == 1 && els[0].textContent != 'Home') {
            let els = document.getElementsByClassName('navbar-group--icon')
            if (els.length == 7) {
                els[0].click();
            }
        }
    }

    function testRepair() {
        console.log('testRepair...')
        let els = document.getElementsByClassName('plain-button semi-short ');
        if (els.length == 2 && els[1].textContent == 'Repair' && els[1].className.indexOf('disabled') == -1) {
            els[1].click();
        }
    }

    function testEnergy() {
        console.log('testEnergy...')
        let els = document.getElementsByClassName("resource-number");
        if (els.length == 4) {
            let energy = els[3].textContent.split(' /')[0];
            if (Number(energy) < 400) {
                // add more energy
                let els = document.getElementsByClassName("resource-energy--plus");

                if (els.length) {
                    els[0].click()
                    setTimeout(function () {
                        let els = document.getElementsByClassName('image-button')
                        if (els.length == 3) {
                            for (let i = 0;i < 50;i ++) {
                                els[2].click();
                                setTimeout(function (){}, 100)
                            }
                        }
                        let els2 = document.getElementsByClassName('plain-button long ')
                        if (els2.length == 1) {
                            els2[0].click();
                        }

                    }, 1000)
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
    function testCountDown() {
        console.log('testCountDown...')
        let els = document.getElementsByClassName("card-container--time");
        if (els.length > 0 && els[0].textContent == '00:00:00') {
            // mine now
            let btnList = document.getElementsByClassName("plain-button semi-short");
            if (btnList.length > 0) {
                // find the mine btn
                for (let i = 0; i < btnList.length; i++) {
                    if (btnList[i].textContent == "Mine") {
                        btnList[i].click();
                    }
                }
            }
        }
    }
})()

