const tamagotchi = {
    name: 'Hiromi',
    weight: 100,
    age: 1000,
    birthday: '1/2',
    description: 'sassy pants',
    hungerLevel: 0,
    happinessLevel: 10,
    attentionLevel: 2,
    lifeStage: ['baby', 'child', 'teen', 'adult'],
    isHungry: false,
    wantToPlay: true,
    isHappy: true,
    needsAttention: false,
    disciplineLevel: 0,
    isDisciplined: false,
    needsBathrrom: true,
    isPottyTrained: false,
    isSick: false,
    sleeping: 'never',
    eat: function (food) {
        switch (food) {
            case 'grass':
                this.hungerLevel += 1;
                console.log(`That is not very much ${this.hungerLevel} is not enough!`)
                break;
            case 'meat':
                this.hungerLevel += 2;
                console.log(`Yummy I feel better with a hunger level of ${this.hungerLevel}`)
                break;
            default:
            console.log('No Food sorry')    

        }
    },
    speak: function () {
        if (this.hungerLevel > 10) {
            console.log('I am full')
        } if (this.hungerLevel < 10 && this.hungerLevel >= 5) {
            console.log('I am just right')
        } else {
            console.log('I am hungry')
        }
    },
    play: function () {
        this.happinessLevel += 10;
        console.log(`That was fun! My happiness level went up to ${this.happinessLevel}`);
        this.attentionLevel += 5;
        console.log(`I do not feel alone today! I feel this good ${this.attentionLevel}!`);
        this.weight -= 10;
        console.log(`Wow is have lost ${this.weight} kgs`)

    },
    sleep: function (value = 'always') {
        if (value === 'never') {
            console.log(`This is no good to ${this.sleeping} sleep!`)
        } else {
            console.log(`Now don't you feel better ${value} sleeping?`)
        }
    }
}

tamagotchi.sleep()