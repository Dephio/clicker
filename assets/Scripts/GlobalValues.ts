import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GlobalValues')
export class GlobalValues extends Component {

    static BonusTime: number = 30;
    static PageNumber: number = 3;
    static BonusPoints: number = 1;
    static HealthPoints: number = 1;
    static BonusNumber: number = null;
    static LevelUpdate: boolean = null;
    static AdvIsShow: boolean = false;
    static GameIsOver: boolean = false;
    static GameIsPaused: boolean = false;
    static BonusIsSpawned: boolean = false;
    static MusicIsPlaying: boolean = false;
    static LevelIsReceived: boolean = false;
    static MusicIsActivated: boolean = true;
    static SoundIsActivated: boolean = true;
    static BonusIsActivated: boolean = false;
    static BuySoundIsPlaying: boolean = false;
    static GameIsStartFirstTime: boolean = true;
    static LastSentData: object | null = null;

    static ServerData = {
        lifeTime: 30,
        moneyForClick: 1,
        moneyLevel: 0,
        healthLevel: 0,
        playerLevel: 1,
        skinNumber: 1,
        moneyCount: 0,
        diamondCount: 0,
        skinsIsSaved: false,
        firstSkinIsActivated: true,
        secondSkinIsActivated: false,
        thirdSkinIsActivated: false,
        fourthSkinIsActivated: false,
        fifthSkinIsActivated: false,
        sixthSkinIsActivated: false
    };

    static resetGlobalValues() {
        this.BonusTime = 30;
        this.PageNumber = 3;
        this.BonusPoints = 1;
        this.HealthPoints = 1;
        this.BonusNumber = null;
        this.LevelUpdate = null;
        this.GameIsOver = false;
        this.GameIsPaused = false;
        this.BonusIsSpawned = false;
        this.MusicIsPlaying = false;
        this.LevelIsReceived = false;
        this.BonusIsActivated = false;
        this.BuySoundIsPlaying = false;
    }

    static resetServerData() {
        this.ServerData.lifeTime = 30;
        this.ServerData.moneyCount = 0;
        this.ServerData.moneyLevel = 0;
        this.ServerData.healthLevel = 0;
        this.ServerData.playerLevel = 1;
        this.ServerData.moneyForClick = 1;
    }
}