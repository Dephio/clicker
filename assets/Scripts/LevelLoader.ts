import { _decorator, Component, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('LevelLoader')
export class LevelLoader extends Component {

    @property(Sprite)
    private Star_Icon_1: Sprite;
    
    @property(Sprite)
    private Star_Icon_2: Sprite;
    
    @property(Sprite)
    private Star_Icon_3: Sprite;
    
    @property(Sprite)
    private Star_Icon_4: Sprite;
    
    protected update(): void {
        switch (GlobalValues.PlayerLevel) {
            case 1:
                this.Star_Icon_1.grayscale = false;
                this.Star_Icon_2.grayscale = true;
                this.Star_Icon_3.grayscale = true;
                this.Star_Icon_4.grayscale = true;
                break;

            case 2:
                this.Star_Icon_1.grayscale = false;
                this.Star_Icon_2.grayscale = false;
                this.Star_Icon_3.grayscale = true;
                this.Star_Icon_4.grayscale = true;
                break;

            case 3:
                this.Star_Icon_1.grayscale = false;
                this.Star_Icon_2.grayscale = false;
                this.Star_Icon_3.grayscale = false;
                this.Star_Icon_4.grayscale = true;
                break;

            case 4:
                this.Star_Icon_1.grayscale = false;
                this.Star_Icon_2.grayscale = false;
                this.Star_Icon_3.grayscale = false;
                this.Star_Icon_4.grayscale = false;
                break;
        }
    }
}