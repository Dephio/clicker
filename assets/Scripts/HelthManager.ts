import { _decorator, director, find, Component, ProgressBar, AudioSource } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('HelthManager')
export class HelthManager extends Component {

    @property(ProgressBar)
    private ProgressBar: ProgressBar;

    protected lateUpdate(): void {
        this.ProgressBar.progress = GlobalValues.HealthPoints;
    }

    protected update(): void {
        const startValue = 1;
        const endValue = 0;

        if (GlobalValues.GameIsPaused == false && GlobalValues.GameIsOver == false) {
            const increment = (startValue - endValue) / (GlobalValues.ServerData.lifeTime * 60);
            this.ProgressBar.progress = GlobalValues.HealthPoints;
            if (this.ProgressBar.progress > endValue) {
                this.ProgressBar.progress -= increment;
                GlobalValues.HealthPoints = this.ProgressBar.progress;
            }
            else {
                GlobalValues.GameIsOver = true;
                const MusicManager = find('Music_Manager');
                MusicManager.getComponent(AudioSource).stop();
                director.loadScene('End');
            }
        }
    }
}