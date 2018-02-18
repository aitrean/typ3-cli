export interface IAuction {
releaseDeed: ABIFuncSend<{_hash: bytes32}>
getAllowedTime: ABIFuncCall<{_hash: bytes32},{timestamp: uint256}>
invalidateName: ABIFuncSend<{unhashedName: string}>
shaBid: ABIFuncCall<{hash: bytes32, owner: address, value: uint256, salt: bytes32},{sealedBid: bytes32}>
cancelBid: ABIFuncSend<{bidder: address, seal: bytes32}>
entries: ABIFuncCall<{_hash: bytes32},{0: uint8, 1: address, 2: uint256, 3: uint256, 4: uint256}>
ens: ABIFuncParamlessCall<{0: address}>
unsealBid: ABIFuncSend<{_hash: bytes32, _value: uint256, _salt: bytes32}>
transferRegistrars: ABIFuncSend<{_hash: bytes32}>
sealedBids: ABIFuncCall<{0: address, 1: bytes32},{0: address}>
state: ABIFuncCall<{_hash: bytes32},{0: uint8}>
transfer: ABIFuncSend<{_hash: bytes32, newOwner: address}>
isAllowed: ABIFuncCall<{_hash: bytes32, _timestamp: uint256},{allowed: bool}>
finalizeAuction: ABIFuncSend<{_hash: bytes32}>
registryStarted: ABIFuncParamlessCall<{0: uint256}>
launchLength: ABIFuncParamlessCall<{0: uint32}>
newBid: ABIFuncSend<{sealedBid: bytes32}>
eraseNode: ABIFuncSend<{labels: bytes32[]}>
startAuctions: ABIFuncSend<{_hashes: bytes32[]}>
acceptRegistrarTransfer: ABIFuncSend<{hash: bytes32, deed: address, registrationDate: uint256}>
startAuction: ABIFuncSend<{_hash: bytes32}>
rootNode: ABIFuncParamlessCall<{0: bytes32}>
startAuctionsAndBid: ABIFuncSend<{hashes: bytes32[], sealedBid: bytes32}>
}
export interface IAuctionConnected {
releaseDeed: ABIFuncSendConnected<{_hash: bytes32}>
getAllowedTime: ABIFuncCallConnected<{_hash: bytes32},{timestamp: uint256}>
invalidateName: ABIFuncSendConnected<{unhashedName: string}>
shaBid: ABIFuncCallConnected<{hash: bytes32, owner: address, value: uint256, salt: bytes32},{sealedBid: bytes32}>
cancelBid: ABIFuncSendConnected<{bidder: address, seal: bytes32}>
entries: ABIFuncCallConnected<{_hash: bytes32},{0: uint8, 1: address, 2: uint256, 3: uint256, 4: uint256}>
ens: ABIFuncParamlessCallConnected<{0: address}>
unsealBid: ABIFuncSendConnected<{_hash: bytes32, _value: uint256, _salt: bytes32}>
transferRegistrars: ABIFuncSendConnected<{_hash: bytes32}>
sealedBids: ABIFuncCallConnected<{0: address, 1: bytes32},{0: address}>
state: ABIFuncCallConnected<{_hash: bytes32},{0: uint8}>
transfer: ABIFuncSendConnected<{_hash: bytes32, newOwner: address}>
isAllowed: ABIFuncCallConnected<{_hash: bytes32, _timestamp: uint256},{allowed: bool}>
finalizeAuction: ABIFuncSendConnected<{_hash: bytes32}>
registryStarted: ABIFuncParamlessCallConnected<{0: uint256}>
launchLength: ABIFuncParamlessCallConnected<{0: uint32}>
newBid: ABIFuncSendConnected<{sealedBid: bytes32}>
eraseNode: ABIFuncSendConnected<{labels: bytes32[]}>
startAuctions: ABIFuncSendConnected<{_hashes: bytes32[]}>
acceptRegistrarTransfer: ABIFuncSendConnected<{hash: bytes32, deed: address, registrationDate: uint256}>
startAuction: ABIFuncSendConnected<{_hash: bytes32}>
rootNode: ABIFuncParamlessCallConnected<{0: bytes32}>
startAuctionsAndBid: ABIFuncSendConnected<{hashes: bytes32[], sealedBid: bytes32}>
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

type bytes32 = any
type uint256 = any
type address = any
type uint8 = any
type bool = boolean
type uint32 = any

