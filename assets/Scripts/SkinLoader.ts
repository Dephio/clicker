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
        if (GlobalValues.ServerData.firstSkinIsActivated == true) {
            this.Skin_Sprite_1.grayscale = false;
            this.Buy_Button_1.active = false;
        }

        if (GlobalValues.ServerData.secondSkinIsActivated == true) {
            this.Skin_Sprite_2.grayscale = false;
            this.Buy_Button_2.active = false;
        }

        if (GlobalValues.ServerData.thirdSkinIsActivated == true) {
            this.Skin_Sprite_3.grayscale = false;
            this.Buy_Button_3.active = false;
        }

        if (GlobalValues.ServerData.fourthSkinIsActivated == true) {
            this.Skin_Sprite_4.grayscale = false;
            this.Buy_Button_4.active = false;
        }

        if (GlobalValues.ServerData.fifthSkinIsActivated == true) {
            this.Skin_Sprite_5.grayscale = false;
            this.Buy_Button_5.active = false;
        }

        if (GlobalValues.ServerData.sixthSkinIsActivated == true) {
            this.Skin_Sprite_6.grayscale = false;
            this.Buy_Button_6.active = false;
        }
    }

    onClickBuyButton1() {
        if (GlobalValues.ServerData.diamondCount >= 0) {
            GlobalValues.ServerData.diamondCount -= 0;
            GlobalValues.ServerData.firstSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton2() {
        if (GlobalValues.ServerData.diamondCount >= 25) {
            GlobalValues.ServerData.diamondCount -= 25;
            GlobalValues.ServerData.secondSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton3() {
        if (GlobalValues.ServerData.diamondCount >= 50) {
            GlobalValues.ServerData.diamondCount -= 50;
            GlobalValues.ServerData.thirdSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton4() {
        if (GlobalValues.ServerData.diamondCount >= 75) {
            GlobalValues.ServerData.diamondCount -= 75;
            GlobalValues.ServerData.fourthSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton5() {
        if (GlobalValues.ServerData.diamondCount >= 100) {
            GlobalValues.ServerData.diamondCount -= 100;
            GlobalValues.ServerData.fifthSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }

    onClickBuyButton6() {
        if (GlobalValues.ServerData.diamondCount >= 125) {
            GlobalValues.ServerData.diamondCount -= 125;
            GlobalValues.ServerData.sixthSkinIsActivated = true;
            GlobalValues.BuySoundIsPlaying = true;
        }
    }
}