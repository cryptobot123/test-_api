(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gasProd = exports.feeProd = exports.walletProd = exports.peatioProd = void 0;
const tslib_1 = __webpack_require__(0);
exports.peatioProd = tslib_1.__importStar(__webpack_require__(27));
exports.walletProd = tslib_1.__importStar(__webpack_require__(31));
exports.feeProd = tslib_1.__importStar(__webpack_require__(33));
exports.gasProd = tslib_1.__importStar(__webpack_require__(37));
tslib_1.__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpSequelize = void 0;
const shared_1 = __webpack_require__(2);
const sequelize_1 = __webpack_require__(1);
const isDev = "production" === 'development';
const setUpSequelize = (options = {}) => {
    const sequelize = new sequelize_1.Sequelize(Object.assign({ host: shared_1.mysqlConfig.hostMysql, port: +shared_1.mysqlConfig.portMysql, username: shared_1.mysqlConfig.userMysql, password: shared_1.mysqlConfig.passMysql, dialect: 'mysql', logging: false }, options));
    return sequelize;
};
exports.setUpSequelize = setUpSequelize;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildCurrenciesModel = void 0;
const sequelize_1 = __webpack_require__(1);
class ChildCurrenciesModel extends sequelize_1.Model {
    static initModel(sequelize) {
        ChildCurrenciesModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            child_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            parent_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'child_currencies',
            timestamps: false,
        });
        return ChildCurrenciesModel;
    }
}
exports.ChildCurrenciesModel = ChildCurrenciesModel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EthFeeModel = void 0;
const sequelize_1 = __webpack_require__(1);
class EthFeeModel extends sequelize_1.Model {
    static initModel(sequelize) {
        EthFeeModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            fee: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: true,
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
        }, {
            tableName: 'eth_fee',
            sequelize,
            timestamps: false,
        });
        return EthFeeModel;
    }
}
exports.EthFeeModel = EthFeeModel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GasPriceModel = void 0;
const sequelize_1 = __webpack_require__(1);
class GasPriceModel extends sequelize_1.Model {
    static initModel(sequelize) {
        GasPriceModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
        }, {
            tableName: 'gas_price',
            sequelize,
            timestamps: false,
        });
        return GasPriceModel;
    }
}
exports.GasPriceModel = GasPriceModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GasCurrencyModel = void 0;
const sequelize_1 = __webpack_require__(1);
class GasCurrencyModel extends sequelize_1.Model {
    static initModel(sequelize) {
        GasCurrencyModel.init({
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            smart_contract_address: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            gas_limit: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
            },
            gas_price: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
            },
        }, {
            tableName: 'currency',
            sequelize,
            timestamps: false,
        });
        return GasCurrencyModel;
    }
}
exports.GasCurrencyModel = GasCurrencyModel;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GasCurrencyOptionModel = void 0;
const sequelize_1 = __webpack_require__(1);
class GasCurrencyOptionModel extends sequelize_1.Model {
    static initModel(sequelize) {
        GasCurrencyOptionModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            options: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
        }, {
            tableName: 'currency_option',
            sequelize,
            timestamps: false,
        });
        return GasCurrencyOptionModel;
    }
}
exports.GasCurrencyOptionModel = GasCurrencyOptionModel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MinCollectionModel = void 0;
const sequelize_1 = __webpack_require__(1);
class MinCollectionModel extends sequelize_1.Model {
    static initModel(sequelize) {
        MinCollectionModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            from: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            to: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            min_collection_amount: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
                defaultValue: '0.000000000000000000',
            },
        }, {
            tableName: 'min_collection',
            sequelize,
            timestamps: false,
        });
        return MinCollectionModel;
    }
}
exports.MinCollectionModel = MinCollectionModel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("number-precision");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
const dotenv_1 = tslib_1.__importDefault(__webpack_require__(19));
dotenv_1.default.config();
const cors_1 = tslib_1.__importDefault(__webpack_require__(20));
const express_1 = tslib_1.__importDefault(__webpack_require__(3));
const api_1 = tslib_1.__importDefault(__webpack_require__(21));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
app.use('/api', api_1.default);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
// import * as ConvertRouter from '@zozitech/convert';
// import * as VoteRouter from '@zozitech/vote';
const express_1 = tslib_1.__importDefault(__webpack_require__(3));
const private_1 = tslib_1.__importDefault(__webpack_require__(22));
const public_1 = tslib_1.__importDefault(__webpack_require__(62));
const middlewares_1 = __webpack_require__(63);
const isDev = "production" === 'development';
const router = express_1.default.Router();
router.use('/public', public_1.default);
router.use('/private', isDev ? middlewares_1.fakeBarongJwtMiddleware : middlewares_1.barongJwtMiddleware, private_1.default);
exports.default = router;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const express = tslib_1.__importStar(__webpack_require__(3));
const WalletRouter = tslib_1.__importStar(__webpack_require__(8));
const privateRouter = express.Router();
privateRouter.use('/wallet', WalletRouter.privateRouter);
exports.default = privateRouter;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const tslib_1 = __webpack_require__(0);
const express = tslib_1.__importStar(__webpack_require__(3));
const wallet_1 = tslib_1.__importDefault(__webpack_require__(25));
const withdraw_1 = tslib_1.__importDefault(__webpack_require__(59));
const ethFee_1 = tslib_1.__importDefault(__webpack_require__(60));
const privateRouter = express.Router();
exports.privateRouter = privateRouter;
privateRouter.post('/transfer/create', wallet_1.default.transferBalance);
privateRouter.post('/transfer/update', wallet_1.default.updateTranferWithdrawID);
privateRouter.post('/eth/withdraw', withdraw_1.default.withdrawByEth);
privateRouter.get('/child/all', wallet_1.default.fetchAllChilds);
privateRouter.get('/child/one', wallet_1.default.fetchChildsOfCurrency);
privateRouter.get('/fee/eth', ethFee_1.default.getETHFee);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const validateUserSession_1 = __webpack_require__(26);
const lodash_1 = __webpack_require__(7);
const shared_1 = __webpack_require__(2);
const sequelize_1 = __webpack_require__(4);
const helpers_1 = __webpack_require__(15);
const date_fns_1 = __webpack_require__(58);
class WalletController {
    fetchAllChilds(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const childCurrencies = yield sequelize_1.walletModel.childCurrencies.findAndCountAll();
                const currencies = [];
                for (let i = 0; i < childCurrencies.count; i++) {
                    const { parent_id, child_id } = childCurrencies.rows[i].toJSON();
                    const { blockchain_key } = (yield sequelize_1.peatioModel.currencies.findOne({
                        where: { id: child_id },
                    })) || {
                        blockchain_key: null,
                        deposit_enabled: 0,
                        withdrawal_enabled: 0,
                        type: 'coin',
                    };
                    currencies.push({
                        id: child_id,
                        parent_id: parent_id,
                        blockchain_key: blockchain_key,
                    });
                }
                return res.status(200).json(currencies);
            }
            catch (error) {
                const status = lodash_1.get(error, 'status', 500);
                return res.status(status).send({
                    error: error.message,
                });
            }
        });
    }
    fetchChildsOfCurrency(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { currency } = req.query;
                const childCurrencies = yield sequelize_1.walletModel.childCurrencies.findAndCountAll({
                    where: {
                        parent_id: lodash_1.toLower(String(currency)),
                    },
                });
                const currencies = [];
                for (let i = 0; i < childCurrencies.count; i++) {
                    const { parent_id, child_id } = childCurrencies.rows[i].toJSON();
                    const { blockchain_key, deposit_enabled, withdrawal_enabled, type, } = (yield sequelize_1.peatioModel.currencies.findOne({
                        where: { id: child_id },
                    })) || {
                        blockchain_key: null,
                        deposit_enabled: 0,
                        withdrawal_enabled: 0,
                        type: 'coin',
                    };
                    currencies.push({
                        id: child_id,
                        parent_id: parent_id,
                        blockchain_key: blockchain_key,
                        deposit_enabled: deposit_enabled,
                        withdrawal_enabled: withdrawal_enabled,
                        type: type,
                    });
                }
                return res.status(200).json(currencies);
            }
            catch (error) {
                const status = lodash_1.get(error, 'status', 500);
                return res.status(status).send({
                    error: error.message,
                });
            }
        });
    }
    transferBalance(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`===[TRANSFER BALANCE] ${date_fns_1.format(new Date(), 'dd/MM/yyyy hh:mm:ss')}===`);
            try {
                const { uid } = req.session;
                const { currency, amount, fee } = req.body;
                const { id: member_id } = yield sequelize_1.peatioModel.members.findOne({
                    where: {
                        uid: uid,
                    },
                });
                console.log(`uid=${uid} currency=${currency} amount=${amount} fee=${fee} `);
                // validate member_id
                if (!member_id) {
                    throw new shared_1.ErrorCustom(403, 'User is not exist');
                }
                if (!currency) {
                    throw new shared_1.ErrorCustom(403, 'Currency must not be empty');
                }
                if (!amount) {
                    throw new shared_1.ErrorCustom(403, 'Withdraw amount must not be empty');
                }
                if (!fee) {
                    throw new shared_1.ErrorCustom(403, 'Fee must not be empty');
                }
                const { child_id: childCurrency, parent_id: parentCurrency, } = (yield sequelize_1.walletModel.childCurrencies.findOne({
                    where: { child_id: lodash_1.toLower(currency) },
                })) || { id: undefined, child_id: undefined, parent_id: undefined };
                if (!parentCurrency) {
                    return res.status(200).json({ id: -1 });
                }
                // DO: GET balance (child & parent)
                const OChildBalance = yield helpers_1.getBalance(member_id, childCurrency);
                const OParentBalance = yield helpers_1.getBalance(member_id, parentCurrency);
                if (!OChildBalance) {
                    yield helpers_1.generatePeatioAccount(member_id, childCurrency);
                }
                if (!OParentBalance) {
                    yield helpers_1.generatePeatioAccount(member_id, parentCurrency);
                }
                if (lodash_1.toNumber(OChildBalance) <= 0) {
                    throw new shared_1.ErrorCustom(403, `Having ${lodash_1.toUpper(childCurrency)} balance less than 0`);
                }
                if (lodash_1.toNumber(OParentBalance) <= 0) {
                    throw new shared_1.ErrorCustom(403, `Having ${lodash_1.toUpper(parentCurrency)} balance less than 0`);
                }
                if (lodash_1.toNumber(OParentBalance) < lodash_1.toNumber(amount)) {
                    throw new shared_1.ErrorCustom(403, `Insufficient ${lodash_1.toUpper(parentCurrency)} balance`);
                }
                // DO: Substract parent balance
                yield sequelize_1.peatioModel.accounts.increment({
                    balance: -lodash_1.toNumber(amount),
                }, {
                    where: {
                        member_id: member_id,
                        currency_id: parentCurrency,
                    },
                });
                // DO: Plus child balance
                yield sequelize_1.peatioModel.accounts.increment({
                    balance: +lodash_1.toNumber(amount),
                }, {
                    where: {
                        member_id: member_id,
                        currency_id: childCurrency,
                    },
                });
                // DO: GET new balance (child & parent)
                const NChildBalance = yield helpers_1.getBalance(member_id, childCurrency);
                const NParentBalance = yield helpers_1.getBalance(member_id, parentCurrency);
                // DO: Save history transfer money
                const { id } = yield sequelize_1.walletModel.transferTracking.create({
                    member_id: member_id,
                    withdraw_id: null,
                    currency_id: childCurrency,
                    amount: lodash_1.toNumber(amount),
                    parent_currency: lodash_1.toLower(parentCurrency),
                    child_currency: lodash_1.toLower(childCurrency),
                    parent_balance: lodash_1.toNumber(OParentBalance),
                    new_parent_balance: lodash_1.toNumber(NParentBalance),
                    child_balance: lodash_1.toNumber(OChildBalance),
                    new_child_balance: lodash_1.toNumber(NChildBalance),
                    completed_at: new Date(),
                    fee: lodash_1.toNumber(fee),
                });
                return res.status(200).json({ id: id });
            }
            catch (error) {
                console.error(error.message);
                const status = lodash_1.get(error, 'status', 500);
                return res.status(status).send({
                    error: error.message,
                });
            }
        });
    }
    updateTranferWithdrawID(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`===[UPDATE TRANSFER] ${date_fns_1.format(new Date(), 'dd/MM/yyyy hh:mm:ss')}===`);
            try {
                const { uid } = req.session || { uid: undefined };
                const { transfer_id, withdraw_id } = req.body || { transfer_id: undefined, withdraw_id: undefined };
                console.log(`uid=${uid} transferID=${transfer_id} withdrawID=${withdraw_id}`);
                if (lodash_1.toNumber(transfer_id) === -1) {
                    return res.status(200).json("Skip...");
                }
                if (lodash_1.isEmpty(uid)) {
                    throw new Error("Uid is missing");
                }
                if (!transfer_id) {
                    throw new Error("Transfer ID is missing");
                }
                if (!withdraw_id) {
                    throw new Error("Withdraw ID is missing");
                }
                yield validateUserSession_1.validateUid(uid);
                const { withdraw_id: withdrawID } = yield sequelize_1.walletModel.transferTracking.findOne({ where: { id: transfer_id } });
                if (!lodash_1.isEmpty(withdrawID)) {
                    return res.status(200).json("Skip... Withdraw ID is exist! Not be updated");
                }
                yield sequelize_1.walletModel.transferTracking.update({ withdraw_id: lodash_1.toNumber(withdraw_id) }, { where: { id: lodash_1.toNumber(transfer_id) } });
                return res.status(200).json("Update withdraw id for tranfer balance history");
            }
            catch (error) {
                console.error(error.message);
                const status = lodash_1.get(error, 'status', 500);
                return res.status(status).send({
                    error: error.message,
                });
            }
        });
    }
}
exports.default = new WalletController();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUid = void 0;
const tslib_1 = __webpack_require__(0);
const sequelize_1 = __webpack_require__(4);
const lodash_1 = __webpack_require__(7);
const validateUid = (uid) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const user = yield sequelize_1.peatioModel.members.findOne({ where: { uid: uid } });
    if (lodash_1.isEmpty(user)) {
        throw new Error("Uid is invalid");
    }
});
exports.validateUid = validateUid;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.currencies = exports.members = exports.accounts = void 0;
const accounts_1 = __webpack_require__(28);
Object.defineProperty(exports, "accounts", { enumerable: true, get: function () { return accounts_1.accounts; } });
const members_1 = __webpack_require__(29);
Object.defineProperty(exports, "members", { enumerable: true, get: function () { return members_1.members; } });
const currencies_1 = __webpack_require__(30);
Object.defineProperty(exports, "currencies", { enumerable: true, get: function () { return currencies_1.CurrenciesModel; } });
function initModels(sequelize) {
    accounts_1.accounts.initModel(sequelize);
    members_1.members.initModel(sequelize);
    currencies_1.CurrenciesModel.initModel(sequelize);
    return {
        accounts: accounts_1.accounts,
        members: members_1.members,
        currencies: currencies_1.CurrenciesModel,
    };
}
exports.initModels = initModels;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts = void 0;
const sequelize_1 = __webpack_require__(1);
class accounts extends sequelize_1.Model {
    static initModel(sequelize) {
        accounts.init({
            member_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            balance: {
                type: sequelize_1.DataTypes.DECIMAL(32, 16),
                allowNull: false,
                defaultValue: 0.0000000000000000
            },
            locked: {
                type: sequelize_1.DataTypes.DECIMAL(32, 16),
                allowNull: false,
                defaultValue: 0.0000000000000000
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'accounts',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "currency_id" },
                        { name: "member_id" },
                    ]
                },
                {
                    name: "index_accounts_on_currency_id_and_member_id",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "currency_id" },
                        { name: "member_id" },
                    ]
                },
                {
                    name: "index_accounts_on_member_id",
                    using: "BTREE",
                    fields: [
                        { name: "member_id" },
                    ]
                },
            ]
        });
        return accounts;
    }
}
exports.accounts = accounts;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const sequelize_1 = __webpack_require__(1);
class members extends sequelize_1.Model {
    static initModel(sequelize) {
        members.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            uid: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: false,
                unique: "index_members_on_uid"
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
                unique: "index_members_on_email"
            },
            level: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            role: {
                type: sequelize_1.DataTypes.STRING(16),
                allowNull: false
            },
            group: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: false,
                defaultValue: "vip-0"
            },
            state: {
                type: sequelize_1.DataTypes.STRING(16),
                allowNull: false
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                unique: "index_members_on_username"
            }
        }, {
            sequelize,
            tableName: 'members',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "index_members_on_email",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "email" },
                    ]
                },
                {
                    name: "index_members_on_uid",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "uid" },
                    ]
                },
                {
                    name: "index_members_on_username",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "username" },
                    ]
                },
            ]
        });
        return members;
    }
}
exports.members = members;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesModel = void 0;
const sequelize_1 = __webpack_require__(1);
class CurrenciesModel extends sequelize_1.Model {
    static initModel(sequelize) {
        CurrenciesModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            homepage: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            type: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                defaultValue: 'coin',
            },
            min_collection_amount: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
                defaultValue: '0.000000000000000000',
            },
            position: {
                type: sequelize_1.DataTypes.NUMBER,
                allowNull: false,
            },
            precision: {
                type: sequelize_1.DataTypes.NUMBER,
                allowNull: false,
                defaultValue: '8',
            },
            options: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            icon_url: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
                defaultValue: '1.0000000000000000',
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            deposit_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
            },
            withdrawal_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
            },
            blockchain_key: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
        }, {
            tableName: 'currencies',
            sequelize,
            timestamps: false,
            indexes: [
                {
                    name: 'index_currencies_on_position',
                    using: 'BTREE',
                    fields: [{ name: 'position' }],
                },
            ],
        });
        return CurrenciesModel;
    }
}
exports.CurrenciesModel = CurrenciesModel;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const childCurrencies_1 = __webpack_require__(9);
const transferTracking_1 = __webpack_require__(32);
function initModels(sequelize) {
    childCurrencies_1.ChildCurrenciesModel.initModel(sequelize);
    transferTracking_1.TransferTrackingModel.initModel(sequelize);
    return {
        childCurrencies: childCurrencies_1.ChildCurrenciesModel,
        transferTracking: transferTracking_1.TransferTrackingModel,
    };
}
exports.initModels = initModels;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferTrackingModel = void 0;
const sequelize_1 = __webpack_require__(1);
class TransferTrackingModel extends sequelize_1.Model {
    static initModel(sequelize) {
        TransferTrackingModel.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            withdraw_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            member_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
            },
            amount: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            parent_currency: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            child_currency: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            parent_balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            new_parent_balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            child_balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            new_child_balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            completed_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            fee: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'transfer_tracking',
            timestamps: false,
        });
        return TransferTrackingModel;
    }
}
exports.TransferTrackingModel = TransferTrackingModel;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const tslib_1 = __webpack_require__(0);
const ethFee_1 = __webpack_require__(10);
const history_1 = __webpack_require__(34);
const ethWithdraws_1 = __webpack_require__(35);
const failedWithdraws_1 = __webpack_require__(36);
tslib_1.__exportStar(__webpack_require__(10), exports);
function initModels(sequelize) {
    ethFee_1.EthFeeModel.initModel(sequelize);
    history_1.EthSubstractHistoryModel.initModel(sequelize);
    ethWithdraws_1.EthWithdrawHistoryModel.initModel(sequelize);
    failedWithdraws_1.FailedWithdrawsHistoryModel.initModel(sequelize);
    return {
        ethFee: ethFee_1.EthFeeModel,
        history: history_1.EthSubstractHistoryModel,
        ethWithdraws: ethWithdraws_1.EthWithdrawHistoryModel,
        failedWithdraws: failedWithdraws_1.FailedWithdrawsHistoryModel,
    };
}
exports.initModels = initModels;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EthSubstractHistoryModel = void 0;
const sequelize_1 = __webpack_require__(1);
class EthSubstractHistoryModel extends sequelize_1.Model {
    static initModel(sequelize) {
        EthSubstractHistoryModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            member_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
            },
            eth_fee: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
            },
            type: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: true,
            },
            new_balance: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: true,
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
        }, {
            tableName: 'history',
            sequelize,
            timestamps: false,
        });
        return EthSubstractHistoryModel;
    }
}
exports.EthSubstractHistoryModel = EthSubstractHistoryModel;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EthWithdrawHistoryModel = void 0;
const sequelize_1 = __webpack_require__(1);
class EthWithdrawHistoryModel extends sequelize_1.Model {
    static initModel(sequelize) {
        EthWithdrawHistoryModel.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            withdraw_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
            },
            member_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            eth_fee: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            state: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
        }, {
            tableName: 'eth_withdraws',
            sequelize,
            timestamps: false,
        });
        return EthWithdrawHistoryModel;
    }
}
exports.EthWithdrawHistoryModel = EthWithdrawHistoryModel;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedWithdrawsHistoryModel = void 0;
const sequelize_1 = __webpack_require__(1);
class FailedWithdrawsHistoryModel extends sequelize_1.Model {
    static initModel(sequelize) {
        FailedWithdrawsHistoryModel.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            withdraw_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
            },
            uid: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            eth_fee: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
            },
            currency_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
            },
            reason: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
        }, {
            tableName: 'failed',
            sequelize,
            timestamps: false,
        });
        return FailedWithdrawsHistoryModel;
    }
}
exports.FailedWithdrawsHistoryModel = FailedWithdrawsHistoryModel;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const tslib_1 = __webpack_require__(0);
const gasPrice_1 = __webpack_require__(11);
const currency_1 = __webpack_require__(12);
const currencyOptions_1 = __webpack_require__(13);
const minCollection_1 = __webpack_require__(14);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
function initModels(sequelize) {
    gasPrice_1.GasPriceModel.initModel(sequelize);
    currency_1.GasCurrencyModel.initModel(sequelize);
    currencyOptions_1.GasCurrencyOptionModel.initModel(sequelize);
    minCollection_1.MinCollectionModel.initModel(sequelize);
    return {
        gasPrice: gasPrice_1.GasPriceModel,
        currency: currency_1.GasCurrencyModel,
        currencyOption: currencyOptions_1.GasCurrencyOptionModel,
        minCollection: minCollection_1.MinCollectionModel,
    };
}
exports.initModels = initModels;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpSequelize = void 0;
const sequelize_1 = __webpack_require__(1);
const shared_1 = __webpack_require__(2);
const setUpSequelize = (options = {}) => {
    const sequelize = new sequelize_1.Sequelize(Object.assign({ host: shared_1.mysqlConfig.hostMysql, port: +shared_1.mysqlConfig.portMysql, username: shared_1.mysqlConfig.userMysql, password: shared_1.mysqlConfig.passMysql, dialect: 'mysql' }, options));
    return sequelize;
};
exports.setUpSequelize = setUpSequelize;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_VOTE_RATE = exports.DEFAULT_VOTE_CURRENCIE = void 0;
exports.DEFAULT_VOTE_CURRENCIE = 'cx';
exports.DEFAULT_VOTE_RATE = 10;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConfig = void 0;
exports.mysqlConfig = {
    hostMysql: process.env.DATABASE_HOST,
    portMysql: process.env.DATABASE_PORT,
    userMysql: process.env.DATABASE_USER,
    passMysql: process.env.DATABASE_PASS,
    peatioDbName: 'peatio_production',
    walletDbName: 'wallet_production',
    feeDbName: 'fee_production',
    gasDbName: 'gas_production',
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPropertyToBoolSequelize = void 0;
function convertPropertyToBoolSequelize(object, field) {
    field.forEach((fieldName) => {
        if (object[fieldName]) {
            object[fieldName] = Boolean(object[fieldName]);
        }
    });
    return object;
}
exports.convertPropertyToBoolSequelize = convertPropertyToBoolSequelize;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCustom = void 0;
class ErrorCustom extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.ErrorCustom = ErrorCustom;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = (page, limit) => {
    const offset = page && limit ? (+page - 1) * +limit : undefined;
    return {
        offset,
        limit: limit && Number(limit),
    };
};
exports.paginate = paginate;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.peatioModel = exports.peatioSequelize = void 0;
const tslib_1 = __webpack_require__(0);
const shared_1 = __webpack_require__(2);
const models_1 = __webpack_require__(5);
const initial_1 = __webpack_require__(6);
exports.peatioSequelize = initial_1.setUpSequelize({
    database: shared_1.mysqlConfig.peatioDbName,
});
exports.peatioModel = models_1.peatioProd.initModels(exports.peatioSequelize);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.peatioSequelize.authenticate();
        console.log('Connection has been established successfully. - peatio_production');
    }
    catch (error) {
        console.error('Unable to connect to the database - peatio_production:', error);
    }
}))();


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.walletModel = exports.walletSequelize = void 0;
const tslib_1 = __webpack_require__(0);
const shared_1 = __webpack_require__(2);
const models_1 = __webpack_require__(5);
const initial_1 = __webpack_require__(6);
exports.walletSequelize = initial_1.setUpSequelize({
    database: shared_1.mysqlConfig.walletDbName,
});
exports.walletModel = models_1.walletProd.initModels(exports.walletSequelize);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.walletSequelize.authenticate();
        console.log('Connection has been established successfully. - wallet_production');
        yield exports.walletSequelize.sync();
    }
    catch (error) {
        console.error('Unable to connect to the database - wallet_production:', error);
    }
}))();


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gasModel = exports.gasSequelize = void 0;
const tslib_1 = __webpack_require__(0);
const shared_1 = __webpack_require__(2);
const models_1 = __webpack_require__(5);
const initial_1 = __webpack_require__(6);
exports.gasSequelize = initial_1.setUpSequelize({
    database: shared_1.mysqlConfig.gasDbName,
});
exports.gasModel = models_1.gasProd.initModels(exports.gasSequelize);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.gasSequelize.authenticate();
        console.log('Connection has been established successfully. - gas_production');
        yield exports.gasSequelize.sync();
    }
    catch (error) {
        console.error('Unable to connect to the database - gas_production:', error);
    }
}))();


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.feeModel = exports.feeSequelize = void 0;
const tslib_1 = __webpack_require__(0);
const shared_1 = __webpack_require__(2);
const models_1 = __webpack_require__(5);
const initial_1 = __webpack_require__(6);
exports.feeSequelize = initial_1.setUpSequelize({
    database: shared_1.mysqlConfig.feeDbName,
});
exports.feeModel = models_1.feeProd.initModels(exports.feeSequelize);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.feeSequelize.authenticate();
        console.log('Connection has been established successfully. - fee_production');
        yield exports.feeSequelize.sync();
    }
    catch (error) {
        console.error('Unable to connect to the database - fee_production:', error);
    }
}))();


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const tslib_1 = __webpack_require__(0);
const initial_1 = __webpack_require__(6);
exports.sequelize = initial_1.setUpSequelize();
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Connection has been established successfully. - main mysql');
    }
    catch (error) {
        console.error('Unable to connect to the database - main mysql:', error);
    }
}))();


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = exports.generatePeatioAccount = void 0;
const tslib_1 = __webpack_require__(0);
const sequelize_1 = __webpack_require__(4);
const generatePeatioAccount = (member_id, currency_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield sequelize_1.peatioModel.accounts.create({
        member_id: member_id,
        currency_id: currency_id,
        balance: 0,
        locked: 0,
        created_at: new Date(),
        updated_at: new Date(),
    });
});
exports.generatePeatioAccount = generatePeatioAccount;
const getBalance = (member_id, currency_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { balance } = (yield sequelize_1.peatioModel.accounts.findOne({
        where: { member_id: member_id, currency_id: currency_id },
        attributes: ['member_id', 'currency_id', 'balance'],
    })) || { balance: undefined };
    return balance;
});
exports.getBalance = getBalance;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const lodash_1 = __webpack_require__(7);
const shared_1 = __webpack_require__(2);
const sequelize_1 = __webpack_require__(4);
const number_precision_1 = __webpack_require__(16);
const helpers_1 = __webpack_require__(15);
const DEFAULT_GAS_PRICE_TYPE = 3; // 1: low, 2: normal, 3: high
const GAS_NUMBER = 1000000000; // 10^9
const GAS_POINT = 0.008; // admin set number
class WithdrawController {
    withdrawByEth(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`==========[ETH WITHDRAW] ${new Date()}==========`);
            const { uid } = req.session || { uid: undefined };
            const { currency, withdraw_id, amount } = req.body || { currency: undefined, withdraw_id: undefined, amount: undefined };
            try {
                console.log(`uid=${uid} currency=${currency} transferID=${withdraw_id} withdrawID=${withdraw_id} amount=${amount}`);
                // DO: GET ETH FEE
                const { price } = (yield sequelize_1.gasModel.gasPrice.findOne({
                    where: {
                        id: DEFAULT_GAS_PRICE_TYPE,
                    },
                })) || { price: undefined };
                if (!price) {
                    throw new shared_1.ErrorCustom(403, 'ETH Fee is unavailable now');
                }
                const { gas_limit } = (yield sequelize_1.gasModel.currency.findOne({
                    where: {
                        currency_id: lodash_1.toLower(currency),
                    },
                    attributes: ['currency_id', 'gas_limit', 'gas_price'],
                })) || { gas_limit: undefined };
                if (!price) {
                    throw new shared_1.ErrorCustom(403, 'Gas limit is unavailable now');
                }
                const limit_price = number_precision_1.times(gas_limit, price);
                const divided = number_precision_1.divide(limit_price, GAS_NUMBER);
                const ETH_FEE = number_precision_1.plus(divided, GAS_POINT);
                try {
                    if (!currency) {
                        throw new shared_1.ErrorCustom(403, 'Currency must not be empty');
                    }
                    const { id: member_id } = yield sequelize_1.peatioModel.members.findOne({
                        where: {
                            uid: uid,
                        },
                    });
                    // validate member_id
                    if (!member_id) {
                        throw new shared_1.ErrorCustom(403, 'User is not exist');
                    }
                    // DO: GET ETH Balance
                    const ethBalance = yield helpers_1.getBalance(member_id, 'eth');
                    if (!ethBalance) {
                        yield helpers_1.generatePeatioAccount(member_id, 'eth');
                        throw new shared_1.ErrorCustom(403, 'ETH wallet is not exist. Generated a new eth wallet for user');
                    }
                    if (lodash_1.toNumber(ethBalance) < lodash_1.toNumber(ETH_FEE)) {
                        throw new shared_1.ErrorCustom(403, 'Insufficient ETH balance');
                    }
                    // DO: Substract ETH balance
                    yield sequelize_1.peatioModel.accounts.increment({
                        balance: -lodash_1.toNumber(ETH_FEE),
                    }, {
                        where: {
                            member_id: member_id,
                            currency_id: 'eth',
                        },
                    });
                    // DO: Save eth withdraws history
                    yield sequelize_1.feeModel.ethWithdraws.create({
                        withdraw_id: lodash_1.toNumber(withdraw_id),
                        member_id: member_id,
                        currency_id: currency,
                        amount: amount,
                        eth_fee: ETH_FEE,
                        state: 0,
                        created_at: new Date(),
                    });
                    // DO: Save substract history
                    const newEthBalance = yield helpers_1.getBalance(member_id, 'eth');
                    yield sequelize_1.feeModel.history.create({
                        member_id: member_id,
                        eth_fee: lodash_1.toNumber(ETH_FEE),
                        type: '-',
                        balance: ethBalance,
                        new_balance: newEthBalance,
                        created_at: new Date(),
                    });
                    return res.status(200).json('ETH Withdraw successfully');
                }
                catch (error) {
                    yield sequelize_1.feeModel.failedWithdraws.create({
                        uid: uid,
                        withdraw_id: withdraw_id,
                        amount: amount,
                        eth_fee: ETH_FEE,
                        currency_id: currency,
                        reason: JSON.stringify(error.message),
                        created_at: new Date(),
                    });
                    const status = lodash_1.get(error, 'status', 500);
                    return res.status(status).send({
                        error: error.message,
                    });
                }
            }
            catch (error) {
                console.error(error.message);
                yield sequelize_1.feeModel.failedWithdraws.create({
                    uid: uid,
                    withdraw_id: withdraw_id,
                    amount: amount,
                    eth_fee: 0,
                    currency_id: currency,
                    reason: JSON.stringify(error.message),
                    created_at: new Date(),
                });
                const status = lodash_1.get(error, 'status', 500);
                return res.status(status).send({
                    error: error.message,
                });
            }
        });
    }
}
exports.default = new WithdrawController();


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const sequelize_1 = __webpack_require__(4);
const number_precision_1 = __webpack_require__(16);
const DEFAULT_GAS_PRICE_TYPE = 3; // 1: low, 2: normal, 3: high
const GAS_NUMBER = 1000000000; // 10^9
const GAS_POINT = 0.008; // admin set number
class ETHFeeController {
    getETHFee(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currencies = yield sequelize_1.gasModel.currency.findAll();
            const { price: gasPrice } = yield sequelize_1.gasModel.gasPrice.findOne({
                where: { id: DEFAULT_GAS_PRICE_TYPE },
            });
            const fees = [];
            for (let i = 0; i < currencies.length; i++) {
                const currency = currencies[i];
                const limit_price = number_precision_1.times(currency.gas_limit, gasPrice);
                const divided = number_precision_1.divide(limit_price, GAS_NUMBER);
                const fee = number_precision_1.plus(divided, GAS_POINT);
                fees.push({
                    currency_id: currency.currency_id,
                    fee: fee,
                });
            }
            return res.status(200).json(fees);
        });
    }
}
exports.default = new ETHFeeController();


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const tslib_1 = __webpack_require__(0);
const express = tslib_1.__importStar(__webpack_require__(3));
const publicRouter = express.Router();
exports.publicRouter = publicRouter;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const WalletRouter = tslib_1.__importStar(__webpack_require__(8));
const express = tslib_1.__importStar(__webpack_require__(3));
const publicRouter = express.Router();
publicRouter.use('/wallet', WalletRouter.publicRouter);
exports.default = publicRouter;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.barongJwtMiddleware = void 0;
const tslib_1 = __webpack_require__(0);
const node_auth_barong_1 = tslib_1.__importDefault(__webpack_require__(65));
const BARONG_JWT_PUBLIC_KEY_ENV = process.env.BARONG_JWT_PUBLIC_KEY || 'xxx';
const barongJwtPublicKey = Buffer.from(BARONG_JWT_PUBLIC_KEY_ENV.trim(), 'base64').toString('utf-8');
exports.barongJwtMiddleware = node_auth_barong_1.default({ barongJwtPublicKey });


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("node-auth-barong");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeBarongJwtMiddleware = void 0;
const fakeBarongJwtMiddleware = (req, res, next) => {
    req.session = {
        email: 'lthanhdat10x@gmail.com',
        uid: 'ID92ECEA0C76',
        role: 'member',
        level: 1,
        otp: true,
        state: 'active',
        referral_uid: null,
        csrf_token: 'c53e838c0930a8aa3a2a',
        data: '{"language":"en"}',
        created_at: '2021-06-03T09:13:13Z',
        updated_at: '2021-06-03T09:14:56Z',
        labels: [
            {
                key: 'email',
                value: 'verified',
                scope: 'private',
                created_at: '2021-06-03T09:13:33Z',
                updated_at: '2021-06-03T09:13:33Z',
            },
            {
                key: 'otp',
                value: 'enabled',
                scope: 'private',
                created_at: '2021-06-03T09:14:56Z',
                updated_at: '2021-06-03T09:14:56Z',
            },
        ],
        phones: [],
        profiles: [],
        data_storages: [],
    };
    next();
};
exports.fakeBarongJwtMiddleware = fakeBarongJwtMiddleware;


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map