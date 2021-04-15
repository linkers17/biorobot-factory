import {ProductionStateInterface} from "@/interfaces/productionState.interface";
import {StockStateInterface} from "@/interfaces/stockState.interface";

interface ChangeDetailsInterface {
    detail: string;
    action: string;
}

interface TransferDetailsInterface {
    detail: string;
    countInStock: number;
    countInProd: number;
}

const namespaced = true;

const state: ProductionStateInterface = {
    type: 'frontend',
    gender: 'male',
    message: null,
    stage: false,
    biomechanism: [false, false, false, false],
    processor: [false, false, false, false],
    heart: [false],
    amount: 10
};

const mutations = {
    changeType(state: ProductionStateInterface, type: string): void {
        state.type = type;
    },

    changeGender(state: ProductionStateInterface, gender: string): void {
        state.gender = gender;
    },

    changeDetails(state: ProductionStateInterface, {detail, action}: ChangeDetailsInterface): void {
        // Покупка
        if (action === 'buy') {
            if (!state[detail].includes(true)) {
                for (let i = 0; i < state[detail].length; i++) {
                    if (state[detail][i] === false) {
                        state[detail][i] = true;
                        break;
                    }
                }
            }
            return;
        }

        // Продажа
        if (action === 'sell') {
            for (let i = 0; i < state[detail].length; i++) {
                if (state[detail][i] === true) {
                    state[detail][i] = false;
                    break;
                }
            }
            return;
        }
    },

    transferDetail(state: ProductionStateInterface, {detail, countInStock, countInProd}: TransferDetailsInterface): void {
        for (let i = 0; i < state[detail].length; i++) {
            state[detail][i] = i < countInProd ? 'ready' : false;
        }
        if (countInStock && countInProd < state[detail].length) {
            state[detail][countInProd] = true;
        }
        if (
            state.biomechanism.every(elem => elem === 'ready') &&
            state.processor.every(elem => elem === 'ready') &&
            state.heart.every(elem => elem === 'ready')
        ) {
            state.stage = true;
        } else {
            state.stage = false;
        }
    },

    createRobot(state: ProductionStateInterface): void {
        state.stage = 'ready';
        state.message = 'biorobo_complete';
        state.biomechanism = [false, false, false, false];
        state.processor = [false, false, false, false];
        state.heart = [false];
    },

    closeMessage(state: ProductionStateInterface): void {
        state.message = null;
    },

    reset(state: ProductionStateInterface): void {
        state.stage = false;
    }
};

const actions = {
    changeType({commit}: any, type: string): void {
        commit('changeType', type);
    },

    changeGender({commit}: any, gender: string): void {
        commit('changeGender', gender);
    },

    // Перемещение деталей в производство и на склад
    transferDetail({commit, rootState}: any, {detail, status}: any): void {
        // Отправка в производство
        const goods = rootState.stock.find((goods: StockStateInterface) => goods.name === detail);
        if (status === true) {
            commit('stock/inProduction', detail, {root: true});
            commit('transferDetail', {
                detail,
                countInStock: goods.count,
                countInProd: goods.inProduction
            });
            return;
        }

        // Отправка на склад
        if (status === 'ready') {
            commit('stock/inStock', detail, {root: true});
            commit('transferDetail', {
                detail,
                countInStock: goods.count,
                countInProd: goods.inProduction
            });
            return;
        }
    },

    createRobot({commit, state}: any): void {
        commit('createRobot');
        commit('stock/createRobot', null, {root: true});
        commit('billfold/expense', state.amount, {root: true});
    },

    closeMessage({commit}: any): void {
        commit('closeMessage');
    },

    reset({commit, rootState}: any): void {
        const details = rootState.stock;

        commit('stock/resetProd', null, {root: true});
        details.forEach((detail: StockStateInterface) => {
            commit('transferDetail', {
                detail: detail.name,
                countInStock: detail.count,
                countInProd: detail.inProduction
            });
        });
    }
};

export {namespaced, state, mutations, actions};
