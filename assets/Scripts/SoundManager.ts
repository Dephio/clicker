import { _decorator, director, find, Component, AudioClip, AudioSource } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component {

    @property(AudioSource)
    private AudioManager: AudioSource = null!;

    @property(AudioClip)
    private ButtonSound: AudioClip = null!;

    @property(AudioClip)
    private ClickerSound: AudioClip = null!;

    protected start(): void {
        if (GlobalValues.GameIsOver == false && GlobalValues.MusicIsPlaying == false) {
            this.onLoadMusic();
        }

        if (GlobalValues.GameIsOver == true && GlobalValues.MusicIsPlaying == true) {
            GlobalValues.MusicIsPlaying = false;
            if (GlobalValues.MusicIsActivated == true) {
                this.AudioManager.play();
            }
        }
    }

    onLoadMusic() {
        GlobalValues.MusicIsPlaying = true;
        const MusicManager = find('Music_Manager');
        director.addPersistRootNode(MusicManager);
        if (GlobalValues.MusicIsActivated == true) {
            MusicManager.getComponent(AudioSource).play();
        }
    }

    playSettingsSound() {
        if (GlobalValues.SoundIsActivated == false) {
            this.AudioManager.playOneShot(this.ButtonSound, 1);
        }
    }

    playButtonsSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.ButtonSound, 1);
        }
    }

    playClickerSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.ClickerSound, 0.5);
        }
    }
}