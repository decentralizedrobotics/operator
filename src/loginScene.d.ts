/// <reference types="node" />
import EventEmitter from "events";
import * as BABYLON from 'babylonjs';
import type { PeerId } from '@libp2p/interface/peer-id';
export declare class LoginScene extends EventEmitter {
    private loginTexture;
    private loginGUI;
    private id;
    private pub;
    private priv;
    'authenticated': (u: PeerId) => void;
    createScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): Promise<BABYLON.Scene>;
}
