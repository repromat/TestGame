/*:
 * @plugindesc Kustomisasi fungsi tombol di title screen
 * @author WRDA
 *
 * @help
 * Plugin ini akan mengganti fungsi default dari tombol
 * New Game, Continue, dan Options di title screen.
 */


(function() {
    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('newGame', this.commandNewGame.bind(this));
        this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
        this._commandWindow.setHandler('options', this.commandOptions.bind(this));
    };

    Scene_Title.prototype.commandNewGame = function() {
        console.log("Mulai game baru!");
        DataManager.setupNewGame();
        this._commandWindow.close();
        this.fadeOutAll();
        SceneManager.goto(Scene_Map);
    };

    Scene_Title.prototype.commandContinue = function() {
        console.log("Lanjut dari save.");
        SceneManager.push(Scene_Load);
    };

    Scene_Title.prototype.commandOptions = function() {
        console.log("Buka pengaturan.");
        SceneManager.push(Scene_Options);
    };
})();
