<template>
    <div>
        <Dropdown :options="options" :text="'Select'" :onSelect="handleSelect"/>
        <!--<button @click="handleUnsubscribe">Unsubscribe</button>-->
        <h4>Oder book by a symbol: {{selectedOption}}</h4>
        <div class="table-container">
            <Table :columns="tableColumns" :rows="tableBidsRows"></Table>
            <Table :columns="tableColumns" :rows="tableAsksRows"></Table>
        </div>
    </div>
</template>
<script>
    import Dropdown from './Dropdown.vue';
    import Table from './Table.vue';

    import { getMarketData, marketDataSubscription } from '../plugins/binance';
    export default {
        components: {
            Dropdown,
            Table
        },
        data() {
            return {
                options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
                selectedOption: 'BTCUSDT',
                tableBidsRows: [],
                tableAsksRows: [],
                tableColumns: [
                    {
                        id: 'amount',
                        title: 'Amount'
                    },
                    {
                        id: 'price',
                        title: 'Price'
                    },
                    {
                        id: 'total',
                        title: 'Total',
                        smallHidden: true
                    }
                ]
            }
        },
        created() {
            this.handleSelect(this.selectedOption);
            marketDataSubscription.on('new-data', this.addToTable)
        },
        methods: {
            handleSelect(val) {
                this.handleUnsubscribe();
                this.selectedOption = val;
                getMarketData(val).then(data => {
                    this.tableBidsRows = data.bids.map(item => {
                        return {
                            amount: parseFloat(item.quantity).toFixed(7),
                            price: parseFloat(item.price).toFixed(7),
                            total: (item.price * item.quantity).toFixed(7)
                        }
                    });
                    this.tableAsksRows = data.asks.map(item => {
                        return {
                            amount: parseFloat(item.quantity).toFixed(7),
                            price: parseFloat(item.price).toFixed(7),
                            total: (item.price * item.quantity).toFixed(7)
                        }
                    });
                    marketDataSubscription.subscribe(val);
                });
            },
            addToTable(data) {
                data.bidDepth.forEach(item => {
                    this.tableBidsRows.unshift({
                        amount: parseFloat(item.quantity).toFixed(7),
                        price: parseFloat(item.price).toFixed(7),
                        total: (item.price * item.quantity).toFixed(7)
                    });
                });
                data.askDepth.forEach(item => {
                    this.tableAsksRows.unshift({
                        amount: parseFloat(item.quantity).toFixed(7),
                        price: parseFloat(item.price).toFixed(7),
                        total: (item.price * item.quantity).toFixed(7)
                    });
                });
            },
            handleUnsubscribe() {
                marketDataSubscription.unSubscribe();
            }
        }
    }
</script>