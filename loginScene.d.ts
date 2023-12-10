/// <reference types="node" resolution-mode="require"/>
import EventEmitter from "events";
import * as BABYLON from 'babylonjs';
import type { User } from './userModel.js';
export declare class LoginScene extends EventEmitter {
    private loginTexture;
    private loginGUI;
    private id;
    private pub;
    private priv;
    private robot;
    'connect': (robotId: string, u: User) => void;
    createScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): Promise<BABYLON.Scene>;
}
