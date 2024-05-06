"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const textField_1 = __importDefault(require("../textField"));
const ASPasswordTextField = (props) => {
    const {} = props;
    return (react_1.default.createElement(textField_1.default, Object.assign({ secureTextEntry: true }, props)));
};
exports.default = ASPasswordTextField;
