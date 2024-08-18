import { _decorator, find, Component, AudioSource, Sprite, Toggle, Node, SpriteFrame } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('SettingsManager')
export class SettingsManager extends Component {

    @property(Sprite)
    private SoundButton: Sprite;

    @property(Sprite)
    private MusicButton: Sprite;

    @property(Sprite)
    private LanguageButton: Sprite;

    @property(SpriteFrame)
    private LanguageRU: SpriteFrame;
    
    @property(SpriteFrame)
    private LanguageEN: SpriteFrame;

    @property(Toggle)
    private SkinToggle: Toggle;

    @property(Node)
    private MenuPage: Node;

    @property(Node)
    private InfoPage: Node;

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

        if (GlobalValues.SkinsIsSaved == false) {
            this.SkinToggle.isChecked = false;
        }
        else {
            this.SkinToggle.isChecked = true;
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

    onClickInfo() {
        if (this.InfoPage.active == false) {
            this.MenuPage.active = false;
            this.InfoPage.active = true;
        }
        else {
            this.MenuPage.active = true;
            this.InfoPage.active = false;
        }
    }

    onClickToggle() {
        if (this.SkinToggle.isChecked == false) {
            GlobalValues.SkinsIsSaved = true;
        }
        else {
            GlobalValues.SkinsIsSaved = false;
        }
    }

    onClickLanguage() {
        // Здесь будет скрипт, отвечающий за смену языка
    }
}