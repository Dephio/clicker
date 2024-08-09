import { _decorator, Button, Component, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property} = _decorator;

@ccclass('ProductLoader')
export class ProductLoader extends Component {

    @property(Button)
    private Button_1: Button;
    
    @property(Button)
    private Button_2: Button;
    
    @property(Button)
    private Button_3: Button;
    
    @property(Button)
    private Button_4: Button;
    
    @property(Button)
    private Button_5: Button;
    
    @property(Button)
    private Button_6: Button;

    @property(Button)
    private Button_7: Button;
    
    @property(Button)
    private Button_8: Button;
    
    @property(Button)
    private Button_9: Button;
    
    @property(Button)
    private Button_10: Button;
    
    @property(Button)
    private Button_11: Button;
    
    @property(Button)
    private Button_12: Button;

    protected update(): void {
        switch (GlobalValues.PlayersLevel) {
            case 1:
                this.Button_1.getComponent(Sprite).grayscale = false;
                this.Button_2.getComponent(Sprite).grayscale = false;
                this.Button_3.getComponent(Sprite).grayscale = false;
                this.Button_1.interactable = true;
                this.Button_2.interactable = true;
                this.Button_3.interactable = true;
                this.Button_4.getComponent(Sprite).grayscale = true;
                this.Button_5.getComponent(Sprite).grayscale = true;
                this.Button_6.getComponent(Sprite).grayscale = true;
                this.Button_4.interactable = false;
                this.Button_5.interactable = false;
                this.Button_6.interactable = false;
                this.Button_7.getComponent(Sprite).grayscale = true;
                this.Button_8.getComponent(Sprite).grayscale = true;
                this.Button_9.getComponent(Sprite).grayscale = true;
                this.Button_7.interactable = false;
                this.Button_8.interactable = false;
                this.Button_9.interactable = false;
                this.Button_10.getComponent(Sprite).grayscale = true;
                this.Button_11.getComponent(Sprite).grayscale = true;
                this.Button_12.getComponent(Sprite).grayscale = true;
                this.Button_10.interactable = false;
                this.Button_11.interactable = false;
                this.Button_12.interactable = false;
                break;

            case 2:
                this.Button_1.getComponent(Sprite).grayscale = false;
                this.Button_2.getComponent(Sprite).grayscale = false;
                this.Button_3.getComponent(Sprite).grayscale = false;
                this.Button_1.interactable = true;
                this.Button_2.interactable = true;
                this.Button_3.interactable = true;
                this.Button_4.getComponent(Sprite).grayscale = false;
                this.Button_5.getComponent(Sprite).grayscale = false;
                this.Button_6.getComponent(Sprite).grayscale = false;
                this.Button_4.interactable = true;
                this.Button_5.interactable = true;
                this.Button_6.interactable = true;
                this.Button_7.getComponent(Sprite).grayscale = true;
                this.Button_8.getComponent(Sprite).grayscale = true;
                this.Button_9.getComponent(Sprite).grayscale = true;
                this.Button_7.interactable = false;
                this.Button_8.interactable = false;
                this.Button_9.interactable = false;
                this.Button_10.getComponent(Sprite).grayscale = true;
                this.Button_11.getComponent(Sprite).grayscale = true;
                this.Button_12.getComponent(Sprite).grayscale = true;
                this.Button_10.interactable = false;
                this.Button_11.interactable = false;
                this.Button_12.interactable = false;
                break;

            case 3:
                this.Button_1.getComponent(Sprite).grayscale = false;
                this.Button_2.getComponent(Sprite).grayscale = false;
                this.Button_3.getComponent(Sprite).grayscale = false;
                this.Button_1.interactable = true;
                this.Button_2.interactable = true;
                this.Button_3.interactable = true;
                this.Button_4.getComponent(Sprite).grayscale = false;
                this.Button_5.getComponent(Sprite).grayscale = false;
                this.Button_6.getComponent(Sprite).grayscale = false;
                this.Button_4.interactable = true;
                this.Button_5.interactable = true;
                this.Button_6.interactable = true;
                this.Button_7.getComponent(Sprite).grayscale = false;
                this.Button_8.getComponent(Sprite).grayscale = false;
                this.Button_9.getComponent(Sprite).grayscale = false;
                this.Button_7.interactable = true;
                this.Button_8.interactable = true;
                this.Button_9.interactable = true;
                this.Button_10.getComponent(Sprite).grayscale = true;
                this.Button_11.getComponent(Sprite).grayscale = true;
                this.Button_12.getComponent(Sprite).grayscale = true;
                this.Button_10.interactable = false;
                this.Button_11.interactable = false;
                this.Button_12.interactable = false;
                break;

            case 4:
                this.Button_1.getComponent(Sprite).grayscale = false;
                this.Button_2.getComponent(Sprite).grayscale = false;
                this.Button_3.getComponent(Sprite).grayscale = false;
                this.Button_1.interactable = true;
                this.Button_2.interactable = true;
                this.Button_3.interactable = true;
                this.Button_4.getComponent(Sprite).grayscale = false;
                this.Button_5.getComponent(Sprite).grayscale = false;
                this.Button_6.getComponent(Sprite).grayscale = false;
                this.Button_4.interactable = true;
                this.Button_5.interactable = true;
                this.Button_6.interactable = true;
                this.Button_7.getComponent(Sprite).grayscale = false;
                this.Button_8.getComponent(Sprite).grayscale = false;
                this.Button_9.getComponent(Sprite).grayscale = false;
                this.Button_7.interactable = true;
                this.Button_8.interactable = true;
                this.Button_9.interactable = true;
                this.Button_10.getComponent(Sprite).grayscale = false;
                this.Button_11.getComponent(Sprite).grayscale = false;
                this.Button_12.getComponent(Sprite).grayscale = false;
                this.Button_10.interactable = true;
                this.Button_11.interactable = true;
                this.Button_12.interactable = true;
                break;
        }
    }
}