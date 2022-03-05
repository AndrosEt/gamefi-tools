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
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @require      https://unpkg.com/xfetch-js@0.3.4/xfetch.min.js
// @run-at      document-start
// @grant       unsafeWindow
// @compatible   firefox >=52
// @compatible   chrome >=55
// @license      MIT
// ==/UserScript==
const originFetch = fetch;
unsafeWindow.fetch = (...arg) => {
    console.log('fetch arg', ...arg);
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
const Storage = {};
Storage.set = function(name, val) {
    localStorage.setItem(name, val);
}
Storage.get = function(name) {
    return localStorage.getItem(name);
}
let Podium = {};

Podium.keydown = function(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return this.keyCodeVal;
        }
    });
    Object.defineProperty(oEvent, 'which', {
        get : function() {
            return this.keyCodeVal;
        }
    });

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, k, k, "", "", false, "");
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
        alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.body.dispatchEvent(oEvent);
}


;(async function () {
    'use strict'

    await sleep(7000)
    // let evtObj = document.createEvent('UIEvents');
    // evtObj.initUIEvent('keydown', true, true, window, 1);

    // delete evtObj.keyCode;
    // if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
    //     Object.defineProperty(evtObj, "keyCode", { value: 40 });
    // } else {
    //     evtObj.key = String.fromCharCode(40);
    // }
    //
    // let evtObj2 = document.createEvent('UIEvents');
    // evtObj2.initUIEvent('keydown', true, true, window, 1);
    // delete evtObj2.keyCode;
    // if (typeof evtObj2.keyCode === "undefined") {//为了模拟keycode
    //     Object.defineProperty(evtObj2, "keyCode", { value: 13 });
    // } else {
    //     evtObj2.key = String.fromCharCode(13);
    // }

    // let a = document.getElementsByTagName("select")[0]
    // let eventObj = document.createEvent('MouseEvents');
    // eventObj.initMouseEvent('click',true,true, document.defaultView,1,0,0,795,365,false,false,true,false,0,null);
    // a.dispatchEvent(eventObj);



    // a.addEventListener('change',function(){
    //     alert('changed');
    // });
    // a.size = a.children.length
    // a.focus()
    // await sleep(1000)
    //
    //
    //
    // console.log('doing....')
    // Podium.keydown(40);
    // await sleep(1000)
    // Podium.keydown(40);
    // await sleep(1000)
    // Podium.keydown(40);
    // await sleep(1000)
    // a.options[3].focus()
    // await sleep(1000)
    //
    // a.options[3].selected = true
    // await sleep(1000)
    //
    // a.options[3].click()
    // await sleep(1000)




    // let ev = $.Event('keypress');
    // ev.which = 13; // Carriage-return (Enter)
    // $('body').trigger(ev);

    // document.dispatchEvent(new KeyboardEvent("keydown", {
    //     key: "down",
    //     keyCode: 40, // example values.
    //     code: "ArrowDown", // put everything you need in this object.
    //     which: 40,
    //     shiftKey: false, // you don't need to include values
    //     ctrlKey: false,  // if you aren't going to use them.
    //     metaKey: false   // these are here for example's sake.
    // }));
    // a.dispatchEvent(new KeyboardEvent("keydown", {
    //     key: "down",
    //     keyCode: 40, // example values.
    //     code: "ArrowDown", // put everything you need in this object.
    //     which: 40,
    //     shiftKey: false, // you don't need to include values
    //     ctrlKey: false,  // if you aren't going to use them.
    //     metaKey: false   // these are here for example's sake.
    // }));
    // a.focus()
    //
    // let event = document.createEvent( 'KeyboardEvent' );
    // event.initKeyboardEvent( 'keydown', true, false, null, 0, false, 0, false, 40, 0 );
    // document.dispatchEvent( event );
    // a.focus()
    //
    // let doc = a.ownerDocument
    // let win = doc.defaultView || doc.parentWindow
    // let evt = document.createEvent("KeyboardEvent");
    // evt.initKeyboardEvent(
    //     "keydown",
    //     true,
    //     false,
    //     win,
    //     "U+0009",
    //     0,
    //     false,
    //     false,
    //     false,
    //     false,
    //     false
    // );
    // a.focus()
    //
    // document.dispatchEvent(evt);
    //
    // a.focus()
    //
    // let keyCoke = 40
    // let keyboardEvent = document.createEvent('KeyboardEvent')
    // let initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'
    // keyboardEvent[initMethod]('keydown', true, true, win, false, false, false, false, keyCoke, 0)
    // document.dispatchEvent(keyboardEvent)

    //////////////////////////////////
    // a.focus()
    // const KeyboardEventInit = {key: 'ArrowDown', code: 'ArrowDown', location: 0, repeat: false,
    //     isComposing: false, bubbles: true, composed: true, charCode: 40, keyCode: 40}
    // const evtObj = new KeyboardEvent('keydown', KeyboardEventInit)
    // evtObj.stop = evtObj.stopPropagation
    // a.dispatchEvent(evtObj)
    // a.focus()
    // document.dispatchEvent(evtObj)
    // a.focus()
    // document.body.dispatchEvent(evtObj)
    //
    // a.focus()
    // document.body.dispatchEvent(new KeyboardEvent('keydown', KeyboardEventInit))
    // a.focus()
    // document.body.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 40}))
    //
    //
    // document.body.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 13}))
/////////////////////////////////


    // var keyboardEvent = document.createEvent('KeyboardEvent');
    // var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
    //
    // keyboardEvent[initMethod](
    //     'keydown', // event type: keydown, keyup, keypress
    //     true, // bubbles
    //     true, // cancelable
    //     Window, // view: should be window
    //     false, // ctrlKey
    //     false, // altKey
    //     false, // shiftKey
    //     false, // metaKey
    //     40, // keyCode: unsigned long - the virtual key code, else 0
    //     0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    // );
    // a.dispatchEvent(keyboardEvent);
    // document.dispatchEvent(keyboardEvent);

    // let event = document.createEvent( 'KeyboardEvent' );
    // event.initKeyboardEvent( 'keydown', true, false, null, 0, false, 0, false, 65, 0 );


    // let event = document.createEvent("KeyboardEvent");
    // event.initKeyboardEvent("keydown",true,true,document.defaultView,"a",0,"Shift",0);
    // a.dispatchEvent(new Event('change'));
    // await sleep(1000)
    // a.dispatchEvent(evtObj2);
    // await sleep(1000)
    // a.dispatchEvent(evtObj1);
    // await sleep(1000)




    let notWorksRpcList = Storage.get("notWorksRpcList") || []
    let currentRpc = Number(Storage.get("currentRpc")) || 1

    setTimeout(async function () {
        await start()
    }, 1000 * 5000)

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
        await testCountDown();
        await sleep(1000);
        await testEnergy();
        await sleep(1000);
        await testCup();
        await sleep(1000);
    }

    async function testRpc() {
        //estimated CPU time (0 us) is not less than the maximum billable CPU time for the transaction (0 us)
        let cupIndex = document.body.innerText.indexOf("estimated CPU time (0 us)")
        let todayIndex = document.body.innerText.indexOf("Today is a hard day!")
        let showIndex = document.body.innerText.indexOf("Slow down!")
        if (cupIndex != -1 || todayIndex != -1 || showIndex != -1) {
            Storage.set("currentRpc", currentRpc+1)
            window.location.reload();
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
            let els = document.getElementsByClassName('image-button close-modal')
            if (els.length == 1) {
                els[0].click();
                await sleep(1000)
            }
        }
        await loop()
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
        let els = document.getElementsByClassName('plain-button semi-short ');
        if (els.length == 2 && els[1].textContent == 'Repair' && els[1].className.indexOf('disabled') == -1) {
            els[1].click();
            await sleep(1000 * 8)
            await testRpc()
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
                    let els3 = document.getElementsByClassName('image-button')
                    if (els3.length == 3) {
                        for (let i = 0; i < 100; i++) {
                            els3[2].click();
                            await sleep(100)
                        }
                        await sleep(1000)
                    }
                    let els4 = document.getElementsByClassName('plain-button long ')
                    if (els4.length == 1) {
                        els4[0].click();
                        await sleep(5000)
                        await testRpc()

                    }
                }
            }
        }
    }

    async function login() {
        console.log('login...')
        let currentRpcUrl = ''
        // get the rpc endpoint
        let rpcElement = document.getElementById("RPC-Endpoint")
        while (rpcElement == null || rpcElement == undefined) {
            await sleep(3000)
            rpcElement = document.getElementById("RPC-Endpoint").children
        }
        let rpcList = rpcElement.children
        if (currentRpc >= rpcList.length - 1) {
            currentRpc = 1
        }
        for(let i = currentRpc;i < rpcList.length;i ++) {
            if (notWorksRpcList.length > 0 && notWorksRpcList.indexOf(rpcList[i].textContent) != -1) {
                continue
            }
            rpcList[i].selected = true
            Storage.set('currentRpc', i)
            currentRpc = i
            currentRpcUrl = rpcList[i].textContent
            await sleep(1000)
            break;
        }


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
                        } else {
                            // switch the rpc
                            notWorksRpcList.push(currentRpcUrl)
                            Storage.set('notWorksRpcList', notWorksRpcList)
                            window.location.reload();
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
                await sleep(2000)
                let reloadList = document.getElementsByClassName('plain-button semi-short ');
                if (reloadList.length == 2 && reloadList[1].textContent == 'Repair' && reloadList[1].className.indexOf('disabled') == -1) {
                    reloadList[1].click();
                    await sleep(5000)
                    await testRpc()
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
                                await testRpc()

                            }
                        }
                    }
                }
                await sleep(1000)
                await testRepair()
            }
        }
    }
})()

