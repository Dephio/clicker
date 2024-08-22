import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { GlobalValues } from './GlobalValues';
import { l10n } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
const { ccclass, property } = _decorator;

@ccclass('SkinManager')
export class SkinManager extends Component {

    @property(SpriteFrame)
    private Buy_Button: SpriteFrame;

    @property(SpriteFrame)
    private Select_Button: SpriteFrame;

    @property(Sprite)
    private Skin_Select_Button_1: Sprite;

    @property(Sprite)
    private Skin_Select_Button_2: Sprite;

    @property(Sprite)
    private Skin_Select_Button_3: Sprite;

    @property(Sprite)
    private Skin_Select_Button_4: Sprite;

    @property(Sprite)
    private Skin_Select_Button_5: Sprite;

    @property(Sprite)
    private Skin_Select_Button_6: Sprite;
    
    protected start(): void {
        this.onLoadSkinsButtons();
    }

    protected update(): void {
        switch (GlobalValues.ServerData.skinNumber) {
            case 1:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
                break;
            case 2:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
                break;
            case 3:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
                break;
            case 4:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
                break;
        }

        if (GlobalValues.ServerData.firstSkinIsActivated == true) {
            this.Skin_Select_Button_1.node.active = true;
        }

        if (GlobalValues.ServerData.secondSkinIsActivated == true) {
            this.Skin_Select_Button_2.node.active = true;
        }

        if (GlobalValues.ServerData.thirdSkinIsActivated == true) {
            this.Skin_Select_Button_3.node.active = true;
        }

        if (GlobalValues.ServerData.fourthSkinIsActivated == true) {
            this.Skin_Select_Button_4.node.active = true;
        }

        if (GlobalValues.ServerData.fifthSkinIsActivated == true) {
            this.Skin_Select_Button_5.node.active = true;
        }

        if (GlobalValues.ServerData.sixthSkinIsActivated == true) {
            this.Skin_Select_Button_6.node.active = true;
        }
    }

    onLoadSkinsButtons() {
        switch (GlobalValues.ServerData.skinNumber) {
            case 5:
                this.Skin_Select_Button_1.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
            case 6:
                this.Skin_Select_Button_2.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
            case 7:
                this.Skin_Select_Button_3.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
            case 8:
                this.Skin_Select_Button_4.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
            case 9:
                this.Skin_Select_Button_5.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
            case 10:
                this.Skin_Select_Button_6.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("selected-text");
                break;
        }
    }

    onClickSelectButton1() {
        if (GlobalValues.ServerData.skinNumber != 5) {
            GlobalValues.ServerData.skinNumber = 5;
            this.Skin_Select_Button_1.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("selected-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }

    onClickSelectButton2() {
        if (GlobalValues.ServerData.skinNumber != 6) {
            GlobalValues.ServerData.skinNumber = 6;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("selected-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }

    onClickSelectButton3() {
        if (GlobalValues.ServerData.skinNumber != 7) {
            GlobalValues.ServerData.skinNumber = 7;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("selected-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }

    onClickSelectButton4() {
        if (GlobalValues.ServerData.skinNumber != 8) {
            GlobalValues.ServerData.skinNumber = 8;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("selected-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }

    onClickSelectButton5() {
        if (GlobalValues.ServerData.skinNumber != 9) {
            GlobalValues.ServerData.skinNumber = 9;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("selected-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }

    onClickSelectButton6() {
        if (GlobalValues.ServerData.skinNumber != 10) {
            GlobalValues.ServerData.skinNumber = 10;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = l10n.t("select-text");
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("selected-text");
        }
        else {
            GlobalValues.ServerData.skinNumber = GlobalValues.ServerData.playerLevel;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = l10n.t("select-text");
        }
    }
}