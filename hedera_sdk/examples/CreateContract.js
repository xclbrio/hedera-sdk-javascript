// Connection HederaSDK library for further use
const HederaSDK = require("../HederaSDK.js");

// Creating an instance of the HederaSDK class
let hederaHashgraph = new HederaSDK("_address_", "_port_");

// Call method and create account
hederaHashgraph.createContract("_operator_value_", "_private_key_", "_file_id_", "_gas_");