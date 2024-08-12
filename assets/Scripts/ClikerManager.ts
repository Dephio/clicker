import { _decorator, Component, Label } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('ClikerManager')
export class ClikerManager extends Component {

    @property(Label)
    private MoneyLabel: Label;

    protected update(): void {
        this.MoneyLabel.string = GlobalValues.MoneyCount.toString();
    }

    onClickPlayer() {
        if (GlobalValues.GameIsPaused == false && GlobalValues.GameIsOver == false) {
            if (GlobalValues.MoneyCount < 9999999) {
                if ((GlobalValues.MoneyCount + GlobalValues.MoneyForClick) >= 9999999) {
                    GlobalValues.MoneyCount = 9999999;
                }
                else {
                    GlobalValues.MoneyCount += GlobalValues.MoneyForClick;
                    this.MoneyLabel.string = GlobalValues.MoneyCount.toString();
                }
            }
        }
    }
}