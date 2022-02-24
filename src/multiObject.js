// ==UserScript==
// @name         Local YouTube Downloader
// @name:zh-TW   本地 YouTube 下載器
// @name:zh-CN   本地 YouTube 下载器
// @namespace    https://blog.maple3142.net/
// @version      0.9.12
// @description  Get youtube raw link without external service.
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
        testCup();
    }, 1000* 6);
    // setTimeout(function () {
        setInterval( function() {
            console.log(`count down checking... ${Date.now().toLocaleString()}`)
            // refreshPage();
            // setTimeout(function (){}, 1000)

            oneCountDown();
            // setTimeout(function (){}, 1000)
            //
            // testEnergy();
            // setTimeout(function (){}, 1000)
            //
            // testRepair();
            // setTimeout(function (){}, 1000)

        }, 1000* 10);
    // }, 1000* 20)

    // setInterval(function() {
    //     console.log('refresh page...')
    //     refreshPage();
    // }, 1000* 60);

     function refreshPage() {
        console.log(`refreshing...${new Date().toLocaleDateString()}`)
        let els = document.getElementsByClassName('navbar-group--icon')
        if (els.length == 7) {
            els[3].click();
            setTimeout(function () {
                els[0].click();
            }, 2000)
        }
        console.log(`refreshing end...${new Date().toLocaleDateString()}`)
        //-------------------------------------------------------------------------
        console.log('testCountDown...')

        let tools = document.getElementsByClassName('carousel__img--item')
        if (tools.length > 0) {
            for (let i = 0;i < tools.length; i++) {
                // check every tool
                tools[i].click();
                setTimeout(function (){}, 1500)
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
            tools[0].click();
            setTimeout(function (){}, 1000)
        }
        //-------------------------------------------------------------------------
        console.log('testEnergy...')
        {
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
            setTimeout(function (){}, 1000)
        }
        //-------------------------------------------------------------------------
        {
            let els = document.getElementsByClassName('plain-button semi-short ');
            if (els.length == 2 && els[1].textContent == 'Repair' && els[1].className.indexOf('disabled') == -1) {
                els[1].click();
                setTimeout(function (){}, 1000* 10)
            }
            setTimeout(function (){}, 1000)
        }
    }

    function testCup() {
        let els = document.getElementsByClassName('modal-stake-header')
        if (els.length == 1 && els[0].textContent == 'You dont have enough CPU to create transaction. Please stake WAX on CPU to continue.') {
            let els = document.getElementsByClassName('image-button close-modal')
            if (els.length == 1) {
                els[0].click();
            }
        }

    }

    function testHomePage() {
        let els = document.getElementsByClassName('navbar-group active')
        if (els.length == 1 && els[0].textContent != 'Home') {
            let els = document.getElementsByClassName('navbar-group--icon')
            if (els.length == 7) {
                els[0].click();
            }
        }
    }

    function testRepair() {
        let els = document.getElementsByClassName('plain-button semi-short ');
        if (els.length == 2 && els[1].textContent == 'Repair' && els[1].className.indexOf('disabled') == -1) {
            els[1].click();
        }
        setTimeout(function (){}, 1000)
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
        setTimeout(function (){}, 1000)
        testRepair()
    }

    function login() {
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
        let els = document.getElementsByClassName("plain-button short undefined");
        if (els.length > 0 && els[0].textContent == 'OK') {
            els[0].click();
        }
    }

    function oneCountDown() {
        let els = document.getElementsByClassName("card-container--time");
        console.log('time card')

        console.log(els)
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

    function testCountDown() {
        console.log('testCountDown...')

        let tools = document.getElementsByClassName('carousel__img--item')
        if (tools.length > 0) {
            for (let i = 0;i < tools.length; i++) {
                // check every tool
                tools[i].click();
                setTimeout(function (){
                    let els = document.getElementsByClassName("card-container--time");
                    console.log('time card')

                    console.log(els)
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
                }, 1000* 3)

            }
            setTimeout(function (){
                tools[0].click();
            }, 1000* tools* 3)

        }
    }
})()

