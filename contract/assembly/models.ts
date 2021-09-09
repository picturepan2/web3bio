import { context, PersistentMap } from "near-sdk-as";

const PROTOCOL_VERSION = "4";

@nearBindgen
export class Records {
  owner: string;
  expiration: u32;
  
  constructor(
    public email: string,
    public settings: string,
    public premium: boolean,
    public name: string,
    public avatar: string,
    public description: string,
    public website: string,
    public location: string,
    public social: Social = new Social(),
    public crypto: Crypto = new Crypto(),
  ) {
      this.owner = context.sender;
      this.expiration = 233
    }
}

@nearBindgen
export class Social {
  constructor(
    public twitter: string = "",
    public facebook: string = "",
    public linkedin: string = "",
    public github: string = "",
    public telegram: string = "",
    public instagram: string = "",
    public youtube: string = "",
    public discord: string = "",
    public patreon: string = "",
    public paypal: string = ""
  ) {}
}

@nearBindgen
export class Crypto {
  constructor(
    public btc: string = "",
    public eth: string = "",
    public dot: string = "",
    public near: string = "",
    public sol: string = "",
    public bsc: string = "",
    public eos: string = "",
    public bch: string = "",
    public ltc: string = "",
    public heco: string = ""
  ) {}
}

export const recordsByOwner = new PersistentMap<string, Records>("Records");