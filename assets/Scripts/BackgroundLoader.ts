import { _decorator, Component, SpriteFrame, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('BackgroundLoader')
export class BackgroundLoader extends Component {

    @property(Sprite)
    private Background_Sprite: Sprite;

    @property(SpriteFrame)
    private Background_1: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_2: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_3: SpriteFrame;
    
    @property(SpriteFrame)
    private Background_4: SpriteFrame;

    protected update(): void {
        switch (GlobalValues.ServerData.playerLevel) {
            case 1:
                this.Background_Sprite.spriteFrame = this.Background_1;
                break;

            case 2:
                this.Background_Sprite.spriteFrame = this.Background_2;
                break;

            case 3:
                this.Background_Sprite.spriteFrame = this.Background_3;
                break;

            case 4:
                this.Background_Sprite.spriteFrame = this.Background_4;
                break;
        }
    }
}