import { _decorator, director, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
const { ccclass } = _decorator;

@ccclass('SceneLoader')
export class SceneLoader extends Component {

    onLoadMainScene() {
        if (GlobalValues.GameIsOver == true) {
            director.loadScene('End');
        }
        else {
            director.loadScene('Main');
            GlobalValues.GameIsPaused = false;
        }
    }

    resetMainScene() {
        GlobalValues.resetValues();
        director.loadScene('Main');
    }

    onLoadStartScene() {
        director.loadScene('Start');
        GlobalValues.GameIsPaused = true;
    }

    onLoadSettingsScene() {
        director.loadScene('Settings');
        GlobalValues.GameIsPaused = true;
    }

    onLoadShopScene() {
        director.loadScene('Shop');
        GlobalValues.GameIsPaused = true;
    }
}