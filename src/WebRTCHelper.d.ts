/// <reference types="node" />
import EventEmitter from "events";
import { ROSConnection, Message } from "@polyhobbyist/ros2ts";
export type WebRTCMessage = Message & {
    id: string;
    type: number;
    raw_message: string;
};
export type RemoteStreamConfig = {
    video: {
        id: string;
        source: string;
    };
    audio: {
        id: string;
        source: string;
    };
};
export declare class WebRTCConnection extends EventEmitter {
    private rosConnection;
    private peerConnection;
    private dataChannel;
    private peerConnectionConfig;
    private signalingPub;
    private signalingSub;
    private actions;
    private addStreamCallbacks;
    private lastConfigureActionPromise;
    constructor(rosConnection: ROSConnection, peerConnectionConfig: RTCConfiguration);
    connect(): Promise<void>;
    disconnect(): void;
    answer(): Promise<void>;
    addRemoteStream(config: RemoteStreamConfig): Promise<void>;
    removeRemoteStream(streamId: string): void;
    sendConfigure(): void;
}
