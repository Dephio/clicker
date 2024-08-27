import { _decorator, Component, Sprite, SpriteFrame } from 'cc';
import { l10n } from '../../extensions/Yandex Games SDK/static/assets/ysdk';
const { ccclass, property } = _decorator;

@ccclass('LanguageLoader')
export class LanguageLoader extends Component {

    @property(Sprite)
    private Node_Sprite: Sprite;

    @property(SpriteFrame)
    private Node_Rus: SpriteFrame;

    @property(SpriteFrame)
    private Node_Eng: SpriteFrame;

    protected start(): void {
        switch (l10n.currentLanguage) {
            case "ru":
                this.Node_Sprite.spriteFrame = this.Node_Rus;
                break;

            case "en":
                this.Node_Sprite.spriteFrame = this.Node_Eng;
                break;
        }
    }
}