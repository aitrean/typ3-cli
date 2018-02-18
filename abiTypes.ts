export interface IAuction {
releaseDeed: ABIFuncSend<{_hash: string}>;
getAllowedTime: ABIFuncCall<{_hash: string},{timestamp: number}>;
invalidateName: ABIFuncSend<{unhashedName: string}>;
shaBid: ABIFuncCall<{hash: string,owner: string,value: number,salt: string},{sealedBid: string}>;
cancelBid: ABIFuncSend<{bidder: string,seal: string}>;
entries: ABIFuncCall<{_hash: string},{0: number,1: string,2: number,3: number,4: number}>;
ens: ABIFuncCall<{0: string}>;
unsealBid: ABIFuncSend<{_hash: string,_value: number,_salt: string}>;
transferRegistrars: ABIFuncSend<{_hash: string}>;
sealedBids: ABIFuncCall<{0: string,1: string},{0: string}>;
state: ABIFuncCall<{_hash: string},{0: number}>;
transfer: ABIFuncSend<{_hash: string,newOwner: string}>;
isAllowed: ABIFuncCall<{_hash: string,_timestamp: number},{allowed: boolean}>;
finalizeAuction: ABIFuncSend<{_hash: string}>;
registryStarted: ABIFuncCall<{0: number}>;
launchLength: ABIFuncCall<{0: number}>;
newBid: ABIFuncSend<{sealedBid: string}>;
eraseNode: ABIFuncSend<{labels: string[]}>;
startAuctions: ABIFuncSend<{_hashes: string[]}>;
acceptRegistrarTransfer: ABIFuncSend<{hash: string,deed: string,registrationDate: number}>;
startAuction: ABIFuncSend<{_hash: string}>;
rootNode: ABIFuncCall<{0: string}>;
startAuctionsAndBid: ABIFuncSend<{hashes: string[],sealedBid: string}>;
auction: ABIFuncSend<{_ens: string,_rootNode: string,_startDate: number}>;
AuctionStarted: ABIFuncSend<{hash: string,registrationDate: number}>;
NewBid: ABIFuncSend<{hash: string,bidder: string,deposit: number}>;
BidRevealed: ABIFuncSend<{hash: string,owner: string,value: number,status: number}>;
HashRegistered: ABIFuncSend<{hash: string,owner: string,value: number,registrationDate: number}>;
HashReleased: ABIFuncSend<{hash: string,value: number}>;
HashInvalidated: ABIFuncSend<{hash: string,name: string,value: number,registrationDate: number}>;
}
export interface IAuctionConnected {
releaseDeed: ABIFuncSend<{_hash: string}>;
getAllowedTime: ABIFuncCall<{_hash: string},{timestamp: number}>;
invalidateName: ABIFuncSend<{unhashedName: string}>;
shaBid: ABIFuncCall<{hash: string,owner: string,value: number,salt: string},{sealedBid: string}>;
cancelBid: ABIFuncSend<{bidder: string,seal: string}>;
entries: ABIFuncCall<{_hash: string},{0: number,1: string,2: number,3: number,4: number}>;
ens: ABIFuncCall<{0: string}>;
unsealBid: ABIFuncSend<{_hash: string,_value: number,_salt: string}>;
transferRegistrars: ABIFuncSend<{_hash: string}>;
sealedBids: ABIFuncCall<{0: string,1: string},{0: string}>;
state: ABIFuncCall<{_hash: string},{0: number}>;
transfer: ABIFuncSend<{_hash: string,newOwner: string}>;
isAllowed: ABIFuncCall<{_hash: string,_timestamp: number},{allowed: boolean}>;
finalizeAuction: ABIFuncSend<{_hash: string}>;
registryStarted: ABIFuncCall<{0: number}>;
launchLength: ABIFuncCall<{0: number}>;
newBid: ABIFuncSend<{sealedBid: string}>;
eraseNode: ABIFuncSend<{labels: string[]}>;
startAuctions: ABIFuncSend<{_hashes: string[]}>;
acceptRegistrarTransfer: ABIFuncSend<{hash: string,deed: string,registrationDate: number}>;
startAuction: ABIFuncSend<{_hash: string}>;
rootNode: ABIFuncCall<{0: string}>;
startAuctionsAndBid: ABIFuncSend<{hashes: string[],sealedBid: string}>;
auction: ABIFuncSend<{_ens: string,_rootNode: string,_startDate: number}>;
AuctionStarted: ABIFuncSend<{hash: string,registrationDate: number}>;
NewBid: ABIFuncSend<{hash: string,bidder: string,deposit: number}>;
BidRevealed: ABIFuncSend<{hash: string,owner: string,value: number,status: number}>;
HashRegistered: ABIFuncSend<{hash: string,owner: string,value: number,registrationDate: number}>;
HashReleased: ABIFuncSend<{hash: string,value: number}>;
HashInvalidated: ABIFuncSend<{hash: string,name: string,value: number,registrationDate: number}>;
}

interface ABIFuncParamlessCall<T = void> {
  encodeArguments(): string;
  decodeArguments(str: string): any;
  decodeReturnValue(argStr: string): T;
}

interface ABIFuncCall<T, K = void> {
  encodeArguments(x: T): string;
  decodeArguments(str: string): T;
  decodeReturnValue(argStr: string): K;
}

interface ABIFuncParamlessSend {
  encodeArguments(): string;
  decodeArguments(str: string): any;
}

interface ABIFuncSend<T> {
  encodeArguments(x: T): string;
  decodeArguments(str: string): T;
}
type ABIFuncCallConnected<T, K = void> = (x: T, txObj?: ICallTxObj) => Promise<K>;
type ABIFuncParamlessCallConnected<T = void> = (txObj?: ICallTxObj) => Promise<T>;
type ABIFuncSendConnected<T> = (x: T, txObj?: ITransactionObj) => Promise<string>;
type ABIFuncParamlessSendConnected = (txObj?: ITransactionObj) => Promise<string>;

interface ITransactionObj {
  from?: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  value?: string;
  data?: string;
  nonce?: string;
}

interface ICallTxObj {
  from?: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  value?: string;
  data?: string;
}

