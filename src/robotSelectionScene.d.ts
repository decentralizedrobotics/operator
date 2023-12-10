/// <reference types="node" />
import EventEmitter from "events";
import * as BABYLON from 'babylonjs';
export declare class RobotSelectionScene extends EventEmitter {
    private robotSelectionTexture;
    private robotSelectionGUI;
    private robotList;
    private robots;
    'connect': (robotId: string) => void;
    createScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): Promise<BABYLON.Scene>;
    private findSelectedRobot;
    private populateRobotList;
}
