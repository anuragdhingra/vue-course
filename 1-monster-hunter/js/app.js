new Vue({
    el: '#app',
    data: {
        player: 'PLAYER',
        monster: 'MONSTER',
        playerHealth: 100,
        monsterHealth: 100,
        playerAttackPower: 5,
        playerSpecialAttackPower: 10,
        monsterAttackPower: 2,
        playerHeal: 3,
        isGameActive: false,
        gameLogs: []
    },
    methods: {
        startNewGame: function() {
            this.isGameActive = true;
        },
        attack: function() {
            this.monsterHealth = this.monsterHealth - this.playerAttackPower;
            this.playerHealth = this.playerHealth - this.monsterAttackPower;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
                alert('YOU WON');
            } else {
                this.gameLogs.push({from: this.player, to: this.monster, action: 'HITS', power: this.playerAttackPower});
                this.gameLogs.push({from: this.monster, to: this.player, action: 'HITS', power: this.monsterAttackPower});
            }
        },
        specialAttack: function() {
            this.monsterHealth = this.monsterHealth - this.playerSpecialAttackPower;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
                this.
                alert('YOU WON');
            } else {
                this.gameLogs.push({from: this.player, to: this.monster, action: 'HITS', power: this.playerSpecialAttackPower});
            }
        },
        heal: function() {
            this.playerHealth = this.playerHealth + this.playerHeal;
             if (this.playerHealth > 100) {
                this.playerHealth = 100;
                alert('HEALTH FULL');
            } else {
                this.gameLogs.push({from: this.player, to: '', action: 'HEALS', power: this.playerHeal})
            }
        },
        giveUp: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isGameActive = false;
            this.gameLogs = [];
        }
    }
})