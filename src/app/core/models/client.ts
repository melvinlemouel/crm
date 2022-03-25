import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state = StateClient.ACTIVE;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
