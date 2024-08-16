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
        if (GlobalValues.HealthLevel < GlobalValues.PlayerLevel) {
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

        if (GlobalValues.MoneyLevel < GlobalValues.PlayerLevel) {
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

        switch (GlobalValues.HealthLevel) {
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

        switch (GlobalValues.MoneyLevel) {
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
        switch (GlobalValues.HealthLevel) {
            case 0:
                if (GlobalValues.MoneyCount >= 500) {
                    GlobalValues.MoneyCount -= 500;
                    GlobalValues.HealthLevel = 1;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.MoneyCount >= 5000) {
                    GlobalValues.MoneyCount -= 5000;
                    GlobalValues.HealthLevel = 2;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.MoneyCount >= 50000) {
                    GlobalValues.MoneyCount -= 50000;
                    GlobalValues.HealthLevel = 3;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.MoneyCount >= 500000) {
                    GlobalValues.MoneyCount -= 500000;
                    GlobalValues.HealthLevel = 4;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickDiamondButtonHealth() {
        switch (GlobalValues.HealthLevel) {
            case 0:
                if (GlobalValues.DiamondCount >= 1) {
                    GlobalValues.DiamondCount -= 1;
                    GlobalValues.HealthLevel = 1;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.DiamondCount >= 10) {
                    GlobalValues.DiamondCount -= 10;
                    GlobalValues.HealthLevel = 2;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.DiamondCount >= 50) {
                    GlobalValues.DiamondCount -= 50;
                    GlobalValues.HealthLevel = 3;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.DiamondCount >= 150) {
                    GlobalValues.DiamondCount -= 150;
                    GlobalValues.HealthLevel = 4;
                    GlobalValues.LifeTime += 11.25;
                    this.Health_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickMoneyButtonMoney() {
        switch (GlobalValues.MoneyLevel) {
            case 0:
                if (GlobalValues.MoneyCount >= 500) {
                    GlobalValues.MoneyCount -= 500;
                    GlobalValues.MoneyLevel = 1;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.MoneyCount >= 5000) {
                    GlobalValues.MoneyCount -= 5000;
                    GlobalValues.MoneyLevel = 2;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 2:
                if (GlobalValues.MoneyCount >= 50000) {
                    GlobalValues.MoneyCount -= 50000;
                    GlobalValues.MoneyLevel = 3;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 3:
                if (GlobalValues.MoneyCount >= 500000) {
                    GlobalValues.MoneyCount -= 500000;
                    GlobalValues.MoneyLevel = 4;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }

    onClickDiamondButtonMoney() {
        switch (GlobalValues.MoneyLevel) {
            case 0:
                if (GlobalValues.DiamondCount >= 1) {
                    GlobalValues.DiamondCount -= 1;
                    GlobalValues.MoneyLevel = 1;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;

            case 1:
                if (GlobalValues.DiamondCount >= 10) {
                    GlobalValues.DiamondCount -= 10;
                    GlobalValues.MoneyLevel = 2;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
                
            case 2:
                if (GlobalValues.DiamondCount >= 50) {
                    GlobalValues.DiamondCount -= 50;
                    GlobalValues.MoneyLevel = 3;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
                
            case 3:
                if (GlobalValues.DiamondCount >= 150) {
                    GlobalValues.DiamondCount -= 150;
                    GlobalValues.MoneyLevel = 4;
                    GlobalValues.MoneyForClick += 1;
                    this.Money_Bar.progress += 0.25;
                    GlobalValues.BuySoundIsPlaying = true;
                }
                break;
        }
    }
}