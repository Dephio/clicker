import { _decorator, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass } = _decorator;

@ccclass('FoodManager')
export class FoodManager extends Component {

    onClickButton1() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 1:
                if (GlobalValues.ServerData.moneyCount >= 10 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 10;
                    GlobalValues.HealthPoints += 0.1;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 10 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 10;
                    GlobalValues.HealthPoints += 0.01;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 10 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 10;
                    GlobalValues.HealthPoints += 0.001;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 10 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 10;
                    GlobalValues.HealthPoints += 0.0001;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton2() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 1:
                if (GlobalValues.ServerData.moneyCount >= 50 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 50;
                    GlobalValues.HealthPoints += 0.4;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 50 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 50;
                    GlobalValues.HealthPoints += 0.04;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 50 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 50;
                    GlobalValues.HealthPoints += 0.004;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 50 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 50;
                    GlobalValues.HealthPoints += 0.0004;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton3() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 1:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.6;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.06;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.006;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.0006;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton4() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.15;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        
            case 3:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.015;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 80 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 80;
                    GlobalValues.HealthPoints += 0.0015;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton5() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 200 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 200;
                    GlobalValues.HealthPoints += 0.5;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 200 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 200;
                    GlobalValues.HealthPoints += 0.05;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 200 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 200;
                    GlobalValues.HealthPoints += 0.005;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton6() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 2:
                if (GlobalValues.ServerData.moneyCount >= 300 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 300;
                    GlobalValues.HealthPoints += 0.6;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 3:
                if (GlobalValues.ServerData.moneyCount >= 300 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 300;
                    GlobalValues.HealthPoints += 0.06;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 300 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 300;
                    GlobalValues.HealthPoints += 0.006;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton7() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 3:
                if (GlobalValues.ServerData.moneyCount >= 290 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 290;
                    GlobalValues.HealthPoints += 0.2;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 290 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 290;
                    GlobalValues.HealthPoints += 0.02;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton8() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 3:
                if (GlobalValues.ServerData.moneyCount >= 1500 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 1500;
                    GlobalValues.HealthPoints += 0.7;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 1500 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 1500;
                    GlobalValues.HealthPoints += 0.07;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton9() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 3:
                if (GlobalValues.ServerData.moneyCount >= 1800 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 1800;
                    GlobalValues.HealthPoints += 0.8;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;

            case 4:
                if (GlobalValues.ServerData.moneyCount >= 1800 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 1800;
                    GlobalValues.HealthPoints += 0.08;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton10() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 4:
                if (GlobalValues.ServerData.moneyCount >= 800 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 800;
                    GlobalValues.HealthPoints += 0.3;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton11() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 4:
                if (GlobalValues.ServerData.moneyCount >= 1800 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 1800;
                    GlobalValues.HealthPoints += 0.85;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }

    onClickButton12() {
        switch (GlobalValues.ServerData.playerLevel) {
            case 4:
                if (GlobalValues.ServerData.moneyCount >= 2200 && GlobalValues.HealthPoints != 1) {
                    GlobalValues.ServerData.moneyCount -= 2200;
                    GlobalValues.HealthPoints += 0.95;
                    GlobalValues.BuySoundIsPlaying = true;
                    if (GlobalValues.HealthPoints >= 1) {
                        GlobalValues.HealthPoints = 1;
                    }
                }
                break;
        }
    }
}