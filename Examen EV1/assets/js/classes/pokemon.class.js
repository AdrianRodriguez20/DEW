class Pokemon extends Creature {
    constructor(type, race, name) {
        super(type, race);
        this.name = name;
        this.level = this.levelRadom();

    }
    levelRadom = function () {
        var level=0;
        level = Math.floor(Math.random() * (10 - 1 + 1)) + (1);
        return level;
    }

}
