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
    changeType(state: ProductionStateInterface, type: string) {
        state.type = type;
    },

    changeGender(state: ProductionStateInterface, gender: string) {
        state.gender = gender;
    },

    changeDetails(state: ProductionStateInterface, {detail, action}: ChangeDetailsInterface) {
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

    createRobot(state: ProductionStateInterface) {
        state.stage = 'ready';
        state.message = 'Поздравляем!\nВы произвели биоробота';
        state.biomechanism = [false, false, false, false];
        state.processor = [false, false, false, false];
        state.heart = [false];
    },

    closeMessage(state: ProductionStateInterface) {
        state.message = null;
    }
};

const actions = {
    changeType({commit}: any, type: string): void {
        commit('changeType', type);
    },

    changeGender({commit}: any, gender: string): void {
        commit('changeGender', gender);
    },

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

    createRobot({commit, state}: any) {
        commit('createRobot');
        commit('expense', state.amount, {root: true});
    },

    closeMessage({commit}: any) {
        commit('closeMessage');
    }
};

export {namespaced, state, mutations, actions};
