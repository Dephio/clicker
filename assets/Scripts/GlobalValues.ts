import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GlobalValues')
export class GlobalValues extends Component {
    
    static LifeTime: number = 30;
    static BonusTime: number = 30;
    static PageNumber: number = 3;
    static MoneyCount: number = 0;
    static BonusPoints: number = 1;
    static HealthPoints: number = 1;
    static PlayersLevel: number = 1;
    static MoneyForClick: number = 1;
    static BonusNumber: number = null;
    static LevelUpdate: boolean = null;
    static GameIsOver: boolean = false;
    static GameIsPaused: boolean = false;
    static BonusIsSpawned: boolean = false;
    static MusicIsPlaying: boolean = false;
    static LevelIsReceived: boolean = false;
    static BonusIsActivated: boolean = false;
    static BuySoundIsPlaying: boolean = false;

    static SkinNumber: number = 1;
    static DiamondCount: number = 0;
    static SkinsIsSaved: boolean = false;
    static SoundIsActivated: boolean = true;
    static MusicIsActivated: boolean = true;

    static resetValues() {
        this.LifeTime = 30;
        this.BonusTime = 30;
        this.PageNumber = 3;
        this.MoneyCount = 0;
        this.BonusPoints = 1;
        this.HealthPoints = 1;
        this.PlayersLevel = 1;
        this.MoneyForClick = 1;
        this.BonusNumber = null;
        this.LevelUpdate = null;
        this.GameIsOver = false;
        this.GameIsPaused = false;
        this.BonusIsSpawned = false;
        this.MusicIsPlaying = false;
        this.LevelIsReceived = false;
        this.BonusIsActivated = false;
        this.BuySoundIsPlaying = false;

        //this.SkinNumber = 1;
        //this.DiamondCount = 0;
        //this.SkinsIsSaved = false;
        //this.SoundIsActivated = true;
        //this.MusicIsActivated = true;
    }
}