import { _decorator, director, find, Component, AudioSource } from 'cc';
import { GlobalValues } from './GlobalValues';
import { ysdk } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
import { YandexGames } from 'ysdk';
const { ccclass } = _decorator;

@ccclass('SceneLoader')
export class SceneLoader extends Component {

    protected onLoad(): void {
        if (GlobalValues.GameIsStartFirstTime == true) {
            GlobalValues.GameIsStartFirstTime = false;
            this.getDataFromServer();

            director.preloadScene('Start', function () {
                console.log('Start scene preloaded.');
            });
            director.preloadScene('Main', function () {
                console.log('Main scene preloaded.');
            });
            director.preloadScene('Settings', function () {
                console.log('Settings scene preloaded.');
            });
            director.preloadScene('Shop', function () {
                console.log('Shop scene preloaded.');
            });
            director.preloadScene('End', function () {
                console.log('End scene preloaded.');
            });
            
            YaGames.init().then((ysdk) => {
                ysdk.features.LoadingAPI?.ready();
            }).catch(console.error);

            this.onLoadServerData();
        }
    }

    onLoadServerData() {
        setInterval(() => {
            this.sendDataToServer();
            console.log('Data is sending...');
        }, 20000); 
    }

    sendDataToServer() {
        var player: YandexGames.Player;
        ysdk.getPlayer({ scopes: false }).then(_player => {
            player = _player;
            const sentData = GlobalValues.ServerData;
            player.setData<object>(sentData, true).then(() => {
                console.log('Data sent.');
            }).catch(console.error);
        }).catch(err => {
            console.error(err);
        });
    }

    getDataFromServer() {
        const isFirstVisit = localStorage.getItem('isFirstVisit');
        if (!isFirstVisit) {
            console.log('The first time you enter the game, the data will not be loaded.');
            localStorage.setItem('isFirstVisit', 'true');
            return;
        }
        var player: YandexGames.Player;
        ysdk.getPlayer({ scopes: false }).then(_player => {
            player = _player;
            player.getData<object>().then(data => {
                const receivedObject = JSON.stringify(data);
                const receivedData = JSON.parse(receivedObject);
                GlobalValues.ServerData = receivedData;
                console.log('Data received.');
            }).catch(console.error);
        }).catch(err => {
            console.error(err);
        });
    }

    onShowAdvertising() {
        return new Promise<void>((resolve) => {
            GlobalValues.GameIsPaused = true;
            if (GlobalValues.MusicIsActivated == true && GlobalValues.MusicIsPlaying == true) {
                const MusicManager = find("Music_Manager");
                MusicManager.getComponent(AudioSource).pause();
            }

            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: () => {
                        GlobalValues.AdvIsShow = true;
                        this.onReloadAdvertising();
                        if (GlobalValues.MusicIsActivated == true && GlobalValues.MusicIsPlaying == true) {
                            const MusicManager = find("Music_Manager");
                            MusicManager.getComponent(AudioSource).play();
                        }
                        GlobalValues.GameIsPaused = false;
                        console.log('Video advertising closed.');
                        resolve();
                    },
                    onError: (error) => {
                        console.error(error);
                        resolve();
                    }
                }
            });
        });
    }

    onReloadAdvertising() {
        setTimeout(() => {
            GlobalValues.AdvIsShow = false;
            console.log('Advertising is now available.');
        }, 65000);
    }

    async onLoadMainScene() {
        if (GlobalValues.AdvIsShow == false) {
            await this.onShowAdvertising();
        }
        if (GlobalValues.GameIsOver == true) {
            director.loadScene('End');
        }
        else {
            director.loadScene('Main');
            GlobalValues.GameIsPaused = false;
        }
    }

    async onResetMainScene() {
        if (GlobalValues.AdvIsShow == false) {
            await this.onShowAdvertising();
        }
        GlobalValues.resetGlobalValues();
        GlobalValues.resetServerData();
        director.loadScene('Main');
    }

    async onLoadStartScene() {
        if (GlobalValues.AdvIsShow == false) {
            await this.onShowAdvertising();
        }
        director.loadScene('Start');
        GlobalValues.GameIsPaused = true;
    }

    async onLoadSettingsScene() {
        if (GlobalValues.AdvIsShow == false) {
            await this.onShowAdvertising();
        }
        director.loadScene('Settings');
        GlobalValues.GameIsPaused = true;
    }

    async onLoadShopScene() {
        if (GlobalValues.AdvIsShow == false) {
            await this.onShowAdvertising();
        }
        director.loadScene('Shop');
        GlobalValues.GameIsPaused = true;
    }
}