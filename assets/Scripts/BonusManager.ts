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
        GlobalValues.GameIsPaused = true;
        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).pause();
        }

        ysdk.adv.showRewardedVideo({
            callbacks: {
                onRewarded: () => {
                    this.getBonusMoney();
                    console.log('Award received.');
                },
                onClose: () => {
                    if (GlobalValues.MusicIsActivated == true) {
                        const MusicManager = find("Music_Manager");
                        MusicManager.getComponent(AudioSource).play();
                    }
                    GlobalValues.GameIsPaused = false;
                    console.log('Video advertising closed.');
                },
                onError: (error) => {
                    console.error(error);
                }
            }
        });
    }

    onClickDiamondBonus() {
        GlobalValues.GameIsPaused = true;
        if (GlobalValues.MusicIsActivated == true) {
            const MusicManager = find("Music_Manager");
            MusicManager.getComponent(AudioSource).pause();
        }
        
        ysdk.adv.showRewardedVideo({
            callbacks: {
                onRewarded: () => {
                    this.getBonusDiamond();
                    console.log('Award received.');
                },
                onClose: () => {
                    if (GlobalValues.MusicIsActivated == true) {
                        const MusicManager = find("Music_Manager");
                        MusicManager.getComponent(AudioSource).play();
                    }
                    GlobalValues.GameIsPaused = false;
                    console.log('Video advertising closed.');
                },
                onError: (error) => {
                    console.error(error);
                }
            }
        });
    }

    getBonusMoney() {
        this.MoneyButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        if (GlobalValues.ServerData.moneyCount <= 9999499) {
            GlobalValues.ServerData.moneyCount += 500;
        }
        else {
            GlobalValues.ServerData.moneyCount = 9999999;
        }
    }

    getBonusDiamond() {
        this.DiamondButton.active = false;
        this.ProgressBar.node.active = true;
        GlobalValues.BonusIsSpawned = false;
        GlobalValues.BonusIsActivated = true;

        if (GlobalValues.ServerData.diamondCount <= 99998) {
            GlobalValues.ServerData.diamondCount += 1;
        }
        else {
            GlobalValues.ServerData.diamondCount = 99999;
        }
    }
}