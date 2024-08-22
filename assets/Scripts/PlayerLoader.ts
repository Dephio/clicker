import { _decorator, Component, SpriteFrame, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('PlayerLoader')
export class PlayerLoader extends Component {

    @property(Sprite)
    private Player_Sprite: Sprite;

    @property(SpriteFrame)
    private Player_1: SpriteFrame;

    @property(SpriteFrame)
    private Player_2: SpriteFrame;

    @property(SpriteFrame)
    private Player_3: SpriteFrame;

    @property(SpriteFrame)
    private Player_4: SpriteFrame;

    @property(SpriteFrame)
    private Player_5: SpriteFrame;

    @property(SpriteFrame)
    private Player_6: SpriteFrame;

    @property(SpriteFrame)
    private Player_7: SpriteFrame;

    @property(SpriteFrame)
    private Player_8: SpriteFrame;

    @property(SpriteFrame)
    private Player_9: SpriteFrame;

    @property(SpriteFrame)
    private Player_10: SpriteFrame;

    protected update(): void {
        switch (GlobalValues.ServerData.skinNumber) {
            case 1:
                this.Player_Sprite.spriteFrame = this.Player_1;
                break;

            case 2:
                this.Player_Sprite.spriteFrame = this.Player_2;
                break;

            case 3:
                this.Player_Sprite.spriteFrame = this.Player_3;
                break;

            case 4:
                this.Player_Sprite.spriteFrame = this.Player_4;
                break;

            case 5:
                this.Player_Sprite.spriteFrame = this.Player_5;
                break;

            case 6:
                this.Player_Sprite.spriteFrame = this.Player_6;
                break;

            case 7:
                this.Player_Sprite.spriteFrame = this.Player_7;
                break;

            case 8:
                this.Player_Sprite.spriteFrame = this.Player_8;
                break;

            case 9:
                this.Player_Sprite.spriteFrame = this.Player_9;
                break;

            case 10:
                this.Player_Sprite.spriteFrame = this.Player_10;
                break;
        }
    }
}