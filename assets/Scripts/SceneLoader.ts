import { _decorator, director, Component } from 'cc';
import { GlobalValues } from './GlobalValues';
import { ysdk } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
const { ccclass } = _decorator;

@ccclass('SceneLoader')
export class SceneLoader extends Component {

    protected onLoad(): void {
        const callbacks = {
            onClose: () => {
                YaGames.init()
                    .then((ysdk) => {
                        ysdk.features.LoadingAPI?.ready()
                    })
                    .catch(console.error);
                GlobalValues.AdvIsShow = true;
            }
          };
        if (GlobalValues.AdvIsShow == false && GlobalValues.GameIsOver == false) {
            ysdk.adv.showFullscreenAdv({ callbacks });
        }
    }

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
        const callbacks = {
            onClose: () => {
                GlobalValues.resetValues();
                director.loadScene('Main');
                GlobalValues.AdvIsShow = true;
            }
          };
        if (GlobalValues.AdvIsShow == false) {
            ysdk.adv.showFullscreenAdv({ callbacks });
        }
        else {
            GlobalValues.resetValues();
            director.loadScene('Main');
        }
    }

    onLoadStartScene() {
        const callbacks = {
            onClose: () => {
                director.loadScene('Start');
                GlobalValues.GameIsPaused = true;
                GlobalValues.AdvIsShow = true;
            }
          };
        if (GlobalValues.AdvIsShow == false) {
            ysdk.adv.showFullscreenAdv({ callbacks });
        }
        else {
            director.loadScene('Start');
            GlobalValues.GameIsPaused = true;
        }
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