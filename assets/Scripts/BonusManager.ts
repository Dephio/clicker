import { _decorator, find, Component, Node, AudioSource, ProgressBar } from 'cc';
import { GlobalValues } from './GlobalValues';
import { ysdk } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
const { ccclass, property } = _decorator;

@ccclass('BonusManager')
export class BonusManager extends Component {

    @property(Node)
    private MoneyButton: Node;

    @property(Node)
    private DiamondButton: Node;

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
                    this.DiamondButton.active = true;
                    break;
            }
            GlobalValues.BonusIsSpawned = true;
        }
        else {
            this.ProgressBar.node.active = true;
        }
    }

    onClickMoneyBonus() {
        const callbacks = {
          onRewarded: this.getBonusMoney.bind(this),
        };

        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).pause();
        }
        GlobalValues.GameIsPaused = true;
        ysdk.adv.showRewardedVideo({ callbacks });
      }

      onClickDiamondBonus() {
        const callbacks = {
          onRewarded: this.getBonusDiamond.bind(this),
        };

        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).pause();
        }
        GlobalValues.GameIsPaused = true;
        ysdk.adv.showRewardedVideo({ callbacks });
      }

    getBonusMoney() {
        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).play();
        }

        this.MoneyButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.GameIsPaused = false;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        if (GlobalValues.MoneyCount <= 9999499) {
            GlobalValues.MoneyCount += 500;
        }
        else {
            GlobalValues.MoneyCount = 9999999;
        }
    }

    getBonusDiamond() {
        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).play();
        }

        this.DiamondButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.GameIsPaused = false;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        if (GlobalValues.DiamondCount <= 99998) {
            GlobalValues.DiamondCount += 1;
        }
        else {
            GlobalValues.DiamondCount = 99999;
        }
    }
}