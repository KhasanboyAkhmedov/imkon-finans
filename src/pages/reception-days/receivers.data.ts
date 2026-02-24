export interface ReceiverContent {
    name: string;
    role: string;
    day: string;
    _id: string;
}

export interface Receiver {
    _id: string;
    uzb: ReceiverContent;
    rus: ReceiverContent;
    eng: ReceiverContent;
    time: string;
    createdAt: string;
    updatedAt: string;
}

