import { _decorator, Component, Label } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('ClikerManager')
export class ClikerManager extends Component {

    @property(Label)
    private MoneyLabel: Label;

    protected update(): void {
        this.MoneyLabel.string = GlobalValues.ServerData.moneyCount.toString();
    }

    onClickPlayer() {
        if (GlobalValues.GameIsPaused == false && GlobalValues.GameIsOver == false) {
            if (GlobalValues.ServerData.moneyCount < 9999999) {
                if ((GlobalValues.ServerData.moneyCount + GlobalValues.ServerData.moneyForClick) >= 9999999) {
                    GlobalValues.ServerData.moneyCount = 9999999;
                }
                else {
                    GlobalValues.ServerData.moneyCount += GlobalValues.ServerData.moneyForClick;
                    this.MoneyLabel.string = GlobalValues.ServerData.moneyCount.toString();
                }
            }
        }
    }
}