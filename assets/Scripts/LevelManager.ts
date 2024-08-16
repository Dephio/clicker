import { _decorator, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass } = _decorator;

@ccclass('LevelManager')
export class LevelManager extends Component {

    protected update(): void {
        if (GlobalValues.MoneyCount >= 0 && GlobalValues.MoneyCount <= 999) {
            if (GlobalValues.PlayerLevel > 1) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.PlayerLevel = 1;
                GlobalValues.LifeTime = 30;
                GlobalValues.MoneyForClick = 1;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.SkinsIsSaved != true || GlobalValues.SkinNumber < 5) {
                    GlobalValues.SkinNumber = 1;
                }
            }
        }
        if (GlobalValues.MoneyCount >= 1000 && GlobalValues.MoneyCount <= 9999) {
            if (GlobalValues.PlayerLevel < 2) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.PlayerLevel > 2) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.PlayerLevel = 2;
                GlobalValues.LifeTime = 45;
                GlobalValues.MoneyForClick = 2;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.SkinsIsSaved != true || GlobalValues.SkinNumber < 5) {
                    GlobalValues.SkinNumber = 2;
                }
            }
        }
        if (GlobalValues.MoneyCount >= 10000 && GlobalValues.MoneyCount <= 99999) {
            if (GlobalValues.PlayerLevel < 3) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.PlayerLevel > 3) {
                GlobalValues.LevelUpdate = false;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.PlayerLevel = 3;
                GlobalValues.LifeTime = 60;
                GlobalValues.MoneyForClick = 3;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.SkinsIsSaved != true || GlobalValues.SkinNumber < 5) {
                    GlobalValues.SkinNumber = 3;
                }
            }
        }
        if (GlobalValues.MoneyCount >= 100000 && GlobalValues.MoneyCount <= 9999999) {
            if (GlobalValues.PlayerLevel < 4) {
                GlobalValues.LevelUpdate = true;
                GlobalValues.LevelIsReceived = false;
            }
            if (GlobalValues.LevelIsReceived == false) {
                GlobalValues.PlayerLevel = 4;
                GlobalValues.LifeTime = 75;
                GlobalValues.MoneyForClick = 4;
                this.updateLevelValues();
                GlobalValues.LevelIsReceived = true;
                if (GlobalValues.SkinsIsSaved != true || GlobalValues.SkinNumber < 5) {
                    GlobalValues.SkinNumber = 4;
                }
            }
        }
    }

    updateLevelValues() {
        switch (GlobalValues.HealthLevel) {
            case 0:
                GlobalValues.LifeTime += 0;
                break;

            case 1:
                GlobalValues.LifeTime += 11.25;
                break;

            case 2:
                GlobalValues.LifeTime += 22.5;
                break;

            case 3:
                GlobalValues.LifeTime += 33.75;
                break;

            case 4:
                GlobalValues.LifeTime += 45;
                break;
        }

        switch (GlobalValues.MoneyLevel) {
            case 0:
                GlobalValues.MoneyForClick += 0;
                break;

            case 1:
                GlobalValues.MoneyForClick += 1;
                break;

            case 2:
                GlobalValues.MoneyForClick += 2;
                break;

            case 3:
                GlobalValues.MoneyForClick += 3;
                break;

            case 4:
                GlobalValues.MoneyForClick += 4;
                break;
        }
    }
}