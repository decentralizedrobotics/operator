import * as BABYLON from 'babylonjs';
import type { ROSConnection } from '@polyhobbyist/ros2ts';
export declare class RemoteControlScene {
    private aDown;
    private bDown;
    private xDown;
    private yDown;
    private leftPuckDown;
    private left_puck;
    private video_container;
    private updateTimer;
    private connection;
    private joyPub;
    private imageSub;
    private xAddPos;
    private yAddPos;
    private leftJoystick;
    private virtualJoystickTexture;
    private joystickGUI;
    constructor();
    enter(): void;
    leave(): void;
    setCurrentRobotConnection(connection: ROSConnection): void;
    createScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): Promise<BABYLON.Scene>;
}
