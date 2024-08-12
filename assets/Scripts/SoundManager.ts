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
    
    @property(AudioClip)
    private BuySound: AudioClip = null!;

    @property(AudioClip)
    private LevelUpSound: AudioClip = null!;

    @property(AudioClip)
    private LevelDownSound: AudioClip = null!;

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

    protected update(): void {
        switch (GlobalValues.LevelUpdate) {
            case true:
                this.playLevelUpSound();
                GlobalValues.LevelUpdate = null;
                break;

            case false:
                this.playLevelDownSound();
                GlobalValues.LevelUpdate = null;
                break;
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

    playBuySound() {
        if (GlobalValues.SoundIsActivated == true && GlobalValues.BuySoundIsPlaying == false) {
            this.AudioManager.playOneShot(this.ButtonSound, 0.5);
        }
        if (GlobalValues.SoundIsActivated == true && GlobalValues.BuySoundIsPlaying == true) {
            this.AudioManager.playOneShot(this.BuySound, 0.5);
            GlobalValues.BuySoundIsPlaying = false;
        }
    }

    playSettingsSound() {
        if (GlobalValues.SoundIsActivated == false) {
            this.AudioManager.playOneShot(this.ButtonSound, 0.5);
        }
    }

    playButtonsSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.ButtonSound, 0.5);
        }
    }

    playLevelUpSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.LevelUpSound, 1);
        }
    }

    playLevelDownSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.LevelDownSound, 1);
        }
    }

    playClickerSound() {
        if (GlobalValues.SoundIsActivated == true) {
            this.AudioManager.playOneShot(this.ClickerSound, 1);
        }
    }
}