import { EventEmitter } from 'events';

import Binance from 'binance-api-node'

const client = Binance();


export const getMarketData = symbol => {
    return client.book({ symbol: symbol, limit: 100 })
};


class marketDataBySocket extends EventEmitter {
    closeConnection = false;

    subscribe(symbol) {
        this.closeConnection = client.ws.depth(symbol, depth => {
            this.emit('new-data', depth)
        })
    }

    unSubscribe() {
        if (this.closeConnection) {
            this.closeConnection();
        }
        this.closeConnection = false;
    }

}

export const marketDataSubscription = new marketDataBySocket();
