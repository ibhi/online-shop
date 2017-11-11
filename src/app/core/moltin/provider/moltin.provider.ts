import { InjectionToken } from '@angular/core';
import { gateway as MoltinGateway } from '@moltin/sdk';

export const moltinToken = new InjectionToken('MoltinGateway');

const moltinFactory = () => MoltinGateway({ client_id: 'kCvM6olqKUau413htESTobEBBCr2CA6GQkWuOaMKSA' });

export const moltinProvider = {
    provide: moltinToken,
    useFactory: moltinFactory
};
