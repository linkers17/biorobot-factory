import {BillfoldStateInterface} from "@/interfaces/billfoldState.interface";

const state: BillfoldStateInterface = {
    money: 0,
    error: null,
    checkbox: false
}

const mutations = {
    increaseCoin(state: BillfoldStateInterface) {
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
    changeCheckbox(state: BillfoldStateInterface) {
        state.checkbox = !state.checkbox;
    }
}

export {state, mutations};
