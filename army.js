let LengArmy = {
    horse: 100,
    ele: 50,
    at: 10,
    sg: 5

};
let result = true;
let FalArmy = {
    horse: 300,
    ele: 200,
    at: 40,
    sg: 20

}
evaluteArmy(100, 101, 20, 5)
//evaluteArmy(150, 96, 26, 8)
//evaluteArmy(250, 50, 20, 15)

function evaluteArmy(h, e, at, sg) {
    let ExtraArmy = {
        horse: 0,
        ele: 0,
        at: 0,
        sg: 0
    }
    let NeededArmy = {
        horse: 0,
        ele: 0,
        at: 0,
        sg: 0
    }
    let usedArmy = {
        horse: 0,
        ele: 0,
        at: 0,
        sg: 0
    }


    if (h > 200) {
        usedArmy.horse = 100;
        NeededArmy.horse = h - 200;
    } else {
        usedArmy.horse = h % 2 == 0 ? h / 2 : (h + 1) / 2;
        ExtraArmy.horse = LengArmy.horse - usedArmy.horse;
    }
    if (NeededArmy.horse) {
        if (NeededArmy.horse <= LengArmy.ele*2) {
            LengArmy.ele = LengArmy.ele - Math.ceil(NeededArmy.horse/2);
            usedArmy.ele = Math.ceil(NeededArmy.horse/2);
            NeededArmy.horse = 0

        } else {
            result = false;
        }
    }




    if (e > LengArmy.ele * 2) {
        usedArmy.ele =  usedArmy.ele +  LengArmy.ele;
        NeededArmy.ele = e - LengArmy.ele * 2;
    } else {
        usedArmy.ele = usedArmy.ele + Math.ceil(e/2);
        ExtraArmy.ele = LengArmy.ele - usedArmy.ele;
    }

    if (NeededArmy.ele) {
        if (ExtraArmy.horse) {
            if (ExtraArmy.horse/2 >= NeededArmy.ele) {
                usedArmy.horse = usedArmy.horse + NeededArmy.ele * 2;
                ExtraArmy.horse  = ExtraArmy.horse -NeededArmy.ele * 2;
                NeededArmy.ele = 0;
            } else {
                NeededArmy.ele = NeededArmy.ele*2 - ExtraArmy.horse;
                usedArmy.horse = usedArmy.horse + ExtraArmy.horse;
                ExtraArmy.horse = 0;
            }
        }
    }
    if (NeededArmy.ele) {
        if (NeededArmy.ele <= LengArmy.at*2) {
            LengArmy.at = LengArmy.at - Math.floor(NeededArmy.ele/2);
            usedArmy.at =  usedArmy.at + Math.floor(NeededArmy.ele/2);
        } else {
            result = false;
        }

    }

    if (at > LengArmy.at * 2) {
        usedArmy.at =  usedArmy.at + LengArmy.at;
        NeededArmy.at = at - LengArmy.at * 2;
    } else {
        usedArmy.at = usedArmy.at + at % 2 == 0 ? at / 2 : (at + 1) / 2;
        ExtraArmy.at = LengArmy.at - usedArmy.at;
    }

    if (NeededArmy.at) {
        if (ExtraArmy.ele) {
            if (ExtraArmy.ele >= NeededArmy.at*2) {
                usedArmy.ele = usedArmy.ele + NeededArmy.at / 2;
                ExtraArmy.ele  = ExtraArmy.ele -NeededArmy.at * 2;
                NeededArmy.at = 0;
            } else {
                NeededArmy.at = NeededArmy.at - Math.floor(ExtraArmy.ele / 2);
                usedArmy.ele = usedArmy.ele + ExtraArmy.ele;
                ExtraArmy.ele = 0;
            }
        }
    }
    if (NeededArmy.at) {
        if (NeededArmy.at <= LengArmy.sg*2) {
            LengArmy.sg = LengArmy.sg - Math.floor(NeededArmy.at/2);
            usedArmy.sg = usedArmy.sg + Math.floor(NeededArmy.at/2);
            NeededArmy.at = 0

        } else {
            result = false;
        }
    }


    if (sg > LengArmy.sg * 2) {
        usedArmy.sg = usedArmy.sg + LengArmy.sg;
        NeededArmy.sg = sg - LengArmy.sg * 2;
    } else {
        usedArmy.sg = usedArmy.sg + sg % 2 == 0 ? sg / 2 : (sg + 1) / 2;
        ExtraArmy.sg = LengArmy.sg - usedArmy.sg;
    }

    if (NeededArmy.sg) {
        if (ExtraArmy.at) {
            if (ExtraArmy.at >= NeededArmy.sg * 2) {
                usedArmy.at = usedArmy.at + NeededArmy.sg* 2;
                ExtraArmy.at  = ExtraArmy.at -NeededArmy.sg * 2;
                NeededArmy.sg = 0;
            } else {
                NeededArmy.sg = NeededArmy.sg - ExtraArmy.at*2;
                usedArmy.at = usedArmy.at + ExtraArmy.at;
                ExtraArmy.at = 0;
            }
        }
    }
    if (NeededArmy.sg) {
        result = false;
    }

    console.log(usedArmy, result? "wins": "loose");
}