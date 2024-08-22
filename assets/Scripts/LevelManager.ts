import { _decorator, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass } = _decorator;

@ccclass('LevelManager')
export class LevelManager extends Component {

    protected update(): void {
        if (GlobalValues.ServerData.moneyCount >= 0 && GlobalValues.ServerData.moneyCount <= 999) {
            if (GlobalValues.ServerData.playerLevel > 1) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.ServerData.playerLevel = 1;
                GlobalValues.ServerData.lifeTime = 30;
                GlobalValues.ServerData.moneyForClick = 1;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.ServerData.skinsIsSaved != true || GlobalValues.ServerData.skinNumber < 5) {
                    GlobalValues.ServerData.skinNumber = 1;
                }
            }
        }
        if (GlobalValues.ServerData.moneyCount >= 1000 && GlobalValues.ServerData.moneyCount <= 9999) {
            if (GlobalValues.ServerData.playerLevel < 2) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.ServerData.playerLevel > 2) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.ServerData.playerLevel = 2;
                GlobalValues.ServerData.lifeTime = 45;
                GlobalValues.ServerData.moneyForClick = 2;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.ServerData.skinsIsSaved != true || GlobalValues.ServerData.skinNumber < 5) {
                    GlobalValues.ServerData.skinNumber = 2;
                }
            }
        }
        if (GlobalValues.ServerData.moneyCount >= 10000 && GlobalValues.ServerData.moneyCount <= 49999) {
            if (GlobalValues.ServerData.playerLevel < 3) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.ServerData.playerLevel > 3) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.ServerData.playerLevel = 3;
                GlobalValues.ServerData.lifeTime = 60;
                GlobalValues.ServerData.moneyForClick = 3;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.ServerData.skinsIsSaved != true || GlobalValues.ServerData.skinNumber < 5) {
                    GlobalValues.ServerData.skinNumber = 3;
                }
            }
        }
        if (GlobalValues.ServerData.moneyCount >= 50000 && GlobalValues.ServerData.moneyCount <= 9999999) {
            if (GlobalValues.ServerData.playerLevel < 4) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.ServerData.playerLevel = 4;
                GlobalValues.ServerData.lifeTime = 75;
                GlobalValues.ServerData.moneyForClick = 4;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.ServerData.skinsIsSaved != true || GlobalValues.ServerData.skinNumber < 5) {
                    GlobalValues.ServerData.skinNumber = 4;
                }
            }
        }
    }

    updateLevelValues() {
        switch (GlobalValues.ServerData.healthLevel) {
            case 0:
                GlobalValues.ServerData.lifeTime += 0;
                break;

            case 1:
                GlobalValues.ServerData.lifeTime += 11.25;
                break;

            case 2:
                GlobalValues.ServerData.lifeTime += 22.5;
                break;

            case 3:
                GlobalValues.ServerData.lifeTime += 33.75;
                break;

            case 4:
                GlobalValues.ServerData.lifeTime += 45;
                break;
        }

        switch (GlobalValues.ServerData.moneyLevel) {
            case 0:
                GlobalValues.ServerData.moneyForClick += 0;
                break;

            case 1:
                GlobalValues.ServerData.moneyForClick += 1;
                break;

            case 2:
                GlobalValues.ServerData.moneyForClick += 2;
                break;

            case 3:
                GlobalValues.ServerData.moneyForClick += 3;
                break;

            case 4:
                GlobalValues.ServerData.moneyForClick += 4;
                break;
        }
    }
}