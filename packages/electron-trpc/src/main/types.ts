import type { IpcMainInvokeEvent } from 'electron';

interface IpcMainInvokeEventCredentials extends IpcMainInvokeEvent {
  credentials?: unknown;
}

export interface CreateContextOptions {
  event: IpcMainInvokeEventCredentials;
}
