import * as BABYLON from 'babylonjs';
export declare class TeleopScene {
    private aDown;
    private bDown;
    private xDown;
    private yDown;
    private leftPuckDown;
    private left_puck;
    private video_container;
    private updateTimer;
    private xAddPos;
    private yAddPos;
    private leftJoystick;
    private virtualJoystickTexture;
    private joystickGUI;
    constructor();
    createScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): Promise<BABYLON.Scene>;
}
