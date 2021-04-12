import {BillfoldStateInterface} from "@/interfaces/billfoldState.interface";

const state: BillfoldStateInterface = {
    money: 0,
    error: null,
    checkbox: false
}

const mutations = {
    increaseCoin(state: BillfoldStateInterface): void {
        if ((state.checkbox && state.money >= 96) || ((!state.checkbox && state.money === 100))) {
            state.error = 'Вы не можете нацыганить более 100 монет biorobo';
        } else {
            state.error = null;
            if (state.checkbox) {
                state.money += 5;
            } else {
                state.money++;
            }
        }
    },
    changeCheckbox(state: BillfoldStateInterface): void {
        state.checkbox = !state.checkbox;
    },

    expense(state: BillfoldStateInterface, coin: number): void {
        state.money -= coin;
    },

    income(state: BillfoldStateInterface, coin: number): void {
        state.money += coin;
    },

    showError(state: BillfoldStateInterface, text: string): void {
        state.error = text;
    },

    closeError(state: BillfoldStateInterface): void {
        state.error = null;
    }
}

const actions = {
    increaseCoin({commit}: any): void {
        commit('increaseCoin')
    },

    changeCheckbox({commit}: any): void {
        commit('changeCheckbox')
    },

    closeError({commit}: any): void {
        commit('closeError');
    }
}

export {state, mutations, actions};
