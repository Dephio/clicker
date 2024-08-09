import { _decorator, Component, Node, ProgressBar } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('BonusManager')
export class BonusManager extends Component {

    @property(Node)
    private MoneyButton: Node;

    @property(Node)
    private CrystalButton: Node;

    @property(ProgressBar)
    private ProgressBar: ProgressBar;

    protected start(): void {
        this.onLoadButtons();
    }

    protected update(): void {
        if (GlobalValues.BonusIsActivated == true) {
            const startValue = 1;
            const endValue = 0;
    
            if (GlobalValues.GameIsPaused == false && GlobalValues.GameIsOver == false) {
                const increment = (startValue - endValue) / (GlobalValues.BonusTime * 60);
                this.ProgressBar.progress = GlobalValues.BonusPoints;
                if (this.ProgressBar.progress > endValue) {
                    this.ProgressBar.progress -= increment;
                    GlobalValues.BonusPoints = this.ProgressBar.progress;
                }
                else {
                    GlobalValues.BonusPoints = this.ProgressBar.progress = startValue;
                    GlobalValues.BonusIsActivated = false;
                    this.ProgressBar.node.active = false;
                    this.onLoadButtons();
                }
            }
        }
    }

    private onLoadButtons() {
        if (GlobalValues.BonusIsSpawned == false) {
            GlobalValues.BonusNumber = Math.round(Math.random());
        }
        if (GlobalValues.BonusIsActivated == false) {
            switch (GlobalValues.BonusNumber) {
                case 0:
                    this.MoneyButton.active = true;
                    break;
                case 1:
                    this.CrystalButton.active = true;
                    break;
            }
            GlobalValues.BonusIsSpawned = true;
        }
        else {
            this.ProgressBar.node.active = true;
        }
    }

    getBonusMoney() {
        this.MoneyButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        // Здесь будет скрипт, отвечающий за просмотр рекламы, а также постановки на паузу игры и выхода из неё

        if (GlobalValues.MoneyCount <= 9999499) {
            GlobalValues.MoneyCount += 500;
        }
        else {
            GlobalValues.MoneyCount = 9999999;
        }
    }

    getBonusCrystal() {
        this.CrystalButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        // Здесь будет скрипт, отвечающий за просмотр рекламы, а также постановки на паузу игры и выхода из неё

        if (GlobalValues.DiamondCount <= 99998) {
            GlobalValues.DiamondCount += 1;
        }
        else {
            GlobalValues.DiamondCount = 99999;
        }
    }
}