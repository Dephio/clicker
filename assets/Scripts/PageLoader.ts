import { _decorator, Component, Label, Node } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('PageLoader')
export class PageLoader extends Component {

    @property(Node)
    private Page_1: Node;

    @property(Node)
    private Page_2: Node;

    @property(Node)
    private Page_3: Node;
    
    @property(Node)
    private Page_4: Node;

    @property(Node)
    private Page_5: Node;

    @property(Node)
    private Right_Button: Node;

    @property(Node)
    private Left_Button: Node;

    @property(Label)
    private Diamond_Label: Label;

    protected start(): void {
        this.onLoadPage();
        this.Diamond_Label.string = GlobalValues.DiamondCount.toString();
    }

    rightClick() {
        if (GlobalValues.PageNumber != 5) {
            GlobalValues.PageNumber++;
            this.onLoadPage();
        }
    }

    leftClick() {
        if (GlobalValues.PageNumber != 1) {
            GlobalValues.PageNumber--;
            this.onLoadPage();
        }
    }

    onLoadPage() {
        switch (GlobalValues.PageNumber) {
            case 1:
                this.Page_1.active = true;
                this.Page_2.active = false;
                this.Page_3.active = false;
                this.Page_4.active = false;
                this.Page_5.active = false;
                this.Right_Button.active = true;
                this.Left_Button.active = false;
                break;

            case 2:
                this.Page_1.active = false;
                this.Page_2.active = true;
                this.Page_3.active = false;
                this.Page_4.active = false;
                this.Page_5.active = false;
                this.Right_Button.active = true;
                this.Left_Button.active = true;
                break;

            case 3:
                this.Page_1.active = false;
                this.Page_2.active = false;
                this.Page_3.active = true;
                this.Page_4.active = false;
                this.Page_5.active = false;
                this.Right_Button.active = true;
                this.Left_Button.active = true;
                break;

            case 4:
                this.Page_1.active = false;
                this.Page_2.active = false;
                this.Page_3.active = false;
                this.Page_4.active = true;
                this.Page_5.active = false;
                this.Right_Button.active = true;
                this.Left_Button.active = true;
                break;

            case 5:
                this.Page_1.active = false;
                this.Page_2.active = false;
                this.Page_3.active = false;
                this.Page_4.active = false;
                this.Page_5.active = true;
                this.Right_Button.active = false;
                this.Left_Button.active = true;
                break;
        }
    }
}