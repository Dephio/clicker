import { _decorator, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass } = _decorator;

@ccclass('LevelManager')
export class LevelManager extends Component {

    protected update(): void {
        if (GlobalValues.MoneyCount >= 0 && GlobalValues.MoneyCount <= 999) {
            if (GlobalValues.PlayersLevel > 1) {
                GlobalValues.LevelUpdate = false;
            }
            GlobalValues.PlayersLevel = 1;
            GlobalValues.LifeTime = 30;
            GlobalValues.MoneyForClick = 1;
        }
        if (GlobalValues.MoneyCount >= 1000 && GlobalValues.MoneyCount <= 9999) {
            if (GlobalValues.PlayersLevel < 2) {
                GlobalValues.LevelUpdate = true;
            }
            if (GlobalValues.PlayersLevel > 2) {
                GlobalValues.LevelUpdate = false;
            }
            GlobalValues.PlayersLevel = 2;
            GlobalValues.LifeTime = 45;
            GlobalValues.MoneyForClick = 2;
        }
        if (GlobalValues.MoneyCount >= 10000 && GlobalValues.MoneyCount <= 99999) {
            if (GlobalValues.PlayersLevel < 3) {
                GlobalValues.LevelUpdate = true;
            }
            if (GlobalValues.PlayersLevel > 3) {
                GlobalValues.LevelUpdate = false;
            }
            GlobalValues.PlayersLevel = 3;
            GlobalValues.LifeTime = 60;
            GlobalValues.MoneyForClick = 3;
        }
        if (GlobalValues.MoneyCount >= 100000 && GlobalValues.MoneyCount <= 9999999) {
            if (GlobalValues.PlayersLevel < 4) {
                GlobalValues.LevelUpdate = true;
            }
            GlobalValues.PlayersLevel = 4;
            GlobalValues.LifeTime = 75;
            GlobalValues.MoneyForClick = 4;
        }
    }
}