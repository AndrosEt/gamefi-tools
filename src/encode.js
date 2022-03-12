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
const _0xa755 = ['reload', 'testHomePage...', 'circular-progress', 'className', 'login-modal-button', 'textContent', 'resource-number', 'closeFullDialog...', 'testCup...', 'Mine', 'plain-button\x20semi-short\x20true', 'active', 'getElementsByClassName', 'innerText', 'length', 'Repair', 'children', 'login...', 'card-number', 'indexOf', 'navbar-group--icon', 'replace', 'notWorksRpcList', 'strong', 'getElementsByTagName', 'resource-energy--plus', 'estimated\x20CPU\x20time\x20(0\x20us)', 'location', 'body', 'click', 'You\x20dont\x20have\x20enough\x20CPU\x20to\x20create\x20transaction.\x20Please\x20stake\x20WAX\x20on\x20CPU\x20to\x20continue.', 'plain-button\x20long\x20', 'max', 'log', 'satellite__card-time', 'modal-stake-header', 'split', 'disabled', 'get', 'carousel__img--item'];
const _0x1ad7 = function (_0xa755c2, _0x1ad79f) {
    _0xa755c2 = _0xa755c2 - 0x0;
    let _0x5b8fab = _0xa755[_0xa755c2];
    return _0x5b8fab;
};

function _0x2db2dd(_0x57446b) {
    return new Promise(_0x52e0fc => setTimeout(_0x52e0fc, _0x57446b));
}

const _0x570942 = {};
_0x570942['set'] = function (_0x26a844, _0x190569) {
    localStorage['setItem'](_0x26a844, _0x190569);
};
_0x570942['get'] = function (_0x176006) {
    return localStorage['getItem'](_0x176006);
};
let _0x16d4bb = [];
(async function () {
    'use strict';
    let _0x1c63d5 = _0x570942[_0x1ad7('0x26')](_0x1ad7('0x16')) || [];
    let _0x4c6a34 = Number(_0x570942[_0x1ad7('0x26')]('currentRpc')) || 0x1;
    window['addEventListener']('DOMContentLoaded', _0xbddc35 => {
        console['log']('DOM\x20fully\x20loaded\x20and\x20parsed');
    });
    setTimeout(async function () {
        await _0x4ba70d();
    }, 0x3e8 * 0x5);

    async function _0x4ba70d() {
        await _0x2db2dd(0x3e8);
        await _0x3aa427();
        await _0x2db2dd(0x3e8);
        await _0x2307f8();
        await _0x2db2dd(0x3e8);
        await _0x4c5c11();
    }

    async function _0x2307f8() {
        let _0x3cab4f = document['getElementsByClassName']('carousel__img--item');
        if (_0x3cab4f[_0x1ad7('0xe')] > 0x0) {
            for (let _0x537c26 = 0x0; _0x537c26 < _0x3cab4f[_0x1ad7('0xe')]; _0x537c26++) {
                _0x3cab4f[_0x537c26][_0x1ad7('0x1d')]();
                await _0x2db2dd(0x1f4);
                let _0x538865 = document[_0x1ad7('0xc')](_0x1ad7('0x12'));
                if (_0x538865['length'] == 0x1 && _0x538865[0x0]['children'][0x1]) {
                    let _0x5df28a = _0x538865[0x0][_0x1ad7('0x10')][0x1][_0x1ad7('0xd')]['split']('/\x20');
                    if (_0x5df28a[_0x1ad7('0xe')] == 0x2) {
                        _0x16d4bb[_0x537c26] = {'max': _0x5df28a[0x1], 'now': _0x5df28a[0x0]};
                    }
                }
            }
        }
    }

    async function _0x4c5c11() {
        await _0x18a85e();
        await _0x2db2dd(0x3e8);
        let _0x10b58b = document['getElementsByClassName'](_0x1ad7('0x6'));
        if (_0x10b58b[_0x1ad7('0xe')] == 0x4) {
            let _0x578e8b = _0x10b58b[0x3][_0x1ad7('0x5')][_0x1ad7('0x24')]('\x20/');
            if (Number(_0x578e8b[0x0]) < Number(_0x578e8b[0x1]) / 0x2) {
                await _0x2b1e1e();
                await _0x2db2dd(0x3e8);
            } else {
                let _0x32f17a = document[_0x1ad7('0xc')]('satellite__card-time');
                let _0x27565c = ![];
                for (let _0x44cf2a = 0x0; _0x44cf2a < _0x32f17a[_0x1ad7('0xe')]; _0x44cf2a++) {
                    if (_0x32f17a[_0x44cf2a]['innerText'] == '00:00:00') {
                        _0x27565c = !![];
                    }
                }
                if (_0x27565c) {
                    await _0x25bccb();
                    await _0x2db2dd(0x3e8);
                } else {
                    await _0x2b1e1e();
                    await _0x2db2dd(0x3e8);
                    await _0x449d7d();
                    await _0x2db2dd(0x3e8);
                }
            }
        }
        await _0x2db2dd(0x3e8);
        await _0x4c5c11();
    }

    async function _0x4b3f04() {
        let _0x173bcf = document[_0x1ad7('0x1c')][_0x1ad7('0xd')][_0x1ad7('0x13')](_0x1ad7('0x1a'));
        let _0x36f834 = document[_0x1ad7('0x1c')]['innerText']['indexOf']('Today\x20is\x20a\x20hard\x20day!');
        let _0x131f52 = document[_0x1ad7('0x1c')]['innerText']['indexOf']('Slow\x20down!');
        if (_0x173bcf != -0x1 || _0x36f834 != -0x1 || _0x131f52 != -0x1) {
            window['location']['reload']();
        } else {
            await _0x1552bd();
        }
    }

    async function _0x975af2() {
        console['log']('refreshPage...');
        let _0x307e3a = document['getElementsByClassName'](_0x1ad7('0x14'));
        if (_0x307e3a[_0x1ad7('0xe')] == 0x7) {
            _0x307e3a[0x1]['click']();
            await _0x2db2dd(0x7d0);
            _0x307e3a[0x0][_0x1ad7('0x1d')]();
            await _0x2db2dd(0xbb8);
        }
    }

    async function _0x1552bd() {
        console[_0x1ad7('0x21')](_0x1ad7('0x8'));
        let _0x2c3660 = document[_0x1ad7('0xc')](_0x1ad7('0x23'));
        if (_0x2c3660['length'] == 0x1 && _0x2c3660[0x0][_0x1ad7('0x5')] == _0x1ad7('0x1e')) {
            await _0x2db2dd(0x1b58);
            let _0x42cbb5 = _0xa1952f();
            if (_0x42cbb5 > 0x5f) {
                let _0x4c2003 = 0x0;
                while (_0x42cbb5 > 0x5f) {
                    await _0x2db2dd(0x7d0);
                    _0x42cbb5 = _0xa1952f();
                    _0x4c2003++;
                    if (_0x4c2003 > 0x5a) {
                        window[_0x1ad7('0x1b')][_0x1ad7('0x0')]();
                    }
                }
                let _0x15e795 = document['getElementsByClassName']('resource-number');
                if (_0x15e795[_0x1ad7('0xe')] == 0x4) {
                    let _0xa0bd34 = _0x15e795[0x3]['textContent']['split']('\x20/')[0x0];
                    if (Number(_0xa0bd34) < 0x85) {
                        await _0x2b1e1e();
                    }
                }
                await _0x4c5c11();
            }
        }
    }

    function _0xa1952f() {
        let _0x5e4d9c = document['getElementsByClassName'](_0x1ad7('0x2'));
        if (_0x5e4d9c[_0x1ad7('0xe')] == 0x3) {
            return Number(_0x5e4d9c[0x0][_0x1ad7('0x18')](_0x1ad7('0x17'))[0x0][_0x1ad7('0xd')][_0x1ad7('0x15')]('%', ''));
        } else {
            return 0x0;
        }
    }

    function _0x24ad9e() {
        console[_0x1ad7('0x21')](_0x1ad7('0x1'));
        let _0x241edd = document['getElementsByClassName'](_0x1ad7('0x14'));
        if (_0x241edd['length'] == 0x7 && _0x241edd[0x0][_0x1ad7('0x3')]['indexOf'](_0x1ad7('0xb')) == -0x1) {
            _0x241edd[0x0][_0x1ad7('0x1d')]();
        }
    }

    async function _0x449d7d() {
        console[_0x1ad7('0x21')]('testRepair...');
        if (_0x16d4bb['length'] > 0x0) {
            for (let _0x1cf3e3 = 0x0; _0x1cf3e3 < _0x16d4bb['length']; _0x1cf3e3++) {
                if (_0x16d4bb[_0x1cf3e3]['now'] < _0x16d4bb[_0x1cf3e3][_0x1ad7('0x20')] / 0x4) {
                    let _0x1667c0 = document['getElementsByClassName']('carousel__img--item');
                    _0x1667c0[_0x1cf3e3]['click']();
                    await _0x2db2dd(0x1f4);
                    let _0x5125c4 = document[_0x1ad7('0xc')]('plain-button\x20semi-short\x20');
                    if (_0x5125c4[_0x1ad7('0xe')] == 0x2 && _0x5125c4[0x1][_0x1ad7('0x5')] == 'Repair' && _0x5125c4[0x1]['className']['indexOf'](_0x1ad7('0x25')) == -0x1) {
                        _0x5125c4[0x1]['click']();
                        await _0x2db2dd(0x1388);
                        await _0x4b3f04();
                    }
                }
            }
        } else {
            let _0x36b664 = document['getElementsByClassName']('carousel__img--item');
            for (let _0x43d342 = 0x0; _0x43d342 < _0x36b664['length']; _0x43d342++) {
                _0x36b664[_0x43d342]['click']();
                await _0x2db2dd(0x1f4);
                let _0x4c7b92 = document['getElementsByClassName']('plain-button\x20semi-short\x20');
                if (_0x4c7b92[_0x1ad7('0xe')] == 0x2 && _0x4c7b92[0x1]['textContent'] == _0x1ad7('0xf') && _0x4c7b92[0x1]['className'][_0x1ad7('0x13')](_0x1ad7('0x25')) == -0x1) {
                    _0x4c7b92[0x1]['click']();
                    await _0x2db2dd(0x1388);
                    await _0x4b3f04();
                }
            }
        }
    }

    async function _0x2b1e1e() {
        console[_0x1ad7('0x21')]('testEnergy...');
        let _0x53d123 = document[_0x1ad7('0xc')]('resource-number');
        if (_0x53d123[_0x1ad7('0xe')] == 0x4) {
            let _0x55abea = _0x53d123[0x3][_0x1ad7('0x5')]['split']('\x20/');
            if (Number(_0x55abea[0x0]) < Number(_0x55abea[0x1]) / 0x2) {
                let _0x4ddc5e = document['getElementsByClassName'](_0x1ad7('0x19'));
                if (_0x4ddc5e['length']) {
                    _0x4ddc5e[0x0]['click']();
                    await _0x2db2dd(0x7d0);
                    let _0x146617 = document[_0x1ad7('0xc')]('image-button');
                    if (_0x146617['length'] == 0x3) {
                        for (let _0x14345f = 0x0; _0x14345f < (Number(_0x55abea[0x1]) - Number(_0x55abea[0x0])) / 0x5 + 0x5; _0x14345f++) {
                            if (_0x146617[0x2] == undefined) {
                                _0x146617 = document['getElementsByClassName']('image-button');
                            }
                            if (_0x146617) {
                                _0x146617[0x2]['click']();
                                await _0x2db2dd(0x64);
                            }
                        }
                        await _0x2db2dd(0x3e8);
                    }
                    let _0x37e78c = document[_0x1ad7('0xc')](_0x1ad7('0x1f'));
                    if (_0x37e78c[_0x1ad7('0xe')] == 0x1) {
                        _0x37e78c[0x0][_0x1ad7('0x1d')]();
                        await _0x2db2dd(0xfa0);
                        await _0x4b3f04();
                    }
                }
            }
        }
    }

    async function _0x3aa427() {
        console[_0x1ad7('0x21')](_0x1ad7('0x11'));
        let _0x113749 = document[_0x1ad7('0xc')]('login-button');
        if (_0x113749['length'] > 0x0 && _0x113749[0x0][_0x1ad7('0x5')] == 'Login') {
            _0x113749[0x0][_0x1ad7('0x1d')]();
            await _0x2db2dd(0x7d0);
            let _0x1d724e = document['getElementsByClassName'](_0x1ad7('0x4'));
            if (_0x1d724e[_0x1ad7('0xe')]) {
                _0x1d724e[0x0]['click']();
                while (!![]) {
                    await _0x2db2dd(0x3e8 * 0x5);
                    let _0x43668d = document['getElementsByClassName'](_0x1ad7('0x14'));
                    if (_0x43668d[_0x1ad7('0xe')] == 0x0) {
                        continue;
                    } else {
                        let _0x30affd = document[_0x1ad7('0xc')](_0x1ad7('0x22'));
                        if (_0x30affd['length'] == 0x0) {
                            window['location']['reload']();
                            return;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }

    async function _0x18a85e() {
        console['log'](_0x1ad7('0x7'));
        let _0x6b0fa = document['getElementsByClassName']('plain-button\x20short\x20undefined');
        if (_0x6b0fa['length'] > 0x0 && _0x6b0fa[0x0]['textContent'] == 'OK') {
            _0x6b0fa[0x0]['click']();
            await _0x2db2dd(0x3e8);
        }
    }

    async function _0x25bccb() {
        console[_0x1ad7('0x21')]('testCountDown...');
        let _0x28a8f2 = document['getElementsByClassName'](_0x1ad7('0x27'));
        if (_0x28a8f2[_0x1ad7('0xe')] > 0x0) {
            for (let _0x27dfff = 0x0; _0x27dfff < _0x28a8f2[_0x1ad7('0xe')]; _0x27dfff++) {
                _0x28a8f2[_0x27dfff][_0x1ad7('0x1d')]();
                await _0x2db2dd(0x1f4);
                let _0xed8bcf = document['getElementsByClassName'](_0x1ad7('0x12'));
                if (_0xed8bcf['length'] == 0x1 && _0xed8bcf[0x0]['children'][0x1]) {
                    let _0x9732f6 = _0xed8bcf[0x0]['children'][0x1]['innerText'][_0x1ad7('0x24')]('/\x20');
                    if (_0x9732f6['length'] == 0x2) {
                        _0x16d4bb[_0x27dfff] = {'max': _0x9732f6[0x1], 'now': _0x9732f6[0x0]};
                    }
                }
                let _0x5278ba = document[_0x1ad7('0xc')]('plain-button\x20semi-short');
                if (_0x5278ba[_0x1ad7('0xe')] > 0x0) {
                    for (let _0x2bb6a3 = 0x0; _0x2bb6a3 < _0x5278ba[_0x1ad7('0xe')]; _0x2bb6a3++) {
                        if (_0x5278ba[_0x2bb6a3][_0x1ad7('0x5')] == _0x1ad7('0x9')) {
                            _0x5278ba[_0x2bb6a3][_0x1ad7('0x1d')]();
                            await _0x2db2dd(0xbb8);
                            await _0x4b3f04();
                        }
                    }
                }
                let _0x570db8 = document[_0x1ad7('0xc')](_0x1ad7('0xa'));
                if (_0x570db8['length'] == 0x1 && _0x570db8[0x0][_0x1ad7('0x5')] == 'Claim') {
                    _0x570db8[0x0][_0x1ad7('0x1d')]();
                    await _0x2db2dd(0x1388);
                    await _0x4b3f04();
                }
            }
        } else {
            window[_0x1ad7('0x1b')][_0x1ad7('0x0')]();
        }
    }
}());
