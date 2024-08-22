import { _decorator, Button, Component, Label, ProgressBar, Sprite } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass, property } = _decorator;

@ccclass('CharacteristicsLoader')
export class CharacteristicsLoader extends Component {

    @property(Sprite)
    private Diamond_Button_Health: Sprite;

    @property(Sprite)
    private Money_Button_Health: Sprite;
    
    @property(Sprite)
    private Diamond_Button_Money: Sprite;

    @property(Sprite)
    private Money_Button_Money: Sprite;

    @property(ProgressBar)
    private Health_Bar: ProgressBar;

    @property(ProgressBar)
    private Money_Bar: ProgressBar;

    protected update(): void {
        if (GlobalValues.ServerData.healthLevel < GlobalValues.ServerData.playerLevel) {
            this.Diamond_Button_Health.grayscale = false;
            this.Money_Button_Health.grayscale = false;
            this.Diamond_Button_Health.getComponent(Button).interactable = true;
            this.Money_Button_Health.getComponent(Button).interactable = true;
        }
        else {
            this.Diamond_Button_Health.grayscale = true;
            this.Money_Button_Health.grayscale = true;
            this.Diamond_Button_Health.getComponent(Button).interactable = false;
            this.Money_Button_Health.getComponent(Button).interactable = false;
        }

        if (GlobalValues.ServerData.moneyLevel < GlobalValues.ServerData.playerLevel) {
            this.Diamond_Button_Money.grayscale = false;
            this.Money_Button_Money.grayscale = false;
            this.Diamond_Button_Money.getComponent(Button).interactable = true;
            this.Money_Button_Money.getComponent(Button).interactable = true;
        }
        else {
            this.Diamond_Button_Money.grayscale = true;
            this.Money_Button_Money.grayscale = true;
            this.Diamond_Button_Money.getComponent(Button).interactable = false;
            this.Money_Button_Money.getComponent(Button).interactable = false;
        }

        switch (GlobalValues.ServerData.healthLevel) {
            case 0:
                this.Money_Button_Health.getComponentInChildren(Label).string = "500$";
                this.Diamond_Button_Health.getComponentInChildren(Label).string = " 1💎";
                this.Health_Bar.progress = 0;
                break;

            case 1:
                this.Money_Button_Health.getComponentInChildren(Label).string = "5000$";
                this.Diamond_Button_Health.getComponentInChildren(Label).string = " 10💎";
                this.Health_Bar.progress = 0.25;
                break;
    
            case 2:
                this.Money_Button_Health.getComponentInChildren(Label).string = "50000$";
                this.Diamond_Button_Health.getComponentInChildren(Label).string = " 50💎";
                this.Health_Bar.progress = 0.5;
                break;
                    
            case 3:
                this.Money_Button_Health.getComponentInChildren(Label).string = "500000$";
                this.Diamond_Button_Health.getComponentInChildren(Label).string = " 150💎";
                this.Health_Bar.progress = 0.75;
                break;

            case 4:
                this.Money_Button_Health.getComponentInChildren(Label).string = "MAX";
                this.Diamond_Button_Health.getComponentInChildren(Label).string = "MAX";
                this.Health_Bar.progress = 1;
                break;
        }

        switch (GlobalValues.ServerData.moneyLevel) {
            case 0:
                this.Money_Button_Money.getComponentInChildren(Label).string = "500$";
                this.Diamond_Button_Money.getComponentInChildren(Label).string = " 1💎";
                this.Money_Bar.progress = 0;
                break;

            case 1:
                this.Money_Button_Money.getComponentInChildren(Label).string = "5000$";
                this.Diamond_Button_Money.getComponentInChildren(Label).string = " 10💎";
                this.Money_Bar.progress = 0.25;
                break;
    
            case 2:
                this.Money_Button_Money.getComponentInChildren(Label).string = "50000$";
                this.Diamond_Button_Money.getComponentInChildren(Label).string = " 50💎";
                this.Money_Bar.progress = 0.5;
                break;
                    
            case 3:
                this.Money_Button_Money.getComponentInChildren(Label).string = "500000$";
                this.Diamond_Button_Money.getComponentInChildren(Label).string = " 150💎";
                this.Money_Bar.progress = 0.75;
                break;

            case 4:
                this.Money_Button_Money.getComponentInChildren(Label).string = "MAX";
                this.Diamond_Button_Money.getComponentInChildren(Label).string = "MAX";
                this.Money_Bar.progress = 1;
                break;
        }
    }

    onClickMoneyButtonHealth() {
        switch (GlobalValues.ServerData.healthLevel) {
            case 0:
                if (GlobalValues.ServerData.moneyCount >= 500) {
                    GlobalValues.ServerData.moneyCount -= 500;
                    GlobalValues.ServerData.healthLevel = 1;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.ServerData.moneyCount >= 5000) {
                    GlobalValues.ServerData.moneyCount -= 5000;
                    GlobalValues.ServerData.healthLevel = 2;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.ServerData.moneyCount >= 50000) {
                    GlobalValues.ServerData.moneyCount -= 50000;
                    GlobalValues.ServerData.healthLevel = 3;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 500000) {
                    GlobalValues.ServerData.moneyCount -= 500000;
                    GlobalValues.ServerData.healthLevel = 4;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickDiamondButtonHealth() {
        switch (GlobalValues.ServerData.healthLevel) {
            case 0:
                if (GlobalValues.ServerData.diamondCount >= 1) {
                    GlobalValues.ServerData.diamondCount -= 1;
                    GlobalValues.ServerData.healthLevel = 1;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.ServerData.diamondCount >= 10) {
                    GlobalValues.ServerData.diamondCount -= 10;
                    GlobalValues.ServerData.healthLevel = 2;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.ServerData.diamondCount >= 50) {
                    GlobalValues.ServerData.diamondCount -= 50;
                    GlobalValues.ServerData.healthLevel = 3;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.ServerData.diamondCount >= 150) {
                    GlobalValues.ServerData.diamondCount -= 150;
                    GlobalValues.ServerData.healthLevel = 4;
                    GlobalValues.ServerData.lifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickMoneyButtonMoney() {
        switch (GlobalValues.ServerData.moneyLevel) {
            case 0:
                if (GlobalValues.ServerData.moneyCount >= 500) {
                    GlobalValues.ServerData.moneyCount -= 500;
                    GlobalValues.ServerData.moneyLevel = 1;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.ServerData.moneyCount >= 5000) {
                    GlobalValues.ServerData.moneyCount -= 5000;
                    GlobalValues.ServerData.moneyLevel = 2;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.ServerData.moneyCount >= 50000) {
                    GlobalValues.ServerData.moneyCount -= 50000;
                    GlobalValues.ServerData.moneyLevel = 3;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 500000) {
                    GlobalValues.ServerData.moneyCount -= 500000;
                    GlobalValues.ServerData.moneyLevel = 4;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickDiamondButtonMoney() {
        switch (GlobalValues.ServerData.moneyLevel) {
            case 0:
                if (GlobalValues.ServerData.diamondCount >= 1) {
                    GlobalValues.ServerData.diamondCount -= 1;
                    GlobalValues.ServerData.moneyLevel = 1;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.ServerData.diamondCount >= 10) {
                    GlobalValues.ServerData.diamondCount -= 10;
                    GlobalValues.ServerData.moneyLevel = 2;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
                
            case 2:
                if (GlobalValues.ServerData.diamondCount >= 50) {
                    GlobalValues.ServerData.diamondCount -= 50;
                    GlobalValues.ServerData.moneyLevel = 3;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
                
            case 3:
                if (GlobalValues.ServerData.diamondCount >= 150) {
                    GlobalValues.ServerData.diamondCount -= 150;
                    GlobalValues.ServerData.moneyLevel = 4;
                    GlobalValues.ServerData.moneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }
}