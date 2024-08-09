import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GlobalValues')
export class GlobalValues extends Component {
    
    static LifeTime: number = 30;
    static BonusTime: number = 60;
    static PageNumber: number = 3;
    static MoneyCount: number = 0;
    static BonusPoints: number = 1;
    static DiamondCount: number = 0;
    static PlayersLevel: number = 1;
    static HealthPoints: number = 1;
    static MoneyForClick: number = 1;
    static BonusNumber: number = null;
    static GameIsOver: boolean = false;
    static GameIsPaused: boolean = false;
    static BonusIsSpawned: boolean = false;
    static BonusIsActivated: boolean = false;

    static resetValues() {
        this.LifeTime = 30;
        this.BonusTime = 60;
        this.PageNumber = 3;
        this.MoneyCount = 0;
        this.BonusPoints = 1;
        this.DiamondCount = 0;
        this.PlayersLevel = 1;
        this.HealthPoints = 1;
        this.MoneyForClick = 1;
        this.BonusNumber = null;
        this.GameIsOver = false;
        this.GameIsPaused = false;
        this.BonusIsSpawned = false;
        this.BonusIsActivated = false;
    }
}