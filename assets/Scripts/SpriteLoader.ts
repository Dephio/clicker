import { _decorator, Component, SpriteFrame, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('SpriteLoader')
export class SpriteLoader extends Component {

    @property(Sprite)
    private Player_Sprite: Sprite;

    @property(Sprite)
    private Background_Sprite: Sprite;
    
    @property(SpriteFrame)
    private Player_1: SpriteFrame;

    @property(SpriteFrame)
    private Player_2: SpriteFrame;

    @property(SpriteFrame)
    private Player_3: SpriteFrame;

    @property(SpriteFrame)
    private Player_4: SpriteFrame;

    @property(SpriteFrame)
    private Background_1: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_2: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_3: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_4: SpriteFrame;

    protected update(): void {
        switch (GlobalValues.PlayersLevel) {
            case 1:
                this.Player_Sprite.spriteFrame = this.Player_1;
                this.Background_Sprite.spriteFrame = this.Background_1;
                break;

            case 2:
                this.Player_Sprite.spriteFrame = this.Player_2;
                this.Background_Sprite.spriteFrame = this.Background_2;
                break;

            case 3:
                this.Player_Sprite.spriteFrame = this.Player_3;
                this.Background_Sprite.spriteFrame = this.Background_3;
                break;

            case 4:
                this.Player_Sprite.spriteFrame = this.Player_4;
                this.Background_Sprite.spriteFrame = this.Background_4;
                break;
        }
    }
}