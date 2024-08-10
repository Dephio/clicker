import { _decorator, AudioSource, Component, find, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('SettingsManager')
export class SettingsManager extends Component {

    @property(Sprite)
    private SoundButton: Sprite;

    @property(Sprite)
    private MusicButton: Sprite;

    protected start(): void {
        this.onLoadSettings();
    }

    onLoadSettings() {
        if (GlobalValues.SoundIsActivated == false) {
            this.SoundButton.grayscale = true;
        }
        else {
            this.SoundButton.grayscale = false;
        }

        if (GlobalValues.MusicIsActivated == false) {
            this.MusicButton.grayscale = true;
        }
        else {
            this.MusicButton.grayscale = false;
        }
    }

    onClickSound() {
        if (GlobalValues.SoundIsActivated == true) {
            GlobalValues.SoundIsActivated = false;
            this.SoundButton.grayscale = true;
        }
        else {
            GlobalValues.SoundIsActivated = true;
            this.SoundButton.grayscale = false;
        }
    }

    onClickMusic() {
        const MusicManager = find("Music_Manager");
        if (GlobalValues.MusicIsActivated == true) {
            MusicManager.getComponent(AudioSource).pause();
            GlobalValues.MusicIsActivated = false;
            this.MusicButton.grayscale = true;
        }
        else {
            MusicManager.getComponent(AudioSource).play();
            GlobalValues.MusicIsActivated = true;
            this.MusicButton.grayscale = false;
        }
    }
}