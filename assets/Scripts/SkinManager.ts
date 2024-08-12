import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { GlobalValues } from './GlobalValues';
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
        switch (GlobalValues.SkinNumber) {
            case 1:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
                break;
            case 2:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
                break;
            case 3:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
                break;
            case 4:
                this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
                this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
                break;
        }

        if (GlobalValues.Skin_1_Is_Activated == true) {
            this.Skin_Select_Button_1.node.active = true;
        }

        if (GlobalValues.Skin_2_Is_Activated == true) {
            this.Skin_Select_Button_2.node.active = true;
        }

        if (GlobalValues.Skin_3_Is_Activated == true) {
            this.Skin_Select_Button_3.node.active = true;
        }

        if (GlobalValues.Skin_4_Is_Activated == true) {
            this.Skin_Select_Button_4.node.active = true;
        }

        if (GlobalValues.Skin_5_Is_Activated == true) {
            this.Skin_Select_Button_5.node.active = true;
        }

        if (GlobalValues.Skin_6_Is_Activated == true) {
            this.Skin_Select_Button_6.node.active = true;
        }
    }

    onLoadSkinsButtons() {
        switch (GlobalValues.SkinNumber) {
            case 5:
                this.Skin_Select_Button_1.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Выбран";
                break;
            case 6:
                this.Skin_Select_Button_2.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Выбран";
                break;
            case 7:
                this.Skin_Select_Button_3.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Выбран";
                break;
            case 8:
                this.Skin_Select_Button_4.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Выбран";
                break;
            case 9:
                this.Skin_Select_Button_5.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Выбран";
                break;
            case 10:
                this.Skin_Select_Button_6.spriteFrame = this.Select_Button;
                this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Выбран";
                break;
        }
    }

    onClickSelectButton1() {
        if (GlobalValues.SkinNumber != 5) {
            GlobalValues.SkinNumber = 5;
            this.Skin_Select_Button_1.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Выбран";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
        }
    }

    onClickSelectButton2() {
        if (GlobalValues.SkinNumber != 6) {
            GlobalValues.SkinNumber = 6;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Выбран";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
        }
    }

    onClickSelectButton3() {
        if (GlobalValues.SkinNumber != 7) {
            GlobalValues.SkinNumber = 7;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Выбран";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
        }
    }

    onClickSelectButton4() {
        if (GlobalValues.SkinNumber != 8) {
            GlobalValues.SkinNumber = 8;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Выбран";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
        }
    }

    onClickSelectButton5() {
        if (GlobalValues.SkinNumber != 9) {
            GlobalValues.SkinNumber = 9;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Выбран";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
        }
    }

    onClickSelectButton6() {
        if (GlobalValues.SkinNumber != 10) {
            GlobalValues.SkinNumber = 10;
            this.Skin_Select_Button_1.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_2.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_3.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_4.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_5.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.spriteFrame = this.Select_Button;
            this.Skin_Select_Button_1.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_2.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_3.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_4.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_5.getComponentInChildren(Label).string = "Надеть";
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Выбран";
        }
        else {
            GlobalValues.SkinNumber = GlobalValues.PlayerLevel;
            this.Skin_Select_Button_6.spriteFrame = this.Buy_Button;
            this.Skin_Select_Button_6.getComponentInChildren(Label).string = "Надеть";
        }
    }
}