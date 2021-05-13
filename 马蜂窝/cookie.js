const jsdom = require('jsdom')
    const {
    JSDOM
} = jsdom
    const dom = new JSDOM()
    window = dom.window
    document = window.document
var cookie={}
function hash(_0x491566) {
    var _0x4051d8 = 8;
    var _0x169813 = 0;

    function _0x53e045(_0x3a8ef1, _0x1ce245) {
        var _0x30c619 = (_0x3a8ef1 & 65535) + (_0x1ce245 & 65535);

        var _0x29b946 = (_0x3a8ef1 >> 16) + (_0x1ce245 >> 16) + (_0x30c619 >> 16);

        return _0x29b946 << 16 | _0x30c619 & 65535;
    }

    function _0x4711a6(_0xc39767, _0x2a4e0d) {
        return _0xc39767 >>> _0x2a4e0d | _0xc39767 << 32 - _0x2a4e0d;
    }

    function _0x295e7d(_0x46594e, _0x495994) {
        return _0x46594e >>> _0x495994;
    }

    function _0x44e67a(_0x5db088, _0x959037, _0x2d7836) {
        return _0x5db088 & _0x959037 ^ ~_0x5db088 & _0x2d7836;
    }

    function _0x435e3a(_0xad6ac8, _0x220890, _0x418109) {
        return _0xad6ac8 & _0x220890 ^ _0xad6ac8 & _0x418109 ^ _0x220890 & _0x418109;
    }

    function _0x42da28(_0xd1d304) {
        return _0x4711a6(_0xd1d304, 2) ^ _0x4711a6(_0xd1d304, 13) ^ _0x4711a6(_0xd1d304, 22);
    }

    function _0x50f015(_0x1d157a) {
        return _0x4711a6(_0x1d157a, 6) ^ _0x4711a6(_0x1d157a, 11) ^ _0x4711a6(_0x1d157a, 25);
    }

    function _0x2f56a7(_0x2ecd6c) {
        return _0x4711a6(_0x2ecd6c, 7) ^ _0x4711a6(_0x2ecd6c, 18) ^ _0x295e7d(_0x2ecd6c, 3);
    }

    function _0x386082(_0x4099f1) {
        return _0x4711a6(_0x4099f1, 17) ^ _0x4711a6(_0x4099f1, 19) ^ _0x295e7d(_0x4099f1, 10);
    }

    function _0x35ce13(_0x43b8ad, _0x5a6ff2) {
        var _0x1db5f7 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);

        var _0xbfbf55 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);

        var _0x2d2bb0 = new Array(64);

        var _0x4572df,
        _0x2c60c5,
        _0x38bc01,
        _0x4771be,
        _0x44e785,
        _0x180ecb,
        _0xbb1bca,
        _0xefdc8d,
        _0x446def,
        _0x45b7ae;

        var _0x4ae5aa,
        _0x308d87;

        _0x43b8ad[_0x5a6ff2 >> 5] |= 128 << 24 - _0x5a6ff2 % 32;
        _0x43b8ad[(_0x5a6ff2 + 64 >> 9 << 4) + 15] = _0x5a6ff2;

        for (var _0x446def = 0; _0x446def < _0x43b8ad["length"]; _0x446def += 16) {
            _0x4572df = _0xbfbf55[0];
            _0x2c60c5 = _0xbfbf55[1];
            _0x38bc01 = _0xbfbf55[2];
            _0x4771be = _0xbfbf55[3];
            _0x44e785 = _0xbfbf55[4];
            _0x180ecb = _0xbfbf55[5];
            _0xbb1bca = _0xbfbf55[6];
            _0xefdc8d = _0xbfbf55[7];

            for (var _0x45b7ae = 0; _0x45b7ae < 64; _0x45b7ae++) {
                if (_0x45b7ae < 16) {
                    _0x2d2bb0[_0x45b7ae] = _0x43b8ad[_0x45b7ae + _0x446def];
                } else {
                    _0x2d2bb0[_0x45b7ae] = _0x53e045(_0x53e045(_0x53e045(_0x386082(_0x2d2bb0[_0x45b7ae - 2]), _0x2d2bb0[_0x45b7ae - 7]), _0x2f56a7(_0x2d2bb0[_0x45b7ae - 15])), _0x2d2bb0[_0x45b7ae - 16]);
                }

                _0x4ae5aa = _0x53e045(_0x53e045(_0x53e045(_0x53e045(_0xefdc8d, _0x50f015(_0x44e785)), _0x44e67a(_0x44e785, _0x180ecb, _0xbb1bca)), _0x1db5f7[_0x45b7ae]), _0x2d2bb0[_0x45b7ae]);
                _0x308d87 = _0x53e045(_0x42da28(_0x4572df), _0x435e3a(_0x4572df, _0x2c60c5, _0x38bc01));
                _0xefdc8d = _0xbb1bca;
                _0xbb1bca = _0x180ecb;
                _0x180ecb = _0x44e785;
                _0x44e785 = _0x53e045(_0x4771be, _0x4ae5aa);
                _0x4771be = _0x38bc01;
                _0x38bc01 = _0x2c60c5;
                _0x2c60c5 = _0x4572df;
                _0x4572df = _0x53e045(_0x4ae5aa, _0x308d87);
            }

            _0xbfbf55[0] = _0x53e045(_0x4572df, _0xbfbf55[0]);
            _0xbfbf55[1] = _0x53e045(_0x2c60c5, _0xbfbf55[1]);
            _0xbfbf55[2] = _0x53e045(_0x38bc01, _0xbfbf55[2]);
            _0xbfbf55[3] = _0x53e045(_0x4771be, _0xbfbf55[3]);
            _0xbfbf55[4] = _0x53e045(_0x44e785, _0xbfbf55[4]);
            _0xbfbf55[5] = _0x53e045(_0x180ecb, _0xbfbf55[5]);
            _0xbfbf55[6] = _0x53e045(_0xbb1bca, _0xbfbf55[6]);
            _0xbfbf55[7] = _0x53e045(_0xefdc8d, _0xbfbf55[7]);
        }

        return _0xbfbf55;
    }

    function _0x2617fc(_0x460311) {
        var _0x4ccf9f = Array();

        var _0xb139f7 = 255;

        for (var _0x13a8d8 = 0; _0x13a8d8 < _0x460311["length"] * _0x4051d8; _0x13a8d8 += _0x4051d8) {
            _0x4ccf9f[_0x13a8d8 >> 5] |= (_0x460311["charCodeAt"](_0x13a8d8 / _0x4051d8) & _0xb139f7) << 24 - _0x13a8d8 % 32;
        }

        return _0x4ccf9f;
    }

    function _0x2b62dc(_0x582b13) {
        var _0x4e3648 = new RegExp("\n", "g");

        _0x582b13 = _0x582b13["replace"](_0x4e3648, "\n");
        var _0x133951 = "";

        for (var _0x5ddc9b = 0; _0x5ddc9b < _0x582b13["length"]; _0x5ddc9b++) {
            var _0x23f26b = _0x582b13["charCodeAt"](_0x5ddc9b);

            if (_0x23f26b < 128) {
                _0x133951 += String["fromCharCode"](_0x23f26b);
            } else {
                if (_0x23f26b > 127 && _0x23f26b < 2048) {
                    _0x133951 += String["fromCharCode"](_0x23f26b >> 6 | 192);
                    _0x133951 += String["fromCharCode"](_0x23f26b & 63 | 128);
                } else {
                    _0x133951 += String["fromCharCode"](_0x23f26b >> 12 | 224);
                    _0x133951 += String["fromCharCode"](_0x23f26b >> 6 & 63 | 128);
                    _0x133951 += String["fromCharCode"](_0x23f26b & 63 | 128);
                }
            }
        }

        return _0x133951;
    }

    function _0x1a8950(_0x2ad5d4) {
        var _0x2de41e = "0123456789abcdef";
        var _0x1ac9c2 = "";

        for (var _0x3bf2b6 = 0; _0x3bf2b6 < _0x2ad5d4["length"] * 4; _0x3bf2b6++) {
            _0x1ac9c2 += _0x2de41e["charAt"](_0x2ad5d4[_0x3bf2b6 >> 2] >> (3 - _0x3bf2b6 % 4) * 8 + 4 & 15) + _0x2de41e["charAt"](_0x2ad5d4[_0x3bf2b6 >> 2] >> (3 - _0x3bf2b6 % 4) * 8 & 15);
        }

        return _0x1ac9c2;
    }

    _0x491566 = _0x2b62dc(_0x491566);
    return _0x1a8950(_0x35ce13(_0x2617fc(_0x491566), _0x491566["length"] * _0x4051d8));
}

function go(_0x57755d) {
    function _0x551fd6() {
        var _0x2c6487 = window["navigator"]["userAgent"],
        _0x3cfc15 = ["Phantom"];

        for (var _0x1ae8a2 = 0; _0x1ae8a2 < _0x3cfc15["length"]; _0x1ae8a2++) {
            if (_0x2c6487["indexOf"](_0x3cfc15[_0x1ae8a2]) != -1) {
                return true;
            }
        }

        if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
            return true;
        }
    }

    if (_0x551fd6()) {
        return;
    }

    var _0x1d5f37 = new Date();

    function _0x1f6a0b(_0x55d197, _0x56cf3f) {
        var _0x1cab67 = _0x57755d["chars"]["length"];

        for (var _0x3b5abc = 0; _0x3b5abc < _0x1cab67; _0x3b5abc++) {
            for (var _0x5e9288 = 0; _0x5e9288 < _0x1cab67; _0x5e9288++) {
                var _0x599882 = _0x56cf3f[0] + _0x57755d["chars"]["substr"](_0x3b5abc, 1) + _0x57755d["chars"]["substr"](_0x5e9288, 1) + _0x56cf3f[1];

                if (hash(_0x599882) == _0x55d197) {
                    return [_0x599882, new Date() - _0x1d5f37];
                }
            }
        }
    }

    var _0x5a8569 = _0x1f6a0b(_0x57755d["ct"], _0x57755d["bts"]);

    if (_0x5a8569) {
        var _0x1ebf90;

        if (_0x57755d["wt"]) {
            _0x1ebf90 = parseInt(_0x57755d["wt"]) > _0x5a8569[1] ? parseInt(_0x57755d["wt"]) - _0x5a8569[1] : 500;
        } else {
            _0x1ebf90 = 1500;
        }

        function c() {
            a = _0x57755d["tn"] + "=" + _0x5a8569[0] + ";Max-age=" + _0x57755d["vt"] + "; path = /";
			//console.log(a)

            return a
        };
		cookie=c()
    } else {
        alert("\u8BF7\u6C42\u9A8C\u8BC1\u5931\u8D25");
    }
}






