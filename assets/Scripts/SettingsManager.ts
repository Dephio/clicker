import { _decorator, find, Component, Node, AudioSource, Sprite, SpriteFrame, Toggle, Label, Vec3 } from 'cc';
import { GlobalValues } from './GlobalValues';
import { l10n } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
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

    @property(Node)
    private InfoRU: Node;

    @property(Node)
    private InfoEN: Node;

    @property(Label)
    private SkinsText: Label;

    @property(Label)
    private SoundText: Label;

    @property(Label)
    private MusicText: Label;

    @property(Label)
    private InfoText: Label;

    @property(Label)
    private LanguageText: Label;

    @property(Label)
    private SettingsText: Label;

    @property(Label)
    private ReferenceText: Label;

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

        switch (l10n.currentLanguage) {
            case 'ru':
                this.onLoadRussianSettings();
                break;

            case 'en':
                this.onLoadEnglishSettings();
                break;
        }
    }

    onLoadEnglishSettings() {
        this.LanguageButton.spriteFrame = this.LanguageEN;
        this.InfoEN.active = true;
        this.InfoRU.active = false;
        this.SkinsText.fontSize = 50;
        this.InfoText.node.setPosition(140, -15);
        this.MusicText.node.setPosition(-205, -15);
        this.SoundText.node.setPosition(-245, 100);
        this.preLoadText();
    }

    onLoadRussianSettings() {
        this.LanguageButton.spriteFrame = this.LanguageRU;
        this.InfoEN.active = false;
        this.InfoRU.active = true;
        this.SkinsText.fontSize = 46;
        this.InfoText.node.setPosition(120, -15);
        this.MusicText.node.setPosition(-225, -15);
        this.SoundText.node.setPosition(-225, 100);
        this.preLoadText();

    }

    preLoadText() {
        this.SkinsText.string = l10n.t("toggle-text");
        this.SoundText.string = l10n.t("sound-text");
        this.MusicText.string = l10n.t("music-text");
        this.InfoText.string = l10n.t("info-text");
        this.LanguageText.string = l10n.t("language-text");
        this.SettingsText.string = l10n.t("settings-text");
        this.ReferenceText.string = l10n.t("reference-text");
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
        switch (l10n.currentLanguage) {
            case 'ru':
                l10n.changeLanguage('en');
                this.onLoadEnglishSettings();
                break;

            case 'en':
                l10n.changeLanguage('ru');
                this.onLoadRussianSettings();
                break;
        }
    }
}