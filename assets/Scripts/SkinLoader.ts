import { _decorator, Component, Node, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('SkinLoader')
export class SkinLoader extends Component {

    @property(Node)
    private Buy_Button_1: Node;

    @property(Node)
    private Buy_Button_2: Node;

    @property(Node)
    private Buy_Button_3: Node;

    @property(Node)
    private Buy_Button_4: Node;

    @property(Node)
    private Buy_Button_5: Node;

    @property(Node)
    private Buy_Button_6: Node;

    @property(Sprite)
    private Skin_Sprite_1: Sprite;

    @property(Sprite)
    private Skin_Sprite_2: Sprite;

    @property(Sprite)
    private Skin_Sprite_3: Sprite;

    @property(Sprite)
    private Skin_Sprite_4: Sprite;

    @property(Sprite)
    private Skin_Sprite_5: Sprite;

    @property(Sprite)
    private Skin_Sprite_6: Sprite;

    protected update(): void {
        if (GlobalValues.Skin_1_Is_Activated == true) {
            this.Skin_Sprite_1.grayscale = false;
            this.Buy_Button_1.active = false;
        }

        if (GlobalValues.Skin_2_Is_Activated == true) {
            this.Skin_Sprite_2.grayscale = false;
            this.Buy_Button_2.active = false;
        }

        if (GlobalValues.Skin_3_Is_Activated == true) {
            this.Skin_Sprite_3.grayscale = false;
            this.Buy_Button_3.active = false;
        }

        if (GlobalValues.Skin_4_Is_Activated == true) {
            this.Skin_Sprite_4.grayscale = false;
            this.Buy_Button_4.active = false;
        }

        if (GlobalValues.Skin_5_Is_Activated == true) {
            this.Skin_Sprite_5.grayscale = false;
            this.Buy_Button_5.active = false;
        }

        if (GlobalValues.Skin_6_Is_Activated == true) {
            this.Skin_Sprite_6.grayscale = false;
            this.Buy_Button_6.active = false;
        }
    }

    onClickBuyButton1() {
        if (GlobalValues.DiamondCount >= 0) {
            GlobalValues.DiamondCount -= 0;
            GlobalValues.Skin_1_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton2() {
        if (GlobalValues.DiamondCount >= 25) {
            GlobalValues.DiamondCount -= 25;
            GlobalValues.Skin_2_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton3() {
        if (GlobalValues.DiamondCount >= 50) {
            GlobalValues.DiamondCount -= 50;
            GlobalValues.Skin_3_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton4() {
        if (GlobalValues.DiamondCount >= 75) {
            GlobalValues.DiamondCount -= 75;
            GlobalValues.Skin_4_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton5() {
        if (GlobalValues.DiamondCount >= 100) {
            GlobalValues.DiamondCount -= 100;
            GlobalValues.Skin_5_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton6() {
        if (GlobalValues.DiamondCount >= 125) {
            GlobalValues.DiamondCount -= 125;
            GlobalValues.Skin_6_Is_Activated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }
}