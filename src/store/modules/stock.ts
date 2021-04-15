import {StockStateInterface} from "@/interfaces/stockState.interface";

const namespaced = true;

const state: StockStateInterface[] = [
    {
        id: 1,
        title: 'Биомеханизм',
        name: 'biomechanism',
        count: 0,
        amountSale: 7,
        amountPurchase: 5,
        inProduction: 0
    },
    {
        id: 2,
        title: 'Процессор',
        name: 'processor',
        count: 0,
        amountSale: 5,
        amountPurchase: 3,
        inProduction: 0
    },
    {
        id: 3,
        title: 'Душа',
        name: 'heart',
        count: 0,
        amountSale: 25,
        amountPurchase: 15,
        inProduction: 0
    }
];

const mutations = {
    buy(state: StockStateInterface[], id: number): void {
        state = state.map(goods => {
            if (goods.id === id) {
                goods.count += 1;
            }
            return goods;
        });
    },

    sell(state: StockStateInterface[], id: number): void {
        state = state.map(goods => {
            if (goods.id === id) {
                goods.count -= 1;
            }
            return goods;
        });
    },

    inProduction(state: StockStateInterface[], detail: string): void {
        state = state.map(goods => {
            if (goods.name === detail) {
                goods.count -= 1;
                goods.inProduction += 1;
            }
            return goods;
        });
    },

    inStock(state: StockStateInterface[], detail: string): void {
        state = state.map(goods => {
            if (goods.name === detail) {
                goods.count += 1;
                goods.inProduction -= 1;
            }
            return goods;
        });
    },

    resetProd(state: StockStateInterface[]): void {
        state = state.map(goods => {
           goods.count += goods.inProduction;
           goods.inProduction = 0;
           return goods;
        });
    },

    createRobot(state: StockStateInterface[]): void {
        state = state.map(goods => {
            goods.inProduction = 0;
            return goods;
        });
    }
}

const actions = {
    buy({commit, state}: any, id: number): void  {
        const goods = state.find((goods: StockStateInterface) => goods.id === id);
        commit('buy', id);
        commit('billfold/expense', goods.amountSale, {root: true});
        commit('production/changeDetails', {detail: goods.name, action: 'buy'}, {root: true})
    },

    sell({commit, state}: any, {id, money}: any): void {
        const goods = state.find((goods: StockStateInterface) => goods.id === id);

        if (goods.amountPurchase + money > 100) {
            commit('billfold/showError', 'more_than_100', {root: true});
        } else {

            // Меняем детали в производстве
            if (goods.count === 1) {
                commit('production/changeDetails', {detail: goods.name, action: 'sell'}, {root: true})
            }

            commit('sell', id);
            commit('billfold/income', goods.amountPurchase, {root: true});
        }
    }
}

export {namespaced, state, mutations, actions};
